require('dotenv').config();
const axios = require('axios');
const fs = require('fs');

const API_KEY = process.env.LASTFM_API_KEY;

if (!API_KEY) {
  console.error("Missing LASTFM_API_KEY in .env file.");
  process.exit(1);
}

const topArtistsLimit = 500;
const albumsPerArtist = 5;

async function fetchAlbums() {
  try {
    console.log("Starting Last.fm fetch for top albums of all time...");
    const uniqueAlbumsMap = new Map();

    console.log(`Fetching top ${topArtistsLimit} artists globally...`);
    const artistsResponse = await axios.get('http://ws.audioscrobbler.com/2.0/', {
      params: {
        method: 'chart.gettopartists',
        api_key: API_KEY,
        format: 'json',
        limit: topArtistsLimit
      }
    });

    const artists = artistsResponse.data.artists.artist;

    let processedArtists = 0;
    for (const artist of artists) {
      const artistName = artist.name;

      let artistTopTracks = [];
      try {
        const tracksResponse = await axios.get('http://ws.audioscrobbler.com/2.0/', {
          params: {
            method: 'artist.gettoptracks',
            artist: artistName,
            api_key: API_KEY,
            format: 'json',
            limit: 100
          }
        });
        if (tracksResponse.data.toptracks && tracksResponse.data.toptracks.track) {
          artistTopTracks = tracksResponse.data.toptracks.track.map(t => t.name.toLowerCase());
        }
      } catch (e) {
        // Ignore top tracks failure
      }

      try {
        const albumsResponse = await axios.get('http://ws.audioscrobbler.com/2.0/', {
          params: {
            method: 'artist.gettopalbums',
            artist: artistName,
            api_key: API_KEY,
            format: 'json',
            limit: albumsPerArtist
          }
        });

        if (albumsResponse.data.topalbums && albumsResponse.data.topalbums.album) {
          const items = albumsResponse.data.topalbums.album;

          for (const item of items) {
            let highResImage = '';
            const images = item.image;

            if (images && images.length > 0) {
              const bestImage = images.find(img => img.size === 'mega')
                || images.find(img => img.size === 'extralarge')
                || images[images.length - 1];

              highResImage = bestImage['#text'];
            }

            if (highResImage && !highResImage.includes('2a96cbd8b46e442fc41c2b86b821562f.png')) {
              const albumName = item.name;
              const key = `${artistName}-${albumName}`.toLowerCase();

              if (!uniqueAlbumsMap.has(key)) {
                try {
                  const infoResponse = await axios.get('http://ws.audioscrobbler.com/2.0/', {
                    params: {
                      method: 'album.getinfo',
                      artist: artistName,
                      album: albumName,
                      api_key: API_KEY,
                      format: 'json'
                    }
                  });

                  const info = infoResponse.data.album;
                  if (info) {
                    let genre = "Unknown";
                    const VALID_GENRES = ['pop', 'rock', 'hip-hop', 'hip hop', 'rap', 'r&b', 'rnb', 'electronic', 'indie', 'jazz', 'alternative', 'metal', 'folk', 'country', 'classical', 'soul', 'funk', 'punk', 'dance', 'blues', 'acoustic'];
                    if (info.tags && info.tags.tag && info.tags.tag.length > 0) {
                      const tags = Array.isArray(info.tags.tag) ? info.tags.tag : [info.tags.tag];
                      for (const t of tags) {
                        const tName = t.name.toLowerCase();
                        if (VALID_GENRES.includes(tName) || VALID_GENRES.some(g => tName.includes(g))) {
                          genre = tName;
                          break;
                        }
                      }
                      if (genre === "Unknown") {
                        genre = tags[0].name.toLowerCase(); // fallback
                      }

                      if (genre.includes('hip hop') || genre.includes('hip-hop')) genre = 'Hip-Hop';
                      else if (genre.includes('rnb') || genre.includes('r&b')) genre = 'R&B';
                      else if (genre.includes('pop')) genre = 'Pop';
                      else if (genre.includes('rock')) genre = 'Rock';
                      else if (genre.includes('rap')) genre = 'Rap';
                      else if (genre.includes('indie')) genre = 'Indie';
                      else if (genre.includes('alternative')) genre = 'Alternative';
                      else genre = genre.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
                    }

                    let releaseYear = "Unknown";
                    if (info.wiki && info.wiki.summary) {
                      const match = info.wiki.summary.match(/\b(19|20)\d{2}\b/);
                      if (match) {
                        releaseYear = match[0];
                      }
                    }

                    let runtime = "Unknown";
                    let topTrack = "Unknown";
                    if (info.tracks && info.tracks.track && info.tracks.track.length > 0) {
                      const tracks = Array.isArray(info.tracks.track) ? info.tracks.track : [info.tracks.track];
                      let totalSeconds = 0;
                      tracks.forEach(t => {
                        totalSeconds += parseInt(t.duration || 0);
                      });
                      if (totalSeconds > 0) {
                        runtime = Math.floor(totalSeconds / 60) + " min";
                      }
                      
                      let bestRank = 999999;
                      let bestTrack = tracks[0].name;

                      for (const t of tracks) {
                        const idx = artistTopTracks.indexOf(t.name.toLowerCase());
                        if (idx !== -1 && idx < bestRank) {
                          bestRank = idx;
                          bestTrack = t.name;
                        }
                      }
                      topTrack = bestTrack;
                    }

                    let streams = "Unknown";
                    if (info.playcount) {
                      const count = parseInt(info.playcount);
                      if (count > 1000000) {
                        streams = (count / 1000000).toFixed(1) + "M";
                      } else if (count > 1000) {
                        streams = (count / 1000).toFixed(1) + "K";
                      } else {
                        streams = count.toString();
                      }
                    }

                    uniqueAlbumsMap.set(key, {
                      artist: artistName,
                      album: albumName,
                      image: highResImage,
                      genre,
                      releaseYear,
                      runtime,
                      streams,
                      topTrack
                    });
                  }
                  await new Promise(resolve => setTimeout(resolve, 20));
                } catch (e) {
                  // Ignore album.getinfo failure silently to not clutter logs
                }
              }
            }
          }
        }
      } catch (err) {
        console.error(`Failed to fetch albums for ${artistName}:`, err.message);
      }

      processedArtists++;
      if (processedArtists % 50 === 0) {
        console.log(`Processed ${processedArtists}/${topArtistsLimit} artists. Albums found: ${uniqueAlbumsMap.size}`);
      }

      await new Promise(resolve => setTimeout(resolve, 50));

      if (uniqueAlbumsMap.size >= 1000) {
        console.log(`Reached 1000 unique albums early!`);
        break;
      }
    }

    const finalAlbums = Array.from(uniqueAlbumsMap.values()).slice(0, 1000);

    console.log(`Successfully fetched ${finalAlbums.length} unique albums.`);

    const fileContent = `const albumsDB = ${JSON.stringify(finalAlbums, null, 2)};`;

    fs.writeFileSync('albums-db.js', fileContent, 'utf-8');
    console.log("Saved to albums-db.js successfully. You can now use the app.");

  } catch (error) {
    console.error("Error fetching albums:", error.response ? error.response.data : error.message);
  }
}

fetchAlbums();
