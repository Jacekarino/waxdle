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
                uniqueAlbumsMap.set(key, {
                  artist: artistName,
                  album: albumName,
                  image: highResImage
                });
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
