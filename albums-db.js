const albumsDB = [
  {
    "artist": "Ariana Grande",
    "album": "Dangerous Woman",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/51b8cd76546763550af19d0937cae80a.png",
    "genre": "Pop",
    "releaseYear": "2016",
    "runtime": "55 min",
    "streams": "137.8M",
    "topTrack": "Into You"
  },
  {
    "artist": "Ariana Grande",
    "album": "thank u, next",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5d67250ce101c8afaaa33b5d9f8926e2.png",
    "genre": "Pop",
    "releaseYear": "2019",
    "runtime": "41 min",
    "streams": "156.0M",
    "topTrack": "7 rings"
  },
  {
    "artist": "Ariana Grande",
    "album": "My Everything (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b68854212b18163a584df683cb7c0fe0.png",
    "genre": "Pop",
    "releaseYear": "2014",
    "runtime": "50 min",
    "streams": "82.0M",
    "topTrack": "One Last Time"
  },
  {
    "artist": "Ariana Grande",
    "album": "Sweetener",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/cd8c5ce4dad43c822c00dec987d295ca.png",
    "genre": "Pop",
    "releaseYear": "2018",
    "runtime": "35 min",
    "streams": "136.3M",
    "topTrack": "no tears left to cry"
  },
  {
    "artist": "Ariana Grande",
    "album": "Positions",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8d71cf30ab608127ea3bac16d98c9937.png",
    "genre": "R&B",
    "releaseYear": "2020",
    "runtime": "37 min",
    "streams": "84.8M",
    "topTrack": "positions"
  },
  {
    "artist": "Michael Jackson",
    "album": "Thriller",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/85fdc23b75d77d4cf789fd1904d06863.png",
    "genre": "Pop",
    "releaseYear": "1982",
    "runtime": "42 min",
    "streams": "56.2M",
    "topTrack": "Billie Jean"
  },
  {
    "artist": "Michael Jackson",
    "album": "Off the Wall",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8fe6f2a0832392b384472f53a5d8cfd6.png",
    "genre": "Pop",
    "releaseYear": "1979",
    "runtime": "40 min",
    "streams": "36.3M",
    "topTrack": "Don't Stop 'Til You Get Enough"
  },
  {
    "artist": "Michael Jackson",
    "album": "Thriller 25 Super Deluxe Edition",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6e2894e4edba9f42ee448670a59fc12e.png",
    "genre": "Pop",
    "releaseYear": "2006",
    "runtime": "110 min",
    "streams": "23.1M",
    "topTrack": "Billie Jean"
  },
  {
    "artist": "Michael Jackson",
    "album": "Dangerous",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/faf8bde1253ec8da9559f915cb1bdf8a.png",
    "genre": "Pop",
    "releaseYear": "1991",
    "runtime": "72 min",
    "streams": "25.7M",
    "topTrack": "Remember the Time"
  },
  {
    "artist": "Michael Jackson",
    "album": "Xscape",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9cb658fab4a3458ec5309aa97379b8b6.png",
    "genre": "Pop",
    "releaseYear": "2014",
    "runtime": "96 min",
    "streams": "24.6M",
    "topTrack": "Chicago"
  },
  {
    "artist": "Drake",
    "album": "Views",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/99e7715edfbd4c4519e3483a1779d574.png",
    "genre": "Hip-Hop",
    "releaseYear": "2016",
    "runtime": "80 min",
    "streams": "107.2M",
    "topTrack": "One Dance"
  },
  {
    "artist": "Drake",
    "album": "Scorpion",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b42f8bf1987f3e1e4dc55d46d9c7bc3d.png",
    "genre": "Rap",
    "releaseYear": "2018",
    "runtime": "89 min",
    "streams": "80.4M",
    "topTrack": "God's Plan"
  },
  {
    "artist": "Drake",
    "album": "More Life",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/434a922ecca5474f1f9d6bbcc3a1050c.png",
    "genre": "R&B",
    "releaseYear": "2017",
    "runtime": "67 min",
    "streams": "96.8M",
    "topTrack": "Passionfruit"
  },
  {
    "artist": "Drake",
    "album": "So Far Gone",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/304e6995dd50bc5956633ee69a77542e.png",
    "genre": "Hip-Hop",
    "releaseYear": "2009",
    "runtime": "73 min",
    "streams": "33.3M",
    "topTrack": "Best I Ever Had"
  },
  {
    "artist": "Drake",
    "album": "Certified Lover Boy",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b583ff3ab18082dfb733c1edeb92a262.png",
    "genre": "Hip-Hop",
    "releaseYear": "2018",
    "runtime": "86 min",
    "streams": "108.5M",
    "topTrack": "Champagne Poetry"
  },
  {
    "artist": "The Weeknd",
    "album": "Starboy",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/08e3f15aca0423b084fb49f342756f3b.png",
    "genre": "R&B",
    "releaseYear": "2016",
    "runtime": "64 min",
    "streams": "207.2M",
    "topTrack": "Starboy"
  },
  {
    "artist": "The Weeknd",
    "album": "After Hours",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4583932b753c96d0d2f22fe9774e5ef3.png",
    "genre": "Pop",
    "releaseYear": "2020",
    "runtime": "56 min",
    "streams": "147.3M",
    "topTrack": "Blinding Lights"
  },
  {
    "artist": "The Weeknd",
    "album": "Beauty Behind the Madness",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9ea87cbc2865f38105cc1aecc49bfa82.png",
    "genre": "R&B",
    "releaseYear": "2015",
    "runtime": "62 min",
    "streams": "105.3M",
    "topTrack": "The Hills"
  },
  {
    "artist": "The Weeknd",
    "album": "My Dear Melancholy,",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6498660830a525a64f6a78bf94a2ec58.png",
    "genre": "R&B",
    "releaseYear": "2018",
    "runtime": "21 min",
    "streams": "59.7M",
    "topTrack": "Call Out My Name"
  },
  {
    "artist": "The Weeknd",
    "album": "Dawn FM",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/34734ed0582256618ec64d4f90b4ebf4.png",
    "genre": "Pop",
    "releaseYear": "2022",
    "runtime": "47 min",
    "streams": "114.4M",
    "topTrack": "Is There Someone Else?"
  },
  {
    "artist": "Taylor Swift",
    "album": "Lover",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/13c3fd969ea2d962c92d064884086e46.png",
    "genre": "Pop",
    "releaseYear": "2019",
    "runtime": "59 min",
    "streams": "300.0M",
    "topTrack": "Cruel Summer"
  },
  {
    "artist": "Taylor Swift",
    "album": "reputation",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/dddb96a470fecc69d281f45c81a44d2a.png",
    "genre": "Pop",
    "releaseYear": "2014",
    "runtime": "45 min",
    "streams": "274.7M",
    "topTrack": "Dancing With Our Hands Tied"
  },
  {
    "artist": "Taylor Swift",
    "album": "folklore",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7283dedc810f971388eba0b710d90020.png",
    "genre": "Folk",
    "releaseYear": "2020",
    "runtime": "67 min",
    "streams": "257.6M",
    "topTrack": "cardigan"
  },
  {
    "artist": "Taylor Swift",
    "album": "1989",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fd378412e92480577c0f2a4463c8998a.png",
    "genre": "Pop",
    "releaseYear": "1989",
    "runtime": "50 min",
    "streams": "62.9M",
    "topTrack": "Blank Space"
  },
  {
    "artist": "Taylor Swift",
    "album": "1989 (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c9a32b7cd89473968115b12e0ef3339d.png",
    "genre": "Pop",
    "releaseYear": "1989",
    "runtime": "70 min",
    "streams": "107.5M",
    "topTrack": "Blank Space"
  },
  {
    "artist": "Kanye West",
    "album": "Graduation",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8ddd1959a2bef460a5149b3e0cf5e18a.png",
    "genre": "Hip-Hop",
    "releaseYear": "2007",
    "runtime": "50 min",
    "streams": "219.0M",
    "topTrack": "Stronger"
  },
  {
    "artist": "Kanye West",
    "album": "My Beautiful Dark Twisted Fantasy",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f5afd8fe052b452c999b657664cae99f.png",
    "genre": "Hip-Hop",
    "releaseYear": "2010",
    "runtime": "60 min",
    "streams": "181.8M",
    "topTrack": "All of the Lights"
  },
  {
    "artist": "Kanye West",
    "album": "808s & Heartbreak",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a10a67180b666ce93a3bb79c49faca0b.png",
    "genre": "Hip-Hop",
    "releaseYear": "2008",
    "runtime": "49 min",
    "streams": "86.4M",
    "topTrack": "Heartless"
  },
  {
    "artist": "Kanye West",
    "album": "Late Registration",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9c0e7886d750a519c9ec63c30434b483.png",
    "genre": "Hip-Hop",
    "releaseYear": "2005",
    "runtime": "60 min",
    "streams": "148.3M",
    "topTrack": "Gold Digger"
  },
  {
    "artist": "Kanye West",
    "album": "Yeezus",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/71d8c1f84d67e60c5dda039d6fb3653f.png",
    "genre": "Rap",
    "releaseYear": "2013",
    "runtime": "40 min",
    "streams": "115.4M",
    "topTrack": "Bound 2"
  },
  {
    "artist": "Rihanna",
    "album": "Good Girl Gone Bad: Reloaded",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9ba6843d054b4f449948bdb13957248c.png",
    "genre": "Pop",
    "releaseYear": "2008",
    "runtime": "54 min",
    "streams": "71.0M",
    "topTrack": "Don't Stop the Music"
  },
  {
    "artist": "Rihanna",
    "album": "Good Girl Gone Bad",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/aa254b77897ce330348b1be77edfe6bf.png",
    "genre": "Pop",
    "releaseYear": "2007",
    "runtime": "44 min",
    "streams": "40.5M",
    "topTrack": "Don't Stop the Music"
  },
  {
    "artist": "Rihanna",
    "album": "Loud",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a7cd5b2046514a52ba359e06743693f9.png",
    "genre": "Pop",
    "releaseYear": "2010",
    "runtime": "46 min",
    "streams": "62.5M",
    "topTrack": "Only Girl (In the World)"
  },
  {
    "artist": "Rihanna",
    "album": "ANTI (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d4a339a2bd2bc5fe470e0b0c10444903.png",
    "genre": "R&B",
    "releaseYear": "2016",
    "runtime": "20 min",
    "streams": "105.4M",
    "topTrack": "Love on the Brain"
  },
  {
    "artist": "Rihanna",
    "album": "Talk That Talk",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/024eb3bcbf13bef347800a18c2c61f3b.png",
    "genre": "Pop",
    "releaseYear": "2011",
    "runtime": "37 min",
    "streams": "42.9M",
    "topTrack": "Where Have You Been"
  },
  {
    "artist": "PinkPantheress",
    "album": "to hell with it",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b61a72706919e942872cbdf59b604275.png",
    "genre": "Pop",
    "releaseYear": "2021",
    "runtime": "9 min",
    "streams": "87.7M",
    "topTrack": "Pain"
  },
  {
    "artist": "PinkPantheress",
    "album": "Fancy Some More?",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3e0f3dc821a8445892b0b65cb26b0194.png",
    "genre": "2025",
    "releaseYear": "2025",
    "runtime": "92 min",
    "streams": "32.8M",
    "topTrack": "Stateside + Zara Larsson"
  },
  {
    "artist": "PinkPantheress",
    "album": "Fancy That",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5edfc17276a2c1f445f41faf2c9da1be.png",
    "genre": "Electronic",
    "releaseYear": "2025",
    "runtime": "20 min",
    "streams": "58.2M",
    "topTrack": "Illegal"
  },
  {
    "artist": "PinkPantheress",
    "album": "Heaven knows",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/16cc8263e16931610bd9506c4be95859.png",
    "genre": "Pop",
    "releaseYear": "2023",
    "runtime": "34 min",
    "streams": "52.7M",
    "topTrack": "Boy's a liar Pt. 2"
  },
  {
    "artist": "PinkPantheress",
    "album": "Boy's a liar Pt. 2",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/29499797f2bd56535cf6a345392ccd77.png",
    "genre": "Unknown",
    "releaseYear": "2023",
    "runtime": "4 min",
    "streams": "18.5M",
    "topTrack": "Boy's a liar Pt. 2"
  },
  {
    "artist": "Radiohead",
    "album": "OK Computer",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/62d26c6cb4ac4bdccb8f3a2a0fd55421.png",
    "genre": "Alternative",
    "releaseYear": "1997",
    "runtime": "54 min",
    "streams": "258.9M",
    "topTrack": "No Surprises"
  },
  {
    "artist": "Radiohead",
    "album": "Pablo Honey",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/03327d30bc3de35afb8cab929a3055f3.png",
    "genre": "Rock",
    "releaseYear": "1993",
    "runtime": "47 min",
    "streams": "94.0M",
    "topTrack": "Creep"
  },
  {
    "artist": "Radiohead",
    "album": "In Rainbows",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9dbcd9399ac3e622b4f508323155b644.png",
    "genre": "Alternative",
    "releaseYear": "2007",
    "runtime": "48 min",
    "streams": "250.8M",
    "topTrack": "All I Need"
  },
  {
    "artist": "Radiohead",
    "album": "The Bends",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9ea9931e129bb5efd3606866901855b5.png",
    "genre": "Rock",
    "releaseYear": "1995",
    "runtime": "49 min",
    "streams": "178.7M",
    "topTrack": "High and Dry"
  },
  {
    "artist": "Radiohead",
    "album": "Kid A",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2ed343318c844d19cd897ec67fad11c4.png",
    "genre": "Alternative",
    "releaseYear": "2000",
    "runtime": "48 min",
    "streams": "118.8M",
    "topTrack": "Everything in Its Right Place"
  },
  {
    "artist": "Kendrick Lamar",
    "album": "DAMN.",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8a59ed3a9c71cb5113325e2026889e4a.png",
    "genre": "Rap",
    "releaseYear": "2017",
    "runtime": "54 min",
    "streams": "206.6M",
    "topTrack": "HUMBLE."
  },
  {
    "artist": "Kendrick Lamar",
    "album": "good kid, m.A.A.d city",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/48628c6af67db437b0b9ff156b2c1085.png",
    "genre": "Hip-Hop",
    "releaseYear": "2012",
    "runtime": "64 min",
    "streams": "69.9M",
    "topTrack": "Money Trees"
  },
  {
    "artist": "Kendrick Lamar",
    "album": "Black Panther the Album Music From and Inspired By",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/bad6b50569d18cdc9c6efb883b2ba213.png",
    "genre": "Rap",
    "releaseYear": "2018",
    "runtime": "Unknown",
    "streams": "54.8M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Kendrick Lamar",
    "album": "To Pimp a Butterfly",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/86b35c4eb3c479da49c915d8771bbd1a.png",
    "genre": "Hip-Hop",
    "releaseYear": "2015",
    "runtime": "76 min",
    "streams": "145.6M",
    "topTrack": "Alright"
  },
  {
    "artist": "Kendrick Lamar",
    "album": "GNX",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a79564a9768d05272682b252deb02079.png",
    "genre": "Hip-Hop",
    "releaseYear": "2024",
    "runtime": "43 min",
    "streams": "126.4M",
    "topTrack": "squabble up"
  },
  {
    "artist": "Tame Impala",
    "album": "Currents",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/dd45b0438a315aed98b5830aa2fc43c5.png",
    "genre": "Pop",
    "releaseYear": "2015",
    "runtime": "52 min",
    "streams": "189.1M",
    "topTrack": "The Less I Know the Better"
  },
  {
    "artist": "Tame Impala",
    "album": "The Slow Rush",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/832ade6a35ec2a224ea9a5be326b5de4.png",
    "genre": "Pop",
    "releaseYear": "2020",
    "runtime": "57 min",
    "streams": "72.2M",
    "topTrack": "Borderline"
  },
  {
    "artist": "Tame Impala",
    "album": "Lonerism",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7c9c4d1009514b178c82f2201e3a1fce.png",
    "genre": "Rock",
    "releaseYear": "2012",
    "runtime": "52 min",
    "streams": "63.5M",
    "topTrack": "Feels Like We Only Go Backwards"
  },
  {
    "artist": "Tame Impala",
    "album": "Deadbeat",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/29cd52e0f2ba0d5dcf2b2684cc71ef58.png",
    "genre": "Electronic",
    "releaseYear": "2025",
    "runtime": "51 min",
    "streams": "19.7M",
    "topTrack": "Dracula"
  },
  {
    "artist": "Tame Impala",
    "album": "Innerspeaker",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/25baad6ad48e4459a97bd54790cd0026.png",
    "genre": "Rock",
    "releaseYear": "2010",
    "runtime": "62 min",
    "streams": "29.1M",
    "topTrack": "Solitude Is Bliss"
  },
  {
    "artist": "Lady Gaga",
    "album": "The Fame",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/212041a78d1b07d481404936f57314fb.png",
    "genre": "Pop",
    "releaseYear": "2008",
    "runtime": "37 min",
    "streams": "158.1M",
    "topTrack": "Poker Face"
  },
  {
    "artist": "Lady Gaga",
    "album": "The Fame Monster (Deluxe Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0dc64dbb17438473725ef05fef4e6741.png",
    "genre": "Pop",
    "releaseYear": "2009",
    "runtime": "90 min",
    "streams": "72.4M",
    "topTrack": "Poker Face"
  },
  {
    "artist": "Lady Gaga",
    "album": "The Fame Monster",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9ec0a5f1aad83ab4c401111b7fa22f70.png",
    "genre": "Pop",
    "releaseYear": "2009",
    "runtime": "34 min",
    "streams": "60.7M",
    "topTrack": "Bad Romance"
  },
  {
    "artist": "Lady Gaga",
    "album": "ARTPOP",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/999d7e355d4fd4c3a33bb84ac7236e94.png",
    "genre": "Pop",
    "releaseYear": "2013",
    "runtime": "50 min",
    "streams": "85.2M",
    "topTrack": "Applause"
  },
  {
    "artist": "Lady Gaga",
    "album": "Born This Way (International Special Edition Version)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f739bd32764cc913b0e5ac52970ccced.png",
    "genre": "Pop",
    "releaseYear": "2011",
    "runtime": "105 min",
    "streams": "57.5M",
    "topTrack": "Judas"
  },
  {
    "artist": "Olivia Rodrigo",
    "album": "SOUR",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9da8add22ca31771a440d2a6f7615f6d.png",
    "genre": "Pop",
    "releaseYear": "2021",
    "runtime": "34 min",
    "streams": "241.6M",
    "topTrack": "good 4 u"
  },
  {
    "artist": "Olivia Rodrigo",
    "album": "GUTS",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e39eb31f874f4a5c4afa836845141437.png",
    "genre": "Pop",
    "releaseYear": "2023",
    "runtime": "3 min",
    "streams": "184.4M",
    "topTrack": "vampire"
  },
  {
    "artist": "Olivia Rodrigo",
    "album": "GUTS (spilled)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b266469599e06ea2ab8ae33342795fd4.png",
    "genre": "Pop",
    "releaseYear": "2024",
    "runtime": "54 min",
    "streams": "72.6M",
    "topTrack": "vampire"
  },
  {
    "artist": "Olivia Rodrigo",
    "album": "The Hunger Games: The Ballad of Songbirds & Snakes (Music From & Inspired By)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a1a922abcb8bb0858c0d603e53c2ed52.png",
    "genre": "Country",
    "releaseYear": "2023",
    "runtime": "49 min",
    "streams": "15.0M",
    "topTrack": "Can’t Catch Me Now - from The Hunger Games: The Ballad of Songbirds & Snakes"
  },
  {
    "artist": "Olivia Rodrigo",
    "album": "vampire",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/374d84241878b54aa716bceefd66abd4.png",
    "genre": "Guts",
    "releaseYear": "2023",
    "runtime": "6 min",
    "streams": "11.8M",
    "topTrack": "vampire"
  },
  {
    "artist": "Tyler, The Creator",
    "album": "Flower Boy",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/52a7f32bdc99238080b0f17e859b3b4d.png",
    "genre": "Rap",
    "releaseYear": "2017",
    "runtime": "46 min",
    "streams": "172.4M",
    "topTrack": "Glitter"
  },
  {
    "artist": "Tyler, The Creator",
    "album": "IGOR",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e150fa362c89b8f1d92d883ae828b7ef.png",
    "genre": "Neo-soul",
    "releaseYear": "2019",
    "runtime": "39 min",
    "streams": "232.9M",
    "topTrack": "EARFQUAKE"
  },
  {
    "artist": "Tyler, The Creator",
    "album": "Chromakopia",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8c0b389bb4cbf522bc5a2b58e15b6620.png",
    "genre": "Hip-Hop",
    "releaseYear": "2024",
    "runtime": "52 min",
    "streams": "145.2M",
    "topTrack": "Rah Tah Tah"
  },
  {
    "artist": "Tyler, The Creator",
    "album": "CALL ME IF YOU GET LOST",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8bed6cc4a2f68d3bb2228fbe6654b887.png",
    "genre": "Hip-Hop",
    "releaseYear": "2021",
    "runtime": "52 min",
    "streams": "124.4M",
    "topTrack": "LUMBERJACK"
  },
  {
    "artist": "Tyler, The Creator",
    "album": "Goblin",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/969503c98a6cea946bf66db421d74923.png",
    "genre": "Rap",
    "releaseYear": "2011",
    "runtime": "73 min",
    "streams": "57.2M",
    "topTrack": "Yonkers"
  },
  {
    "artist": "Charli xcx",
    "album": "BRAT",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b00527c6ae0cd1d4c9bf3706b130ad56.png",
    "genre": "Pop",
    "releaseYear": "2024",
    "runtime": "45 min",
    "streams": "198.0M",
    "topTrack": "360"
  },
  {
    "artist": "Charli xcx",
    "album": "Brat and it’s completely different but also still brat",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/899f1ced9adb26175e0c93a9254820cc.png",
    "genre": "Pop",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "87.2M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Charli xcx",
    "album": "how i'm feeling now",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9d584d6fc6300f7fbd98de3efacfd1ba.png",
    "genre": "Pop",
    "releaseYear": "2020",
    "runtime": "34 min",
    "streams": "68.1M",
    "topTrack": "party 4 u"
  },
  {
    "artist": "Charli xcx",
    "album": "SUCKER",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/85efac150ce718b6c02807cc8f5acb91.png",
    "genre": "Pop",
    "releaseYear": "2014",
    "runtime": "45 min",
    "streams": "17.7M",
    "topTrack": "Boom Clap"
  },
  {
    "artist": "Charli xcx",
    "album": "Guess featuring billie eilish",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/18a20df834008bb671753dd255ee858e.png",
    "genre": "Peter",
    "releaseYear": "2024",
    "runtime": "Unknown",
    "streams": "17.1M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Sabrina Carpenter",
    "album": "Short n' Sweet",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8bf0ab10e23c95ccea08f75bc62e4865.png",
    "genre": "Pop",
    "releaseYear": "2024",
    "runtime": "6 min",
    "streams": "185.2M",
    "topTrack": "Espresso"
  },
  {
    "artist": "Sabrina Carpenter",
    "album": "Espresso",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/31af483995fa0388205995fc95f76318.png",
    "genre": "Short N' Sweet",
    "releaseYear": "2024",
    "runtime": "Unknown",
    "streams": "36.4M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Sabrina Carpenter",
    "album": "emails i can't send",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e4198cd6ab64b73da4a8387bb87c62d3.png",
    "genre": "Pop",
    "releaseYear": "2022",
    "runtime": "39 min",
    "streams": "94.7M",
    "topTrack": "Nonsense"
  },
  {
    "artist": "Sabrina Carpenter",
    "album": "emails i can’t send fwd:",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/177a1ef8117442c97ad096e8c758bbc4.png",
    "genre": "Pop",
    "releaseYear": "2023",
    "runtime": "50 min",
    "streams": "70.2M",
    "topTrack": "Nonsense"
  },
  {
    "artist": "Sabrina Carpenter",
    "album": "Man’s Best Friend",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6bbc8416c1f1c3a25054d4ae3b5fbb35.png",
    "genre": "Pop",
    "releaseYear": "2025",
    "runtime": "39 min",
    "streams": "120.9M",
    "topTrack": "Manchild"
  },
  {
    "artist": "Justin Bieber",
    "album": "Purpose (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b7b8bdcf48864d6bdc6d4a266e7cc435.png",
    "genre": "Pop",
    "releaseYear": "2015",
    "runtime": "12 min",
    "streams": "56.0M",
    "topTrack": "What Do You Mean?"
  },
  {
    "artist": "Justin Bieber",
    "album": "Believe",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ca337a40bbb78937bf330454761ee592.png",
    "genre": "Pop",
    "releaseYear": "2012",
    "runtime": "46 min",
    "streams": "25.8M",
    "topTrack": "Beauty and a Beat"
  },
  {
    "artist": "Justin Bieber",
    "album": "My World 2.0",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/cc2b72b088bdc3beb0cdb7636fbe02bb.png",
    "genre": "Pop",
    "releaseYear": "2010",
    "runtime": "37 min",
    "streams": "24.1M",
    "topTrack": "Baby"
  },
  {
    "artist": "Justin Bieber",
    "album": "Justice",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f09689d30b3a8faeb9d1f2dcec968307.png",
    "genre": "Pop",
    "releaseYear": "2021",
    "runtime": "45 min",
    "streams": "39.3M",
    "topTrack": "Ghost"
  },
  {
    "artist": "Justin Bieber",
    "album": "Believe (Deluxe Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3659e65b38c59c07e2af1e73cc772b91.png",
    "genre": "Pop",
    "releaseYear": "2012",
    "runtime": "61 min",
    "streams": "23.7M",
    "topTrack": "Beauty and a Beat"
  },
  {
    "artist": "Lana Del Rey",
    "album": "Born to Die - The Paradise Edition",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8c5a9f54785f4f928037fc1be53d375f.png",
    "genre": "Indie",
    "releaseYear": "2012",
    "runtime": "101 min",
    "streams": "165.4M",
    "topTrack": "Summertime Sadness"
  },
  {
    "artist": "Lana Del Rey",
    "album": "Ultraviolence (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/eb300e3afe470b74b4384b169b96dd56.png",
    "genre": "Alternative",
    "releaseYear": "2014",
    "runtime": "65 min",
    "streams": "177.3M",
    "topTrack": "West Coast"
  },
  {
    "artist": "Lana Del Rey",
    "album": "Norman Fucking Rockwell!",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ab9ed65c5b337129f6b50ca5894d7319.png",
    "genre": "Pop",
    "releaseYear": "2019",
    "runtime": "66 min",
    "streams": "203.5M",
    "topTrack": "Doin' Time"
  },
  {
    "artist": "Lana Del Rey",
    "album": "Young and Beautiful",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f8408df7304e49685980e09662b6c808.png",
    "genre": "Indie",
    "releaseYear": "2013",
    "runtime": "Unknown",
    "streams": "22.4M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Lana Del Rey",
    "album": "Lust for Life",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9e9ddd9e9270cd400fcf60ab3d9fb1cc.png",
    "genre": "Pop",
    "releaseYear": "2017",
    "runtime": "67 min",
    "streams": "133.6M",
    "topTrack": "Cherry"
  },
  {
    "artist": "Arctic Monkeys",
    "album": "AM",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f579e414e20f40969185e41182d72472.png",
    "genre": "Rock",
    "releaseYear": "2013",
    "runtime": "39 min",
    "streams": "268.0M",
    "topTrack": "Do I Wanna Know?"
  },
  {
    "artist": "Arctic Monkeys",
    "album": "Favourite Worst Nightmare",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4debfeb504dc47779f0ff3df43fd9529.png",
    "genre": "Rock",
    "releaseYear": "2007",
    "runtime": "41 min",
    "streams": "156.1M",
    "topTrack": "505"
  },
  {
    "artist": "Arctic Monkeys",
    "album": "Whatever People Say I Am, That's What I'm Not",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5e1480805bdf29da606e0de2ac07b205.png",
    "genre": "Rock",
    "releaseYear": "2006",
    "runtime": "42 min",
    "streams": "141.3M",
    "topTrack": "I Bet You Look Good on the Dancefloor"
  },
  {
    "artist": "Arctic Monkeys",
    "album": "Favourite Worst Nightmare (Standard Version)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/809263677d3265378380bd3978b5c8d8.png",
    "genre": "Rock",
    "releaseYear": "2007",
    "runtime": "41 min",
    "streams": "47.8M",
    "topTrack": "505"
  },
  {
    "artist": "Arctic Monkeys",
    "album": "Humbug",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/70163676ea2e4c44959c3af0f71b30d8.png",
    "genre": "Rock",
    "releaseYear": "2009",
    "runtime": "24 min",
    "streams": "70.2M",
    "topTrack": "Crying Lightning"
  },
  {
    "artist": "Paramore",
    "album": "RIOT!",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b7a4b3000d0c431fbce299986ac51c48.png",
    "genre": "Rock",
    "releaseYear": "2007",
    "runtime": "35 min",
    "streams": "123.6M",
    "topTrack": "Misery Business"
  },
  {
    "artist": "Paramore",
    "album": "brand new eyes",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8935ea2d777c8f2f5f3c7a8f521ea9fb.png",
    "genre": "Rock",
    "releaseYear": "2009",
    "runtime": "44 min",
    "streams": "126.6M",
    "topTrack": "The Only Exception"
  },
  {
    "artist": "Paramore",
    "album": "Paramore",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f3fab54395c7929363622eff2b3b7de6.png",
    "genre": "Rock",
    "releaseYear": "2013",
    "runtime": "63 min",
    "streams": "77.2M",
    "topTrack": "Still Into You"
  },
  {
    "artist": "Paramore",
    "album": "After Laughter",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fc4c4f4eb4fa6e9215ecb6705cbb72de.png",
    "genre": "Pop",
    "releaseYear": "2017",
    "runtime": "42 min",
    "streams": "55.8M",
    "topTrack": "Hard Times"
  },
  {
    "artist": "Paramore",
    "album": "All We Know Is Falling",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4799fa93e32360c802cd9b99e2a12a54.png",
    "genre": "Rock",
    "releaseYear": "2005",
    "runtime": "35 min",
    "streams": "50.4M",
    "topTrack": "Pressure"
  },
  {
    "artist": "Frank Ocean",
    "album": "Blonde",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/82c92f044b27db86328ed6be3f8a735a.png",
    "genre": "R&B",
    "releaseYear": "2016",
    "runtime": "65 min",
    "streams": "373.1M",
    "topTrack": "Pink + White"
  },
  {
    "artist": "Frank Ocean",
    "album": "channel ORANGE",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/553678d27570452839aec0fd0cdadd63.png",
    "genre": "R&B",
    "releaseYear": "2012",
    "runtime": "52 min",
    "streams": "211.5M",
    "topTrack": "Thinkin Bout You"
  },
  {
    "artist": "Frank Ocean",
    "album": "Novacane",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fd4cd82172245b39decbef1617384b5c.png",
    "genre": "Frank Ocean",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "25.1M",
    "topTrack": "Novacane (Edited)"
  },
  {
    "artist": "Frank Ocean",
    "album": "Chanel",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/33ddc52116ff8260159ee77312efa894.png",
    "genre": "R&B",
    "releaseYear": "2017",
    "runtime": "Unknown",
    "streams": "24.0M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Frank Ocean",
    "album": "In My Room",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/74a4c3db50ae3fe0150bc12938d42f2d.png",
    "genre": "Rap",
    "releaseYear": "Unknown",
    "runtime": "2 min",
    "streams": "19.9M",
    "topTrack": "In My Room (Studio)"
  },
  {
    "artist": "Billie Eilish",
    "album": "WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c2652de4809e5b4349565518b34b85ca.png",
    "genre": "Pop",
    "releaseYear": "2019",
    "runtime": "54 min",
    "streams": "160.1M",
    "topTrack": "bad guy"
  },
  {
    "artist": "Billie Eilish",
    "album": "HIT ME HARD AND SOFT",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6db576307ee7bdd81056432542b6bab7.png",
    "genre": "Pop",
    "releaseYear": "2024",
    "runtime": "43 min",
    "streams": "245.9M",
    "topTrack": "BIRDS OF A FEATHER"
  },
  {
    "artist": "Billie Eilish",
    "album": "Happier Than Ever",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7ebd8b6f8ac6766fb26303245a265a2e.png",
    "genre": "Pop",
    "releaseYear": "2021",
    "runtime": "55 min",
    "streams": "163.5M",
    "topTrack": "Happier Than Ever"
  },
  {
    "artist": "Billie Eilish",
    "album": "dont smile at me",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fa0cc28717131fb40092775c9b1f2213.png",
    "genre": "Pop",
    "releaseYear": "2017",
    "runtime": "6 min",
    "streams": "73.1M",
    "topTrack": "watch"
  },
  {
    "artist": "Billie Eilish",
    "album": "lovely (with Khalid)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d14b594f15b5629a3ba686cab2c95f83.png",
    "genre": "Pop",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "18.2M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Katy Perry",
    "album": "One of the Boys",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/46c6aef9c93b1a87c4e453fbd74839ab.png",
    "genre": "Pop",
    "releaseYear": "2008",
    "runtime": "48 min",
    "streams": "72.7M",
    "topTrack": "I Kissed a Girl"
  },
  {
    "artist": "Katy Perry",
    "album": "Teenage Dream",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9a9141d83ebd9056e7a212b3bb493ac3.png",
    "genre": "Pop",
    "releaseYear": "2010",
    "runtime": "46 min",
    "streams": "99.9M",
    "topTrack": "Last Friday Night (T.G.I.F.)"
  },
  {
    "artist": "Katy Perry",
    "album": "Teenage Dream: The Complete Confection",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/efbd28cada9ae700d7e3732c7edfcc8b.png",
    "genre": "Pop",
    "releaseYear": "2012",
    "runtime": "69 min",
    "streams": "37.3M",
    "topTrack": "Last Friday Night (T.G.I.F.)"
  },
  {
    "artist": "Katy Perry",
    "album": "PRISM",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/927fc2e644c8d1bb1a5b94ae834d1f44.png",
    "genre": "Pop",
    "releaseYear": "2013",
    "runtime": "48 min",
    "streams": "27.2M",
    "topTrack": "Dark Horse"
  },
  {
    "artist": "Katy Perry",
    "album": "PRISM (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2c5212bf492d1b571ff771dd25319d46.png",
    "genre": "Pop",
    "releaseYear": "2013",
    "runtime": "61 min",
    "streams": "28.0M",
    "topTrack": "Dark Horse"
  },
  {
    "artist": "Malcolm Todd",
    "album": "Sweet Boy",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/824921f6bdcf5846a4f5c25654abbbf8.png",
    "genre": "Indie",
    "releaseYear": "2024",
    "runtime": "Unknown",
    "streams": "50.4M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Malcolm Todd",
    "album": "Malcolm Todd",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4712eef00d71c3c3d9de2445a9e1ae7b.png",
    "genre": "Indie",
    "releaseYear": "2025",
    "runtime": "31 min",
    "streams": "16.9M",
    "topTrack": "Chest Pain (I Love)"
  },
  {
    "artist": "Malcolm Todd",
    "album": "Chest Pain (I Love)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/924b432c1995754d0edb096a32b42e4b.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "4.4M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Malcolm Todd",
    "album": "Demos Before Prom",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9326f90d47771d0262766deb6128fce8.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "11 min",
    "streams": "5.7M",
    "topTrack": "Hesitating"
  },
  {
    "artist": "Malcolm Todd",
    "album": "Malcolm Todd (still)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3737a717205ea47eb5dbced3c750197a.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "48 min",
    "streams": "9.0M",
    "topTrack": "Chest Pain (I Love)"
  },
  {
    "artist": "Bruno Mars",
    "album": "Doo-Wops & Hooligans",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c3c4dde679eb3436694c2411fe0ff15c.png",
    "genre": "Pop",
    "releaseYear": "2010",
    "runtime": "35 min",
    "streams": "77.5M",
    "topTrack": "Just the Way You Are"
  },
  {
    "artist": "Bruno Mars",
    "album": "Unorthodox Jukebox",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c7cf0cd2fcd6efb0a33e063a8d82ff0e.png",
    "genre": "Pop",
    "releaseYear": "2012",
    "runtime": "34 min",
    "streams": "66.8M",
    "topTrack": "Locked Out of Heaven"
  },
  {
    "artist": "Bruno Mars",
    "album": "24K Magic",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f18dc30b48412484b34ebff24ba615be.png",
    "genre": "Funk",
    "releaseYear": "2016",
    "runtime": "33 min",
    "streams": "52.1M",
    "topTrack": "That's What I Like"
  },
  {
    "artist": "Bruno Mars",
    "album": "An Evening with Silk Sonic",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e98d14610e9739f6d5af237bab88d361.png",
    "genre": "Funk",
    "releaseYear": "2021",
    "runtime": "31 min",
    "streams": "43.1M",
    "topTrack": "Leave The Door Open"
  },
  {
    "artist": "Bruno Mars",
    "album": "It Will Rain",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c06c44704e034cd98a3ec40020147a56.png",
    "genre": "Pop",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "6.8M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Fleetwood Mac",
    "album": "Rumours (Super Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e64ceb720a09f1f6072b84cdae41d751.png",
    "genre": "Rock",
    "releaseYear": "1977",
    "runtime": "222 min",
    "streams": "71.6M",
    "topTrack": "Go Your Own Way"
  },
  {
    "artist": "Fleetwood Mac",
    "album": "Rumours",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/349d64820e124b77cb5275ab03042693.png",
    "genre": "Rock",
    "releaseYear": "1976",
    "runtime": "39 min",
    "streams": "56.7M",
    "topTrack": "Dreams"
  },
  {
    "artist": "Fleetwood Mac",
    "album": "Fleetwood Mac",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/97e59a52bf1c49ceb28cfa4d763e8520.png",
    "genre": "Rock",
    "releaseYear": "1975",
    "runtime": "41 min",
    "streams": "32.1M",
    "topTrack": "Landslide"
  },
  {
    "artist": "Fleetwood Mac",
    "album": "Greatest Hits",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f390687c380a492dc4e71fd352c1dc91.png",
    "genre": "Rock",
    "releaseYear": "1971",
    "runtime": "44 min",
    "streams": "22.2M",
    "topTrack": "Albatross"
  },
  {
    "artist": "Fleetwood Mac",
    "album": "Tango in the Night (Deluxe Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f62b785112ce1a770e7f712df259962b.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "48 min",
    "streams": "21.5M",
    "topTrack": "Big Love (2017 Remaster)"
  },
  {
    "artist": "Doja Cat",
    "album": "Planet Her",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2321c0b23c484ab566746c0dddfc777b.png",
    "genre": "Pop",
    "releaseYear": "2021",
    "runtime": "44 min",
    "streams": "128.8M",
    "topTrack": "Woman"
  },
  {
    "artist": "Doja Cat",
    "album": "Hot Pink",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/be2aca67c96a044ec6e2726d7de50d94.png",
    "genre": "Pop",
    "releaseYear": "2019",
    "runtime": "40 min",
    "streams": "88.9M",
    "topTrack": "Streets"
  },
  {
    "artist": "Doja Cat",
    "album": "Scarlet",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/47dbda956c44d06fc1a4f8dbf1c77f00.png",
    "genre": "Hip-Hop",
    "releaseYear": "2023",
    "runtime": "51 min",
    "streams": "51.7M",
    "topTrack": "Paint the Town Red"
  },
  {
    "artist": "Doja Cat",
    "album": "Amala",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3d8c6b5ea4a34c222a9a8069687c12e9.png",
    "genre": "Rap",
    "releaseYear": "2018",
    "runtime": "45 min",
    "streams": "21.1M",
    "topTrack": "Candy"
  },
  {
    "artist": "Doja Cat",
    "album": "Amala (Deluxe Version)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5cef99c7b4199a3f4a05fdde792d84f5.png",
    "genre": "Rap",
    "releaseYear": "2018",
    "runtime": "56 min",
    "streams": "22.2M",
    "topTrack": "Candy"
  },
  {
    "artist": "Harry Styles",
    "album": "Fine Line",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7940fbb1df766b4683951aed490a8b5a.png",
    "genre": "Pop",
    "releaseYear": "2019",
    "runtime": "42 min",
    "streams": "135.3M",
    "topTrack": "Watermelon Sugar"
  },
  {
    "artist": "Harry Styles",
    "album": "Harry's House",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1534f4871b5acfffb2d621047a771fa0.png",
    "genre": "Pop",
    "releaseYear": "2022",
    "runtime": "41 min",
    "streams": "159.4M",
    "topTrack": "As It Was"
  },
  {
    "artist": "Harry Styles",
    "album": "Harry Styles",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/295ed1c0727ce10652867d628139beb1.png",
    "genre": "Rock",
    "releaseYear": "2017",
    "runtime": "41 min",
    "streams": "82.5M",
    "topTrack": "Sign of the Times"
  },
  {
    "artist": "Harry Styles",
    "album": "As It Was",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a6d55d424092713cb0409d18de21ce09.png",
    "genre": "Pop",
    "releaseYear": "2022",
    "runtime": "Unknown",
    "streams": "20.5M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Harry Styles",
    "album": "Kiss All The Time. Disco, Occasionally.",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/11a212a9de9fe958cc5829849ebacbf8.png",
    "genre": "Pop",
    "releaseYear": "2026",
    "runtime": "42 min",
    "streams": "36.2M",
    "topTrack": "Aperture"
  },
  {
    "artist": "Gorillaz",
    "album": "Demon Days",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/271483e955d2b255160f3361a7f5fb78.png",
    "genre": "Alternative",
    "releaseYear": "2005",
    "runtime": "56 min",
    "streams": "151.3M",
    "topTrack": "Feel Good Inc."
  },
  {
    "artist": "Gorillaz",
    "album": "Gorillaz",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/86fc45f14a789e9fee32a99ea9036d3d.png",
    "genre": "Alternative",
    "releaseYear": "2001",
    "runtime": "61 min",
    "streams": "66.5M",
    "topTrack": "Clint Eastwood"
  },
  {
    "artist": "Gorillaz",
    "album": "Plastic Beach",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ce6e2af584a5480b85b79371b219a92e.png",
    "genre": "Electronic",
    "releaseYear": "2010",
    "runtime": "56 min",
    "streams": "106.1M",
    "topTrack": "On Melancholy Hill"
  },
  {
    "artist": "Gorillaz",
    "album": "Humanz (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c6be60edd13ecd2226b9ca7508484f99.png",
    "genre": "Electronic",
    "releaseYear": "2017",
    "runtime": "68 min",
    "streams": "39.8M",
    "topTrack": "She's My Collar (feat. Kali Uchis)"
  },
  {
    "artist": "Gorillaz",
    "album": "Cracker Island",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/507c3f4c1863a05626a445057871b56e.png",
    "genre": "Pop",
    "releaseYear": "2023",
    "runtime": "19 min",
    "streams": "14.5M",
    "topTrack": "New Gold (feat. Tame Impala and Bootie Brown)"
  },
  {
    "artist": "The Smiths",
    "album": "The Queen Is Dead",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fac0b27adf403efed8b368d3a236ab61.png",
    "genre": "Indie",
    "releaseYear": "1986",
    "runtime": "37 min",
    "streams": "111.2M",
    "topTrack": "There Is a Light That Never Goes Out"
  },
  {
    "artist": "The Smiths",
    "album": "Hatful of Hollow",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c1d87ec19e6f9c837d5f3b31441d1ff8.png",
    "genre": "Indie",
    "releaseYear": "1984",
    "runtime": "56 min",
    "streams": "99.7M",
    "topTrack": "This Charming Man"
  },
  {
    "artist": "The Smiths",
    "album": "Louder Than Bombs",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f431ff5eb377cef2177845147837492f.png",
    "genre": "Indie",
    "releaseYear": "1987",
    "runtime": "69 min",
    "streams": "87.0M",
    "topTrack": "Heaven Knows I'm Miserable Now"
  },
  {
    "artist": "The Smiths",
    "album": "The Smiths",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2e25a301cf23c2b28b0ff1b77a852e1b.png",
    "genre": "Indie",
    "releaseYear": "1983",
    "runtime": "46 min",
    "streams": "75.3M",
    "topTrack": "This Charming Man"
  },
  {
    "artist": "The Smiths",
    "album": "Meat Is Murder",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ebc53796f18f4c4bba97a26b71b4e0ac.png",
    "genre": "Indie",
    "releaseYear": "1985",
    "runtime": "38 min",
    "streams": "36.2M",
    "topTrack": "That Joke Isn't Funny Anymore"
  },
  {
    "artist": "A$AP Rocky",
    "album": "LONG.LIVE.A$AP (Deluxe Version)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c0203b6fcecc7514ce88b34a99554694.png",
    "genre": "Rap",
    "releaseYear": "2013",
    "runtime": "62 min",
    "streams": "74.9M",
    "topTrack": "Fashion Killa"
  },
  {
    "artist": "A$AP Rocky",
    "album": "AT.LONG.LAST.A$AP",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5184e16c4f2964ebb3e4b68b3ccb849e.png",
    "genre": "Rap",
    "releaseYear": "2015",
    "runtime": "66 min",
    "streams": "78.3M",
    "topTrack": "L$D"
  },
  {
    "artist": "A$AP Rocky",
    "album": "TESTING",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fead178e9a987d1bb3814047344f52d0.png",
    "genre": "Hip-Hop",
    "releaseYear": "2018",
    "runtime": "52 min",
    "streams": "57.9M",
    "topTrack": "Kids Turned Out Fine"
  },
  {
    "artist": "A$AP Rocky",
    "album": "Sundress",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0a4182a066608f5c74d5720d847466a6.png",
    "genre": "Pop",
    "releaseYear": "2018",
    "runtime": "Unknown",
    "streams": "25.6M",
    "topTrack": "Unknown"
  },
  {
    "artist": "A$AP Rocky",
    "album": "I Smoked Away My Brain (I'm God x Demons Mashup) (feat. Imogen Heap & Clams Casino)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1348ff5689f37deeed1ae65eb815e937.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "18.2M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Linkin Park",
    "album": "Meteora",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fee069a98672ac3719f6c766ff6f0f9c.png",
    "genre": "Nu Metal",
    "releaseYear": "2003",
    "runtime": "37 min",
    "streams": "118.9M",
    "topTrack": "Numb"
  },
  {
    "artist": "Linkin Park",
    "album": "Minutes to Midnight",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/185a38ca7368d2c9ad9cb9ea95ae05f4.png",
    "genre": "Rock",
    "releaseYear": "2007",
    "runtime": "43 min",
    "streams": "98.7M",
    "topTrack": "What I've Done"
  },
  {
    "artist": "Linkin Park",
    "album": "Hybrid Theory",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c21b3923a4d3ff5629996f3f8e178140.png",
    "genre": "Nu Metal",
    "releaseYear": "2000",
    "runtime": "38 min",
    "streams": "75.2M",
    "topTrack": "Crawling"
  },
  {
    "artist": "Linkin Park",
    "album": "Hybrid Theory (Bonus Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/56989cdb558cb4f6609eb906029399d8.png",
    "genre": "Rock",
    "releaseYear": "2000",
    "runtime": "42 min",
    "streams": "82.3M",
    "topTrack": "In the End"
  },
  {
    "artist": "Linkin Park",
    "album": "Meteora (Bonus Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2a3ab7d7e3155d3779e4997f5f23d0ef.png",
    "genre": "Alternative",
    "releaseYear": "2003",
    "runtime": "47 min",
    "streams": "47.6M",
    "topTrack": "Numb"
  },
  {
    "artist": "Childish Gambino",
    "album": "\"Awaken, My Love!\"",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d4f6f6f537a28b6b15f793515b95452b.png",
    "genre": "Funk",
    "releaseYear": "2016",
    "runtime": "50 min",
    "streams": "70.0M",
    "topTrack": "Redbone"
  },
  {
    "artist": "Childish Gambino",
    "album": "Camp",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d2c51831aa2b59b93c7e56b29efbbcf6.png",
    "genre": "Rap",
    "releaseYear": "2011",
    "runtime": "53 min",
    "streams": "77.4M",
    "topTrack": "Heartbeat"
  },
  {
    "artist": "Childish Gambino",
    "album": "Because the Internet",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0f636525495f1458c7c55f238eb8e27d.png",
    "genre": "Rap",
    "releaseYear": "2013",
    "runtime": "57 min",
    "streams": "88.4M",
    "topTrack": "III. Urn"
  },
  {
    "artist": "Childish Gambino",
    "album": "Kauai",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/974d53ad755f450ec51caed92670ef97.png",
    "genre": "R&B",
    "releaseYear": "2014",
    "runtime": "27 min",
    "streams": "15.8M",
    "topTrack": "Sober"
  },
  {
    "artist": "Childish Gambino",
    "album": "Summer Pack",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6db4bd793ab45369b54cfde2a5a362f8.png",
    "genre": "R&B",
    "releaseYear": "Unknown",
    "runtime": "8 min",
    "streams": "10.9M",
    "topTrack": "Feels Like Summer"
  },
  {
    "artist": "The Neighbourhood",
    "album": "I Love You.",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d787d7eb7324e25dfb03dd9c0220d818.png",
    "genre": "Indie",
    "releaseYear": "2013",
    "runtime": "45 min",
    "streams": "83.8M",
    "topTrack": "Sweater Weather"
  },
  {
    "artist": "The Neighbourhood",
    "album": "Wiped Out!",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f21f9c3a0f63fb06990c0a66ef2ec741.png",
    "genre": "Indie",
    "releaseYear": "2015",
    "runtime": "45 min",
    "streams": "83.6M",
    "topTrack": "A Moment of Silence (Album Version)"
  },
  {
    "artist": "The Neighbourhood",
    "album": "Hard to Imagine the Neighbourhood Ever Changing",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/74e59938d6365ad84c92273028bdf595.png",
    "genre": "Electronic",
    "releaseYear": "2017",
    "runtime": "10 min",
    "streams": "109.1M",
    "topTrack": "Softcore"
  },
  {
    "artist": "The Neighbourhood",
    "album": "Chip Chrome & The Mono-Tones",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fb16390c025edcd77e54f467195fc4ee.png",
    "genre": "Alternative",
    "releaseYear": "1972",
    "runtime": "30 min",
    "streams": "29.4M",
    "topTrack": "Pretty Boy"
  },
  {
    "artist": "The Neighbourhood",
    "album": "I'm Sorry...",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7b9992116ca548d085815bc8cf677675.png",
    "genre": "Indie",
    "releaseYear": "2012",
    "runtime": "17 min",
    "streams": "13.2M",
    "topTrack": "Sweater Weather"
  },
  {
    "artist": "Travis Scott",
    "album": "Rodeo (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e3c598876a5acca5746ca0660d3dcdc6.png",
    "genre": "Rap",
    "releaseYear": "2015",
    "runtime": "75 min",
    "streams": "3.9M",
    "topTrack": "Antidote"
  },
  {
    "artist": "Travis Scott",
    "album": "Days Before Rodeo",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3d61b59130d858416b7725b6e45eb833.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "20.3M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Travis Scott",
    "album": "Antidote",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7d046b6f37842521c966ded4619efd98.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "202.0K",
    "topTrack": "Unknown"
  },
  {
    "artist": "Travis Scott",
    "album": "Birds in the Trap Sing McKnight",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3298304ba5e10fc9a9991ba663dc7462.png",
    "genre": "Hip-Hop",
    "releaseYear": "2016",
    "runtime": "52 min",
    "streams": "85.1M",
    "topTrack": "goosebumps"
  },
  {
    "artist": "Travis Scott",
    "album": "OWL PHARAOH",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1da334218cb9639513d2a850c381a841.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "543.6K",
    "topTrack": "Unknown"
  },
  {
    "artist": "Coldplay",
    "album": "Parachutes",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5fbcfb7258117e88cb73b45e25c88b01.png",
    "genre": "Rock",
    "releaseYear": "2000",
    "runtime": "41 min",
    "streams": "134.4M",
    "topTrack": "Yellow"
  },
  {
    "artist": "Coldplay",
    "album": "A Rush of Blood to the Head",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a61e3c7b85303555ebac49fa460a17c3.png",
    "genre": "Rock",
    "releaseYear": "2002",
    "runtime": "53 min",
    "streams": "105.4M",
    "topTrack": "The Scientist"
  },
  {
    "artist": "Coldplay",
    "album": "Viva la Vida or Death and All His Friends",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/df7ea51b2826b60175d4c332e0f7b8ca.png",
    "genre": "Rock",
    "releaseYear": "2008",
    "runtime": "46 min",
    "streams": "64.9M",
    "topTrack": "Viva la Vida"
  },
  {
    "artist": "Coldplay",
    "album": "X&Y",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/38761f082a1b02ac535785fafc7964cc.png",
    "genre": "Alternative",
    "releaseYear": "2005",
    "runtime": "67 min",
    "streams": "59.8M",
    "topTrack": "Fix You"
  },
  {
    "artist": "Coldplay",
    "album": "Mylo Xyloto",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1cf47ae5836c144211e8fc1a40087a0a.png",
    "genre": "Rock",
    "releaseYear": "2011",
    "runtime": "46 min",
    "streams": "58.8M",
    "topTrack": "Paradise"
  },
  {
    "artist": "Deftones",
    "album": "Around the Fur",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3e6814b457a9087e0c46d5a949de2766.png",
    "genre": "Nu Metal",
    "releaseYear": "1997",
    "runtime": "38 min",
    "streams": "108.5M",
    "topTrack": "My Own Summer (Shove It)"
  },
  {
    "artist": "Deftones",
    "album": "White Pony",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/afac69dd8ee2b6f734d647fdbadcde55.png",
    "genre": "Metal",
    "releaseYear": "2000",
    "runtime": "50 min",
    "streams": "85.6M",
    "topTrack": "Change (In the House of Flies)"
  },
  {
    "artist": "Deftones",
    "album": "Diamond Eyes",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/858efffdf737c869e754c2f4dbe89f4c.png",
    "genre": "Alternative",
    "releaseYear": "2010",
    "runtime": "41 min",
    "streams": "73.6M",
    "topTrack": "Sextape"
  },
  {
    "artist": "Deftones",
    "album": "Saturday Night Wrist",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7b487d0ff8e1498d8284c014a01c961c.png",
    "genre": "Alternative",
    "releaseYear": "2006",
    "runtime": "51 min",
    "streams": "71.6M",
    "topTrack": "Cherry Waves"
  },
  {
    "artist": "Deftones",
    "album": "Koi No Yokan",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b50c4a0285750fe1159849f2bbccc08d.png",
    "genre": "Alternative",
    "releaseYear": "2012",
    "runtime": "51 min",
    "streams": "54.6M",
    "topTrack": "Rosemary"
  },
  {
    "artist": "SZA",
    "album": "SOS",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b2cfb5bdf137f4d6293565205965750f.png",
    "genre": "Rap",
    "releaseYear": "2022",
    "runtime": "67 min",
    "streams": "260.6M",
    "topTrack": "Kill Bill"
  },
  {
    "artist": "SZA",
    "album": "Ctrl",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9dcae165f522e0d818f7e75a3b5b6e16.png",
    "genre": "R&B",
    "releaseYear": "2017",
    "runtime": "33 min",
    "streams": "143.5M",
    "topTrack": "Broken Clocks"
  },
  {
    "artist": "SZA",
    "album": "SOS Deluxe: LANA",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/80f922302652266472c5b8bced5123bb.png",
    "genre": "Neo-soul",
    "releaseYear": "2022",
    "runtime": "113 min",
    "streams": "71.0M",
    "topTrack": "Kill Bill"
  },
  {
    "artist": "SZA",
    "album": "Good Days",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/cbd475e5b7a6127b06a62831b673301b.png",
    "genre": "R&B",
    "releaseYear": "2020",
    "runtime": "Unknown",
    "streams": "12.9M",
    "topTrack": "Unknown"
  },
  {
    "artist": "SZA",
    "album": "Saturn",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2271106c089819b7b4242d49a2b9fac9.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "14 min",
    "streams": "15.3M",
    "topTrack": "Saturn"
  },
  {
    "artist": "Clairo",
    "album": "Immunity",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d2389b806dd5061b6a75e360c4c46c88.png",
    "genre": "Pop",
    "releaseYear": "2019",
    "runtime": "40 min",
    "streams": "102.5M",
    "topTrack": "Sofia"
  },
  {
    "artist": "Clairo",
    "album": "Charm",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6e8d5d5ca3c27594162651accd47cb7e.png",
    "genre": "Rock",
    "releaseYear": "2024",
    "runtime": "37 min",
    "streams": "89.1M",
    "topTrack": "Juna"
  },
  {
    "artist": "Clairo",
    "album": "Pretty Girl",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2805853d6bb608c5ff0dd640e09b06b8.png",
    "genre": "Pop",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "14.8M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Clairo",
    "album": "Sling",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0a9f1e6e0c825c1e7772fb049f2bf4a1.png",
    "genre": "Chamber Folk",
    "releaseYear": "2021",
    "runtime": "44 min",
    "streams": "52.1M",
    "topTrack": "Amoeba"
  },
  {
    "artist": "Clairo",
    "album": "diary 001",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/93fe3c819e6073e735f7571929ffed8f.png",
    "genre": "Pop",
    "releaseYear": "Unknown",
    "runtime": "14 min",
    "streams": "22.3M",
    "topTrack": "Pretty Girl"
  },
  {
    "artist": "Don Toliver",
    "album": "Heaven or Hell",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/778e527ba305e1d65d002df7ac9b7fa5.png",
    "genre": "Rap",
    "releaseYear": "2020",
    "runtime": "36 min",
    "streams": "49.5M",
    "topTrack": "No Idea"
  },
  {
    "artist": "Don Toliver",
    "album": "Love Sick (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/043211479ce1378b14ba16d86be0d2bd.png",
    "genre": "Unknown",
    "releaseYear": "2023",
    "runtime": "64 min",
    "streams": "31.0M",
    "topTrack": "No Pole"
  },
  {
    "artist": "Don Toliver",
    "album": "HARDSTONE PSYCHO",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c406e01917b3c6f86c17889c265c2b60.png",
    "genre": "Rap",
    "releaseYear": "2024",
    "runtime": "51 min",
    "streams": "54.3M",
    "topTrack": "BANDIT"
  },
  {
    "artist": "Don Toliver",
    "album": "Life of a DON",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c81aba542b3da47e1ac4dc4c80bb7643.png",
    "genre": "Rap",
    "releaseYear": "2021",
    "runtime": "51 min",
    "streams": "34.8M",
    "topTrack": "Way Bigger"
  },
  {
    "artist": "Don Toliver",
    "album": "Love Sick",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b0a4b37ad52e08922b38c0087657170a.png",
    "genre": "2023",
    "releaseYear": "2023",
    "runtime": "52 min",
    "streams": "17.5M",
    "topTrack": "Private Landing (feat. Justin Bieber & Future)"
  },
  {
    "artist": "Chappell Roan",
    "album": "The Rise and Fall of a Midwest Princess",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b3987ea108b929eead2f59fdd3b4a007.png",
    "genre": "Pop",
    "releaseYear": "2023",
    "runtime": "50 min",
    "streams": "239.2M",
    "topTrack": "HOT TO GO!"
  },
  {
    "artist": "Chappell Roan",
    "album": "Good Luck, Babe!",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/86fa0d410ba70ada74d22cf4b690b05b.png",
    "genre": "Pop",
    "releaseYear": "2024",
    "runtime": "Unknown",
    "streams": "59.7M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Chappell Roan",
    "album": "The Subway",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/cf6587c307254821e78b809f0797a6ca.png",
    "genre": "Pop",
    "releaseYear": "2025",
    "runtime": "Unknown",
    "streams": "17.7M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Chappell Roan",
    "album": "The Giver",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/854afa25059c3d7be76ab8a0caab40ca.png",
    "genre": "Cuntry",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "7.6M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Chappell Roan",
    "album": "Love Me Anyway",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/97387707f14caadff2946b45cc40ae0e.png",
    "genre": "Pop",
    "releaseYear": "Unknown",
    "runtime": "8 min",
    "streams": "4.0M",
    "topTrack": "Pink Pony Club"
  },
  {
    "artist": "Mac Miller",
    "album": "Swimming",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9f0e333c941c1a0147fc5d347d343e6d.png",
    "genre": "Hip-Hop",
    "releaseYear": "2018",
    "runtime": "54 min",
    "streams": "94.6M",
    "topTrack": "Self Care"
  },
  {
    "artist": "Mac Miller",
    "album": "The Divine Feminine",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b8f1d45f318d32329329727444c51239.png",
    "genre": "Hip-Hop",
    "releaseYear": "2016",
    "runtime": "52 min",
    "streams": "47.1M",
    "topTrack": "My Favorite Part"
  },
  {
    "artist": "Mac Miller",
    "album": "Circles",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1fd5bc5de116097cb008d0b09576d216.png",
    "genre": "Neo-soul",
    "releaseYear": "2018",
    "runtime": "57 min",
    "streams": "53.1M",
    "topTrack": "Blue World"
  },
  {
    "artist": "Mac Miller",
    "album": "K.I.D.S.",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4cc406a032e2418daa5a768e3391820c.png",
    "genre": "Hip-Hop",
    "releaseYear": "Unknown",
    "runtime": "43 min",
    "streams": "30.6M",
    "topTrack": "The Spins"
  },
  {
    "artist": "Mac Miller",
    "album": "K.I.D.S. (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a2f4ac18f43b8d2d8975913fb41ef720.png",
    "genre": "Hip-Hop",
    "releaseYear": "Unknown",
    "runtime": "45 min",
    "streams": "16.9M",
    "topTrack": "The Spins"
  },
  {
    "artist": "Bad Bunny",
    "album": "DeBÍ TiRAR MáS FOToS",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7d0982b56a5e4304eb6207d6688c917a.png",
    "genre": "2025",
    "releaseYear": "2025",
    "runtime": "61 min",
    "streams": "118.0M",
    "topTrack": "DtMF"
  },
  {
    "artist": "Bad Bunny",
    "album": "Un Verano Sin Ti",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fd95bc0e534a5ab8c54c97791864f2d7.png",
    "genre": "Pop",
    "releaseYear": "2022",
    "runtime": "80 min",
    "streams": "120.5M",
    "topTrack": "Me Porto Bonito"
  },
  {
    "artist": "Bad Bunny",
    "album": "YHLQMDLG",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/685fe30abda57ff91193f164101045e4.png",
    "genre": "Rap",
    "releaseYear": "2020",
    "runtime": "47 min",
    "streams": "47.7M",
    "topTrack": "Yo Perreo Sola"
  },
  {
    "artist": "Bad Bunny",
    "album": "nadie sabe lo que va a pasar mañana",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a2ac0a222d699b52da57959612b1a9cc.png",
    "genre": "Rap",
    "releaseYear": "2023",
    "runtime": "79 min",
    "streams": "38.1M",
    "topTrack": "MONACO"
  },
  {
    "artist": "Bad Bunny",
    "album": "EL ÚLTIMO TOUR DEL MUNDO",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/21482b89bec3657b28c059f3126f3af5.png",
    "genre": "Rap",
    "releaseYear": "2020",
    "runtime": "13 min",
    "streams": "27.0M",
    "topTrack": "DÁKITI"
  },
  {
    "artist": "The Marías",
    "album": "Submarine",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ff18c3c08f0e1c85d62eeee24d1154e9.png",
    "genre": "Pop",
    "releaseYear": "2024",
    "runtime": "45 min",
    "streams": "105.8M",
    "topTrack": "No One Noticed"
  },
  {
    "artist": "The Marías",
    "album": "CINEMA",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/669e4fdc792fffd53f969820325843ac.png",
    "genre": "Pop",
    "releaseYear": "2021",
    "runtime": "39 min",
    "streams": "44.9M",
    "topTrack": "Heavy"
  },
  {
    "artist": "The Marías",
    "album": "Superclean, Vol. II",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7ec497e801200146c55c6afe5d677519.png",
    "genre": "Pop",
    "releaseYear": "Unknown",
    "runtime": "17 min",
    "streams": "20.8M",
    "topTrack": "Cariño"
  },
  {
    "artist": "The Marías",
    "album": "No One Noticed (Extended)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0fc48f2b5906f39385216339b15388f3.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "9 min",
    "streams": "13.5M",
    "topTrack": "No One Noticed (Extended Spanish)"
  },
  {
    "artist": "The Marías",
    "album": "Superclean, Vol. I",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5c8935c345285f574120a493c39c2a30.png",
    "genre": "Indie",
    "releaseYear": "Unknown",
    "runtime": "17 min",
    "streams": "15.5M",
    "topTrack": "Only in My Dreams"
  },
  {
    "artist": "Beyoncé",
    "album": "I AM...SASHA FIERCE",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3e80ed2c42b53bd8a3d69d91ed215715.png",
    "genre": "R&B",
    "releaseYear": "2008",
    "runtime": "64 min",
    "streams": "37.5M",
    "topTrack": "Halo"
  },
  {
    "artist": "Beyoncé",
    "album": "Dangerously in Love",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/bb77c77fc1a103842c22022d7ed68f7f.png",
    "genre": "R&B",
    "releaseYear": "2003",
    "runtime": "62 min",
    "streams": "39.3M",
    "topTrack": "Naughty Girl"
  },
  {
    "artist": "Beyoncé",
    "album": "4",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fd0acc299b94c6f067c6bac375909b9f.png",
    "genre": "Soul",
    "releaseYear": "2011",
    "runtime": "50 min",
    "streams": "47.7M",
    "topTrack": "Love on Top"
  },
  {
    "artist": "Beyoncé",
    "album": "BEYONCÉ [Platinum Edition]",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f987797756a8614d65ee9f80addb040a.png",
    "genre": "Pop",
    "releaseYear": "2014",
    "runtime": "89 min",
    "streams": "50.8M",
    "topTrack": "Partition"
  },
  {
    "artist": "Beyoncé",
    "album": "B'Day",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2660a4cb02b874e11485f7a8c93e1d33.png",
    "genre": "R&B",
    "releaseYear": "2006",
    "runtime": "54 min",
    "streams": "22.4M",
    "topTrack": "Irreplaceable"
  },
  {
    "artist": "Steve Lacy",
    "album": "Dark Red",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3ddbcb76b0872091404a741e58b59562.png",
    "genre": "R&B",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "38.5M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Steve Lacy",
    "album": "Gemini Rights",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/12dcf1122cccf14bd8d943480d04cd58.png",
    "genre": "Neo-soul",
    "releaseYear": "2020",
    "runtime": "13 min",
    "streams": "74.2M",
    "topTrack": "Bad Habit"
  },
  {
    "artist": "Steve Lacy",
    "album": "The Lo-Fis",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/40dac4d3389349e54ac7258a4736ff2b.png",
    "genre": "Neo-soul",
    "releaseYear": "2020",
    "runtime": "39 min",
    "streams": "64.5M",
    "topTrack": "Infrunami"
  },
  {
    "artist": "Steve Lacy",
    "album": "Some",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6faa967d52c9dbc70b578ef50bb2cd44.png",
    "genre": "Hip-Hop",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "23.3M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Steve Lacy",
    "album": "C U Girl",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/680763bf8802936007751735b5a1b936.png",
    "genre": "Neo-soul",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "23.3M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Mitski",
    "album": "Be the Cowboy",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a9b9c68a6ecb979e1ac95e28bb28e06b.png",
    "genre": "Pop",
    "releaseYear": "2018",
    "runtime": "34 min",
    "streams": "154.9M",
    "topTrack": "Washing Machine Heart"
  },
  {
    "artist": "Mitski",
    "album": "The Land Is Inhospitable and So Are We",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/788dfbc94a424d3b344aa97e68f68eed.png",
    "genre": "Indie",
    "releaseYear": "2023",
    "runtime": "33 min",
    "streams": "91.4M",
    "topTrack": "My Love Mine All Mine"
  },
  {
    "artist": "Mitski",
    "album": "bury me at makeout creek",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/48b1e85daff0afa738996e8f7737f1ef.png",
    "genre": "Rock",
    "releaseYear": "2014",
    "runtime": "30 min",
    "streams": "114.1M",
    "topTrack": "Francis Forever"
  },
  {
    "artist": "Mitski",
    "album": "Puberty 2",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/703616fde4bec426d7819777f11e2e98.png",
    "genre": "Rock",
    "releaseYear": "2016",
    "runtime": "31 min",
    "streams": "112.3M",
    "topTrack": "I Bet on Losing Dogs"
  },
  {
    "artist": "Mitski",
    "album": "Retired from Sad, New Career in Business",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4b49d5d53345bc9fec05cbbb9722f8f4.png",
    "genre": "Indie",
    "releaseYear": "2013",
    "runtime": "30 min",
    "streams": "59.6M",
    "topTrack": "I Want You"
  },
  {
    "artist": "TV Girl",
    "album": "French Exit",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4f091d5082e04691c6d7f4b2e2efbdc0.png",
    "genre": "Pop",
    "releaseYear": "2014",
    "runtime": "40 min",
    "streams": "110.3M",
    "topTrack": "Lovers Rock"
  },
  {
    "artist": "TV Girl",
    "album": "Who Really Cares",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7f606674cfa1fdc4603695021d3fbc95.png",
    "genre": "Pop",
    "releaseYear": "2016",
    "runtime": "36 min",
    "streams": "117.9M",
    "topTrack": "Not Allowed"
  },
  {
    "artist": "TV Girl",
    "album": "Death of a Party Girl",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5259fe63f165274122979eb9e4b47c2d.png",
    "genre": "Alternative",
    "releaseYear": "Unknown",
    "runtime": "38 min",
    "streams": "33.2M",
    "topTrack": "Blue Hair"
  },
  {
    "artist": "TV Girl",
    "album": "The Night in Question: French Exit Outtakes",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/03b7f27f311665fe3f8952a902683499.png",
    "genre": "Pop",
    "releaseYear": "2020",
    "runtime": "26 min",
    "streams": "20.6M",
    "topTrack": "It Almost Worked"
  },
  {
    "artist": "TV Girl",
    "album": "Lonely Women",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/079c8593e58cc1fdd2e54abb3af6ab01.png",
    "genre": "Alternative",
    "releaseYear": "Unknown",
    "runtime": "18 min",
    "streams": "7.1M",
    "topTrack": "My Girlfriend"
  },
  {
    "artist": "Future",
    "album": "WE DON'T TRUST YOU",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ed0b0acbc5af9cabb31acbf3ba9e79bb.png",
    "genre": "Hip-Hop",
    "releaseYear": "2023",
    "runtime": "59 min",
    "streams": "76.4M",
    "topTrack": "Like That"
  },
  {
    "artist": "Future",
    "album": "FUTURE",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/221d53768d47338692fa9fc60b6a6b26.png",
    "genre": "Rap",
    "releaseYear": "2017",
    "runtime": "31 min",
    "streams": "25.6M",
    "topTrack": "Chosen One"
  },
  {
    "artist": "Future",
    "album": "I NEVER LIKED YOU",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4f8401c7eae61f7df866141bf910b648.png",
    "genre": "Hip-Hop",
    "releaseYear": "2020",
    "runtime": "60 min",
    "streams": "54.0M",
    "topTrack": "WAIT FOR U (feat. Drake & Tems)"
  },
  {
    "artist": "Future",
    "album": "HNDRXX",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f230dc794738b869ac8d713a7c2f6168.png",
    "genre": "Rap",
    "releaseYear": "2017",
    "runtime": "68 min",
    "streams": "30.2M",
    "topTrack": "Solo"
  },
  {
    "artist": "Future",
    "album": "DS2 (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/145bedc68ea1262d95bf0216e4291f6a.png",
    "genre": "Rap",
    "releaseYear": "2011",
    "runtime": "58 min",
    "streams": "42.9M",
    "topTrack": "The Percocet & Stripper Joint"
  },
  {
    "artist": "Playboi Carti",
    "album": "Whole Lotta Red",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0db2bb3f8dcebb4279db97dc7608d090.png",
    "genre": "Rap",
    "releaseYear": "2020",
    "runtime": "72 min",
    "streams": "229.6M",
    "topTrack": "Sky"
  },
  {
    "artist": "Playboi Carti",
    "album": "Playboi Carti",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9115b9fbc7cf8db99d504319cdf6bd90.png",
    "genre": "Rap",
    "releaseYear": "2015",
    "runtime": "46 min",
    "streams": "129.3M",
    "topTrack": "Magnolia"
  },
  {
    "artist": "Playboi Carti",
    "album": "Die Lit",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d1761236c12379d3e1dfce76023231f6.png",
    "genre": "Rap",
    "releaseYear": "2018",
    "runtime": "56 min",
    "streams": "185.5M",
    "topTrack": "R.I.P."
  },
  {
    "artist": "Playboi Carti",
    "album": "Music",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/10cf93995de9215931f95e1a2f34c37c.png",
    "genre": "Rap",
    "releaseYear": "2020",
    "runtime": "66 min",
    "streams": "152.4M",
    "topTrack": "All Red"
  },
  {
    "artist": "Playboi Carti",
    "album": "ALL RED",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4c537d05c6ef71610d82d252434e2344.png",
    "genre": "Unknown",
    "releaseYear": "2022",
    "runtime": "Unknown",
    "streams": "13.3M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Dominic Fike",
    "album": "Don't Forget About Me, Demos",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1f4447aa5510de93f025a475f6bdad33.png",
    "genre": "Pop",
    "releaseYear": "2017",
    "runtime": "14 min",
    "streams": "52.6M",
    "topTrack": "Babydoll"
  },
  {
    "artist": "Dominic Fike",
    "album": "Sunburn",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ea11589f28426d0feeab162ca61e3d0f.png",
    "genre": "Indie",
    "releaseYear": "2023",
    "runtime": "39 min",
    "streams": "31.3M",
    "topTrack": "Mama's Boy"
  },
  {
    "artist": "Dominic Fike",
    "album": "What Could Possibly Go Wrong",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5a012a2d2b06dcf28450639bd11238d8.png",
    "genre": "Alternative",
    "releaseYear": "2020",
    "runtime": "8 min",
    "streams": "33.8M",
    "topTrack": "Why"
  },
  {
    "artist": "Dominic Fike",
    "album": "14 MINUTES",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0637fab4f65f73cdc443b254ef85bf29.png",
    "genre": "2024",
    "releaseYear": "Unknown",
    "runtime": "14 min",
    "streams": "12.1M",
    "topTrack": "misses"
  },
  {
    "artist": "Dominic Fike",
    "album": "Phone Numbers",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b01eab872ab40506798d1e35fba40b69.png",
    "genre": "Pop",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "5.8M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Britney Spears",
    "album": "In the Zone",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a559d5c65ee566e8480854c5497d2788.png",
    "genre": "Pop",
    "releaseYear": "2003",
    "runtime": "49 min",
    "streams": "47.7M",
    "topTrack": "Toxic"
  },
  {
    "artist": "Britney Spears",
    "album": "Blackout",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b9a14a64aed91932f0f45708d6b20a74.png",
    "genre": "Pop",
    "releaseYear": "2007",
    "runtime": "42 min",
    "streams": "71.5M",
    "topTrack": "Gimme More"
  },
  {
    "artist": "Britney Spears",
    "album": "Circus (Deluxe Version)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5c866827fc07bed8ea1624b6de3d98b3.png",
    "genre": "Pop",
    "releaseYear": "2008",
    "runtime": "52 min",
    "streams": "40.0M",
    "topTrack": "Womanizer"
  },
  {
    "artist": "Britney Spears",
    "album": "...Baby One More Time (Digital Deluxe Version)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a366e8cc3fb5adb4b75d138652fa721a.png",
    "genre": "Pop",
    "releaseYear": "1999",
    "runtime": "57 min",
    "streams": "20.6M",
    "topTrack": "...Baby One More Time"
  },
  {
    "artist": "Britney Spears",
    "album": "Oops!... I Did It Again",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9d9002ec4e0858cbeb0c89a2497173d1.png",
    "genre": "Pop",
    "releaseYear": "2000",
    "runtime": "54 min",
    "streams": "23.1M",
    "topTrack": "Oops!...I Did It Again"
  },
  {
    "artist": "beabadoobee",
    "album": "Beatopia",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d47d0db3893fa94639514a2aa47372b8.png",
    "genre": "Pop",
    "releaseYear": "2022",
    "runtime": "45 min",
    "streams": "83.3M",
    "topTrack": "the perfect pair"
  },
  {
    "artist": "beabadoobee",
    "album": "This Is How Tomorrow Moves",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/794fdafa7b5fe907c6f9abe41060af6d.png",
    "genre": "Rock",
    "releaseYear": "2024",
    "runtime": "41 min",
    "streams": "58.5M",
    "topTrack": "real man"
  },
  {
    "artist": "beabadoobee",
    "album": "Glue Song",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/84c1ba3af1bff2e6f7aa1e5e21fb4195.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "20.2M",
    "topTrack": "Unknown"
  },
  {
    "artist": "beabadoobee",
    "album": "Patched Up",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ed2ddfd6c3fae84a69912d918d80b510.png",
    "genre": "Pop",
    "releaseYear": "Unknown",
    "runtime": "25 min",
    "streams": "24.3M",
    "topTrack": "Tired"
  },
  {
    "artist": "beabadoobee",
    "album": "Loveworm",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b7bf7eb6977b293768e4d7e7af0ac45b.png",
    "genre": "Indie",
    "releaseYear": "Unknown",
    "runtime": "24 min",
    "streams": "24.7M",
    "topTrack": "Apple Cider"
  },
  {
    "artist": "The Beatles",
    "album": "Abbey Road (Remastered)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a4bbf73ba62024be279364e867b0ca20.png",
    "genre": "Pop",
    "releaseYear": "1969",
    "runtime": "49 min",
    "streams": "70.8M",
    "topTrack": "Here Comes the Sun - Remastered 2009"
  },
  {
    "artist": "The Beatles",
    "album": "The Beatles (Remastered)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/78bf9324efbc7583e6cae6f707568e59.png",
    "genre": "Rock",
    "releaseYear": "2009",
    "runtime": "93 min",
    "streams": "57.3M",
    "topTrack": "Blackbird - Remastered 2009"
  },
  {
    "artist": "The Beatles",
    "album": "Help! (Remastered)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c70cda3df810b0d34904b55618e0eebe.png",
    "genre": "Rock",
    "releaseYear": "1965",
    "runtime": "33 min",
    "streams": "26.1M",
    "topTrack": "Help! - Remastered 2009"
  },
  {
    "artist": "The Beatles",
    "album": "Let It Be (Remastered)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/724148c518ac36565baec48fa333cc31.png",
    "genre": "Rock",
    "releaseYear": "1970",
    "runtime": "35 min",
    "streams": "22.9M",
    "topTrack": "Let It Be - Remastered 2009"
  },
  {
    "artist": "The Beatles",
    "album": "Revolver (Remastered)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1ac1b27a691107b32b1eabee93481fbc.png",
    "genre": "Rock",
    "releaseYear": "2009",
    "runtime": "34 min",
    "streams": "36.2M",
    "topTrack": "Eleanor Rigby - Remastered 2009"
  },
  {
    "artist": "BTS",
    "album": "LOVE YOURSELF 結 'Answer'",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1c1100b20e2eb165f9093a8b6ca5a6ed.png",
    "genre": "Pop",
    "releaseYear": "2018",
    "runtime": "15 min",
    "streams": "292.7M",
    "topTrack": "FAKE LOVE"
  },
  {
    "artist": "BTS",
    "album": "MAP OF THE SOUL : PERSONA",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4172cfad0e4900cd93c961c33133ff1d.png",
    "genre": "Pop",
    "releaseYear": "2019",
    "runtime": "26 min",
    "streams": "167.7M",
    "topTrack": "HOME"
  },
  {
    "artist": "BTS",
    "album": "LOVE YOURSELF 轉 'Tear'",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5f0214a58dec8ee36d902b50104b9740.png",
    "genre": "Pop",
    "releaseYear": "2018",
    "runtime": "43 min",
    "streams": "188.7M",
    "topTrack": "FAKE LOVE"
  },
  {
    "artist": "BTS",
    "album": "BE",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9380aeba3b3430e154263fc4bfae7efb.png",
    "genre": "Pop",
    "releaseYear": "2020",
    "runtime": "28 min",
    "streams": "235.9M",
    "topTrack": "Dynamite"
  },
  {
    "artist": "BTS",
    "album": "LOVE YOURSELF 承 'Her'",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fac6de5d84939bd32422547cacb123fe.png",
    "genre": "Pop",
    "releaseYear": "2017",
    "runtime": "30 min",
    "streams": "95.3M",
    "topTrack": "DNA"
  },
  {
    "artist": "Nirvana",
    "album": "Nevermind (Remastered)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d97d21d3884088e85785eb471f3c431b.png",
    "genre": "Rock",
    "releaseYear": "1991",
    "runtime": "48 min",
    "streams": "99.4M",
    "topTrack": "Smells Like Teen Spirit"
  },
  {
    "artist": "Nirvana",
    "album": "Nevermind",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e8693de0a153e609b3eaebb42d62e8be.png",
    "genre": "Rock",
    "releaseYear": "1991",
    "runtime": "51 min",
    "streams": "61.3M",
    "topTrack": "Smells Like Teen Spirit"
  },
  {
    "artist": "Nirvana",
    "album": "In Utero",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f8b772fdce8284a7c20cc254c7b32796.png",
    "genre": "Rock",
    "releaseYear": "1993",
    "runtime": "50 min",
    "streams": "58.0M",
    "topTrack": "Heart-Shaped Box"
  },
  {
    "artist": "Nirvana",
    "album": "MTV Unplugged in New York",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8e4304de63b44d6ca8f9d3df2576ac8f.png",
    "genre": "Rock",
    "releaseYear": "1993",
    "runtime": "50 min",
    "streams": "50.5M",
    "topTrack": "Come as You Are"
  },
  {
    "artist": "Nirvana",
    "album": "Nirvana",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/573899052466479da97b9207a780d06f.png",
    "genre": "Rock",
    "releaseYear": "2002",
    "runtime": "55 min",
    "streams": "32.9M",
    "topTrack": "Smells Like Teen Spirit"
  },
  {
    "artist": "Madonna",
    "album": "Confessions on a Dance Floor",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/940351f3cd3404d81c6dfe62ffb55c6c.png",
    "genre": "Pop",
    "releaseYear": "2005",
    "runtime": "56 min",
    "streams": "38.7M",
    "topTrack": "Hung Up"
  },
  {
    "artist": "Madonna",
    "album": "Celebration (Double Disc Version)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5779fa945644a539ad2beeaede333d92.png",
    "genre": "Pop",
    "releaseYear": "2009",
    "runtime": "170 min",
    "streams": "24.5M",
    "topTrack": "Hung Up"
  },
  {
    "artist": "Madonna",
    "album": "Like a Prayer",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1956b0e347081443f829998fca1105fa.png",
    "genre": "Pop",
    "releaseYear": "1989",
    "runtime": "52 min",
    "streams": "11.2M",
    "topTrack": "Like a Prayer"
  },
  {
    "artist": "Madonna",
    "album": "True Blue",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c497ef1126c4cc7436a685e4ea32f62c.png",
    "genre": "Pop",
    "releaseYear": "1986",
    "runtime": "45 min",
    "streams": "11.2M",
    "topTrack": "La Isla Bonita"
  },
  {
    "artist": "Madonna",
    "album": "Like a Virgin",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a4ddbfef557fd92f733c307855b6fd80.png",
    "genre": "Pop",
    "releaseYear": "1984",
    "runtime": "33 min",
    "streams": "8.5M",
    "topTrack": "Material Girl"
  },
  {
    "artist": "The Strokes",
    "album": "Is This It",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/80f256e56b1043cdbb99da3ac4dd69a0.png",
    "genre": "Rock",
    "releaseYear": "2001",
    "runtime": "45 min",
    "streams": "118.8M",
    "topTrack": "Someday"
  },
  {
    "artist": "The Strokes",
    "album": "Room on Fire",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a9c961c8da0d4427b7d7a4018738f5df.png",
    "genre": "Rock",
    "releaseYear": "2003",
    "runtime": "35 min",
    "streams": "88.9M",
    "topTrack": "Reptilia"
  },
  {
    "artist": "The Strokes",
    "album": "First Impressions of Earth",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f41698e47228486ac81690028794f18d.png",
    "genre": "Rock",
    "releaseYear": "2006",
    "runtime": "54 min",
    "streams": "61.3M",
    "topTrack": "You Only Live Once"
  },
  {
    "artist": "The Strokes",
    "album": "The New Abnormal",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/576554c542da76c08f0e80c129afcb0e.png",
    "genre": "Rock",
    "releaseYear": "2020",
    "runtime": "46 min",
    "streams": "83.5M",
    "topTrack": "The Adults Are Talking"
  },
  {
    "artist": "The Strokes",
    "album": "Comedown Machine",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/36a064d8029e4b9c9d52c07961fbeed2.png",
    "genre": "Rock",
    "releaseYear": "2013",
    "runtime": "40 min",
    "streams": "40.1M",
    "topTrack": "Call It Fate, Call It Karma"
  },
  {
    "artist": "Calvin Harris",
    "album": "Motion",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6d9ccbf7bd97937241301e216d550a58.png",
    "genre": "Dance",
    "releaseYear": "2014",
    "runtime": "55 min",
    "streams": "37.0M",
    "topTrack": "Summer"
  },
  {
    "artist": "Calvin Harris",
    "album": "18 Months",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/38a2d0c803cb46c1b99bc66babdb216f.png",
    "genre": "Electronic",
    "releaseYear": "2012",
    "runtime": "46 min",
    "streams": "34.5M",
    "topTrack": "Sweet Nothing"
  },
  {
    "artist": "Calvin Harris",
    "album": "Funk Wav Bounces Vol.1",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/38d5dc8041655936e7c9b020561db74c.png",
    "genre": "Funk",
    "releaseYear": "Unknown",
    "runtime": "37 min",
    "streams": "21.3M",
    "topTrack": "Feels"
  },
  {
    "artist": "Calvin Harris",
    "album": "This Is What You Came For",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f4bda5a899452047e6088e6ae80647f2.png",
    "genre": "House",
    "releaseYear": "2016",
    "runtime": "Unknown",
    "streams": "7.6M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Calvin Harris",
    "album": "One Kiss (with Dua Lipa)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/93fbe2928d46743f49e2a3a501202c5c.png",
    "genre": "Pop",
    "releaseYear": "2018",
    "runtime": "Unknown",
    "streams": "10.4M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Lorde",
    "album": "Pure Heroine",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1c3f14fba3dececc85d10d7252e68b93.png",
    "genre": "Pop",
    "releaseYear": "2013",
    "runtime": "37 min",
    "streams": "119.5M",
    "topTrack": "Royals"
  },
  {
    "artist": "Lorde",
    "album": "Melodrama",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fdef4c7536c03d0a5a6689e4b1fa9b42.png",
    "genre": "Pop",
    "releaseYear": "2017",
    "runtime": "38 min",
    "streams": "144.8M",
    "topTrack": "Green Light"
  },
  {
    "artist": "Lorde",
    "album": "Pure Heroine (Extended)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8cbc7d500ea6f6c69012e71e0da1c356.png",
    "genre": "Pop",
    "releaseYear": "2013",
    "runtime": "53 min",
    "streams": "36.5M",
    "topTrack": "Royals"
  },
  {
    "artist": "Lorde",
    "album": "Solar Power",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/708f941453e3f071547e34eaeeac9a4c.png",
    "genre": "Pop",
    "releaseYear": "2021",
    "runtime": "43 min",
    "streams": "40.8M",
    "topTrack": "Solar Power"
  },
  {
    "artist": "Lorde",
    "album": "The Love Club EP",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d408dbd3065624d8da4a8098c61a8986.png",
    "genre": "Pop",
    "releaseYear": "2011",
    "runtime": "16 min",
    "streams": "9.0M",
    "topTrack": "Royals"
  },
  {
    "artist": "Maroon 5",
    "album": "Songs About Jane",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/bbf019744c23450f80c16a492c6917e0.png",
    "genre": "Rock",
    "releaseYear": "2002",
    "runtime": "45 min",
    "streams": "43.1M",
    "topTrack": "This Love"
  },
  {
    "artist": "Maroon 5",
    "album": "V",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1fd6e49508d7b077c8344f45853ded46.png",
    "genre": "Pop",
    "releaseYear": "2014",
    "runtime": "55 min",
    "streams": "29.2M",
    "topTrack": "Maps"
  },
  {
    "artist": "Maroon 5",
    "album": "Songs About Jane: 10th Anniversary Edition",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/41fab0ba40fb460786628a9520f5001b.png",
    "genre": "Rock",
    "releaseYear": "Unknown",
    "runtime": "108 min",
    "streams": "26.4M",
    "topTrack": "This Love"
  },
  {
    "artist": "Maroon 5",
    "album": "Overexposed Track By Track",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0c7860578798ed807a34cb0ddd91c373.png",
    "genre": "Pop",
    "releaseYear": "Unknown",
    "runtime": "78 min",
    "streams": "14.6M",
    "topTrack": "Payphone"
  },
  {
    "artist": "Maroon 5",
    "album": "Red Pill Blues (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/103aa20a67beffa98240fac2891ebc77.png",
    "genre": "Pop",
    "releaseYear": "2017",
    "runtime": "57 min",
    "streams": "15.4M",
    "topTrack": "What Lovers Do (feat. SZA)"
  },
  {
    "artist": "Mac DeMarco",
    "album": "2",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0fd4ea33ee02465cc66904460ee8e91d.png",
    "genre": "Indie",
    "releaseYear": "2012",
    "runtime": "32 min",
    "streams": "65.6M",
    "topTrack": "My Kind of Woman"
  },
  {
    "artist": "Mac DeMarco",
    "album": "This Old Dog",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b6cc7efcf8c694136846f0b3af0b7984.png",
    "genre": "Indie",
    "releaseYear": "2017",
    "runtime": "38 min",
    "streams": "93.2M",
    "topTrack": "For the First Time"
  },
  {
    "artist": "Mac DeMarco",
    "album": "Salad Days",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/28ffd87a1e554022c0065398979894c4.png",
    "genre": "Indie",
    "releaseYear": "2014",
    "runtime": "35 min",
    "streams": "61.5M",
    "topTrack": "Chamber of Reflection"
  },
  {
    "artist": "Mac DeMarco",
    "album": "Here Comes the Cowboy",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2d0f45e9a45eb0473566db0afbbdff08.png",
    "genre": "Rock",
    "releaseYear": "2019",
    "runtime": "42 min",
    "streams": "37.9M",
    "topTrack": "Heart to Heart"
  },
  {
    "artist": "Mac DeMarco",
    "album": "Another One",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/af64653c641bcca98fd66f46a7da26d6.png",
    "genre": "Pop",
    "releaseYear": "Unknown",
    "runtime": "23 min",
    "streams": "27.7M",
    "topTrack": "No Other Heart"
  },
  {
    "artist": "Twenty One Pilots",
    "album": "Blurryface",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6f9906f43b7b516e89f9ebc331dd990a.png",
    "genre": "Pop",
    "releaseYear": "2015",
    "runtime": "54 min",
    "streams": "104.4M",
    "topTrack": "Stressed Out"
  },
  {
    "artist": "Twenty One Pilots",
    "album": "Heathens",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f654427f55499896095d4af3d3978b1a.png",
    "genre": "Electronic",
    "releaseYear": "2016",
    "runtime": "16 min",
    "streams": "11.3M",
    "topTrack": "Heathens (Standard Version)"
  },
  {
    "artist": "Twenty One Pilots",
    "album": "Vessel",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/417836606e807092b32cd14517508478.png",
    "genre": "Pop",
    "releaseYear": "2013",
    "runtime": "58 min",
    "streams": "53.9M",
    "topTrack": "Car Radio"
  },
  {
    "artist": "Twenty One Pilots",
    "album": "Trench",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9efc2181a3c5643cde2441c79451d1bc.png",
    "genre": "Pop",
    "releaseYear": "2018",
    "runtime": "55 min",
    "streams": "63.0M",
    "topTrack": "Chlorine"
  },
  {
    "artist": "Twenty One Pilots",
    "album": "Scaled and Icy",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/faa186fa9fd9acdb6387de77355207d4.png",
    "genre": "Rock",
    "releaseYear": "2021",
    "runtime": "43 min",
    "streams": "33.7M",
    "topTrack": "Shy Away"
  },
  {
    "artist": "sombr",
    "album": "I Barely Know Her",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d2dae57b56a88791e1b3d90639c436d6.png",
    "genre": "Rock",
    "releaseYear": "2025",
    "runtime": "35 min",
    "streams": "29.6M",
    "topTrack": "back to friends"
  },
  {
    "artist": "sombr",
    "album": "back to friends",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/afd68432bf916d1a6cab27c04b6c0e72.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "18.3M",
    "topTrack": "Unknown"
  },
  {
    "artist": "sombr",
    "album": "undressed",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4bdcaf21f330563252e32ec74ba0ee81.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "11.1M",
    "topTrack": "Unknown"
  },
  {
    "artist": "sombr",
    "album": "would've been you",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fb0096574e0f97ba5219c8e2ae93c00d.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "4.6M",
    "topTrack": "Unknown"
  },
  {
    "artist": "sombr",
    "album": "do i ever cross your mind",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/29eaeea1ae76200adbe95e7d88f20f74.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "4.1M",
    "topTrack": "Unknown"
  },
  {
    "artist": "The Cure",
    "album": "Greatest Hits",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/bdbc60c4bab8cf280166d31716bc0fc8.png",
    "genre": "Post-punk",
    "releaseYear": "2001",
    "runtime": "69 min",
    "streams": "32.1M",
    "topTrack": "Boys Don't Cry"
  },
  {
    "artist": "The Cure",
    "album": "Wish",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7e1f7cafa97e32a9fc549f5cf13061ae.png",
    "genre": "Post-punk",
    "releaseYear": "1992",
    "runtime": "66 min",
    "streams": "32.1M",
    "topTrack": "Friday I'm in Love"
  },
  {
    "artist": "The Cure",
    "album": "Three Imaginary Boys",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8a3c4f3610c1ed38d4b5fabddc37ed7b.png",
    "genre": "Post-punk",
    "releaseYear": "1979",
    "runtime": "21 min",
    "streams": "27.1M",
    "topTrack": "Fire in Cairo"
  },
  {
    "artist": "The Cure",
    "album": "Kiss Me, Kiss Me, Kiss Me",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0a5401fd4ef19dfc6f8583f108d7023b.png",
    "genre": "Post-punk",
    "releaseYear": "1987",
    "runtime": "65 min",
    "streams": "28.6M",
    "topTrack": "Just Like Heaven"
  },
  {
    "artist": "The Cure",
    "album": "Disintegration (Deluxe Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/429fd312f3d5cb652a9c9ec262495742.png",
    "genre": "Post-punk",
    "releaseYear": "1989",
    "runtime": "214 min",
    "streams": "29.6M",
    "topTrack": "Lullaby"
  },
  {
    "artist": "Lil Uzi Vert",
    "album": "Luv Is Rage 2",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/28b5dfed6d5b4023e8f14c2303960cb5.png",
    "genre": "Rap",
    "releaseYear": "2017",
    "runtime": "55 min",
    "streams": "69.5M",
    "topTrack": "XO TOUR Llif3"
  },
  {
    "artist": "Lil Uzi Vert",
    "album": "Luv Is Rage 2 (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/dd7df4864af8cf12a2f3b736c47c4315.png",
    "genre": "Rap",
    "releaseYear": "2017",
    "runtime": "69 min",
    "streams": "44.0M",
    "topTrack": "XO TOUR Llif3"
  },
  {
    "artist": "Lil Uzi Vert",
    "album": "Pink Tape",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/edd1245072335f224886b55242ee0fc2.png",
    "genre": "Rap",
    "releaseYear": "2023",
    "runtime": "86 min",
    "streams": "57.7M",
    "topTrack": "Just Wanna Rock"
  },
  {
    "artist": "Lil Uzi Vert",
    "album": "Eternal Atake",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/544aa5fe7908d216e17bf614c7e1ab27.png",
    "genre": "Rap",
    "releaseYear": "2018",
    "runtime": "62 min",
    "streams": "53.1M",
    "topTrack": "Homecoming"
  },
  {
    "artist": "Lil Uzi Vert",
    "album": "Lil Uzi Vert vs. the World",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/50f8bdf6b97cce0c9edd4a46f60079e8.png",
    "genre": "Hip-Hop",
    "releaseYear": "2016",
    "runtime": "33 min",
    "streams": "29.2M",
    "topTrack": "Money Longer"
  },
  {
    "artist": "Joji",
    "album": "BALLADS 1",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e6a34793a424eec94bde00c621caa70f.png",
    "genre": "R&B",
    "releaseYear": "2018",
    "runtime": "35 min",
    "streams": "100.0M",
    "topTrack": "SLOW DANCING IN THE DARK"
  },
  {
    "artist": "Joji",
    "album": "Nectar",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b74dc22e72de2839db17e7e04b41e8f8.png",
    "genre": "R&B",
    "releaseYear": "2018",
    "runtime": "47 min",
    "streams": "88.3M",
    "topTrack": "Sanctuary"
  },
  {
    "artist": "Joji",
    "album": "SMITHEREENS",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6f2784172913db6982b2f6de18b837f6.png",
    "genre": "Pop",
    "releaseYear": "2020",
    "runtime": "24 min",
    "streams": "57.6M",
    "topTrack": "Glimpse of Us"
  },
  {
    "artist": "Joji",
    "album": "In Tongues (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a4899eef2c2db70976ad017dedfae48e.png",
    "genre": "Soul",
    "releaseYear": "Unknown",
    "runtime": "52 min",
    "streams": "40.7M",
    "topTrack": "Worldstar Money (Interlude)"
  },
  {
    "artist": "Joji",
    "album": "Glimpse of Us",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d4fa44653857583f8fa2752bb872c3cf.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "20.6M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Red Hot Chili Peppers",
    "album": "Stadium Arcadium",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fb7d1a6c6e5240c48159d08b17ea022b.png",
    "genre": "Rock",
    "releaseYear": "2006",
    "runtime": "126 min",
    "streams": "80.5M",
    "topTrack": "Dani California"
  },
  {
    "artist": "Red Hot Chili Peppers",
    "album": "Californication",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1469e23c2f2b476b9ca68f87cb29bcd1.png",
    "genre": "Rock",
    "releaseYear": "1999",
    "runtime": "58 min",
    "streams": "60.1M",
    "topTrack": "Californication"
  },
  {
    "artist": "Red Hot Chili Peppers",
    "album": "Californication (Deluxe Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/45dfde4f63a50f3aedeee21f3e9ed033.png",
    "genre": "Rock",
    "releaseYear": "Unknown",
    "runtime": "66 min",
    "streams": "48.0M",
    "topTrack": "Californication"
  },
  {
    "artist": "Red Hot Chili Peppers",
    "album": "By the Way",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f95067353057a3c59fe6ba90469e56c6.png",
    "genre": "Rock",
    "releaseYear": "2002",
    "runtime": "71 min",
    "streams": "48.1M",
    "topTrack": "Can't Stop"
  },
  {
    "artist": "Red Hot Chili Peppers",
    "album": "By the Way (Deluxe Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7021709e21bbaf5f397f8ca16fa24b61.png",
    "genre": "Rock",
    "releaseYear": "2002",
    "runtime": "75 min",
    "streams": "36.0M",
    "topTrack": "Can't Stop"
  },
  {
    "artist": "Weezer",
    "album": "Weezer",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/82dea2ae26de9b443208cf21358c876f.png",
    "genre": "Rock",
    "releaseYear": "1994",
    "runtime": "42 min",
    "streams": "86.3M",
    "topTrack": "Buddy Holly"
  },
  {
    "artist": "Weezer",
    "album": "Pinkerton",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/cef1f1d0756184860c3c8f60d91aba64.png",
    "genre": "Rock",
    "releaseYear": "1996",
    "runtime": "36 min",
    "streams": "38.6M",
    "topTrack": "Pink Triangle"
  },
  {
    "artist": "Weezer",
    "album": "Make Believe",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1c8439b16ed4ca4e0bac727e7b325581.png",
    "genre": "Rock",
    "releaseYear": "2005",
    "runtime": "50 min",
    "streams": "17.5M",
    "topTrack": "Beverly Hills"
  },
  {
    "artist": "Weezer",
    "album": "Weezer (Green Album)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/55f7ca70a9644479fa9dace6590094c8.png",
    "genre": "Rock",
    "releaseYear": "2001",
    "runtime": "28 min",
    "streams": "13.0M",
    "topTrack": "Island in the Sun"
  },
  {
    "artist": "Weezer",
    "album": "Pinkerton - Deluxe Edition",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9384769ea3aea1889c546cdf9ed32ebb.png",
    "genre": "Rock",
    "releaseYear": "2010",
    "runtime": "129 min",
    "streams": "22.8M",
    "topTrack": "Pink Triangle"
  },
  {
    "artist": "Zara Larsson",
    "album": "So Good",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/89ef50ca1a02e7d397b4b30fe742eeb5.png",
    "genre": "Pop",
    "releaseYear": "2017",
    "runtime": "50 min",
    "streams": "25.5M",
    "topTrack": "Lush Life"
  },
  {
    "artist": "Zara Larsson",
    "album": "Midnight Sun",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d0c78dc3a80e2e45ac4972089360a051.png",
    "genre": "Pop",
    "releaseYear": "2025",
    "runtime": "Unknown",
    "streams": "27.3M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Zara Larsson",
    "album": "Poster Girl",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/96a9274db2022f46a53343a2a86eeac2.png",
    "genre": "Pop",
    "releaseYear": "2021",
    "runtime": "37 min",
    "streams": "5.7M",
    "topTrack": "Ruin My Life"
  },
  {
    "artist": "Zara Larsson",
    "album": "Lush Life",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/164dc5b7d0ff1e042751667ac0143709.png",
    "genre": "Pop",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "2.2M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Zara Larsson",
    "album": "Midnight Sun: Girls Trip",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/dd15c27db9ccb3d45efcbf13c982ff70.png",
    "genre": "Pop",
    "releaseYear": "2026",
    "runtime": "31 min",
    "streams": "3.6M",
    "topTrack": "Midnight Sun"
  },
  {
    "artist": "Kali Uchis",
    "album": "Isolation",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/bf56b9acc7cdf77704bd0a9dbb602c65.png",
    "genre": "Neo-soul",
    "releaseYear": "2018",
    "runtime": "46 min",
    "streams": "85.9M",
    "topTrack": "Dead to Me"
  },
  {
    "artist": "Kali Uchis",
    "album": "Sin Miedo (del Amor y Otros Demonios) ∞",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a2aa0354e06545fb4736694ee8639b89.png",
    "genre": "R&B",
    "releaseYear": "2020",
    "runtime": "21 min",
    "streams": "47.1M",
    "topTrack": "telepatía"
  },
  {
    "artist": "Kali Uchis",
    "album": "Red Moon in Venus",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6044a8163acfc5cb5f7fd68501e54e11.png",
    "genre": "R&B",
    "releaseYear": "2023",
    "runtime": "43 min",
    "streams": "55.0M",
    "topTrack": "Moonlight"
  },
  {
    "artist": "Kali Uchis",
    "album": "Por Vida",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/592d449dac3e89946a1ab926d91c2bfc.png",
    "genre": "Soul",
    "releaseYear": "2015",
    "runtime": "32 min",
    "streams": "25.7M",
    "topTrack": "Melting"
  },
  {
    "artist": "Kali Uchis",
    "album": "Moonlight",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fcf227f75c491a6c4824d2f872040ac2.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "7.5M",
    "topTrack": "Unknown"
  },
  {
    "artist": "My Chemical Romance",
    "album": "The Black Parade",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7675defb2787ce67cd030081eb8ff77c.png",
    "genre": "Rock",
    "releaseYear": "2006",
    "runtime": "50 min",
    "streams": "179.0M",
    "topTrack": "Teenagers"
  },
  {
    "artist": "My Chemical Romance",
    "album": "Three Cheers for Sweet Revenge",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/09cb27a9f908354fd210a07830951791.png",
    "genre": "Rock",
    "releaseYear": "2004",
    "runtime": "39 min",
    "streams": "159.9M",
    "topTrack": "I'm Not Okay (I Promise)"
  },
  {
    "artist": "My Chemical Romance",
    "album": "Danger Days: The True Lives of the Fabulous Killjoys",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5d859232fed7488a82d37ecabb232fce.png",
    "genre": "Rock",
    "releaseYear": "2010",
    "runtime": "54 min",
    "streams": "54.6M",
    "topTrack": "Na Na Na (Na Na Na Na Na Na Na Na Na)"
  },
  {
    "artist": "My Chemical Romance",
    "album": "I Brought You My Bullets, You Brought Me Your Love",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ac347cf3cda7e91e0d837220f6bb63ea.png",
    "genre": "Rock",
    "releaseYear": "2002",
    "runtime": "41 min",
    "streams": "52.1M",
    "topTrack": "Demolition Lovers"
  },
  {
    "artist": "My Chemical Romance",
    "album": "May Death Never Stop You",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1130c37a9ee5d059956ce01b4ac9003f.png",
    "genre": "Rock",
    "releaseYear": "2001",
    "runtime": "72 min",
    "streams": "6.5M",
    "topTrack": "Teenagers"
  },
  {
    "artist": "Queen",
    "album": "Greatest Hits",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/03beaee047a99a75c8347461094c2344.png",
    "genre": "Rock",
    "releaseYear": "1981",
    "runtime": "56 min",
    "streams": "23.3M",
    "topTrack": "Bohemian Rhapsody"
  },
  {
    "artist": "Queen",
    "album": "A Night At The Opera (2011 Remaster)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5bef877b7563e13a4218da382b86fe7a.png",
    "genre": "Rock",
    "releaseYear": "Unknown",
    "runtime": "43 min",
    "streams": "14.7M",
    "topTrack": "Bohemian Rhapsody - Remastered 2011"
  },
  {
    "artist": "Queen",
    "album": "Jazz (2011 Remaster)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d9645ba9592445b1c5c35e1990c6964f.png",
    "genre": "Rock",
    "releaseYear": "Unknown",
    "runtime": "44 min",
    "streams": "14.2M",
    "topTrack": "Don't Stop Me Now - Remastered 2011"
  },
  {
    "artist": "Queen",
    "album": "The Game (2011 Remaster)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5a23956df65d9581338e0e71db00d79a.png",
    "genre": "Rock",
    "releaseYear": "Unknown",
    "runtime": "35 min",
    "streams": "14.1M",
    "topTrack": "Another One Bites The Dust - Remastered 2011"
  },
  {
    "artist": "Queen",
    "album": "Hot Space (2011 Remaster)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/de361a68c39e4468c4df73fb3c8ae178.png",
    "genre": "Rock",
    "releaseYear": "1982",
    "runtime": "43 min",
    "streams": "12.0M",
    "topTrack": "Under Pressure - Remastered 2011"
  },
  {
    "artist": "Laufey",
    "album": "Bewitched",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/94994638b4305d100e95026e361c1722.png",
    "genre": "Vocal Jazz",
    "releaseYear": "Unknown",
    "runtime": "52 min",
    "streams": "71.4M",
    "topTrack": "From the Start"
  },
  {
    "artist": "Laufey",
    "album": "Everything I Know About Love",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/bc4202b19c488be8ca759874faa8548a.png",
    "genre": "Vocal Jazz",
    "releaseYear": "2022",
    "runtime": "Unknown",
    "streams": "58.7M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Laufey",
    "album": "Let You Break My Heart Again",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/009cec63bf05aeeee701e217c062de80.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "13.9M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Laufey",
    "album": "A Matter of Time",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5272edc699288dc9495a9e46fded7616.png",
    "genre": "Jazz",
    "releaseYear": "2025",
    "runtime": "45 min",
    "streams": "23.7M",
    "topTrack": "Lover Girl"
  },
  {
    "artist": "Laufey",
    "album": "From the Start",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a73c131e817873587fc4a8c2d5cd324a.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "9.8M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Daniel Caesar",
    "album": "Freudian",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1c892b22c3a14addc25f13a0abb5f1fe.png",
    "genre": "R&B",
    "releaseYear": "2017",
    "runtime": "44 min",
    "streams": "84.0M",
    "topTrack": "Get You (feat. Kali Uchis)"
  },
  {
    "artist": "Daniel Caesar",
    "album": "NEVER ENOUGH",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/19102a409a0fbcb571788e0c4b9067b1.png",
    "genre": "R&B",
    "releaseYear": "2023",
    "runtime": "56 min",
    "streams": "55.1M",
    "topTrack": "Superpowers"
  },
  {
    "artist": "Daniel Caesar",
    "album": "Get You - Single",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/18fb970a13c890f6342e5deda78c3b16.png",
    "genre": "R&B",
    "releaseYear": "Unknown",
    "runtime": "9 min",
    "streams": "17.7M",
    "topTrack": "Get You (feat. Kali Uchis)"
  },
  {
    "artist": "Daniel Caesar",
    "album": "CASE STUDY 01",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f4c1af13e288af5f42a9064a23674b4f.png",
    "genre": "Soul",
    "releaseYear": "2019",
    "runtime": "42 min",
    "streams": "27.6M",
    "topTrack": "CYANIDE"
  },
  {
    "artist": "Daniel Caesar",
    "album": "Son of Spergy",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f247dd6550aa64165d070ff86837685a.png",
    "genre": "R&B",
    "releaseYear": "2025",
    "runtime": "Unknown",
    "streams": "17.7M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Green Day",
    "album": "American Idiot",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5bcb675866706c229ad9f77188b8ac44.png",
    "genre": "Rock",
    "releaseYear": "2004",
    "runtime": "Unknown",
    "streams": "83.3M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Green Day",
    "album": "Dookie",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2248e72411992639ffa8ab94ba97a631.png",
    "genre": "Rock",
    "releaseYear": "1994",
    "runtime": "39 min",
    "streams": "71.8M",
    "topTrack": "Basket Case"
  },
  {
    "artist": "Green Day",
    "album": "Nimrod",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/cc7bcc37cf9f88e4700dfb9500d1b241.png",
    "genre": "Rock",
    "releaseYear": "1997",
    "runtime": "62 min",
    "streams": "33.8M",
    "topTrack": "Good Riddance (Time of Your Life)"
  },
  {
    "artist": "Green Day",
    "album": "21st Century Breakdown",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/72a314e1e9064a0418159b144fe1ad72.png",
    "genre": "Rock",
    "releaseYear": "2009",
    "runtime": "61 min",
    "streams": "50.0M",
    "topTrack": "21 Guns"
  },
  {
    "artist": "Green Day",
    "album": "Insomniac",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1a2cd1a286cc134cc531b23d727d66cf.png",
    "genre": "Rock",
    "releaseYear": "1995",
    "runtime": "36 min",
    "streams": "24.8M",
    "topTrack": "Brain Stew"
  },
  {
    "artist": "Black Eyed Peas",
    "album": "Monkey Business",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/496f388a6bd2fbe8587915943b4fd0c8.png",
    "genre": "Hip-Hop",
    "releaseYear": "2005",
    "runtime": "66 min",
    "streams": "27.1M",
    "topTrack": "Pump It"
  },
  {
    "artist": "Black Eyed Peas",
    "album": "Elephunk",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/16fcf158616c98161f59d831afd24d22.png",
    "genre": "Hip-Hop",
    "releaseYear": "2003",
    "runtime": "58 min",
    "streams": "17.3M",
    "topTrack": "Shut Up"
  },
  {
    "artist": "Black Eyed Peas",
    "album": "The E.N.D. (The Energy Never Dies)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c1c93f40047046c1bce56e8fad76f3e1.png",
    "genre": "Dance",
    "releaseYear": "2009",
    "runtime": "65 min",
    "streams": "20.1M",
    "topTrack": "I Gotta Feeling"
  },
  {
    "artist": "Black Eyed Peas",
    "album": "The E.N.D. (The Energy Never Dies) [Deluxe Version]",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/574bb33a1cebb9fa7a3fc28f34450de5.png",
    "genre": "Black Eyed Peas",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "20.0M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Black Eyed Peas",
    "album": "The Beginning",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/97ecdb5bc71f48ba82e381c67e7c1c86.png",
    "genre": "Dance",
    "releaseYear": "2010",
    "runtime": "52 min",
    "streams": "9.6M",
    "topTrack": "The Time (Dirty Bit)"
  },
  {
    "artist": "LE SSERAFIM",
    "album": "UNFORGIVEN",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/97539440d0f639d7b970cc26b6df75c5.png",
    "genre": "Pop",
    "releaseYear": "2023",
    "runtime": "37 min",
    "streams": "58.0M",
    "topTrack": "ANTIFRAGILE"
  },
  {
    "artist": "LE SSERAFIM",
    "album": "FEARLESS",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d930ba65bb061c4c8a7849e3704216cd.png",
    "genre": "Pop",
    "releaseYear": "2022",
    "runtime": "14 min",
    "streams": "38.2M",
    "topTrack": "Sour Grapes"
  },
  {
    "artist": "LE SSERAFIM",
    "album": "CRAZY (Party Remixes 1)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/cf981c4b01f094f747dde4f3f35fc22c.png",
    "genre": "Pop",
    "releaseYear": "Unknown",
    "runtime": "21 min",
    "streams": "10.4M",
    "topTrack": "CRAZY"
  },
  {
    "artist": "LE SSERAFIM",
    "album": "Perfect Night",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/59684aef6f2df6266b84a06269ff0855.png",
    "genre": "English",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "18.1M",
    "topTrack": "Unknown"
  },
  {
    "artist": "LE SSERAFIM",
    "album": "ANTIFRAGILE",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/47403415f97336603c88ea4c1062d4b1.png",
    "genre": "Pop",
    "releaseYear": "2022",
    "runtime": "13 min",
    "streams": "36.2M",
    "topTrack": "ANTIFRAGILE"
  },
  {
    "artist": "Post Malone",
    "album": "Hollywood's Bleeding",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/53f65efa74120514ef6c94d1fa30580d.png",
    "genre": "Pop",
    "releaseYear": "2019",
    "runtime": "50 min",
    "streams": "86.2M",
    "topTrack": "Circles"
  },
  {
    "artist": "Post Malone",
    "album": "beerbongs & bentleys",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d9a790b6c8526a4c8cb9862c64bc3342.png",
    "genre": "Rap",
    "releaseYear": "2018",
    "runtime": "53 min",
    "streams": "70.4M",
    "topTrack": "Better Now"
  },
  {
    "artist": "Post Malone",
    "album": "Stoney (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/77a5b763b18898ff78a68406029de753.png",
    "genre": "Rap",
    "releaseYear": "2016",
    "runtime": "62 min",
    "streams": "50.2M",
    "topTrack": "Congratulations"
  },
  {
    "artist": "Post Malone",
    "album": "Twelve Carat Toothache",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d897b8b9afe75c015ae753ff914f9021.png",
    "genre": "Hip-Hop",
    "releaseYear": "2022",
    "runtime": "38 min",
    "streams": "22.0M",
    "topTrack": "I Like You (A Happier Song) (with Doja Cat)"
  },
  {
    "artist": "Post Malone",
    "album": "One Right Now",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ba3caa637eaae7e13a2fd6977ac54dbe.png",
    "genre": "Rap",
    "releaseYear": "2021",
    "runtime": "Unknown",
    "streams": "4.4M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Justin Timberlake",
    "album": "FutureSex/LoveSounds",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e80e729a9cdcc98ddd7d1a3052142c37.png",
    "genre": "Pop",
    "releaseYear": "2006",
    "runtime": "66 min",
    "streams": "37.9M",
    "topTrack": "SexyBack"
  },
  {
    "artist": "Justin Timberlake",
    "album": "Justified",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/89f49f994f808748e042177e73264256.png",
    "genre": "Pop",
    "releaseYear": "2004",
    "runtime": "62 min",
    "streams": "34.7M",
    "topTrack": "Rock Your Body"
  },
  {
    "artist": "Justin Timberlake",
    "album": "The 20/20 Experience (Deluxe Version)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1de1b815025e2ceadfad8736d89047c7.png",
    "genre": "Pop",
    "releaseYear": "2013",
    "runtime": "75 min",
    "streams": "17.5M",
    "topTrack": "Mirrors"
  },
  {
    "artist": "Justin Timberlake",
    "album": "FutureSex/LoveSounds Deluxe Edition",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1a8e7749f42573aff74093e8d82feac7.png",
    "genre": "Justin",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "10.1M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Justin Timberlake",
    "album": "Can't Stop The Feeling! (From DreamWorks Animation's \"Trolls\")",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6485b56ebb06b63b11aaa205cb757c43.png",
    "genre": "Pop",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "1.8M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Panic! at the Disco",
    "album": "A Fever You Can't Sweat Out",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/249a926fbef4487eb39bbb93d4a0618d.png",
    "genre": "Alternative",
    "releaseYear": "2005",
    "runtime": "39 min",
    "streams": "111.2M",
    "topTrack": "I Write Sins Not Tragedies"
  },
  {
    "artist": "Panic! at the Disco",
    "album": "Death of a Bachelor",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/257fe11067041f5b10e758f64afb601e.png",
    "genre": "Alternative",
    "releaseYear": "2016",
    "runtime": "36 min",
    "streams": "44.7M",
    "topTrack": "House of Memories"
  },
  {
    "artist": "Panic! at the Disco",
    "album": "Pray for the Wicked",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/15d962ee89b1690b3ad3abc9f558d4dd.png",
    "genre": "Alternative",
    "releaseYear": "2018",
    "runtime": "34 min",
    "streams": "23.5M",
    "topTrack": "High Hopes"
  },
  {
    "artist": "Panic! at the Disco",
    "album": "Vices & Virtues",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/816c5f1db2824db09d530471f8450f81.png",
    "genre": "Rock",
    "releaseYear": "2011",
    "runtime": "37 min",
    "streams": "28.6M",
    "topTrack": "The Ballad of Mona Lisa"
  },
  {
    "artist": "Panic! at the Disco",
    "album": "Too Weird to Live, Too Rare to Die!",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a4774f5ef1874ef59f90a44d562c8e0d.png",
    "genre": "Alternative",
    "releaseYear": "2013",
    "runtime": "32 min",
    "streams": "26.2M",
    "topTrack": "This Is Gospel"
  },
  {
    "artist": "Eminem",
    "album": "The Eminem Show",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/74768435b4f70689863aa76f888d62a3.png",
    "genre": "Rap",
    "releaseYear": "2002",
    "runtime": "77 min",
    "streams": "83.5M",
    "topTrack": "Without Me"
  },
  {
    "artist": "Eminem",
    "album": "Recovery",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ee16dc01c93643b288b60e9806c1e68b.png",
    "genre": "Rap",
    "releaseYear": "2010",
    "runtime": "66 min",
    "streams": "56.3M",
    "topTrack": "Love the Way You Lie"
  },
  {
    "artist": "Eminem",
    "album": "The Marshall Mathers LP",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a38c6a72117f413ec11534c214947b13.png",
    "genre": "Rap",
    "releaseYear": "2000",
    "runtime": "71 min",
    "streams": "55.7M",
    "topTrack": "The Real Slim Shady"
  },
  {
    "artist": "Eminem",
    "album": "The Slim Shady LP",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6b71796a5a734c2f97a0daddd12115fe.png",
    "genre": "Rap",
    "releaseYear": "1999",
    "runtime": "59 min",
    "streams": "26.1M",
    "topTrack": "My Name Is"
  },
  {
    "artist": "Eminem",
    "album": "Encore (Deluxe Version)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4fe6090ec6d37e0818ea216945062dbe.png",
    "genre": "Rap",
    "releaseYear": "2004",
    "runtime": "58 min",
    "streams": "18.8M",
    "topTrack": "Mockingbird"
  },
  {
    "artist": "Sade",
    "album": "The Best of Sade",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3e9f44a18466985b01748600ee4892a3.png",
    "genre": "Soul",
    "releaseYear": "1994",
    "runtime": "76 min",
    "streams": "42.9M",
    "topTrack": "Smooth Operator - Single Version"
  },
  {
    "artist": "Sade",
    "album": "Love Deluxe",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2fe564884d6a90885da819ed1ca631ce.png",
    "genre": "Soul",
    "releaseYear": "1992",
    "runtime": "45 min",
    "streams": "35.9M",
    "topTrack": "Kiss Of Life"
  },
  {
    "artist": "Sade",
    "album": "Lovers Rock",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/508fc788b188fafdf71ef1da9f10a48f.png",
    "genre": "Soul",
    "releaseYear": "2000",
    "runtime": "36 min",
    "streams": "13.2M",
    "topTrack": "By Your Side"
  },
  {
    "artist": "Sade",
    "album": "Promise",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/29ce2666eebe380a0f882755aab75798.png",
    "genre": "Soul",
    "releaseYear": "1985",
    "runtime": "42 min",
    "streams": "12.5M",
    "topTrack": "Is It a Crime"
  },
  {
    "artist": "Sade",
    "album": "Diamond Life",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d7cfcccb2d3964a66f43584f11c2e30d.png",
    "genre": "Soul",
    "releaseYear": "1984",
    "runtime": "44 min",
    "streams": "10.2M",
    "topTrack": "Your Love Is King"
  },
  {
    "artist": "Cigarettes After Sex",
    "album": "Cigarettes After Sex",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5d53d7e6aad2f08c464e301d3bab6e96.png",
    "genre": "Pop",
    "releaseYear": "2017",
    "runtime": "47 min",
    "streams": "148.4M",
    "topTrack": "Apocalypse"
  },
  {
    "artist": "Cigarettes After Sex",
    "album": "Cry",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7f3eebc25ed0d0560adeb5c4d40007f9.png",
    "genre": "Pop",
    "releaseYear": "2019",
    "runtime": "35 min",
    "streams": "73.7M",
    "topTrack": "Cry"
  },
  {
    "artist": "Cigarettes After Sex",
    "album": "I.",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9be0fce12d245f3f011961ab2179e95e.png",
    "genre": "Pop",
    "releaseYear": "2012",
    "runtime": "18 min",
    "streams": "20.5M",
    "topTrack": "Nothing's Gonna Hurt You Baby"
  },
  {
    "artist": "Cigarettes After Sex",
    "album": "Crush",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4aaf017819232160dc10cbe516f9bf5e.png",
    "genre": "Pop",
    "releaseYear": "Unknown",
    "runtime": "9 min",
    "streams": "10.4M",
    "topTrack": "Crush"
  },
  {
    "artist": "Cigarettes After Sex",
    "album": "You're All I Want",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/96fce9b1681f9ddc0db9b553b44368f6.png",
    "genre": "Pop",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "6.8M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Daft Punk",
    "album": "Discovery",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1340e9e1082cf0dc748583b7eefce6d5.png",
    "genre": "Electronic",
    "releaseYear": "2001",
    "runtime": "51 min",
    "streams": "122.9M",
    "topTrack": "One More Time"
  },
  {
    "artist": "Daft Punk",
    "album": "Random Access Memories",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/11dd7e48a1f042c688bf54985f01d088.png",
    "genre": "Electronic",
    "releaseYear": "2013",
    "runtime": "63 min",
    "streams": "84.5M",
    "topTrack": "Instant Crush (feat. Julian Casablancas)"
  },
  {
    "artist": "Daft Punk",
    "album": "Homework",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/38d4bac63b904e789e96e48e2c66098a.png",
    "genre": "Electronic",
    "releaseYear": "1997",
    "runtime": "63 min",
    "streams": "33.7M",
    "topTrack": "Around the World"
  },
  {
    "artist": "Daft Punk",
    "album": "Human After All",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1df40a76f68b4d0a8410a0bae2127359.png",
    "genre": "Electronic",
    "releaseYear": "2005",
    "runtime": "43 min",
    "streams": "22.4M",
    "topTrack": "Technologic"
  },
  {
    "artist": "Daft Punk",
    "album": "TRON: Legacy",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/598a910ff59e4fbca6a54307e5fee8fc.png",
    "genre": "Electronic",
    "releaseYear": "2010",
    "runtime": "58 min",
    "streams": "23.4M",
    "topTrack": "Derezzed"
  },
  {
    "artist": "System of a Down",
    "album": "Toxicity",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/faa79372c53139010902e67938ccf78e.png",
    "genre": "Alternative",
    "releaseYear": "2001",
    "runtime": "9 min",
    "streams": "166.1M",
    "topTrack": "Toxicity"
  },
  {
    "artist": "System of a Down",
    "album": "Hypnotize",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a96a0ff1cd9b384659b7edac19dc15b6.png",
    "genre": "Alternative",
    "releaseYear": "2005",
    "runtime": "40 min",
    "streams": "81.9M",
    "topTrack": "Lonely Day"
  },
  {
    "artist": "System of a Down",
    "album": "Mezmerize",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6af731c307585bb1e496f80f7dbad566.png",
    "genre": "Alternative",
    "releaseYear": "2005",
    "runtime": "36 min",
    "streams": "84.1M",
    "topTrack": "B.Y.O.B."
  },
  {
    "artist": "System of a Down",
    "album": "System of a Down",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/bce9493d4f2f8b54382bba2c23268005.png",
    "genre": "Alternative",
    "releaseYear": "1998",
    "runtime": "32 min",
    "streams": "52.8M",
    "topTrack": "Sugar"
  },
  {
    "artist": "System of a Down",
    "album": "Steal This Album!",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/303fd758c06840a876e090ccc46f5c2e.png",
    "genre": "Alternative",
    "releaseYear": "2002",
    "runtime": "43 min",
    "streams": "55.1M",
    "topTrack": "Innervision"
  },
  {
    "artist": "The Killers",
    "album": "Hot Fuss",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fae9c99bbb6ae827b508a97328551912.png",
    "genre": "Rock",
    "releaseYear": "2004",
    "runtime": "45 min",
    "streams": "137.0M",
    "topTrack": "Mr. Brightside"
  },
  {
    "artist": "The Killers",
    "album": "Sam's Town",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a7645386e75e465b9a9b5335bc9115ba.png",
    "genre": "Rock",
    "releaseYear": "2006",
    "runtime": "44 min",
    "streams": "70.6M",
    "topTrack": "When You Were Young"
  },
  {
    "artist": "The Killers",
    "album": "Day & Age",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e68669788bdf8e102229b14ab3b64f15.png",
    "genre": "Indie",
    "releaseYear": "2008",
    "runtime": "43 min",
    "streams": "33.6M",
    "topTrack": "Human"
  },
  {
    "artist": "The Killers",
    "album": "Sawdust",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/540b3ba392c599ecdc848cb80f2edd5a.png",
    "genre": "Rock",
    "releaseYear": "2007",
    "runtime": "82 min",
    "streams": "25.0M",
    "topTrack": "Shadowplay"
  },
  {
    "artist": "The Killers",
    "album": "Day & Age (Bonus Tracks)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b69b10b8e67de31021e66d3556f4cbf2.png",
    "genre": "Rock",
    "releaseYear": "Unknown",
    "runtime": "46 min",
    "streams": "6.1M",
    "topTrack": "Human"
  },
  {
    "artist": "J. Cole",
    "album": "2014 Forest Hills Drive",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1e35fab5d284a3e5b7b54596227f2c2e.png",
    "genre": "Hip-Hop",
    "releaseYear": "2014",
    "runtime": "53 min",
    "streams": "79.4M",
    "topTrack": "No Role Modelz"
  },
  {
    "artist": "J. Cole",
    "album": "Cole World: The Sideline Story",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0e16b68c3a464068adf15d6d4ce5be9d.png",
    "genre": "Hip-Hop",
    "releaseYear": "2009",
    "runtime": "57 min",
    "streams": "26.2M",
    "topTrack": "Work Out"
  },
  {
    "artist": "J. Cole",
    "album": "Born Sinner (Deluxe Version)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5de1881985334258853f628825d1310e.png",
    "genre": "Hip-Hop",
    "releaseYear": "Unknown",
    "runtime": "54 min",
    "streams": "28.1M",
    "topTrack": "She Knows (feat. Amber Coffman & Cults)"
  },
  {
    "artist": "J. Cole",
    "album": "The Off-Season",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5d3c2db3f3d2858932ef0a77b9d15dcb.png",
    "genre": "Rap",
    "releaseYear": "2021",
    "runtime": "36 min",
    "streams": "42.8M",
    "topTrack": "a m a r i"
  },
  {
    "artist": "J. Cole",
    "album": "4 Your Eyez Only",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/01a34a66db612b2a0bf049525c325654.png",
    "genre": "Hip-Hop",
    "releaseYear": "2016",
    "runtime": "44 min",
    "streams": "32.2M",
    "topTrack": "Neighbors"
  },
  {
    "artist": "Tate McRae",
    "album": "greedy",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ff9e4b944f7abd725ec3ad3c3d572f3c.png",
    "genre": "Think Later",
    "releaseYear": "2023",
    "runtime": "Unknown",
    "streams": "21.2M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Tate McRae",
    "album": "So Close to What",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2c927d26b092260dee2e79d4864c1de7.png",
    "genre": "Pop",
    "releaseYear": "2025",
    "runtime": "36 min",
    "streams": "90.5M",
    "topTrack": "Sports car"
  },
  {
    "artist": "Tate McRae",
    "album": "THINK LATER",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d5c9a69fcda54143308997e32981c139.png",
    "genre": "Pop",
    "releaseYear": "2023",
    "runtime": "38 min",
    "streams": "55.5M",
    "topTrack": "greedy"
  },
  {
    "artist": "Tate McRae",
    "album": "Just Keep Watching (From F1® The Movie)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c3ed5bac4c4c523f4ee28e6318ce24d7.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "10.4M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Tate McRae",
    "album": "i used to think i could fly",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c02c128a3d62e8607614dc4f5ab990ae.png",
    "genre": "Pop",
    "releaseYear": "2022",
    "runtime": "24 min",
    "streams": "19.3M",
    "topTrack": "she's all i wanna be"
  },
  {
    "artist": "Addison Rae",
    "album": "Addison",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ad9e0bcc76824a8327dd4ed57d20dd5b.png",
    "genre": "Pop",
    "releaseYear": "2025",
    "runtime": "34 min",
    "streams": "72.5M",
    "topTrack": "Diet Pepsi"
  },
  {
    "artist": "Addison Rae",
    "album": "Diet Pepsi",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/409c8ccccfa05601c8645b1f9cd3e9c4.png",
    "genre": "Pop",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "15.1M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Addison Rae",
    "album": "AR",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c6ae145428bde533606e5cf89912c0fd.png",
    "genre": "Pop",
    "releaseYear": "2023",
    "runtime": "7 min",
    "streams": "9.8M",
    "topTrack": "2 die 4 (feat. Charli XCX)"
  },
  {
    "artist": "Addison Rae",
    "album": "Headphones On",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/cd95fb540a0655b1755c068644d02e4e.png",
    "genre": "Pop",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "4.9M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Addison Rae",
    "album": "Fame Is a Gun",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d76e544b4e5eaa1e8823f14ed60cda45.png",
    "genre": "Pop",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "4.9M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Dua Lipa",
    "album": "Future Nostalgia",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7017c94ef74a476838e751b0cee1f014.png",
    "genre": "Pop",
    "releaseYear": "2020",
    "runtime": "43 min",
    "streams": "105.8M",
    "topTrack": "Don't Start Now"
  },
  {
    "artist": "Dua Lipa",
    "album": "Dua Lipa (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7c964930c1ba17fe12e919e047532491.png",
    "genre": "Pop",
    "releaseYear": "2017",
    "runtime": "65 min",
    "streams": "37.8M",
    "topTrack": "New Rules"
  },
  {
    "artist": "Dua Lipa",
    "album": "Dance the Night (From Barbie the Album)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/efdede2a94a0b7887d0041aa72177c6f.png",
    "genre": "Pop",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "11.3M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Dua Lipa",
    "album": "Radical Optimism",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/787b99ed519694d755514a27a5ce3735.png",
    "genre": "Pop",
    "releaseYear": "2024",
    "runtime": "44 min",
    "streams": "41.2M",
    "topTrack": "Houdini"
  },
  {
    "artist": "Dua Lipa",
    "album": "Dua Lipa (Complete Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/38406b13a38d14fde551f7a2f124fa04.png",
    "genre": "Pop",
    "releaseYear": "Unknown",
    "runtime": "95 min",
    "streams": "19.2M",
    "topTrack": "New Rules"
  },
  {
    "artist": "Kesha",
    "album": "Animal",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/24546ab04aeb584825f465d8968301c4.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "4.0M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Kesha",
    "album": "TiK ToK",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ac1c39971d1abe30df72f4076ee9f6d4.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "512.1K",
    "topTrack": "Unknown"
  },
  {
    "artist": "Kesha",
    "album": "Cannibal",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/52e18c5887c1c6c9eecb878dd6854160.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "2.1M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Kesha",
    "album": "Warrior (Deluxe Version)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ede5453783f7de83cffe2397a1157bbd.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "2.0M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Kesha",
    "album": "Die Young",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/085cfbba497bc89f456610e5f8651991.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "121.6K",
    "topTrack": "Unknown"
  },
  {
    "artist": "Olivia Dean",
    "album": "The Art of Loving",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e9aedce534c4c0cf22f18483bed6620e.png",
    "genre": "Pop",
    "releaseYear": "2025",
    "runtime": "30 min",
    "streams": "37.9M",
    "topTrack": "So Easy (To Fall In Love)"
  },
  {
    "artist": "Olivia Dean",
    "album": "Man I Need",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6e55edaaed5134db13090ecfec74a043.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "8.6M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Olivia Dean",
    "album": "Messy",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/46cddabe5aa8bf30fc591e12ed36bd98.png",
    "genre": "2023",
    "releaseYear": "Unknown",
    "runtime": "36 min",
    "streams": "13.5M",
    "topTrack": "Dive"
  },
  {
    "artist": "Olivia Dean",
    "album": "Nice To Each Other",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f56dfa3569b3164d048fd8341c8b422d.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "5.1M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Olivia Dean",
    "album": "Ok Love You Bye",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6cbd8cdd398089e1a8435d612784f3c4.png",
    "genre": "Pop",
    "releaseYear": "Unknown",
    "runtime": "12 min",
    "streams": "4.0M",
    "topTrack": "Ok Love You Bye"
  },
  {
    "artist": "Pitbull",
    "album": "Planet Pit (Deluxe Version)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/207df6b9a5d67bffdd5cf454be4d6ebd.png",
    "genre": "Dance",
    "releaseYear": "2011",
    "runtime": "56 min",
    "streams": "26.6M",
    "topTrack": "Give Me Everything"
  },
  {
    "artist": "Pitbull",
    "album": "Global Warming: Meltdown (Deluxe Version)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0bb5e59856964ea9ce3edd20bdb201d5.png",
    "genre": "Dance",
    "releaseYear": "Unknown",
    "runtime": "54 min",
    "streams": "16.1M",
    "topTrack": "Feel This Moment (feat. Christina Aguilera)"
  },
  {
    "artist": "Pitbull",
    "album": "Globalization",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9e5dfc556d4a44fcc4967721f258e8ea.png",
    "genre": "Pop",
    "releaseYear": "2014",
    "runtime": "38 min",
    "streams": "17.2M",
    "topTrack": "Time of Our Lives"
  },
  {
    "artist": "Pitbull",
    "album": "Pitbull Starring In Rebelution",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/36fe39b06a53bdc9967e5d8a6d1b0caf.png",
    "genre": "Dance",
    "releaseYear": "2009",
    "runtime": "46 min",
    "streams": "9.6M",
    "topTrack": "Hotel Room Service"
  },
  {
    "artist": "Pitbull",
    "album": "Rebelution",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/645421ed138ab5fc45b717614b6b4dd3.png",
    "genre": "Dance",
    "releaseYear": "Unknown",
    "runtime": "46 min",
    "streams": "3.1M",
    "topTrack": "Hotel Room Service"
  },
  {
    "artist": "Hozier",
    "album": "Hozier",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e7c6566aab7f8c89bc79b581030cb70f.png",
    "genre": "Soul",
    "releaseYear": "2014",
    "runtime": "53 min",
    "streams": "57.0M",
    "topTrack": "Take Me to Church"
  },
  {
    "artist": "Hozier",
    "album": "Hozier (Expanded Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/edc416f16adf29c3097deade4acf8390.png",
    "genre": "Folk",
    "releaseYear": "2014",
    "runtime": "63 min",
    "streams": "47.5M",
    "topTrack": "Take Me to Church"
  },
  {
    "artist": "Hozier",
    "album": "Wasteland, Baby!",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fad5cb49ef8ed3da329c08bd11d33e77.png",
    "genre": "Soul",
    "releaseYear": "2019",
    "runtime": "57 min",
    "streams": "51.2M",
    "topTrack": "Would That I"
  },
  {
    "artist": "Hozier",
    "album": "Hozier (Special Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/294236673237889ba97fcf54fd0bdc05.png",
    "genre": "Soul",
    "releaseYear": "Unknown",
    "runtime": "107 min",
    "streams": "16.7M",
    "topTrack": "Take Me to Church"
  },
  {
    "artist": "Hozier",
    "album": "Unreal Unearth: Unaired",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ef74654fa53d8824e86ae07207876604.png",
    "genre": "Folk",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "8.9M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Pierce the Veil",
    "album": "Collide With the Sky",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/557643a8faaa35768cb6088f576fed30.png",
    "genre": "Rock",
    "releaseYear": "2012",
    "runtime": "46 min",
    "streams": "101.5M",
    "topTrack": "King for a Day"
  },
  {
    "artist": "Pierce the Veil",
    "album": "Selfish Machines",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2d23f6186a52429cc254acd176e75f4f.png",
    "genre": "Rock",
    "releaseYear": "2010",
    "runtime": "34 min",
    "streams": "46.1M",
    "topTrack": "Caraphernelia"
  },
  {
    "artist": "Pierce the Veil",
    "album": "The Jaws of Life",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5ed2ed408623619d1b869928c88ffd42.png",
    "genre": "Rock",
    "releaseYear": "2023",
    "runtime": "41 min",
    "streams": "28.4M",
    "topTrack": "So Far So Fake"
  },
  {
    "artist": "Pierce the Veil",
    "album": "Misadventures",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/65fc665467941fee867d6616909af71f.png",
    "genre": "Pop",
    "releaseYear": "2016",
    "runtime": "43 min",
    "streams": "36.8M",
    "topTrack": "Circles"
  },
  {
    "artist": "Pierce the Veil",
    "album": "A Flair for the Dramatic",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/eaaf2dbd3cbc69a9520f53fb164caaa0.png",
    "genre": "Pop",
    "releaseYear": "2007",
    "runtime": "40 min",
    "streams": "30.5M",
    "topTrack": "Yeah Boy and Doll Face"
  },
  {
    "artist": "Pink Floyd",
    "album": "The Dark Side of the Moon",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d4bdd038cacbec705e269edb0fd38419.png",
    "genre": "Rock",
    "releaseYear": "1973",
    "runtime": "51 min",
    "streams": "80.2M",
    "topTrack": "The Great Gig in the Sky"
  },
  {
    "artist": "Pink Floyd",
    "album": "The Wall",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6af6a9a0d246464f976bef5193823322.png",
    "genre": "Rock",
    "releaseYear": "1979",
    "runtime": "93 min",
    "streams": "80.1M",
    "topTrack": "Comfortably Numb"
  },
  {
    "artist": "Pink Floyd",
    "album": "Wish You Were Here",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e19d2760d2c0cf4de9d2a68beda56efd.png",
    "genre": "Rock",
    "releaseYear": "1975",
    "runtime": "37 min",
    "streams": "46.3M",
    "topTrack": "Wish You Were Here"
  },
  {
    "artist": "Pink Floyd",
    "album": "The Division Bell",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/82d5936d6b5997791c300fc7743ff3ce.png",
    "genre": "Rock",
    "releaseYear": "1994",
    "runtime": "62 min",
    "streams": "24.1M",
    "topTrack": "High Hopes"
  },
  {
    "artist": "Pink Floyd",
    "album": "Meddle",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/55dc29cfc3264ee3cee981181ddead2a.png",
    "genre": "Rock",
    "releaseYear": "1971",
    "runtime": "45 min",
    "streams": "15.4M",
    "topTrack": "Echoes"
  },
  {
    "artist": "David Guetta",
    "album": "One More Love",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/abea43811c0c48278574f036235c273f.png",
    "genre": "Dance",
    "releaseYear": "2010",
    "runtime": "50 min",
    "streams": "22.9M",
    "topTrack": "Sexy Bitch"
  },
  {
    "artist": "David Guetta",
    "album": "Nothing But The Beat (Ultimate Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/86880e316b76ac33bb039e2c67c71afe.png",
    "genre": "Electronic",
    "releaseYear": "2011",
    "runtime": "38 min",
    "streams": "14.1M",
    "topTrack": "Titanium (feat. Sia)"
  },
  {
    "artist": "David Guetta",
    "album": "Nothing but the Beat 2.0",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6a85419c42f54dc984f1ea5df2f425de.png",
    "genre": "Pop",
    "releaseYear": "2011",
    "runtime": "74 min",
    "streams": "9.3M",
    "topTrack": "She Wolf (Falling to Pieces) [feat. Sia]"
  },
  {
    "artist": "David Guetta",
    "album": "Nothing but the Beat",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4d02594598f0b7eadeb28b9589a8ee47.png",
    "genre": "Electronic",
    "releaseYear": "2011",
    "runtime": "Unknown",
    "streams": "14.3M",
    "topTrack": "Unknown"
  },
  {
    "artist": "David Guetta",
    "album": "I'm Good (Blue)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9ec15e64f71801819f40a48d3bdfde4b.png",
    "genre": "Electronic",
    "releaseYear": "1998",
    "runtime": "6 min",
    "streams": "8.5M",
    "topTrack": "I'm Good (Blue)"
  },
  {
    "artist": "ABBA",
    "album": "Arrival",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9669591438fa40869420f91c617de999.png",
    "genre": "Pop",
    "releaseYear": "1976",
    "runtime": "33 min",
    "streams": "27.0M",
    "topTrack": "Dancing Queen"
  },
  {
    "artist": "ABBA",
    "album": "Voulez-Vous",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d84bfbc85d894d51b4a845d0f5472109.png",
    "genre": "Pop",
    "releaseYear": "1979",
    "runtime": "41 min",
    "streams": "31.8M",
    "topTrack": "Chiquitita"
  },
  {
    "artist": "ABBA",
    "album": "Super Trouper",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d4bdb055af9f2ab12f8a785983602278.png",
    "genre": "Pop",
    "releaseYear": "1980",
    "runtime": "42 min",
    "streams": "26.4M",
    "topTrack": "The Winner Takes It All"
  },
  {
    "artist": "ABBA",
    "album": "ABBA",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/27c248c47e5445e92043b60c7c170303.png",
    "genre": "Pop",
    "releaseYear": "1975",
    "runtime": "32 min",
    "streams": "12.7M",
    "topTrack": "Mamma Mia"
  },
  {
    "artist": "ABBA",
    "album": "ABBA Gold",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/bcf43f2d64052516a21141fe72905aa6.png",
    "genre": "Pop",
    "releaseYear": "1992",
    "runtime": "78 min",
    "streams": "16.5M",
    "topTrack": "Dancing Queen"
  },
  {
    "artist": "Muse",
    "album": "Black Holes and Revelations",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e18f810e3121c94531d10163bf58d8cd.png",
    "genre": "Rock",
    "releaseYear": "2006",
    "runtime": "46 min",
    "streams": "104.9M",
    "topTrack": "Supermassive Black Hole"
  },
  {
    "artist": "Muse",
    "album": "Absolution",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/32ec91c5d9ac38c57aeaabb3af3b7a83.png",
    "genre": "Rock",
    "releaseYear": "2003",
    "runtime": "62 min",
    "streams": "102.5M",
    "topTrack": "Hysteria"
  },
  {
    "artist": "Muse",
    "album": "Origin of Symmetry",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8de0059651e6a6aedecd094f9a45bc5b.png",
    "genre": "Rock",
    "releaseYear": "2001",
    "runtime": "53 min",
    "streams": "61.0M",
    "topTrack": "Plug In Baby"
  },
  {
    "artist": "Muse",
    "album": "The Resistance",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/dd4c95317aaa3537dbf0a8dc4d9c7d79.png",
    "genre": "Rock",
    "releaseYear": "2009",
    "runtime": "38 min",
    "streams": "67.0M",
    "topTrack": "Uprising"
  },
  {
    "artist": "Muse",
    "album": "Showbiz",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3155ff2e04252a98d8f6d0847c60c464.png",
    "genre": "Rock",
    "releaseYear": "1999",
    "runtime": "51 min",
    "streams": "39.1M",
    "topTrack": "Sunburn"
  },
  {
    "artist": "The Smashing Pumpkins",
    "album": "Mellon Collie and the Infinite Sadness (Deluxe Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2a453e940a8945b4c5b2766f76ece94a.png",
    "genre": "Rock",
    "releaseYear": "2012",
    "runtime": "359 min",
    "streams": "59.8M",
    "topTrack": "1979"
  },
  {
    "artist": "The Smashing Pumpkins",
    "album": "Siamese Dream (Deluxe Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/23f92dcd4d6c0762422d0587a1b6a656.png",
    "genre": "Rock",
    "releaseYear": "1993",
    "runtime": "Unknown",
    "streams": "31.7M",
    "topTrack": "Unknown"
  },
  {
    "artist": "The Smashing Pumpkins",
    "album": "Siamese Dream",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/53131f63cde3d29e26930209b91fce57.png",
    "genre": "Rock",
    "releaseYear": "1993",
    "runtime": "71 min",
    "streams": "14.8M",
    "topTrack": "Today"
  },
  {
    "artist": "The Smashing Pumpkins",
    "album": "(Rotten Apples) The Smashing Pumpkins Greatest Hits",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9ab2bb3f7ece43fd0f78ab7e5cb311c7.png",
    "genre": "Rock",
    "releaseYear": "2001",
    "runtime": "84 min",
    "streams": "8.1M",
    "topTrack": "1979"
  },
  {
    "artist": "The Smashing Pumpkins",
    "album": "Siamese Dream (2011 - Remaster)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d56592ca7b754d8b0160774fb603eaa1.png",
    "genre": "Rock",
    "releaseYear": "1993",
    "runtime": "71 min",
    "streams": "12.9M",
    "topTrack": "Today"
  },
  {
    "artist": "Metro Boomin",
    "album": "HEROES & VILLAINS",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1240a338ee297d49b02b8f4e608ae49c.png",
    "genre": "Rap",
    "releaseYear": "2022",
    "runtime": "47 min",
    "streams": "144.1M",
    "topTrack": "Creepin' (with The Weeknd & 21 Savage)"
  },
  {
    "artist": "Metro Boomin",
    "album": "NOT ALL HEROES WEAR CAPES (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2ff8d65302db34c43947fa364e6096d6.png",
    "genre": "Hip-Hop",
    "releaseYear": "2018",
    "runtime": "Unknown",
    "streams": "51.5M",
    "topTrack": "10AM/Save The World [feat. Gucci Mane]"
  },
  {
    "artist": "Metro Boomin",
    "album": "METRO BOOMIN PRESENTS SPIDER-MAN: ACROSS THE SPIDER-VERSE (SOUNDTRACK FROM AND INSPIRED BY THE MOTION PICTURE)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/dc3bdeadd7ef481945b1c8c062757bae.png",
    "genre": "Rap",
    "releaseYear": "2022",
    "runtime": "47 min",
    "streams": "42.7M",
    "topTrack": "Am I Dreaming (Metro Boomin & A$AP Rocky, Roisee)"
  },
  {
    "artist": "Metro Boomin",
    "album": "Not All Heroes Wear Capes",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/005d18fdc08496b2674fb8e768e986b1.png",
    "genre": "Rap",
    "releaseYear": "2018",
    "runtime": "40 min",
    "streams": "5.3M",
    "topTrack": "No Complaints"
  },
  {
    "artist": "Metro Boomin",
    "album": "METRO BOOMIN PRESENTS SPIDER-MAN: ACROSS THE SPIDER-VERSE (SOUNDTRACK FROM AND INSPIRED BY THE MOTION PICTURE / DELUXE EDITION)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f4901a0ac34a110caf91d9ca6fc4945a.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "49 min",
    "streams": "5.3M",
    "topTrack": "Am I Dreaming"
  },
  {
    "artist": "JAŸ-Z",
    "album": "Watch The Throne",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/969b962fbc507772ced5015898828d05.png",
    "genre": "Unknown",
    "releaseYear": "2011",
    "runtime": "Unknown",
    "streams": "2.4M",
    "topTrack": "Unknown"
  },
  {
    "artist": "JAŸ-Z",
    "album": "The Blueprint 3",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b0ea0b5adf7dafab5e8a4cf1b2cd80c7.png",
    "genre": "Unknown",
    "releaseYear": "2009",
    "runtime": "Unknown",
    "streams": "1.3M",
    "topTrack": "Unknown"
  },
  {
    "artist": "JAŸ-Z",
    "album": "Watch The Throne (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/887df921c7a1615d91dc95141a138ccc.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "905.6K",
    "topTrack": "Unknown"
  },
  {
    "artist": "JAŸ-Z",
    "album": "4:44",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/321f6cc7a918c35db616c54a04b459cd.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "815.1K",
    "topTrack": "Unknown"
  },
  {
    "artist": "JAŸ-Z",
    "album": "Numb / Encore: MTV Ultimate Mash-Ups Presents Collision Course",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5d19571a83a02a0b737f510f3b976980.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "262.8K",
    "topTrack": "Unknown"
  },
  {
    "artist": "aespa",
    "album": "Armageddon - The 1st Album",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/61f49a9fa808644d4e39db28722e0548.png",
    "genre": "Pop",
    "releaseYear": "2023",
    "runtime": "30 min",
    "streams": "38.2M",
    "topTrack": "Supernova"
  },
  {
    "artist": "aespa",
    "album": "Savage - The 1st Mini Album",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9686de538a7ca3b967de4cc7e76e316b.png",
    "genre": "Pop",
    "releaseYear": "2021",
    "runtime": "18 min",
    "streams": "34.2M",
    "topTrack": "Savage"
  },
  {
    "artist": "aespa",
    "album": "Drama - The 4th Mini Album",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/79507db3be8709792cd6689f9e69e530.png",
    "genre": "Pop",
    "releaseYear": "2023",
    "runtime": "22 min",
    "streams": "25.8M",
    "topTrack": "Drama"
  },
  {
    "artist": "aespa",
    "album": "Whiplash - The 5th Mini Album",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/76a48016ed81d0fa016d0fd5507792b0.png",
    "genre": "Pop",
    "releaseYear": "2024",
    "runtime": "18 min",
    "streams": "25.6M",
    "topTrack": "Whiplash"
  },
  {
    "artist": "aespa",
    "album": "Girls - The 2nd Mini Album",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/591a5302e9a0083b490cda67ba90d5b5.png",
    "genre": "Pop",
    "releaseYear": "2022",
    "runtime": "32 min",
    "streams": "22.2M",
    "topTrack": "Black Mamba"
  },
  {
    "artist": "KATSEYE",
    "album": "Gabriela",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0f95953437c8d4d79e09183f1456815e.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "5 min",
    "streams": "16.6M",
    "topTrack": "Gabriela"
  },
  {
    "artist": "KATSEYE",
    "album": "Touch",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/04688e58d2f81866856b0f3b007f2d2d.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "15.1M",
    "topTrack": "Unknown"
  },
  {
    "artist": "KATSEYE",
    "album": "Gnarly",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/235dfc6c42bb1d65cb3d65cda6973687.png",
    "genre": "Pop",
    "releaseYear": "2025",
    "runtime": "Unknown",
    "streams": "19.1M",
    "topTrack": "Unknown"
  },
  {
    "artist": "KATSEYE",
    "album": "BEAUTIFUL CHAOS",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4cf643261041a69c4eaa79a4bdd5200d.png",
    "genre": "Pop",
    "releaseYear": "2025",
    "runtime": "14 min",
    "streams": "21.5M",
    "topTrack": "Gabriela"
  },
  {
    "artist": "KATSEYE",
    "album": "Debut",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9da920a9dbda8d0210c9081a6e67399a.png",
    "genre": "Unknown",
    "releaseYear": "2024",
    "runtime": "Unknown",
    "streams": "9.0M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Shakira",
    "album": "Oral Fixation, Vol. 2 (Expanded Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/947590b4fb3d6cc300b3fe4df42d9162.png",
    "genre": "Pop",
    "releaseYear": "2005",
    "runtime": "49 min",
    "streams": "13.7M",
    "topTrack": "Hips Don't Lie (feat. Wyclef Jean)"
  },
  {
    "artist": "Shakira",
    "album": "Laundry Service",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c13a86cdbedc5f2a337169544cf86f76.png",
    "genre": "Pop",
    "releaseYear": "2001",
    "runtime": "49 min",
    "streams": "16.7M",
    "topTrack": "Whenever, Wherever"
  },
  {
    "artist": "Shakira",
    "album": "Sale el Sol",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9672f9478c2642a4a83f68713691f3a4.png",
    "genre": "Pop",
    "releaseYear": "2010",
    "runtime": "46 min",
    "streams": "16.2M",
    "topTrack": "Addicted to You"
  },
  {
    "artist": "Shakira",
    "album": "She Wolf (Expanded Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c1980010012d407e711d3760dfc7ff26.png",
    "genre": "Pop",
    "releaseYear": "2009",
    "runtime": "54 min",
    "streams": "9.6M",
    "topTrack": "She Wolf"
  },
  {
    "artist": "Shakira",
    "album": "El Dorado",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/840530a7e450300f17a656ef1e9e4524.png",
    "genre": "Pop",
    "releaseYear": "2017",
    "runtime": "43 min",
    "streams": "9.3M",
    "topTrack": "Me Enamoré"
  },
  {
    "artist": "Gracie Abrams",
    "album": "The Secret of Us",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/da9cb143b9587dd1e68cd92013294c75.png",
    "genre": "Pop",
    "releaseYear": "2024",
    "runtime": "55 min",
    "streams": "75.9M",
    "topTrack": "Close to You"
  },
  {
    "artist": "Gracie Abrams",
    "album": "The Secret of Us (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e84d919d43ddb2a1a0ce735e7b399e7e.png",
    "genre": "Pop",
    "releaseYear": "2024",
    "runtime": "84 min",
    "streams": "54.3M",
    "topTrack": "I Love You, I'm Sorry"
  },
  {
    "artist": "Gracie Abrams",
    "album": "minor",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/40693c1652f55d6cb3d63911000a4bb7.png",
    "genre": "Pop",
    "releaseYear": "2020",
    "runtime": "20 min",
    "streams": "34.7M",
    "topTrack": "21"
  },
  {
    "artist": "Gracie Abrams",
    "album": "This Is What It Feels Like",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0dfb37d5d1a60bf8daefa69118523d49.png",
    "genre": "Pop",
    "releaseYear": "2021",
    "runtime": "37 min",
    "streams": "38.2M",
    "topTrack": "Feels Like"
  },
  {
    "artist": "Gracie Abrams",
    "album": "Good Riddance (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5ed29867fce15adfac768c022aa8839f.png",
    "genre": "Folk",
    "releaseYear": "2023",
    "runtime": "64 min",
    "streams": "36.0M",
    "topTrack": "I know it won't work"
  },
  {
    "artist": "Fall Out Boy",
    "album": "From Under the Cork Tree",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/73ff2d6aea6d465ac6b9a697ce4c6168.png",
    "genre": "Pop",
    "releaseYear": "2005",
    "runtime": "42 min",
    "streams": "81.5M",
    "topTrack": "Dance, Dance"
  },
  {
    "artist": "Fall Out Boy",
    "album": "Infinity on High",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b01817dacd044f7d9389e6b69933330b.png",
    "genre": "Rock",
    "releaseYear": "2007",
    "runtime": "24 min",
    "streams": "80.2M",
    "topTrack": "Thnks fr th Mmrs"
  },
  {
    "artist": "Fall Out Boy",
    "album": "American Beauty/American Psycho",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5696976fd66691b5423010d4831682ce.png",
    "genre": "Rock",
    "releaseYear": "2015",
    "runtime": "39 min",
    "streams": "34.0M",
    "topTrack": "Centuries"
  },
  {
    "artist": "Fall Out Boy",
    "album": "Save Rock and Roll",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9df53662061e4f30924723d65b42935c.png",
    "genre": "Rock",
    "releaseYear": "2013",
    "runtime": "35 min",
    "streams": "38.2M",
    "topTrack": "My Songs Know What You Did in the Dark (Light Em Up)"
  },
  {
    "artist": "Fall Out Boy",
    "album": "Take This to Your Grave",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3afca400fc829b0f8c9e2006f99af261.png",
    "genre": "Pop",
    "releaseYear": "2003",
    "runtime": "39 min",
    "streams": "30.7M",
    "topTrack": "Dead on Arrival"
  },
  {
    "artist": "Brent Faiyaz",
    "album": "WASTELAND",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/74c7c0622904c1fdf629bc307952ccc4.png",
    "genre": "Neo-soul",
    "releaseYear": "2020",
    "runtime": "73 min",
    "streams": "59.6M",
    "topTrack": "All Mine"
  },
  {
    "artist": "Brent Faiyaz",
    "album": "Fuck the World",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a976d858af46105fde41cade504bb328.png",
    "genre": "R&B",
    "releaseYear": "2018",
    "runtime": "22 min",
    "streams": "47.9M",
    "topTrack": "Clouded"
  },
  {
    "artist": "Brent Faiyaz",
    "album": "Larger Than Life",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/55d67ee97f2051afc325f4c19e42c728.png",
    "genre": "Unknown",
    "releaseYear": "2022",
    "runtime": "35 min",
    "streams": "42.0M",
    "topTrack": "Best Time"
  },
  {
    "artist": "Brent Faiyaz",
    "album": "Lost",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/33bd6dc6368f57d110a389acb1cc8d4e.png",
    "genre": "R&B",
    "releaseYear": "2018",
    "runtime": "18 min",
    "streams": "14.6M",
    "topTrack": "Trust"
  },
  {
    "artist": "Brent Faiyaz",
    "album": "Poison",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9d3337236a685ec0dd3d6ef26acd1f01.png",
    "genre": "R&B",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "10.6M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Jeff Buckley",
    "album": "Grace",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b9c826bf4d8da57694c54d7403d5cb18.png",
    "genre": "Rock",
    "releaseYear": "1994",
    "runtime": "52 min",
    "streams": "102.7M",
    "topTrack": "Lover, You Should've Come Over"
  },
  {
    "artist": "Jeff Buckley",
    "album": "Grace (Legacy Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/304a2ed64d9e0dbbbeda229dc5264477.png",
    "genre": "Rock",
    "releaseYear": "1994",
    "runtime": "104 min",
    "streams": "13.7M",
    "topTrack": "Lover, You Should've Come Over"
  },
  {
    "artist": "Jeff Buckley",
    "album": "Sketches for My Sweetheart The Drunk (Expanded Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/001d1a532e2e7d842ba0b13504630922.png",
    "genre": "Rock",
    "releaseYear": "Unknown",
    "runtime": "16 min",
    "streams": "17.8M",
    "topTrack": "Everybody Here Wants You"
  },
  {
    "artist": "Jeff Buckley",
    "album": "You and I (Expanded Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d9df2abbdd41063d6ecbc4f2db1aa55e.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "32 min",
    "streams": "6.0M",
    "topTrack": "Hallelujah"
  },
  {
    "artist": "Jeff Buckley",
    "album": "So Real: Songs From Jeff Buckley",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c1df364b6c262df07caa6cde2d066d7b.png",
    "genre": "Rock",
    "releaseYear": "Unknown",
    "runtime": "64 min",
    "streams": "2.2M",
    "topTrack": "Lover, You Should've Come Over"
  },
  {
    "artist": "David Bowie",
    "album": "The Rise and Fall of Ziggy Stardust and the Spiders from Mars (2012 Remaster)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/781be87e74355cc5cb8db5a5442f7de9.png",
    "genre": "Rock",
    "releaseYear": "1972",
    "runtime": "Unknown",
    "streams": "37.2M",
    "topTrack": "Five Years (2012 Remaster)"
  },
  {
    "artist": "David Bowie",
    "album": "Best of Bowie",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ddbef24ddf79302be4c79d6cdc9f77e1.png",
    "genre": "Rock",
    "releaseYear": "2002",
    "runtime": "84 min",
    "streams": "21.1M",
    "topTrack": "Space Oddity"
  },
  {
    "artist": "David Bowie",
    "album": "\"Heroes\" (2017 remaster)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c8b1798abf4f517c0bb53e198df3a7b4.png",
    "genre": "Rock",
    "releaseYear": "1977",
    "runtime": "Unknown",
    "streams": "12.7M",
    "topTrack": "Beauty And The Beast (2017 remaster)"
  },
  {
    "artist": "David Bowie",
    "album": "Hunky Dory (2015 Remaster)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7d0d755a67cfa8d7653a1ea0b52178a1.png",
    "genre": "Rock",
    "releaseYear": "1971",
    "runtime": "3 min",
    "streams": "16.8M",
    "topTrack": "Changes (2015 Remaster)"
  },
  {
    "artist": "David Bowie",
    "album": "David Bowie (aka Space Oddity) [2015 Remaster]",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/06077338206904418e0aa0b343705935.png",
    "genre": "Rock",
    "releaseYear": "1969",
    "runtime": "46 min",
    "streams": "7.4M",
    "topTrack": "Space Oddity (2015 Remaster)"
  },
  {
    "artist": "Slayyyter",
    "album": "WOR$T GIRL IN AMERICA",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d60a52a2d3e8eec7d9df29dc18d16ec2.png",
    "genre": "Pop",
    "releaseYear": "2026",
    "runtime": "45 min",
    "streams": "25.0M",
    "topTrack": "CRANK"
  },
  {
    "artist": "Slayyyter",
    "album": "Slayyyter",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/13ac0f00992b86bd3c6cda5c4dd38ea9.png",
    "genre": "Pop",
    "releaseYear": "2019",
    "runtime": "40 min",
    "streams": "9.7M",
    "topTrack": "Mine"
  },
  {
    "artist": "Slayyyter",
    "album": "Mine",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/da4dfa0c105b6308cec20ba707fd9f82.png",
    "genre": "Pop",
    "releaseYear": "Unknown",
    "runtime": "2 min",
    "streams": "2.8M",
    "topTrack": "Mine"
  },
  {
    "artist": "Slayyyter",
    "album": "Troubled Paradise",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/896c390039a0cba0e00dc03e9f2e7090.png",
    "genre": "Pop",
    "releaseYear": "2021",
    "runtime": "25 min",
    "streams": "7.5M",
    "topTrack": "Butterflies..."
  },
  {
    "artist": "Slayyyter",
    "album": "STARFUCKER",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/406a2f7862d86ed5dec8b5f308bcddde.png",
    "genre": "Pop",
    "releaseYear": "2023",
    "runtime": "35 min",
    "streams": "8.5M",
    "topTrack": "Erotic Electronic"
  },
  {
    "artist": "Yeat",
    "album": "Up 2 Më",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1e89fbb3aa2514cc450f01db338071b2.png",
    "genre": "Rap",
    "releaseYear": "Unknown",
    "runtime": "56 min",
    "streams": "68.1M",
    "topTrack": "Monëy So Big"
  },
  {
    "artist": "Yeat",
    "album": "Lyfë",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5a48720b118fbe2a47a3117e07e6547a.png",
    "genre": "Rap",
    "releaseYear": "2022",
    "runtime": "34 min",
    "streams": "43.0M",
    "topTrack": "Out Thë Way"
  },
  {
    "artist": "Yeat",
    "album": "2093",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/125700a0ef6faac975b7611bc8bcb6b1.png",
    "genre": "Rap",
    "releaseYear": "2093",
    "runtime": "70 min",
    "streams": "37.8M",
    "topTrack": "If We Being Rëal"
  },
  {
    "artist": "Yeat",
    "album": "2 Alivë",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ee31ec8adcc105fc3453930b731c7494.png",
    "genre": "Pop",
    "releaseYear": "2021",
    "runtime": "17 min",
    "streams": "40.8M",
    "topTrack": "On tha linë"
  },
  {
    "artist": "Yeat",
    "album": "Aftërlyfe",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/067ca8638498cf1656e1727949130878.png",
    "genre": "Rap",
    "releaseYear": "2022",
    "runtime": "67 min",
    "streams": "37.7M",
    "topTrack": "Nun Id Change"
  },
  {
    "artist": "TWICE",
    "album": "Summer Nights",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/86ac21ab36bbd416b225228745866bfe.png",
    "genre": "Pop",
    "releaseYear": "2018",
    "runtime": "29 min",
    "streams": "22.5M",
    "topTrack": "What is Love?"
  },
  {
    "artist": "TWICE",
    "album": "FANCY YOU",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a9b4e7025d2217c85044064c984ff68d.png",
    "genre": "Pop",
    "releaseYear": "2019",
    "runtime": "18 min",
    "streams": "25.3M",
    "topTrack": "FANCY"
  },
  {
    "artist": "TWICE",
    "album": "Formula of Love: O+T=<3",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/799889a45a0aed866919708e1c6913a2.png",
    "genre": "Pop",
    "releaseYear": "2021",
    "runtime": "52 min",
    "streams": "47.6M",
    "topTrack": "The Feels"
  },
  {
    "artist": "TWICE",
    "album": "Eyes wide open",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4f02062dc96115392e5b8b671550dae5.png",
    "genre": "Pop",
    "releaseYear": "2020",
    "runtime": "43 min",
    "streams": "30.0M",
    "topTrack": "I CAN'T STOP ME"
  },
  {
    "artist": "TWICE",
    "album": "Feel Special",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b8bba89b517241d34f53687a9a0fd9b4.png",
    "genre": "Pop",
    "releaseYear": "2019",
    "runtime": "23 min",
    "streams": "24.6M",
    "topTrack": "Feel Special"
  },
  {
    "artist": "NewJeans",
    "album": "NewJeans 'Super Shy'",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8cc71c340b216b121ec7b7fc6e9ac5f1.png",
    "genre": "Jersey Club",
    "releaseYear": "2023",
    "runtime": "4 min",
    "streams": "41.5M",
    "topTrack": "Super Shy"
  },
  {
    "artist": "NewJeans",
    "album": "NewJeans 1st EP 'New Jeans'",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6b11d36a21405b894d8b198e225edc09.png",
    "genre": "Pop",
    "releaseYear": "2022",
    "runtime": "12 min",
    "streams": "81.3M",
    "topTrack": "Attention"
  },
  {
    "artist": "NewJeans",
    "album": "NewJeans 2nd EP 'Get Up'",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a136d71542814b44868ebf2efe357a35.png",
    "genre": "Pop",
    "releaseYear": "2023",
    "runtime": "12 min",
    "streams": "87.3M",
    "topTrack": "Super Shy"
  },
  {
    "artist": "NewJeans",
    "album": "NewJeans 'OMG'",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/833e2b1c9df787fd2ad468b008be96e4.png",
    "genre": "Pop",
    "releaseYear": "2023",
    "runtime": "6 min",
    "streams": "33.9M",
    "topTrack": "Ditto"
  },
  {
    "artist": "NewJeans",
    "album": "Ditto",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6f9983f2b539275c1aa94a21022eeaec.png",
    "genre": "Pop",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "30.6M",
    "topTrack": "Unknown"
  },
  {
    "artist": "One Direction",
    "album": "Up All Night",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/72be72f5d593a9b02f30700fd5079005.png",
    "genre": "Pop",
    "releaseYear": "2011",
    "runtime": "45 min",
    "streams": "47.5M",
    "topTrack": "What Makes You Beautiful"
  },
  {
    "artist": "One Direction",
    "album": "FOUR (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3e060aae2309e4f8fb60a16676394f4b.png",
    "genre": "Pop",
    "releaseYear": "2014",
    "runtime": "52 min",
    "streams": "64.5M",
    "topTrack": "Night Changes"
  },
  {
    "artist": "One Direction",
    "album": "Midnight Memories (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8fdb593fa19d913d60538867637525fd.png",
    "genre": "Pop",
    "releaseYear": "2013",
    "runtime": "59 min",
    "streams": "54.6M",
    "topTrack": "Story of My Life"
  },
  {
    "artist": "One Direction",
    "album": "Made in the A.M. (Deluxe Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/afd3f86c013d0c4cd82da884526816a0.png",
    "genre": "Pop",
    "releaseYear": "2015",
    "runtime": "58 min",
    "streams": "55.2M",
    "topTrack": "Drag Me Down"
  },
  {
    "artist": "One Direction",
    "album": "Take Me Home (Expanded Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/15fea320fec39f81d7c9bd0204533c8d.png",
    "genre": "Pop",
    "releaseYear": "Unknown",
    "runtime": "65 min",
    "streams": "30.3M",
    "topTrack": "Kiss You"
  },
  {
    "artist": "Miley Cyrus",
    "album": "Bangerz (Deluxe Version)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/090bf88393d27cacca582301b15b7413.png",
    "genre": "Pop",
    "releaseYear": "2013",
    "runtime": "57 min",
    "streams": "33.0M",
    "topTrack": "We Can't Stop"
  },
  {
    "artist": "Miley Cyrus",
    "album": "The Time of Our Lives",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2351c19f87254dd2a0589badd650a70d.png",
    "genre": "Pop",
    "releaseYear": "2009",
    "runtime": "30 min",
    "streams": "10.8M",
    "topTrack": "Party in the U.S.A."
  },
  {
    "artist": "Miley Cyrus",
    "album": "Plastic Hearts",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/69bdee0d5985c91adff44a4e04055b2c.png",
    "genre": "Rock",
    "releaseYear": "2020",
    "runtime": "33 min",
    "streams": "50.9M",
    "topTrack": "Angels Like You"
  },
  {
    "artist": "Miley Cyrus",
    "album": "The Time of Our Lives (International Version)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/cdd87ea8ebffec031bfdfd019a106d5e.png",
    "genre": "Pop",
    "releaseYear": "2009",
    "runtime": "30 min",
    "streams": "13.3M",
    "topTrack": "Party in the U.S.A."
  },
  {
    "artist": "Miley Cyrus",
    "album": "Endless Summer Vacation",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9a8c97a8f4df58b16ff5b08d16f5f263.png",
    "genre": "Pop",
    "releaseYear": "2023",
    "runtime": "39 min",
    "streams": "32.6M",
    "topTrack": "Flowers"
  },
  {
    "artist": "Noah Kahan",
    "album": "Stick Season",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/370510f1781a9bd351389b6633c517ed.png",
    "genre": "Folk",
    "releaseYear": "2022",
    "runtime": "Unknown",
    "streams": "56.9M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Noah Kahan",
    "album": "Stick Season (We'll All Be Here Forever)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d4d93d94f46d2dda7e2fbf5f28ae1713.png",
    "genre": "Indie",
    "releaseYear": "2023",
    "runtime": "83 min",
    "streams": "42.8M",
    "topTrack": "Stick Season"
  },
  {
    "artist": "Noah Kahan",
    "album": "Stick Season (Forever)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f31f8ca74147fb1051d9cadf5cf8dec9.png",
    "genre": "Indie",
    "releaseYear": "2024",
    "runtime": "120 min",
    "streams": "20.0M",
    "topTrack": "Stick Season"
  },
  {
    "artist": "Noah Kahan",
    "album": "Busyhead",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/95bd1e9dd4bca15fa5b95867e7c2c1f9.png",
    "genre": "Acoustic",
    "releaseYear": "2019",
    "runtime": "31 min",
    "streams": "12.2M",
    "topTrack": "False Confidence"
  },
  {
    "artist": "Noah Kahan",
    "album": "Dial Drunk (with Post Malone)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/18d5025852a008d4054ff53044c01936.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "4.8M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Cocteau Twins",
    "album": "Heaven or Las Vegas",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c34df33d23f970baafdfea3f846e489f.png",
    "genre": "Pop",
    "releaseYear": "1990",
    "runtime": "39 min",
    "streams": "56.0M",
    "topTrack": "Cherry-Coloured Funk"
  },
  {
    "artist": "Cocteau Twins",
    "album": "The Moon And The Melodies",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8750f9df0453ffc171ea067f78407a66.png",
    "genre": "Pop",
    "releaseYear": "1986",
    "runtime": "37 min",
    "streams": "17.0M",
    "topTrack": "Sea, Swallow Me"
  },
  {
    "artist": "Cocteau Twins",
    "album": "Treasure",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b76833d04383d440b3e5080e165245be.png",
    "genre": "Pop",
    "releaseYear": "1984",
    "runtime": "41 min",
    "streams": "16.7M",
    "topTrack": "Lorelei"
  },
  {
    "artist": "Cocteau Twins",
    "album": "Milk & Kisses",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e606a81febdfccd074a04c625bf56973.png",
    "genre": "Pop",
    "releaseYear": "1996",
    "runtime": "42 min",
    "streams": "11.4M",
    "topTrack": "Serpentskirt"
  },
  {
    "artist": "Cocteau Twins",
    "album": "Blue Bell Knoll",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6ac3bcf2d7e6fd3cfe692122b1135843.png",
    "genre": "Pop",
    "releaseYear": "1988",
    "runtime": "36 min",
    "streams": "9.4M",
    "topTrack": "Cico Buff"
  },
  {
    "artist": "Elton John",
    "album": "Too Low For Zero",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ddde78c1ce1ef733b729b789718b4821.png",
    "genre": "Pop",
    "releaseYear": "1983",
    "runtime": "45 min",
    "streams": "14.2M",
    "topTrack": "I'm Still Standing"
  },
  {
    "artist": "Elton John",
    "album": "Honky Chateau",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/600850c3207f8a27ff77e49d91f78c1b.png",
    "genre": "Rock",
    "releaseYear": "1972",
    "runtime": "45 min",
    "streams": "13.4M",
    "topTrack": "Honky Cat"
  },
  {
    "artist": "Elton John",
    "album": "Goodbye Yellow Brick Road (Remastered)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8c31fd884271a9dd3a59c068df05cfd0.png",
    "genre": "Pop",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "15.5M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Elton John",
    "album": "Madman Across the Water",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/984188826369470d90143eda7df35959.png",
    "genre": "Rock",
    "releaseYear": "1971",
    "runtime": "45 min",
    "streams": "7.7M",
    "topTrack": "Tiny Dancer"
  },
  {
    "artist": "Elton John",
    "album": "Elton John",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f220a1afd589a02b37f2592bf0b0898b.png",
    "genre": "Pop",
    "releaseYear": "Unknown",
    "runtime": "45 min",
    "streams": "7.1M",
    "topTrack": "Your Song"
  },
  {
    "artist": "Oasis",
    "album": "(What's the Story) Morning Glory?",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1b217359e775a8b6a7bc443abe5b08c2.png",
    "genre": "Pop",
    "releaseYear": "1995",
    "runtime": "51 min",
    "streams": "44.7M",
    "topTrack": "Wonderwall"
  },
  {
    "artist": "Oasis",
    "album": "Definitely Maybe",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8d6acedbe66b4e69ced210643799dc4c.png",
    "genre": "Pop",
    "releaseYear": "1994",
    "runtime": "54 min",
    "streams": "26.6M",
    "topTrack": "Live Forever"
  },
  {
    "artist": "Oasis",
    "album": "Heathen Chemistry",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6a54881070cc06d4d4a15f7847c4c255.png",
    "genre": "Pop",
    "releaseYear": "2002",
    "runtime": "42 min",
    "streams": "21.2M",
    "topTrack": "Stop Crying Your Heart Out"
  },
  {
    "artist": "Oasis",
    "album": "(What's the Story) Morning Glory? [Remastered]",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/09d5c34c5afc7dcc30f2c456fedcb57e.png",
    "genre": "Pop",
    "releaseYear": "Unknown",
    "runtime": "50 min",
    "streams": "24.1M",
    "topTrack": "Wonderwall - Remastered"
  },
  {
    "artist": "Oasis",
    "album": "Be Here Now",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ea807e74a77c4cae87af14643b6da549.png",
    "genre": "Pop",
    "releaseYear": "1997",
    "runtime": "70 min",
    "streams": "17.3M",
    "topTrack": "Stand By Me"
  },
  {
    "artist": "Foo Fighters",
    "album": "The Colour and the Shape",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/dedd41ef4d48d496755da5ba046438bd.png",
    "genre": "Rock",
    "releaseYear": "1997",
    "runtime": "45 min",
    "streams": "79.5M",
    "topTrack": "Everlong"
  },
  {
    "artist": "Foo Fighters",
    "album": "Echoes, Silence, Patience & Grace",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a1a33e78e5ee4efab5827b28776795fb.png",
    "genre": "Rock",
    "releaseYear": "Unknown",
    "runtime": "51 min",
    "streams": "32.9M",
    "topTrack": "The Pretender"
  },
  {
    "artist": "Foo Fighters",
    "album": "There Is Nothing Left to Lose",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5f47acfda92b4ff488a52aee4b80da3f.png",
    "genre": "Rock",
    "releaseYear": "1999",
    "runtime": "58 min",
    "streams": "27.2M",
    "topTrack": "Learn to Fly"
  },
  {
    "artist": "Foo Fighters",
    "album": "In Your Honor",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a3b076a45d944b508d4455556b96b5ad.png",
    "genre": "Rock",
    "releaseYear": "2005",
    "runtime": "84 min",
    "streams": "22.7M",
    "topTrack": "Best of You"
  },
  {
    "artist": "Foo Fighters",
    "album": "One by One",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c163489f35ce47d3a3ec6be7f8b39178.png",
    "genre": "Rock",
    "releaseYear": "2001",
    "runtime": "55 min",
    "streams": "17.7M",
    "topTrack": "All My Life"
  },
  {
    "artist": "Baby Keem",
    "album": "The Melodic Blue",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ef98499114e88d49ee36e8510f564f5c.png",
    "genre": "Rap",
    "releaseYear": "2021",
    "runtime": "53 min",
    "streams": "89.9M",
    "topTrack": "16"
  },
  {
    "artist": "Baby Keem",
    "album": "DIE FOR MY BITCH",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5bbd2deff99418af019ed977334414c3.png",
    "genre": "R&B",
    "releaseYear": "2019",
    "runtime": "32 min",
    "streams": "53.9M",
    "topTrack": "ORANGE SODA"
  },
  {
    "artist": "Baby Keem",
    "album": "The Melodic Blue (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0f243845b408281d66470ba7bbd9d92f.png",
    "genre": "Quirky",
    "releaseYear": "2022",
    "runtime": "80 min",
    "streams": "22.1M",
    "topTrack": "16"
  },
  {
    "artist": "Baby Keem",
    "album": "family ties (with Kendrick Lamar)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/55b6621fd2dbb5905f91e9de2514d483.png",
    "genre": "Hip-Hop",
    "releaseYear": "2020",
    "runtime": "Unknown",
    "streams": "8.8M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Baby Keem",
    "album": "The Sound of Bad Habit",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/bcf698b96399c5f1904b5eddebbdcc97.png",
    "genre": "Rap",
    "releaseYear": "Unknown",
    "runtime": "21 min",
    "streams": "8.1M",
    "topTrack": "Baby Keem"
  },
  {
    "artist": "Evanescence",
    "album": "Fallen",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/709c71461153419d86742071e16426c8.png",
    "genre": "Rock",
    "releaseYear": "2003",
    "runtime": "46 min",
    "streams": "91.5M",
    "topTrack": "Bring Me to Life"
  },
  {
    "artist": "Evanescence",
    "album": "The Open Door",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a15c4f3ac52e8d53d14a1ae917c88a7b.png",
    "genre": "Rock",
    "releaseYear": "2006",
    "runtime": "10 min",
    "streams": "37.3M",
    "topTrack": "Call Me When You're Sober"
  },
  {
    "artist": "Evanescence",
    "album": "Origin",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e2b1644c8fae4971a10d9cffbb080968.png",
    "genre": "Rock",
    "releaseYear": "2000",
    "runtime": "51 min",
    "streams": "7.8M",
    "topTrack": "My Immortal"
  },
  {
    "artist": "Evanescence",
    "album": "Evanescence",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c85b5752f1c84f6e8fd5c238c19fe750.png",
    "genre": "Rock",
    "releaseYear": "2011",
    "runtime": "47 min",
    "streams": "18.4M",
    "topTrack": "My Heart Is Broken"
  },
  {
    "artist": "Evanescence",
    "album": "Not for Your Ears",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/df1f23b7cba74895b4876d1c523845f0.png",
    "genre": "Rock",
    "releaseYear": "Unknown",
    "runtime": "74 min",
    "streams": "3.6M",
    "topTrack": "Everybody's Fool"
  },
  {
    "artist": "The Cranberries",
    "album": "Everybody Else Is Doing It, So Why Can't We?",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/87138bbda83bd0ae8b4da2b6cab9b66a.png",
    "genre": "Rock",
    "releaseYear": "1993",
    "runtime": "40 min",
    "streams": "60.9M",
    "topTrack": "Linger"
  },
  {
    "artist": "The Cranberries",
    "album": "No Need to Argue (The Complete Sessions 1994-1995)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/84d8e7ab301df9f5c53f079155f3fdee.png",
    "genre": "Rock",
    "releaseYear": "Unknown",
    "runtime": "71 min",
    "streams": "16.2M",
    "topTrack": "Zombie"
  },
  {
    "artist": "The Cranberries",
    "album": "No Need to Argue",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/01783165e340ca652384d141a05588fe.png",
    "genre": "Rock",
    "releaseYear": "1994",
    "runtime": "49 min",
    "streams": "15.2M",
    "topTrack": "Zombie"
  },
  {
    "artist": "The Cranberries",
    "album": "To the Faithful Departed",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0cc6c9beed44f068fd164bc006560700.png",
    "genre": "Rock",
    "releaseYear": "1996",
    "runtime": "52 min",
    "streams": "7.4M",
    "topTrack": "When You're Gone"
  },
  {
    "artist": "The Cranberries",
    "album": "Bury the Hatchet",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/132505b32c337aa10724ce6182164234.png",
    "genre": "Rock",
    "releaseYear": "1999",
    "runtime": "47 min",
    "streams": "8.4M",
    "topTrack": "Animal Instinct"
  },
  {
    "artist": "The 1975",
    "album": "I like it when you sleep, for you are so beautiful yet so unaware of it",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b617b24a67aa1e15217da67817f29b6d.png",
    "genre": "Pop",
    "releaseYear": "1975",
    "runtime": "59 min",
    "streams": "54.6M",
    "topTrack": "Somebody Else"
  },
  {
    "artist": "The 1975",
    "album": "The 1975",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2666bdc9b7264b799f8a882e471cd62e.png",
    "genre": "Rock",
    "releaseYear": "1975",
    "runtime": "53 min",
    "streams": "42.8M",
    "topTrack": "Chocolate"
  },
  {
    "artist": "The 1975",
    "album": "A Brief Inquiry Into Online Relationships",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7bf3a1eac0326073f56978b7f39021e1.png",
    "genre": "Pop",
    "releaseYear": "1975",
    "runtime": "68 min",
    "streams": "53.2M",
    "topTrack": "It's Not Living (If It's Not With You)"
  },
  {
    "artist": "The 1975",
    "album": "Being Funny in a Foreign Language",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0dc221a4f275b250669990082e7f5f29.png",
    "genre": "Rock",
    "releaseYear": "1975",
    "runtime": "44 min",
    "streams": "55.3M",
    "topTrack": "About You"
  },
  {
    "artist": "The 1975",
    "album": "The 1975 (Deluxe Version)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/24612846aee1431ac36dee76af7cbc4f.png",
    "genre": "Rock",
    "releaseYear": "Unknown",
    "runtime": "148 min",
    "streams": "21.6M",
    "topTrack": "Chocolate"
  },
  {
    "artist": "Metallica",
    "album": "Metallica",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d6a960e23328230e5e203007b7690cde.png",
    "genre": "Heavy Metal",
    "releaseYear": "1991",
    "runtime": "82 min",
    "streams": "57.7M",
    "topTrack": "Enter Sandman"
  },
  {
    "artist": "Metallica",
    "album": "Reload",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/05f2982ee6632ae982622bebc18c0119.png",
    "genre": "Metal",
    "releaseYear": "1997",
    "runtime": "73 min",
    "streams": "27.4M",
    "topTrack": "Fuel"
  },
  {
    "artist": "Metallica",
    "album": "...and Justice for All",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/35b1faaf6bf5a35c351c73c8eee43425.png",
    "genre": "Thrash Metal",
    "releaseYear": "1988",
    "runtime": "59 min",
    "streams": "25.4M",
    "topTrack": "One"
  },
  {
    "artist": "Metallica",
    "album": "Master of Puppets",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/07f492a00c904cc6ccf868010be4d5a6.png",
    "genre": "Thrash Metal",
    "releaseYear": "1986",
    "runtime": "68 min",
    "streams": "29.1M",
    "topTrack": "Master of Puppets"
  },
  {
    "artist": "Metallica",
    "album": "Ride the Lightning",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4147ad1d3936b3d1ce11f5b3aaa40c87.png",
    "genre": "Thrash Metal",
    "releaseYear": "1984",
    "runtime": "53 min",
    "streams": "25.0M",
    "topTrack": "Fade to Black"
  },
  {
    "artist": "PARTYNEXTDOOR",
    "album": "PARTYNEXTDOOR",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/106f80967620a3cb558658a5c474d819.png",
    "genre": "R&B",
    "releaseYear": "2013",
    "runtime": "28 min",
    "streams": "46.7M",
    "topTrack": "Break from Toronto"
  },
  {
    "artist": "PARTYNEXTDOOR",
    "album": "$ome $exy $ongs 4 U",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/aaf695fb9eaa17ec26d3228789dd5ff4.png",
    "genre": "3 Out Of 5",
    "releaseYear": "2025",
    "runtime": "Unknown",
    "streams": "48.6M",
    "topTrack": "Unknown"
  },
  {
    "artist": "PARTYNEXTDOOR",
    "album": "PARTYNEXTDOOR TWO",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/cf4805d65212d64e2de22f82d98c8ea9.png",
    "genre": "Rap",
    "releaseYear": "2014",
    "runtime": "45 min",
    "streams": "31.8M",
    "topTrack": "Belong to the City"
  },
  {
    "artist": "PARTYNEXTDOOR",
    "album": "PARTYNEXTDOOR 3 (P3)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d7761f80fb3004acfbfade7f04ab419a.png",
    "genre": "Dancehall",
    "releaseYear": "2016",
    "runtime": "65 min",
    "streams": "13.4M",
    "topTrack": "Not Nice"
  },
  {
    "artist": "PARTYNEXTDOOR",
    "album": "PARTYMOBILE",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e321aa69c75245444df82c2f7c98efc2.png",
    "genre": "R&B",
    "releaseYear": "2020",
    "runtime": "56 min",
    "streams": "10.9M",
    "topTrack": "BELIEVE IT"
  },
  {
    "artist": "Lil Peep",
    "album": "Come Over When You're Sober, Pt. 2",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0f6c7e1323f12f50659c072eda4749bd.png",
    "genre": "Hip-Hop",
    "releaseYear": "2018",
    "runtime": "38 min",
    "streams": "44.8M",
    "topTrack": "Life is Beautiful"
  },
  {
    "artist": "Lil Peep",
    "album": "star shopping",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/262f8b7d976e084cec735dc2f5259811.png",
    "genre": "Pop",
    "releaseYear": "2017",
    "runtime": "Unknown",
    "streams": "25.5M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Lil Peep",
    "album": "Come Over When You're Sober, Pt. 1",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/df0b3f059ae2b537b1b2655aab719de9.png",
    "genre": "Hip-Hop",
    "releaseYear": "2017",
    "runtime": "23 min",
    "streams": "38.3M",
    "topTrack": "Save That Shit"
  },
  {
    "artist": "Lil Peep",
    "album": "LIVE FOREVER",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/acebc8b7f29fb0feb488f705e1504fba.png",
    "genre": "Rap",
    "releaseYear": "2015",
    "runtime": "Unknown",
    "streams": "29.7M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Lil Peep",
    "album": "crybaby",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b44551967422f08b63e26b86c115827d.png",
    "genre": "Rap",
    "releaseYear": "2016",
    "runtime": "28 min",
    "streams": "43.0M",
    "topTrack": "white tee"
  },
  {
    "artist": "OutKast",
    "album": "Stankonia",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/28229f48f77f2c5f648055c3b6273099.png",
    "genre": "Hip-Hop",
    "releaseYear": "2000",
    "runtime": "72 min",
    "streams": "40.7M",
    "topTrack": "B.O.B."
  },
  {
    "artist": "OutKast",
    "album": "Speakerboxxx/The Love Below",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fef975b2cf4c416eadee5f765f49ec34.png",
    "genre": "Hip-Hop",
    "releaseYear": "2003",
    "runtime": "117 min",
    "streams": "38.1M",
    "topTrack": "Roses"
  },
  {
    "artist": "OutKast",
    "album": "Aquemini",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d525b9724ca5ccbb3aebf48918bd632b.png",
    "genre": "Hip-Hop",
    "releaseYear": "1999",
    "runtime": "71 min",
    "streams": "19.9M",
    "topTrack": "Rosa Parks"
  },
  {
    "artist": "OutKast",
    "album": "ATLiens",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/02faa14e03554a73936ecb031c641bcf.png",
    "genre": "Hip-Hop",
    "releaseYear": "1996",
    "runtime": "54 min",
    "streams": "16.7M",
    "topTrack": "ATLiens"
  },
  {
    "artist": "OutKast",
    "album": "Southernplayalisticadillacmuzik",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c6004c793c9542c899cba43b181a91df.png",
    "genre": "Hip-Hop",
    "releaseYear": "1994",
    "runtime": "58 min",
    "streams": "6.4M",
    "topTrack": "Southernplayalisticadillacmuzik"
  },
  {
    "artist": "RAYE",
    "album": "My 21st Century Blues",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8b96a71ea87fb73d6affe067ef922c5a.png",
    "genre": "Pop",
    "releaseYear": "2023",
    "runtime": "52 min",
    "streams": "26.5M",
    "topTrack": "Escapism."
  },
  {
    "artist": "RAYE",
    "album": "WHERE IS MY HUSBAND!",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d699b39671911b7dfc69d4c0acdcc4f1.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "10.5M",
    "topTrack": "Unknown"
  },
  {
    "artist": "RAYE",
    "album": "THIS MUSIC MAY CONTAIN HOPE.",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9a46ff6f5eff4b7f011dc63c87e800c0.png",
    "genre": "Pop",
    "releaseYear": "2026",
    "runtime": "73 min",
    "streams": "10.4M",
    "topTrack": "WHERE IS MY HUSBAND!"
  },
  {
    "artist": "RAYE",
    "album": "Escapism.",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7dcc203ee82cd46826413e4a7b5a198e.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "3.9M",
    "topTrack": "Unknown"
  },
  {
    "artist": "RAYE",
    "album": "Escapism. / The Thrill Is Gone.",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/aba6c3446e7c3c13dbb68cbec29b3d87.png",
    "genre": "Neo Soul",
    "releaseYear": "Unknown",
    "runtime": "7 min",
    "streams": "4.1M",
    "topTrack": "Escapism."
  },
  {
    "artist": "Djo",
    "album": "DECIDE",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ffdc425993df98b4a3d40d92dcc2a331.png",
    "genre": "Pop",
    "releaseYear": "2019",
    "runtime": "35 min",
    "streams": "51.1M",
    "topTrack": "End of Beginning"
  },
  {
    "artist": "Djo",
    "album": "Twenty Twenty",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c3cd5a3161b024b3ab52809cdd616b49.png",
    "genre": "Indie",
    "releaseYear": "2019",
    "runtime": "43 min",
    "streams": "19.1M",
    "topTrack": "Chateau (Feel Alright)"
  },
  {
    "artist": "Djo",
    "album": "The Crux",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5c7d1ae702f11a96a1c9aabc810eb83d.png",
    "genre": "Rock",
    "releaseYear": "2025",
    "runtime": "42 min",
    "streams": "14.3M",
    "topTrack": "Delete Ya"
  },
  {
    "artist": "Djo",
    "album": "Basic Being Basic",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/bf2f239960a5dbf7a9441a3e8f56140d.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "1.3M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Djo",
    "album": "The Crux Deluxe",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/31bf6e4b9d150ffd84c4ae778aa5f9c9.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "89 min",
    "streams": "5.5M",
    "topTrack": "Delete Ya"
  },
  {
    "artist": "Lil Wayne",
    "album": "Tha Carter III",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/01eef4162bca3d4bd14afa908ccc4faa.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "24.1M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Lil Wayne",
    "album": "A Milli",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0f786fb1b0234ffbcf1583065df3623c.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "61.1K",
    "topTrack": "Unknown"
  },
  {
    "artist": "Lil Wayne",
    "album": "Tha Carter II",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3a70acd67c584efeceb749bd9b4f2d2a.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "6.0M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Lil Wayne",
    "album": "Lights Out",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fe6187f5209aa90312ead425121dd7ab.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "325.5K",
    "topTrack": "Unknown"
  },
  {
    "artist": "Lil Wayne",
    "album": "The Carter",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fd952585ef8f9b958a5f37ef0bb7c941.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "150.3K",
    "topTrack": "Unknown"
  },
  {
    "artist": "Beach House",
    "album": "Depression Cherry",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/92ee7e4f3afdbe6a9a8c13a4a790baf1.png",
    "genre": "Pop",
    "releaseYear": "2015",
    "runtime": "44 min",
    "streams": "64.2M",
    "topTrack": "Space Song"
  },
  {
    "artist": "Beach House",
    "album": "Teen Dream",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/30d53a1f77170c021ee5ce20f2b82e3e.png",
    "genre": "Pop",
    "releaseYear": "2010",
    "runtime": "45 min",
    "streams": "46.5M",
    "topTrack": "Silver Soul"
  },
  {
    "artist": "Beach House",
    "album": "Bloom",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/63a3ea22de6c4c6b842c2a149b59e81f.png",
    "genre": "Pop",
    "releaseYear": "2012",
    "runtime": "50 min",
    "streams": "40.9M",
    "topTrack": "Myth"
  },
  {
    "artist": "Beach House",
    "album": "Beach House",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/cd5ca6c942374d7da47e7880efa17f99.png",
    "genre": "Pop",
    "releaseYear": "2006",
    "runtime": "32 min",
    "streams": "21.8M",
    "topTrack": "Master of None"
  },
  {
    "artist": "Beach House",
    "album": "7",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/37dfce5a72272f70a84f858747859c9e.png",
    "genre": "Pop",
    "releaseYear": "Unknown",
    "runtime": "46 min",
    "streams": "18.6M",
    "topTrack": "Lemon Glow"
  },
  {
    "artist": "XXXTENTACION",
    "album": "17",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e4ecd32d08c4669c4ddf057baaa87938.png",
    "genre": "Rap",
    "releaseYear": "2017",
    "runtime": "23 min",
    "streams": "94.8M",
    "topTrack": "Revenge"
  },
  {
    "artist": "XXXTENTACION",
    "album": "?",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/44256a0e77e7c3022be226b69d1f3c2e.png",
    "genre": "Hip-Hop",
    "releaseYear": "2018",
    "runtime": "37 min",
    "streams": "87.3M",
    "topTrack": "Moonlight"
  },
  {
    "artist": "XXXTENTACION",
    "album": "Revenge",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e0ed40fd234e44c28e7799b994c4484c.png",
    "genre": "Hip-Hop",
    "releaseYear": "2017",
    "runtime": "15 min",
    "streams": "28.4M",
    "topTrack": "Look at Me!"
  },
  {
    "artist": "XXXTENTACION",
    "album": "Look at Me!",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f3511286965fbb86497f1a62d09e6550.png",
    "genre": "Rap",
    "releaseYear": "2015",
    "runtime": "Unknown",
    "streams": "10.1M",
    "topTrack": "Unknown"
  },
  {
    "artist": "XXXTENTACION",
    "album": "SKINS",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/19b94be3c2e7086143751bf53dd5699a.png",
    "genre": "Rap",
    "releaseYear": "2015",
    "runtime": "17 min",
    "streams": "22.8M",
    "topTrack": "BAD!"
  },
  {
    "artist": "Billy Joel",
    "album": "An Innocent Man",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a12d150c799c416daef11949670485c8.png",
    "genre": "Pop",
    "releaseYear": "1983",
    "runtime": "39 min",
    "streams": "14.0M",
    "topTrack": "Uptown Girl"
  },
  {
    "artist": "Billy Joel",
    "album": "The Stranger (Legacy Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d21555a2ec22989dcb3f7c7ea4580840.png",
    "genre": "Rock",
    "releaseYear": "1977",
    "runtime": "52 min",
    "streams": "32.3M",
    "topTrack": "Vienna"
  },
  {
    "artist": "Billy Joel",
    "album": "Piano Man (Legacy Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e0684204f7d2357c903854b3a6456b1a.png",
    "genre": "Rock",
    "releaseYear": "1973",
    "runtime": "99 min",
    "streams": "9.3M",
    "topTrack": "Piano Man"
  },
  {
    "artist": "Billy Joel",
    "album": "Storm Front",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6a0581da482a7a6b2b637554babc65a0.png",
    "genre": "Rock",
    "releaseYear": "1989",
    "runtime": "46 min",
    "streams": "7.6M",
    "topTrack": "We Didn't Start the Fire"
  },
  {
    "artist": "Billy Joel",
    "album": "52nd Street",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e6fea4a2ff966386519fcc17deb42b0a.png",
    "genre": "Rock",
    "releaseYear": "1978",
    "runtime": "36 min",
    "streams": "7.7M",
    "topTrack": "My Life"
  },
  {
    "artist": "Slipknot",
    "album": "Vol. 3: The Subliminal Verses",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e82769f7d49d8452611f33f2cc02a478.png",
    "genre": "Nu Metal",
    "releaseYear": "2004",
    "runtime": "94 min",
    "streams": "45.1M",
    "topTrack": "Duality"
  },
  {
    "artist": "Slipknot",
    "album": "Slipknot",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9274398d6314cb5882bf4fe8dfd084f8.png",
    "genre": "Nu Metal",
    "releaseYear": "1989",
    "runtime": "12 min",
    "streams": "45.0M",
    "topTrack": "Let It Show"
  },
  {
    "artist": "Slipknot",
    "album": "Iowa",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/92ccba192b614b9faeeffe6841ab5c6d.png",
    "genre": "Nu Metal",
    "releaseYear": "2001",
    "runtime": "75 min",
    "streams": "38.4M",
    "topTrack": "People = Shit"
  },
  {
    "artist": "Slipknot",
    "album": "All Hope Is Gone",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b05a013bb6ee4e0ca28b8866990e5fc7.png",
    "genre": "Metal",
    "releaseYear": "2008",
    "runtime": "43 min",
    "streams": "41.1M",
    "topTrack": "Psychosocial"
  },
  {
    "artist": "Slipknot",
    "album": ".5: The Gray Chapter (Special Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/53afb0781825a1e75f275e0a49591d32.png",
    "genre": "Nu Metal",
    "releaseYear": "Unknown",
    "runtime": "74 min",
    "streams": "24.1M",
    "topTrack": "Custer"
  },
  {
    "artist": "MGMT",
    "album": "Oracular Spectacular",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/32774a8d1143a4a7087f4a18d5e2ede2.png",
    "genre": "Indie",
    "releaseYear": "2007",
    "runtime": "40 min",
    "streams": "120.6M",
    "topTrack": "Kids"
  },
  {
    "artist": "MGMT",
    "album": "Little Dark Age",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/28700d076e5afb3bc0fba47ab8e71975.png",
    "genre": "Pop",
    "releaseYear": "2018",
    "runtime": "42 min",
    "streams": "41.6M",
    "topTrack": "Little Dark Age"
  },
  {
    "artist": "MGMT",
    "album": "Congratulations",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9718ffa7a84a454594ebe64f627c0fde.png",
    "genre": "Indie",
    "releaseYear": "2010",
    "runtime": "43 min",
    "streams": "22.1M",
    "topTrack": "Congratulations"
  },
  {
    "artist": "MGMT",
    "album": "Time To Pretend",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6757527496191c1771f816a406328dcb.png",
    "genre": "Indie",
    "releaseYear": "2008",
    "runtime": "8 min",
    "streams": "7.5M",
    "topTrack": "Time to Pretend"
  },
  {
    "artist": "MGMT",
    "album": "MGMT",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b54a74605dc84b6db5a6d8f2b3aa344d.png",
    "genre": "Rock",
    "releaseYear": "Unknown",
    "runtime": "21 min",
    "streams": "4.2M",
    "topTrack": "Alien Days"
  },
  {
    "artist": "Marina",
    "album": "Electra Heart (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7d04125ea845fff022f99d3b61d3e11f.png",
    "genre": "Pop",
    "releaseYear": "2012",
    "runtime": "65 min",
    "streams": "51.5M",
    "topTrack": "Bubblegum Bitch"
  },
  {
    "artist": "Marina",
    "album": "The Family Jewels",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/43a126df5445a6967655628d889c29bb.png",
    "genre": "Pop",
    "releaseYear": "2010",
    "runtime": "20 min",
    "streams": "36.0M",
    "topTrack": "Oh No!"
  },
  {
    "artist": "Marina",
    "album": "Ancient Dreams in a Modern Land",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/efa18aba0a807663835d3bd79d9f999c.png",
    "genre": "Pop",
    "releaseYear": "2021",
    "runtime": "36 min",
    "streams": "19.0M",
    "topTrack": "Ancient Dreams in a Modern Land"
  },
  {
    "artist": "Marina",
    "album": "Electra Heart",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5b29cad74be27985eeba3ae02b312381.png",
    "genre": "Pop",
    "releaseYear": "2012",
    "runtime": "46 min",
    "streams": "6.4M",
    "topTrack": "Bubblegum Bitch"
  },
  {
    "artist": "Marina",
    "album": "The Family Jewels (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3086e9a2917ce26204d7df9bb4eb0ac7.png",
    "genre": "Pop",
    "releaseYear": "2010",
    "runtime": "79 min",
    "streams": "8.0M",
    "topTrack": "Oh No!"
  },
  {
    "artist": "Phoebe Bridgers",
    "album": "Stranger in the Alps",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/531bdb172f66ee3500e344936f1f22bd.png",
    "genre": "Rock",
    "releaseYear": "2017",
    "runtime": "41 min",
    "streams": "74.4M",
    "topTrack": "Motion Sickness"
  },
  {
    "artist": "Phoebe Bridgers",
    "album": "Punisher",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4e31f6b52ff52b99a93650badd19b2c5.png",
    "genre": "Rock",
    "releaseYear": "2020",
    "runtime": "40 min",
    "streams": "139.9M",
    "topTrack": "I Know the End"
  },
  {
    "artist": "Phoebe Bridgers",
    "album": "Stranger in the Alps (Deluxe Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/431f51f7525d2724d6f2e1eaf0867c7f.png",
    "genre": "Indie",
    "releaseYear": "Unknown",
    "runtime": "48 min",
    "streams": "31.5M",
    "topTrack": "Motion Sickness"
  },
  {
    "artist": "Phoebe Bridgers",
    "album": "Sidelines",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8b20ddb05689187b31ceed082ea3ffad.png",
    "genre": "Indie",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "6.4M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Phoebe Bridgers",
    "album": "That Funny Feeling",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e184760af02399bc4b8b0aa376e0b20e.png",
    "genre": "Folk",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "4.1M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Nelly Furtado",
    "album": "Loose",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f3aa2afa43dc94eb79562be7a23ce876.png",
    "genre": "Pop",
    "releaseYear": "2006",
    "runtime": "50 min",
    "streams": "73.1M",
    "topTrack": "Promiscuous"
  },
  {
    "artist": "Nelly Furtado",
    "album": "Whoa, Nelly!",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b16aeae24629ee6d9b8d5be777c2b249.png",
    "genre": "Pop",
    "releaseYear": "2000",
    "runtime": "53 min",
    "streams": "4.6M",
    "topTrack": "I'm Like a Bird"
  },
  {
    "artist": "Nelly Furtado",
    "album": "Folklore",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/37119a5e774e1bebb0c49003bfae775a.png",
    "genre": "Pop",
    "releaseYear": "2003",
    "runtime": "50 min",
    "streams": "5.6M",
    "topTrack": "Try"
  },
  {
    "artist": "Nelly Furtado",
    "album": "Whoa, Nelly! (Expanded Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/efcf3a6807ae390b8544ed610d13f9b7.png",
    "genre": "Rock",
    "releaseYear": "Unknown",
    "runtime": "53 min",
    "streams": "2.4M",
    "topTrack": "I'm Like a Bird"
  },
  {
    "artist": "Nelly Furtado",
    "album": "Loose (International Version)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/72fb273b7f638c7c30699e594df7e0dc.png",
    "genre": "Pop",
    "releaseYear": "2006",
    "runtime": "55 min",
    "streams": "3.0M",
    "topTrack": "Promiscuous"
  },
  {
    "artist": "Conan Gray",
    "album": "Kid Krow",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4f133a7c64471f91a30bf6ae80946c8c.png",
    "genre": "Pop",
    "releaseYear": "2020",
    "runtime": "33 min",
    "streams": "81.7M",
    "topTrack": "Heather"
  },
  {
    "artist": "Conan Gray",
    "album": "Superache",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/31631acd45122b003a251c34999b0142.png",
    "genre": "Folk",
    "releaseYear": "2022",
    "runtime": "40 min",
    "streams": "63.9M",
    "topTrack": "Astronomy"
  },
  {
    "artist": "Conan Gray",
    "album": "Sunset Season",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/39220b5f7ea606e6ba7be7f57cc9ed0f.png",
    "genre": "Pop",
    "releaseYear": "2018",
    "runtime": "18 min",
    "streams": "17.6M",
    "topTrack": "Crush Culture"
  },
  {
    "artist": "Conan Gray",
    "album": "Found Heaven",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1259aa18a5b2f545082843afe8193b80.png",
    "genre": "Pop",
    "releaseYear": "2024",
    "runtime": "36 min",
    "streams": "20.1M",
    "topTrack": "Never Ending Song"
  },
  {
    "artist": "Conan Gray",
    "album": "Overdrive",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/89826911a0fcb7317970744848afacd9.png",
    "genre": "Pop",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "4.5M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Tory Lanez",
    "album": "Alone at Prom",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2b325cf7cba32af1f81402d1a57e447c.png",
    "genre": "Pop",
    "releaseYear": "2021",
    "runtime": "35 min",
    "streams": "55.2M",
    "topTrack": "The Color Violet"
  },
  {
    "artist": "Tory Lanez",
    "album": "I Told You",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f6592086cf020e36842d0721163e300f.png",
    "genre": "R&B",
    "releaseYear": "2016",
    "runtime": "61 min",
    "streams": "10.2M",
    "topTrack": "Say It"
  },
  {
    "artist": "Tory Lanez",
    "album": "Hurts Me",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f2677d286bb34ca6185db12653634c09.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "7.3M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Tory Lanez",
    "album": "The New Toronto 3",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a4c93925ad959aa1713226e55f1eab9c.png",
    "genre": "Unknown",
    "releaseYear": "2020",
    "runtime": "44 min",
    "streams": "8.2M",
    "topTrack": "Broke In A Minute"
  },
  {
    "artist": "Tory Lanez",
    "album": "In For It",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/75cd15eca8600841f47e0539d59229eb.png",
    "genre": "R&B",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "3.8M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Adele",
    "album": "21",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7694508c2aa520df08bb8e6248bfedf0.png",
    "genre": "Soul",
    "releaseYear": "2011",
    "runtime": "49 min",
    "streams": "115.7M",
    "topTrack": "Rolling in the Deep"
  },
  {
    "artist": "Adele",
    "album": "19",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/58a9a10b96ac70e224f67c8c41e406e7.png",
    "genre": "Soul",
    "releaseYear": "2008",
    "runtime": "39 min",
    "streams": "52.0M",
    "topTrack": "Chasing Pavements"
  },
  {
    "artist": "Adele",
    "album": "25",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6284ff0b115c46d1b28ae96e6d5b4099.png",
    "genre": "Soul",
    "releaseYear": "2015",
    "runtime": "53 min",
    "streams": "52.3M",
    "topTrack": "Hello"
  },
  {
    "artist": "Adele",
    "album": "Skyfall",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2f99e0bb8fee4447e84b40fc9166e75a.png",
    "genre": "Soul",
    "releaseYear": "Unknown",
    "runtime": "7 min",
    "streams": "11.9M",
    "topTrack": "Skyfall"
  },
  {
    "artist": "Adele",
    "album": "30",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/35a9537590ea3d5164b598c75b3a378c.png",
    "genre": "Pop",
    "releaseYear": "2021",
    "runtime": "30 min",
    "streams": "34.6M",
    "topTrack": "Easy on Me"
  },
  {
    "artist": "Ravyn Lenae",
    "album": "Bird's Eye",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/abf6d2550d60aecebc27bf20d77c3462.png",
    "genre": "Neo-soul",
    "releaseYear": "2024",
    "runtime": "34 min",
    "streams": "18.0M",
    "topTrack": "Love Me Not"
  },
  {
    "artist": "Ravyn Lenae",
    "album": "Love Me Not / Love Is Blind",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b88d5362e111d108c3a8814f7a875123.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "8.1M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Ravyn Lenae",
    "album": "Love Me Not (feat. Rex Orange County)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/35dcd1dc142bff04d43dcc86a820a7c9.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "4.2M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Ravyn Lenae",
    "album": "Hypnos",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b92b71c08c39a0aa90f0b43df510dc0b.png",
    "genre": "Neo-soul",
    "releaseYear": "2022",
    "runtime": "53 min",
    "streams": "7.0M",
    "topTrack": "Skin Tight (feat. Steve Lacy)"
  },
  {
    "artist": "Ravyn Lenae",
    "album": "Crush EP",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b0317cd69233b6a897f79232b05712dd.png",
    "genre": "Neo-soul",
    "releaseYear": "Unknown",
    "runtime": "6 min",
    "streams": "3.4M",
    "topTrack": "Sticky"
  },
  {
    "artist": "21 Savage",
    "album": "i am > i was",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7ea88aad00e82f4927d1aea1e30922eb.png",
    "genre": "Rap",
    "releaseYear": "2018",
    "runtime": "51 min",
    "streams": "49.9M",
    "topTrack": "a lot"
  },
  {
    "artist": "21 Savage",
    "album": "Savage Mode II",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/411d1b883438426f203335180089a9d9.png",
    "genre": "Rap",
    "releaseYear": "2020",
    "runtime": "Unknown",
    "streams": "58.8M",
    "topTrack": "Unknown"
  },
  {
    "artist": "21 Savage",
    "album": "american dream",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a7dcf5182b8027d164ce1da8c2bc4a3f.png",
    "genre": "Rap",
    "releaseYear": "2024",
    "runtime": "49 min",
    "streams": "43.1M",
    "topTrack": "redrum"
  },
  {
    "artist": "21 Savage",
    "album": "Without Warning",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/abcd3cac41c44f779f28ec745ed0e147.png",
    "genre": "Rap",
    "releaseYear": "2017",
    "runtime": "33 min",
    "streams": "33.1M",
    "topTrack": "My Choppa Hate Niggas"
  },
  {
    "artist": "21 Savage",
    "album": "Issa Album",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8c448cdd3dd444b99730b0fb2882f637.png",
    "genre": "Hip-Hop",
    "releaseYear": "2017",
    "runtime": "56 min",
    "streams": "12.1M",
    "topTrack": "Bank Account"
  },
  {
    "artist": "Blood Orange",
    "album": "Coastal Grooves",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d9867bed34084454c47c43fc720b4ea7.png",
    "genre": "Pop",
    "releaseYear": "2011",
    "runtime": "39 min",
    "streams": "25.3M",
    "topTrack": "Champagne Coast"
  },
  {
    "artist": "Blood Orange",
    "album": "Negro Swan",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/70a09d8a19462afd1e0b6e16b17380d5.png",
    "genre": "R&B",
    "releaseYear": "2018",
    "runtime": "Unknown",
    "streams": "27.8M",
    "topTrack": "Charcoal Baby"
  },
  {
    "artist": "Blood Orange",
    "album": "Cupid Deluxe",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/65e9a04b44947d65c763528855cef7a2.png",
    "genre": "Indie",
    "releaseYear": "Unknown",
    "runtime": "51 min",
    "streams": "15.8M",
    "topTrack": "You're Not Good Enough"
  },
  {
    "artist": "Blood Orange",
    "album": "Angel's Pulse",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/cbac43fe7d6601d43d078b9e76db4614.png",
    "genre": "R&B",
    "releaseYear": "2019",
    "runtime": "Unknown",
    "streams": "10.7M",
    "topTrack": "I Wanna C U"
  },
  {
    "artist": "Blood Orange",
    "album": "Freetown Sound",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/dcc3911687b7532d5c0135fa7a1efd09.png",
    "genre": "R&B",
    "releaseYear": "2015",
    "runtime": "58 min",
    "streams": "10.3M",
    "topTrack": "Best to You"
  },
  {
    "artist": "Demi Lovato",
    "album": "Confident",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/274293972903cfcff914aff5d8550d7e.png",
    "genre": "Pop",
    "releaseYear": "2015",
    "runtime": "38 min",
    "streams": "16.4M",
    "topTrack": "Cool for the Summer"
  },
  {
    "artist": "Demi Lovato",
    "album": "Demi",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/63bfa35e65521a818de70c491bc77855.png",
    "genre": "Pop",
    "releaseYear": "2013",
    "runtime": "54 min",
    "streams": "22.5M",
    "topTrack": "Heart Attack"
  },
  {
    "artist": "Demi Lovato",
    "album": "Unbroken",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8ea02283fba9eb10feec5df51df8380d.png",
    "genre": "Pop",
    "releaseYear": "2011",
    "runtime": "52 min",
    "streams": "20.4M",
    "topTrack": "Give Your Heart a Break"
  },
  {
    "artist": "Demi Lovato",
    "album": "Tell Me You Love Me",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e5c4b0aa2d13420c9629dc2c211f9104.png",
    "genre": "Pop",
    "releaseYear": "2017",
    "runtime": "Unknown",
    "streams": "8.7M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Demi Lovato",
    "album": "Confident (Deluxe Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a33989a32c9f9276c11dbeb27b1486b3.png",
    "genre": "Pop",
    "releaseYear": "2015",
    "runtime": "54 min",
    "streams": "10.4M",
    "topTrack": "Cool for the Summer"
  },
  {
    "artist": "ILLIT",
    "album": "SUPER REAL ME",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/417f9093f56aa032be0355bfc29e8cff.png",
    "genre": "Pop",
    "releaseYear": "2024",
    "runtime": "9 min",
    "streams": "39.8M",
    "topTrack": "Magnetic"
  },
  {
    "artist": "ILLIT",
    "album": "I'LL LIKE YOU",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ddb80ab795d81fc18d1f65885c697018.png",
    "genre": "Pop",
    "releaseYear": "2024",
    "runtime": "12 min",
    "streams": "17.4M",
    "topTrack": "Tick-Tack"
  },
  {
    "artist": "ILLIT",
    "album": "NOT CUTE ANYMORE",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/de9b80f0dd5cf69a10611094009b7ca3.png",
    "genre": "Pop",
    "releaseYear": "Unknown",
    "runtime": "4 min",
    "streams": "8.8M",
    "topTrack": "NOT CUTE ANYMORE"
  },
  {
    "artist": "ILLIT",
    "album": "bomb",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/473029eccfb86622121ca829391301cd.png",
    "genre": "Pop",
    "releaseYear": "2025",
    "runtime": "13 min",
    "streams": "15.0M",
    "topTrack": "Billyeoon Goyangi (Do the Dance)"
  },
  {
    "artist": "ILLIT",
    "album": "Cherish (My Love) (Remixes)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/663200918206747ab3b5a6d806764627.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "20 min",
    "streams": "3.7M",
    "topTrack": "Cherish (My Love)"
  },
  {
    "artist": "Juice WRLD",
    "album": "Goodbye & Good Riddance",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/cb8e41ecc96f769575babd440b81e795.png",
    "genre": "Hip-Hop",
    "releaseYear": "2018",
    "runtime": "44 min",
    "streams": "104.9M",
    "topTrack": "Lucid Dreams"
  },
  {
    "artist": "Juice WRLD",
    "album": "Legends Never Die",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/431bced28b81be1ae3bade7236a4ea0e.png",
    "genre": "Rap",
    "releaseYear": "2019",
    "runtime": "54 min",
    "streams": "83.2M",
    "topTrack": "Wishing Well"
  },
  {
    "artist": "Juice WRLD",
    "album": "Death Race For Love (Bonus Track Version)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f034c724d8fdfb1e70a069e0d4471857.png",
    "genre": "Rap",
    "releaseYear": "2022",
    "runtime": "32 min",
    "streams": "42.2M",
    "topTrack": "Robbery"
  },
  {
    "artist": "Juice WRLD",
    "album": "Death Race for Love",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/16ee17f2d1f0aeebdf9ef057a336b9b6.png",
    "genre": "Hip-Hop",
    "releaseYear": "2019",
    "runtime": "47 min",
    "streams": "44.9M",
    "topTrack": "Robbery"
  },
  {
    "artist": "Juice WRLD",
    "album": "Fighting Demons (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/89e13333ab7a976384bfb696b97ede5c.png",
    "genre": "Pop",
    "releaseYear": "2021",
    "runtime": "Unknown",
    "streams": "29.3M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Alex G",
    "album": "TRICK",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0b8520054cfd8af493b44a8bed0a2361.png",
    "genre": "Indie",
    "releaseYear": "2012",
    "runtime": "36 min",
    "streams": "93.8M",
    "topTrack": "Sarah"
  },
  {
    "artist": "Alex G",
    "album": "Treehouse",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8a19aa03b741979ced36eb3ae001e8e7.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "11.6M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Alex G",
    "album": "RACE",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/03337c9410154aa74af1e6b23bafa085.png",
    "genre": "Rock",
    "releaseYear": "Unknown",
    "runtime": "29 min",
    "streams": "38.0M",
    "topTrack": "Things to Do"
  },
  {
    "artist": "Alex G",
    "album": "RULES",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6b5cbb52f6a496fff407dc736a8a6235.png",
    "genre": "Pop",
    "releaseYear": "Unknown",
    "runtime": "32 min",
    "streams": "24.4M",
    "topTrack": "Mis"
  },
  {
    "artist": "Alex G",
    "album": "DSU",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4818ff3977c24fe3cfbe50c0f6a91e41.png",
    "genre": "Rock",
    "releaseYear": "2014",
    "runtime": "38 min",
    "streams": "30.1M",
    "topTrack": "Harvey"
  },
  {
    "artist": "Sufjan Stevens",
    "album": "Carrie & Lowell",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7568c8fa48cc4fb6cf688fe89161f8a5.png",
    "genre": "Folk",
    "releaseYear": "2015",
    "runtime": "43 min",
    "streams": "55.5M",
    "topTrack": "Fourth of July"
  },
  {
    "artist": "Sufjan Stevens",
    "album": "Illinois",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4884fbb2a3714e42cef5a1782e10c26e.png",
    "genre": "Indie",
    "releaseYear": "Unknown",
    "runtime": "70 min",
    "streams": "49.7M",
    "topTrack": "Chicago"
  },
  {
    "artist": "Sufjan Stevens",
    "album": "Seven Swans",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8782fdc9f68d419dbdbeaa5a331c181c.png",
    "genre": "Folk",
    "releaseYear": "Unknown",
    "runtime": "51 min",
    "streams": "21.8M",
    "topTrack": "To Be Alone With You"
  },
  {
    "artist": "Sufjan Stevens",
    "album": "Mystery of Love",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/398b66a2d9c7cadea70ae5c7b76c88de.png",
    "genre": "Indie",
    "releaseYear": "Unknown",
    "runtime": "10 min",
    "streams": "8.7M",
    "topTrack": "Mystery of Love"
  },
  {
    "artist": "Sufjan Stevens",
    "album": "The Age of Adz",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a4dfd7aae7ca0419edcade2414ecfafc.png",
    "genre": "Indie",
    "releaseYear": "2005",
    "runtime": "68 min",
    "streams": "17.9M",
    "topTrack": "Futile Devices"
  },
  {
    "artist": "Megan Thee Stallion",
    "album": "MEGAN",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4334b446d2918e8a838ae2d827059e80.png",
    "genre": "Rap",
    "releaseYear": "2024",
    "runtime": "51 min",
    "streams": "20.5M",
    "topTrack": "HISS"
  },
  {
    "artist": "Megan Thee Stallion",
    "album": "Good News",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2c0cf30a79745b7f10496740c4421bc1.png",
    "genre": "Rap",
    "releaseYear": "2020",
    "runtime": "49 min",
    "streams": "15.0M",
    "topTrack": "Body"
  },
  {
    "artist": "Megan Thee Stallion",
    "album": "Something for Thee Hotties",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7383751452028954cbc5d3f920a3df9e.png",
    "genre": "Rap",
    "releaseYear": "2021",
    "runtime": "11 min",
    "streams": "18.4M",
    "topTrack": "Thot Shit"
  },
  {
    "artist": "Megan Thee Stallion",
    "album": "Traumazine",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/cc2ce3c73f0a915829c2fb2cc3d59212.png",
    "genre": "Rap",
    "releaseYear": "2022",
    "runtime": "45 min",
    "streams": "15.5M",
    "topTrack": "Sweetest Pie"
  },
  {
    "artist": "Megan Thee Stallion",
    "album": "Suga",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2a2a68c2abb29b4c4441bbab43c2ba6a.png",
    "genre": "Rap",
    "releaseYear": "2020",
    "runtime": "24 min",
    "streams": "8.8M",
    "topTrack": "Savage"
  },
  {
    "artist": "Limp Bizkit",
    "album": "Chocolate Starfish and the Hot Dog Flavored Water",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9939a159279a21306d8d48a8562a5207.png",
    "genre": "Nu Metal",
    "releaseYear": "2000",
    "runtime": "68 min",
    "streams": "51.1M",
    "topTrack": "Rollin' (Air Raid Vehicle)"
  },
  {
    "artist": "Limp Bizkit",
    "album": "Significant Other",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1c00f7b9cd94c2b6fbd7f12fc00bd8d2.png",
    "genre": "Nu Metal",
    "releaseYear": "1999",
    "runtime": "65 min",
    "streams": "43.1M",
    "topTrack": "Break Stuff"
  },
  {
    "artist": "Limp Bizkit",
    "album": "Results May Vary",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d4df5bf6ddc9809e08a277527af6d80d.png",
    "genre": "Nu Metal",
    "releaseYear": "2003",
    "runtime": "63 min",
    "streams": "18.5M",
    "topTrack": "Behind Blue Eyes"
  },
  {
    "artist": "Limp Bizkit",
    "album": "Greatest Hitz",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/bf002e650cfd63417a2c18473e4975f9.png",
    "genre": "Nu Metal",
    "releaseYear": "2005",
    "runtime": "73 min",
    "streams": "10.5M",
    "topTrack": "Break Stuff"
  },
  {
    "artist": "Limp Bizkit",
    "album": "Three Dollar Bill, Y'all $",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7db0b03f38e0ae97937250a24643792a.png",
    "genre": "Nu Metal",
    "releaseYear": "1997",
    "runtime": "2 min",
    "streams": "6.5M",
    "topTrack": "Intro (Album Version)"
  },
  {
    "artist": "The Kid LAROI",
    "album": "THE FIRST TIME",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d9e4ce5c573d38516e4de0c49b993bd0.png",
    "genre": "Pop",
    "releaseYear": "2023",
    "runtime": "11 min",
    "streams": "33.4M",
    "topTrack": "LOVE AGAIN"
  },
  {
    "artist": "The Kid LAROI",
    "album": "F*CK LOVE 3+: OVER YOU",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e57e5cafe8c21c8024ab22facaa52ed7.png",
    "genre": "Rap",
    "releaseYear": "2021",
    "runtime": "78 min",
    "streams": "23.7M",
    "topTrack": "WITHOUT YOU"
  },
  {
    "artist": "The Kid LAROI",
    "album": "STAY (with Justin Bieber)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5ae611e1e5653f6a0ef16f510297a310.png",
    "genre": "Pop",
    "releaseYear": "2021",
    "runtime": "Unknown",
    "streams": "13.3M",
    "topTrack": "Unknown"
  },
  {
    "artist": "The Kid LAROI",
    "album": "F*CK LOVE 3: OVER YOU",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/54a8ba1b68322fab1b9b8059b0f46afa.png",
    "genre": "Rap",
    "releaseYear": "2021",
    "runtime": "Unknown",
    "streams": "8.3M",
    "topTrack": "Unknown"
  },
  {
    "artist": "The Kid LAROI",
    "album": "THE FIRST TIME (DELUXE VERSION)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d1f65f84ae28ca0be400965482555172.png",
    "genre": "Pop",
    "releaseYear": "2024",
    "runtime": "73 min",
    "streams": "12.0M",
    "topTrack": "NIGHTS LIKE THIS"
  },
  {
    "artist": "Halsey",
    "album": "Manic",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fc0dd217b63395a41a1ed4578996a928.png",
    "genre": "Pop",
    "releaseYear": "2020",
    "runtime": "16 min",
    "streams": "40.6M",
    "topTrack": "Without Me"
  },
  {
    "artist": "Halsey",
    "album": "BADLANDS (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d8241dd15fe7c16a8ee0e0e2940cc84e.png",
    "genre": "Pop",
    "releaseYear": "2015",
    "runtime": "55 min",
    "streams": "32.7M",
    "topTrack": "Colors"
  },
  {
    "artist": "Halsey",
    "album": "hopeless fountain kingdom (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a0d84c010415c5ea584b109646a17a95.png",
    "genre": "Pop",
    "releaseYear": "2017",
    "runtime": "50 min",
    "streams": "23.5M",
    "topTrack": "Bad at Love"
  },
  {
    "artist": "Halsey",
    "album": "BADLANDS",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c50f1fd15b33b3535674eaaa9ebe4128.png",
    "genre": "Pop",
    "releaseYear": "2015",
    "runtime": "40 min",
    "streams": "11.5M",
    "topTrack": "Colors"
  },
  {
    "artist": "Halsey",
    "album": "hopeless fountain kingdom (Deluxe Plus)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e6b41970aa5433c04772bf3bc2e0b827.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "7.1M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Kid Cudi",
    "album": "Man on the Moon: The End of Day",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8ca0fd6e84a14317a7d21eaebc81320a.png",
    "genre": "Hip-Hop",
    "releaseYear": "2009",
    "runtime": "58 min",
    "streams": "46.1M",
    "topTrack": "Pursuit of Happiness (Nightmare)"
  },
  {
    "artist": "Kid Cudi",
    "album": "Man on the Moon II: The Legend of Mr. Rager",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/710d5f1abe58c7a83492a86d0235d2b9.png",
    "genre": "Hip-Hop",
    "releaseYear": "2010",
    "runtime": "61 min",
    "streams": "46.3M",
    "topTrack": "Mr. Rager"
  },
  {
    "artist": "Kid Cudi",
    "album": "Man on the Moon: The End of Day (Int'l Version)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c75029a30eeb8fd9846cdb8e30d45440.png",
    "genre": "Hip-Hop",
    "releaseYear": "2009",
    "runtime": "63 min",
    "streams": "16.5M",
    "topTrack": "Pursuit of Happiness (Nightmare)"
  },
  {
    "artist": "Kid Cudi",
    "album": "Man On The Moon: The End Of Day (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1b6d18d3a9c2a2c3fc4d7ddbab09c4c4.png",
    "genre": "Hip-Hop",
    "releaseYear": "2009",
    "runtime": "Unknown",
    "streams": "22.2M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Kid Cudi",
    "album": "Man on the Moon III: The Chosen",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c29770fff147fe5ff4250a581f3681ea.png",
    "genre": "Hip-Hop",
    "releaseYear": "2020",
    "runtime": "58 min",
    "streams": "26.4M",
    "topTrack": "Tequila Shots"
  },
  {
    "artist": "Gunna",
    "album": "a Gift & a Curse",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/668aedd783a87c9cbd4eca09c68e379e.png",
    "genre": "Hip-Hop",
    "releaseYear": "2022",
    "runtime": "45 min",
    "streams": "24.5M",
    "topTrack": "fukumean"
  },
  {
    "artist": "Gunna",
    "album": "DS4EVER",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/838ce453d3ac787d7509edf5495b7ce1.png",
    "genre": "Rap",
    "releaseYear": "2020",
    "runtime": "17 min",
    "streams": "34.4M",
    "topTrack": "P power (feat. Drake)"
  },
  {
    "artist": "Gunna",
    "album": "One of Wun",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/cc61dda0c1d79176007fc61694a9dad3.png",
    "genre": "Hip-Hop",
    "releaseYear": "2024",
    "runtime": "5 min",
    "streams": "29.7M",
    "topTrack": "prada dem (feat. Offset)"
  },
  {
    "artist": "Gunna",
    "album": "Drip or Drown 2",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c30fd5896cf34242daa618f8a2266f5e.png",
    "genre": "Rap",
    "releaseYear": "2017",
    "runtime": "48 min",
    "streams": "16.5M",
    "topTrack": "Who You Foolin"
  },
  {
    "artist": "Gunna",
    "album": "WUNNA",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e01fcfeaff4dc476345a35a0c015e322.png",
    "genre": "2020",
    "releaseYear": "2019",
    "runtime": "47 min",
    "streams": "21.4M",
    "topTrack": "MET GALA"
  },
  {
    "artist": "Young Thug",
    "album": "So Much Fun",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c3ef0cd171619836e07f1a7e180e649d.png",
    "genre": "Rap",
    "releaseYear": "2019",
    "runtime": "5 min",
    "streams": "33.7M",
    "topTrack": "The London (feat. J. Cole & Travis Scott)"
  },
  {
    "artist": "Young Thug",
    "album": "So Much Fun (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7f18d6243932f54ff4131b5ac101cb47.png",
    "genre": "Rap",
    "releaseYear": "2019",
    "runtime": "68 min",
    "streams": "15.9M",
    "topTrack": "The London (feat. J. Cole & Travis Scott)"
  },
  {
    "artist": "Young Thug",
    "album": "PUNK",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b2b2ec68a8c185f375f82ccc7dcafefd.png",
    "genre": "Rap",
    "releaseYear": "2021",
    "runtime": "62 min",
    "streams": "17.1M",
    "topTrack": "Droppin Jewels"
  },
  {
    "artist": "Young Thug",
    "album": "Slime Season 3",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a6c3aec9c934fb249a41818ac6d55360.png",
    "genre": "Rap",
    "releaseYear": "2016",
    "runtime": "27 min",
    "streams": "15.6M",
    "topTrack": "Digits"
  },
  {
    "artist": "Young Thug",
    "album": "Jeffery",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0bddfa49e1d95f620267fac8f4663a60.png",
    "genre": "Rap",
    "releaseYear": "2016",
    "runtime": "42 min",
    "streams": "14.7M",
    "topTrack": "Pick Up the Phone"
  },
  {
    "artist": "Avril Lavigne",
    "album": "Let Go",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2afa9f89a4ba981d3c6876e2e1725f28.png",
    "genre": "Pop",
    "releaseYear": "2002",
    "runtime": "48 min",
    "streams": "65.6M",
    "topTrack": "Complicated"
  },
  {
    "artist": "Avril Lavigne",
    "album": "Under My Skin",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/48b5d07f4f6bb78c0323ccabfa829767.png",
    "genre": "Rock",
    "releaseYear": "2004",
    "runtime": "40 min",
    "streams": "37.1M",
    "topTrack": "My Happy Ending"
  },
  {
    "artist": "Avril Lavigne",
    "album": "The Best Damn Thing (Expanded Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d42e71af1b90e1400028a76880e37c5b.png",
    "genre": "Pop",
    "releaseYear": "2007",
    "runtime": "58 min",
    "streams": "16.6M",
    "topTrack": "Girlfriend"
  },
  {
    "artist": "Avril Lavigne",
    "album": "The Best Damn Thing",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f7737f9c03a2a862856d1ce0b3bdc69b.png",
    "genre": "Pop",
    "releaseYear": "2007",
    "runtime": "37 min",
    "streams": "24.4M",
    "topTrack": "When You're Gone"
  },
  {
    "artist": "Avril Lavigne",
    "album": "Goodbye Lullaby (Expanded Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/94b17ad8f8b3887f281ad93b5e5d315d.png",
    "genre": "Rock",
    "releaseYear": "2011",
    "runtime": "61 min",
    "streams": "13.9M",
    "topTrack": "What the Hell"
  },
  {
    "artist": "Shawn Mendes",
    "album": "Illuminate (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ae06e2fcdfade4102007dcc5ffa9423d.png",
    "genre": "Pop",
    "releaseYear": "2016",
    "runtime": "55 min",
    "streams": "24.2M",
    "topTrack": "Treat You Better"
  },
  {
    "artist": "Shawn Mendes",
    "album": "Handwritten",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8639b86d5fa3ad7a880255328f73e4eb.png",
    "genre": "Pop",
    "releaseYear": "2015",
    "runtime": "51 min",
    "streams": "15.1M",
    "topTrack": "Stitches"
  },
  {
    "artist": "Shawn Mendes",
    "album": "Illuminate",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1e067d8d31c0064366c773f512d1e408.png",
    "genre": "Pop",
    "releaseYear": "2016",
    "runtime": "55 min",
    "streams": "10.5M",
    "topTrack": "Treat You Better"
  },
  {
    "artist": "Shawn Mendes",
    "album": "Shawn Mendes",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7fc1d5f109ade40ac913ff7b3466bdc9.png",
    "genre": "Pop",
    "releaseYear": "2018",
    "runtime": "44 min",
    "streams": "21.6M",
    "topTrack": "Lost in Japan"
  },
  {
    "artist": "Shawn Mendes",
    "album": "Shawn Mendes (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0e1ae8730eab305c98c6accc5f7bd60d.png",
    "genre": "Pop",
    "releaseYear": "Unknown",
    "runtime": "50 min",
    "streams": "8.6M",
    "topTrack": "Señorita"
  },
  {
    "artist": "Empire of the Sun",
    "album": "Walking On A Dream (10th Anniversary Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7daa4cb95e9739838b966e7b8f69a84e.png",
    "genre": "Electronic",
    "releaseYear": "Unknown",
    "runtime": "63 min",
    "streams": "26.1M",
    "topTrack": "Walking on a Dream"
  },
  {
    "artist": "Empire of the Sun",
    "album": "Walking on a Dream",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/461fe4e8e5ee4eed9cf34766f3541dc8.png",
    "genre": "Electronic",
    "releaseYear": "Unknown",
    "runtime": "47 min",
    "streams": "23.2M",
    "topTrack": "Walking on a Dream"
  },
  {
    "artist": "Empire of the Sun",
    "album": "Ice on the Dune",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/13871c3190e64b3893cb457dc11ec132.png",
    "genre": "Pop",
    "releaseYear": "2013",
    "runtime": "44 min",
    "streams": "8.0M",
    "topTrack": "Alive"
  },
  {
    "artist": "Empire of the Sun",
    "album": "Walking On A Dream (Special Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f4ae1bf8780a43fa8a731ed7f96ea281.png",
    "genre": "Electronic",
    "releaseYear": "Unknown",
    "runtime": "100 min",
    "streams": "3.8M",
    "topTrack": "Walking on a Dream"
  },
  {
    "artist": "Empire of the Sun",
    "album": "Two Vines (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f43c175cb56876dd49e05a0140fdfe70.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "2.5M",
    "topTrack": "Unknown"
  },
  {
    "artist": "bôa",
    "album": "Twilight",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/40564dd1a58f969fc3ee3c49bddffd23.png",
    "genre": "Rock",
    "releaseYear": "1998",
    "runtime": "58 min",
    "streams": "75.4M",
    "topTrack": "Duvet"
  },
  {
    "artist": "bôa",
    "album": "Get There",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/62378e6d22f640d0c0ad3b10ae2471fc.png",
    "genre": "Rock",
    "releaseYear": "Unknown",
    "runtime": "40 min",
    "streams": "4.5M",
    "topTrack": "Get There"
  },
  {
    "artist": "bôa",
    "album": "Duvet",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/edb95c718cacddcfe052f6c63244a6db.png",
    "genre": "Rock",
    "releaseYear": "Unknown",
    "runtime": "17 min",
    "streams": "1.4M",
    "topTrack": "Duvet"
  },
  {
    "artist": "bôa",
    "album": "Whiplash",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e19645a65bb6a9ef626325e53fcbe994.png",
    "genre": "2024",
    "releaseYear": "Unknown",
    "runtime": "47 min",
    "streams": "1.6M",
    "topTrack": "Walk With Me"
  },
  {
    "artist": "bôa",
    "album": "Walk With Me",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5983c15cb4805f5bcf25e3d9a7ec9c27.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "296.5K",
    "topTrack": "Unknown"
  },
  {
    "artist": "Ed Sheeran",
    "album": "÷ (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5c808e167d1af3d4c89e711e3baaf8ab.png",
    "genre": "Pop",
    "releaseYear": "Unknown",
    "runtime": "59 min",
    "streams": "47.0M",
    "topTrack": "Shape of You"
  },
  {
    "artist": "Ed Sheeran",
    "album": "x (Deluxe Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d904dd085fb44fabcfd0834b8d2a5d92.png",
    "genre": "Pop",
    "releaseYear": "2014",
    "runtime": "63 min",
    "streams": "41.7M",
    "topTrack": "Thinking Out Loud"
  },
  {
    "artist": "Ed Sheeran",
    "album": "+",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d08fbb920e514f5c893d95552379d3fc.png",
    "genre": "Acoustic",
    "releaseYear": "2011",
    "runtime": "46 min",
    "streams": "36.8M",
    "topTrack": "The A Team"
  },
  {
    "artist": "Ed Sheeran",
    "album": "No.6 Collaborations Project",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/46f1ef53764a17485012bf817441ecb8.png",
    "genre": "Pop",
    "releaseYear": "2019",
    "runtime": "43 min",
    "streams": "14.5M",
    "topTrack": "Beautiful People (feat. Khalid)"
  },
  {
    "artist": "Ed Sheeran",
    "album": "=",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/cb28e94e9867ea7388dc9b5b8eeab8f9.png",
    "genre": "Pop",
    "releaseYear": "2021",
    "runtime": "48 min",
    "streams": "14.3M",
    "topTrack": "Bad Habits"
  },
  {
    "artist": "Chief Keef",
    "album": "Finally Rich",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/032eedef1b09eed758de4429740195da.png",
    "genre": "Rap",
    "releaseYear": "2012",
    "runtime": "45 min",
    "streams": "31.1M",
    "topTrack": "Love Sosa"
  },
  {
    "artist": "Chief Keef",
    "album": "Back From The Dead 2",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7b89e12036a0472fcb424b711cd2916c.png",
    "genre": "Rap",
    "releaseYear": "2014",
    "runtime": "76 min",
    "streams": "9.2M",
    "topTrack": "Faneto"
  },
  {
    "artist": "Chief Keef",
    "album": "Back From The Dead",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/00982bab3aae4dacb671a4bf0682624a.png",
    "genre": "Rap",
    "releaseYear": "2011",
    "runtime": "42 min",
    "streams": "10.4M",
    "topTrack": "I Don't Like"
  },
  {
    "artist": "Chief Keef",
    "album": "Dedication",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8190cb8e7c44c5fb25342fee3d9863e5.png",
    "genre": "Rap",
    "releaseYear": "2017",
    "runtime": "45 min",
    "streams": "9.4M",
    "topTrack": "Kills"
  },
  {
    "artist": "Chief Keef",
    "album": "Finally Rich (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c7302fd649a79e6c51f25839c3f0cab0.png",
    "genre": "Rap",
    "releaseYear": "Unknown",
    "runtime": "55 min",
    "streams": "8.5M",
    "topTrack": "Love Sosa"
  },
  {
    "artist": "Troye Sivan",
    "album": "Something to Give Each Other",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0a8521c16d07751d4ea03546825a4dea.png",
    "genre": "Pop",
    "releaseYear": "2023",
    "runtime": "30 min",
    "streams": "56.9M",
    "topTrack": "Rush [Explicit]"
  },
  {
    "artist": "Troye Sivan",
    "album": "Blue Neighbourhood (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f018307055339656a43de6f27b992268.png",
    "genre": "Pop",
    "releaseYear": "2015",
    "runtime": "51 min",
    "streams": "26.8M",
    "topTrack": "YOUTH"
  },
  {
    "artist": "Troye Sivan",
    "album": "Bloom",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1ca145aba5daa3b2a90c5c645e2f3346.png",
    "genre": "Pop",
    "releaseYear": "2018",
    "runtime": "36 min",
    "streams": "25.6M",
    "topTrack": "My My My!"
  },
  {
    "artist": "Troye Sivan",
    "album": "Strawberries & Cigarettes",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9fd3a99ccb3d783fdecb0b47c4ef725f.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "9.4M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Troye Sivan",
    "album": "Angel Baby",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f5882ddaea5c7724e229b86849df4daa.png",
    "genre": "Pop",
    "releaseYear": "2021",
    "runtime": "Unknown",
    "streams": "6.6M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Alice in Chains",
    "album": "Jar of Flies",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/92bc3c5f6ee57f0da77769f620a10ccd.png",
    "genre": "Rock",
    "releaseYear": "1994",
    "runtime": "4 min",
    "streams": "34.2M",
    "topTrack": "Don't Follow"
  },
  {
    "artist": "Alice in Chains",
    "album": "Facelift",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/61d67476df27e0c4b4450f47f654be27.png",
    "genre": "Rock",
    "releaseYear": "1990",
    "runtime": "54 min",
    "streams": "38.0M",
    "topTrack": "Man in the Box"
  },
  {
    "artist": "Alice in Chains",
    "album": "Dirt",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6f5180404cd849dcb9d1c108300befc3.png",
    "genre": "Rock",
    "releaseYear": "1992",
    "runtime": "65 min",
    "streams": "30.4M",
    "topTrack": "Would?"
  },
  {
    "artist": "Alice in Chains",
    "album": "Dirt (2022 Remaster)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5c4b6583f6112eaa243f12ca00527068.png",
    "genre": "Alternative",
    "releaseYear": "1992",
    "runtime": "57 min",
    "streams": "35.6M",
    "topTrack": "Would? (2022 remaster)"
  },
  {
    "artist": "Alice in Chains",
    "album": "Alice in Chains",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/004fb80d419fcb44990c9a35190e4b1a.png",
    "genre": "Rock",
    "releaseYear": "1995",
    "runtime": "64 min",
    "streams": "17.5M",
    "topTrack": "Heaven Beside You"
  },
  {
    "artist": "Bring Me the Horizon",
    "album": "That's the Spirit",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3a4e081256c11f2a1fb72f0b005f9f04.png",
    "genre": "Metalcore",
    "releaseYear": "2015",
    "runtime": "45 min",
    "streams": "53.7M",
    "topTrack": "Throne"
  },
  {
    "artist": "Bring Me the Horizon",
    "album": "Sempiternal (Expanded Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/bb2d860a26f50afdce45f482dd754b1c.png",
    "genre": "Metalcore",
    "releaseYear": "Unknown",
    "runtime": "53 min",
    "streams": "34.3M",
    "topTrack": "Can You Feel My Heart"
  },
  {
    "artist": "Bring Me the Horizon",
    "album": "POST HUMAN: SURVIVAL HORROR",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f729bad90a3a7ae02c78fae2ab755d00.png",
    "genre": "Nu Metal",
    "releaseYear": "2019",
    "runtime": "32 min",
    "streams": "31.1M",
    "topTrack": "Parasite Eve"
  },
  {
    "artist": "Bring Me the Horizon",
    "album": "Count Your Blessings",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e3e350f12045444cb76c710a43bb7452.png",
    "genre": "Metalcore",
    "releaseYear": "2006",
    "runtime": "36 min",
    "streams": "20.2M",
    "topTrack": "Pray for Plagues"
  },
  {
    "artist": "Bring Me the Horizon",
    "album": "Suicide Season",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0d92ccd8122b15ccc6301303b4455e29.png",
    "genre": "Metalcore",
    "releaseYear": "2008",
    "runtime": "42 min",
    "streams": "22.7M",
    "topTrack": "Chelsea Smile"
  },
  {
    "artist": "Miguel",
    "album": "All I Want Is You",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d9ffbbdd038682fc20a1f640b2eaacc5.png",
    "genre": "R&B",
    "releaseYear": "2010",
    "runtime": "42 min",
    "streams": "38.3M",
    "topTrack": "Sure Thing"
  },
  {
    "artist": "Miguel",
    "album": "War & Leisure",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/84126ad63faa8ad9365221eea8ccba91.png",
    "genre": "Soul",
    "releaseYear": "2017",
    "runtime": "48 min",
    "streams": "13.6M",
    "topTrack": "Banana Clip"
  },
  {
    "artist": "Miguel",
    "album": "Kaleidoscope Dream",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ba0d6b985daa7f31e67b16e0ca2ee1cd.png",
    "genre": "R&B",
    "releaseYear": "2012",
    "runtime": "50 min",
    "streams": "9.3M",
    "topTrack": "Adorn"
  },
  {
    "artist": "Miguel",
    "album": "Rogue Waves",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/17dbff47bf0c7adace37213242f411e0.png",
    "genre": "Chillout",
    "releaseYear": "Unknown",
    "runtime": "19 min",
    "streams": "3.0M",
    "topTrack": "waves - Tame Impala Remix"
  },
  {
    "artist": "Miguel",
    "album": "Kaleidoscope Dream (Deluxe Version)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3d9667aa9b68dda691c7ce51c76b8b73.png",
    "genre": "R&B",
    "releaseYear": "Unknown",
    "runtime": "57 min",
    "streams": "2.9M",
    "topTrack": "Adorn"
  },
  {
    "artist": "Doechii",
    "album": "Alligator Bites Never Heal",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7860c303862f4cd1d1101f7e5726661b.png",
    "genre": "Hip-Hop",
    "releaseYear": "2024",
    "runtime": "Unknown",
    "streams": "58.5M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Doechii",
    "album": "Alter Ego (with JT)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ec6b57bccdb99c83bb68e7ccd7d6fe97.png",
    "genre": "Rush",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "8.1M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Doechii",
    "album": "What It Is (Versions)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1f86e5419c855e3461bd92cd9daf621b.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "9 min",
    "streams": "4.1M",
    "topTrack": "What It Is (Solo Version)"
  },
  {
    "artist": "Doechii",
    "album": "Anxiety",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d73cc272bab5eef2b1e86d925322fc5a.png",
    "genre": "Hip-Hop",
    "releaseYear": "Unknown",
    "runtime": "6 min",
    "streams": "3.3M",
    "topTrack": "DENIAL IS A RIVER"
  },
  {
    "artist": "Doechii",
    "album": "Alligator Bites Never Heal (Extended)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/36cc49445e63cdfb4c3f990a3403028a.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "52 min",
    "streams": "2.8M",
    "topTrack": "DENIAL IS A RIVER"
  },
  {
    "artist": "Chase Atlantic",
    "album": "Chase Atlantic",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9e3232f437c90e5ece62dd0b5df2950b.png",
    "genre": "Alternative",
    "releaseYear": "2017",
    "runtime": "57 min",
    "streams": "61.6M",
    "topTrack": "Swim"
  },
  {
    "artist": "Chase Atlantic",
    "album": "Nostalgia - EP",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d4b3e1652a3f9f019c3d5b06cc430c5c.png",
    "genre": "Pop",
    "releaseYear": "2015",
    "runtime": "18 min",
    "streams": "11.4M",
    "topTrack": "Friends"
  },
  {
    "artist": "Chase Atlantic",
    "album": "Nostalgia",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a386f623aa1e57d57639adecd5d942ae.png",
    "genre": "Pop",
    "releaseYear": "2015",
    "runtime": "14 min",
    "streams": "11.9M",
    "topTrack": "Meddle About"
  },
  {
    "artist": "Chase Atlantic",
    "album": "Phases",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5b2a146ab433ce9bd53e4d9f7ca4f771.png",
    "genre": "Pop",
    "releaseYear": "Unknown",
    "runtime": "41 min",
    "streams": "23.0M",
    "topTrack": "Heaven and Back"
  },
  {
    "artist": "Chase Atlantic",
    "album": "Paradise - EP",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fd282ea3413751f7774ec5fcf462e69b.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "19 min",
    "streams": "9.3M",
    "topTrack": "Slow Down"
  },
  {
    "artist": "Nicki Minaj",
    "album": "Pink Friday",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/830f1278fbfa4960ec0e82142ccc0ccf.png",
    "genre": "Hip-Hop",
    "releaseYear": "2010",
    "runtime": "32 min",
    "streams": "24.8M",
    "topTrack": "Your Love"
  },
  {
    "artist": "Nicki Minaj",
    "album": "Pink Friday (Complete Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/620018d2afa552f9a61a7a1d21d46066.png",
    "genre": "Rap",
    "releaseYear": "2020",
    "runtime": "27 min",
    "streams": "13.1M",
    "topTrack": "Super Bass"
  },
  {
    "artist": "Nicki Minaj",
    "album": "Pink Friday ... Roman Reloaded",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/449cf941910b14fe8102e453776ff675.png",
    "genre": "Pop",
    "releaseYear": "2012",
    "runtime": "70 min",
    "streams": "10.9M",
    "topTrack": "Starships"
  },
  {
    "artist": "Nicki Minaj",
    "album": "Pink Friday: Roman Reloaded The Re-Up (Explicit Version)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/65692769c0d1278df3b31fd0d333bfc3.png",
    "genre": "Pop",
    "releaseYear": "2012",
    "runtime": "101 min",
    "streams": "10.6M",
    "topTrack": "Starships"
  },
  {
    "artist": "Nicki Minaj",
    "album": "Pink Friday ... Roman Reloaded (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/41494b656c177032cbfaca21096b2e1d.png",
    "genre": "Pop",
    "releaseYear": "2012",
    "runtime": "Unknown",
    "streams": "12.0M",
    "topTrack": "Roman Holiday [Explicit]"
  },
  {
    "artist": "Ellie Goulding",
    "album": "Lights",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/89e30a9185dd7c71a9f44c20a4ec593b.png",
    "genre": "Pop",
    "releaseYear": "2010",
    "runtime": "54 min",
    "streams": "18.8M",
    "topTrack": "Lights"
  },
  {
    "artist": "Ellie Goulding",
    "album": "Halcyon Days",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0ade8377d6e5a0c7beb5b886062331ed.png",
    "genre": "Pop",
    "releaseYear": "2012",
    "runtime": "75 min",
    "streams": "13.6M",
    "topTrack": "Burn"
  },
  {
    "artist": "Ellie Goulding",
    "album": "Delirium (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/305d648da0869ded53c7691ca3baadee.png",
    "genre": "Pop",
    "releaseYear": "2015",
    "runtime": "74 min",
    "streams": "12.0M",
    "topTrack": "On My Mind"
  },
  {
    "artist": "Ellie Goulding",
    "album": "Brightest Blue",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9ca1dea5bb2ccf49f2fd078ad4df7c5b.png",
    "genre": "Pop",
    "releaseYear": "2020",
    "runtime": "31 min",
    "streams": "9.3M",
    "topTrack": "Hate Me"
  },
  {
    "artist": "Ellie Goulding",
    "album": "Halcyon",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2f65b3f6d1554111b367915a2d7241e7.png",
    "genre": "Pop",
    "releaseYear": "2012",
    "runtime": "51 min",
    "streams": "12.0M",
    "topTrack": "Anything Could Happen"
  },
  {
    "artist": "The Police",
    "album": "Synchronicity (Remastered 2003)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/186d8f509e10fafc3493fc2ae7852a64.png",
    "genre": "Rock",
    "releaseYear": "2003",
    "runtime": "Unknown",
    "streams": "21.5M",
    "topTrack": "Unknown"
  },
  {
    "artist": "The Police",
    "album": "Outlandos D'Amour (Remastered 2003)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c1a4b8068548ee324bbdcb77b983543f.png",
    "genre": "Punk",
    "releaseYear": "2003",
    "runtime": "Unknown",
    "streams": "10.1M",
    "topTrack": "Unknown"
  },
  {
    "artist": "The Police",
    "album": "Reggatta de Blanc (Remastered 2003)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6035f622deeac73fa710df95c85e1369.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "8.6M",
    "topTrack": "Unknown"
  },
  {
    "artist": "The Police",
    "album": "Ghost In The Machine (Remastered 2003)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/da40631f39c166b3108a82ae953a8ba8.png",
    "genre": "Rock",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "4.9M",
    "topTrack": "Unknown"
  },
  {
    "artist": "The Police",
    "album": "Synchronicity",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c98201c8cc944a939dd8e1e54abf69b3.png",
    "genre": "Rock",
    "releaseYear": "1983",
    "runtime": "40 min",
    "streams": "4.9M",
    "topTrack": "Every Breath You Take"
  },
  {
    "artist": "Chris Brown",
    "album": "Chris Brown",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f756ae41b874431ecfb35b40b4c93fb6.png",
    "genre": "R&B",
    "releaseYear": "2005",
    "runtime": "54 min",
    "streams": "5.9M",
    "topTrack": "Say Goodbye"
  },
  {
    "artist": "Chris Brown",
    "album": "Indigo (Extended)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ad53a2b1eedf5d63c4fbc9bf3dd05a02.png",
    "genre": "R&B",
    "releaseYear": "2019",
    "runtime": "127 min",
    "streams": "11.3M",
    "topTrack": "Under the Influence"
  },
  {
    "artist": "Chris Brown",
    "album": "F.A.M.E. (Expanded Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a87d40fe905ed5efad4b671e81919166.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "11 min",
    "streams": "7.7M",
    "topTrack": "Yeah 3X"
  },
  {
    "artist": "Chris Brown",
    "album": "Indigo",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d113179e77b9cc2d54528d77014e85a1.png",
    "genre": "R&B",
    "releaseYear": "2019",
    "runtime": "85 min",
    "streams": "10.5M",
    "topTrack": "Undecided"
  },
  {
    "artist": "Chris Brown",
    "album": "Chris Brown (Expanded Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b90b295a726fb0c5991bfb6e99898af1.png",
    "genre": "R&B",
    "releaseYear": "2006",
    "runtime": "66 min",
    "streams": "7.1M",
    "topTrack": "Say Goodbye"
  },
  {
    "artist": "The Rolling Stones",
    "album": "Aftermath",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/cc919c5a2f70e421444249abf9185eb6.png",
    "genre": "Rock",
    "releaseYear": "1965",
    "runtime": "53 min",
    "streams": "18.7M",
    "topTrack": "Under My Thumb"
  },
  {
    "artist": "The Rolling Stones",
    "album": "Let It Bleed",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4c38103f05b36d8c042b389a33ab0011.png",
    "genre": "Rock",
    "releaseYear": "1969",
    "runtime": "44 min",
    "streams": "19.1M",
    "topTrack": "Gimme Shelter"
  },
  {
    "artist": "The Rolling Stones",
    "album": "Some Girls",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2b25566ff3f1fc9afd419ba4bb6c72c7.png",
    "genre": "Rock",
    "releaseYear": "1978",
    "runtime": "49 min",
    "streams": "11.8M",
    "topTrack": "Beast of Burden"
  },
  {
    "artist": "The Rolling Stones",
    "album": "Out of Our Heads",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/eb39a5c0b51eb6ac1d757077205859cb.png",
    "genre": "Rock",
    "releaseYear": "1965",
    "runtime": "33 min",
    "streams": "6.9M",
    "topTrack": "(I Can't Get No) Satisfaction"
  },
  {
    "artist": "The Rolling Stones",
    "album": "Rolled Gold +",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0c9d4db3bdc435fa26793f28ea95f99a.png",
    "genre": "Rock",
    "releaseYear": "Unknown",
    "runtime": "151 min",
    "streams": "3.0M",
    "topTrack": "Gimme Shelter"
  },
  {
    "artist": "EsDeeKid",
    "album": "Rebel",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/08e715c0f5f7e77f6f1c6014e0f3e7d4.png",
    "genre": "Rap",
    "releaseYear": "2025",
    "runtime": "Unknown",
    "streams": "50.1M",
    "topTrack": "Unknown"
  },
  {
    "artist": "EsDeeKid",
    "album": "Century",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fc0b26c605bbeb763482778c28c12cfa.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "5.7M",
    "topTrack": "Unknown"
  },
  {
    "artist": "EsDeeKid",
    "album": "Palaces",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/319a5188a01172b42a6307a5d4c8448c.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "1.6M",
    "topTrack": "Unknown"
  },
  {
    "artist": "EsDeeKid",
    "album": "Ferragamo",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c86b001513b61adf0f182f2e9273b73b.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "1.2M",
    "topTrack": "Unknown"
  },
  {
    "artist": "EsDeeKid",
    "album": "LV Sandals",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/58cd432978d99ca5812649f830ca4fa1.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "1.8M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Gwen Stefani",
    "album": "The Sweet Escape",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/00f4aef783c07afd0bd8e33f84051362.png",
    "genre": "Pop",
    "releaseYear": "2006",
    "runtime": "47 min",
    "streams": "23.9M",
    "topTrack": "The Sweet Escape"
  },
  {
    "artist": "Gwen Stefani",
    "album": "Love Angel Music Baby",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9df65bc5682d88226c9b71436ee41d08.png",
    "genre": "Pop",
    "releaseYear": "2004",
    "runtime": "50 min",
    "streams": "18.8M",
    "topTrack": "Hollaback Girl"
  },
  {
    "artist": "Gwen Stefani",
    "album": "Love. Angel. Music. Baby.",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f822a11df7ae32fe4c76a21461325bf2.png",
    "genre": "Pop",
    "releaseYear": "2004",
    "runtime": "49 min",
    "streams": "9.7M",
    "topTrack": "Hollaback Girl"
  },
  {
    "artist": "Gwen Stefani",
    "album": "Love. Angel. Music. Baby. (Deluxe Version)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ae7f20f2d0b3440f956ff2124eaea6eb.png",
    "genre": "Pop",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "6.8M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Gwen Stefani",
    "album": "So Fresh - The Hits of Summer 2008 & The Hits of 2007",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3b6720d434e24e65bd49355f6e79ff5d.png",
    "genre": "Soul",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "1.4M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Tears for Fears",
    "album": "Songs From The Big Chair (Super Deluxe Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/db2010fbfdaeea0d270993d87af3c96a.png",
    "genre": "Pop",
    "releaseYear": "1985",
    "runtime": "305 min",
    "streams": "26.2M",
    "topTrack": "Everybody Wants to Rule the World"
  },
  {
    "artist": "Tears for Fears",
    "album": "Songs from the Big Chair",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f3668f68387d4336c3a797a66196f851.png",
    "genre": "Pop",
    "releaseYear": "1985",
    "runtime": "42 min",
    "streams": "16.1M",
    "topTrack": "Everybody Wants to Rule the World"
  },
  {
    "artist": "Tears for Fears",
    "album": "Songs From The Big Chair (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8ce8cee9d9435ba093d3cd8dc41f8892.png",
    "genre": "Pop",
    "releaseYear": "Unknown",
    "runtime": "153 min",
    "streams": "7.1M",
    "topTrack": "Everybody Wants to Rule the World"
  },
  {
    "artist": "Tears for Fears",
    "album": "The Hurting",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d545a96b5f21aa48f5cdead6fdb4e319.png",
    "genre": "Pop",
    "releaseYear": "1983",
    "runtime": "43 min",
    "streams": "8.5M",
    "topTrack": "Mad World"
  },
  {
    "artist": "Tears for Fears",
    "album": "Tears Roll Down (Greatest Hits 82-92)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/dcd9b642fec54a00a4cb310fd9775608.png",
    "genre": "Pop",
    "releaseYear": "Unknown",
    "runtime": "61 min",
    "streams": "4.6M",
    "topTrack": "Everybody Wants to Rule the World"
  },
  {
    "artist": "5 Seconds of Summer",
    "album": "Youngblood (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a888018398bf7b1909d0e3cb63f9f01f.png",
    "genre": "Pop",
    "releaseYear": "2018",
    "runtime": "18 min",
    "streams": "40.4M",
    "topTrack": "Youngblood"
  },
  {
    "artist": "5 Seconds of Summer",
    "album": "5 Seconds of Summer",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/cdd6ecd970739e3634f26b7472cfe273.png",
    "genre": "Pop",
    "releaseYear": "2014",
    "runtime": "26 min",
    "streams": "30.0M",
    "topTrack": "She Looks So Perfect"
  },
  {
    "artist": "5 Seconds of Summer",
    "album": "CALM",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0ee7f0ea17b3a3df65cb86a4fc4e91c9.png",
    "genre": "Pop",
    "releaseYear": "2020",
    "runtime": "46 min",
    "streams": "31.7M",
    "topTrack": "Teeth"
  },
  {
    "artist": "5 Seconds of Summer",
    "album": "Sounds Good Feels Good (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ebcf55112e76c2b03bd8a0dfaabcd7d8.png",
    "genre": "5sos",
    "releaseYear": "2015",
    "runtime": "62 min",
    "streams": "15.3M",
    "topTrack": "Jet Black Heart"
  },
  {
    "artist": "5 Seconds of Summer",
    "album": "13 Reasons Why (Season 3)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/183e3fd4ce533bd300ef17c6b444cc33.png",
    "genre": "Unknown",
    "releaseYear": "2019",
    "runtime": "63 min",
    "streams": "3.9M",
    "topTrack": "Teeth"
  },
  {
    "artist": "Selena Gomez",
    "album": "Revival (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b4e4351135a9c06a00b9d9400c0db566.png",
    "genre": "Pop",
    "releaseYear": "2015",
    "runtime": "54 min",
    "streams": "33.7M",
    "topTrack": "Same Old Love"
  },
  {
    "artist": "Selena Gomez",
    "album": "Rare",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fa3c3c83b94b01f20bacdb38d538378e.png",
    "genre": "Pop",
    "releaseYear": "2020",
    "runtime": "39 min",
    "streams": "28.3M",
    "topTrack": "Lose You to Love Me"
  },
  {
    "artist": "Selena Gomez",
    "album": "Fetish (feat. Gucci Mane)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1b2acd9a5df76d2d700aa0504214cdb9.png",
    "genre": "Pop",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "8.8M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Selena Gomez",
    "album": "I Said I Love You First",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/17943569a85578e520ab389566bab003.png",
    "genre": "Pop",
    "releaseYear": "2025",
    "runtime": "31 min",
    "streams": "14.8M",
    "topTrack": "Bluest Flame"
  },
  {
    "artist": "Selena Gomez",
    "album": "Wolves",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/243937f3de546bb46366bc4144b44403.png",
    "genre": "Pop",
    "releaseYear": "2017",
    "runtime": "Unknown",
    "streams": "6.7M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Trippie Redd",
    "album": "LIFE'S A TRIP",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/bfb89c7fd3f34653f6a90a569b09a6a9.png",
    "genre": "Rap",
    "releaseYear": "2018",
    "runtime": "46 min",
    "streams": "33.6M",
    "topTrack": "Taking a Walk"
  },
  {
    "artist": "Trippie Redd",
    "album": "A Love Letter To You 4",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a6dd7ab5d7c64dd61fa0214ffb2b587d.png",
    "genre": "Rap",
    "releaseYear": "2019",
    "runtime": "58 min",
    "streams": "26.8M",
    "topTrack": "The Grinch"
  },
  {
    "artist": "Trippie Redd",
    "album": "A Love Letter to You 3",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c39a2a791e8aa10f38a56959413705c8.png",
    "genre": "Rap",
    "releaseYear": "2018",
    "runtime": "43 min",
    "streams": "21.8M",
    "topTrack": "Topanga"
  },
  {
    "artist": "Trippie Redd",
    "album": "Trip at Knight",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2b6667f68df8bec11db3119ae815bd84.png",
    "genre": "Rap",
    "releaseYear": "2021",
    "runtime": "25 min",
    "streams": "12.9M",
    "topTrack": "Miss The Rage"
  },
  {
    "artist": "Trippie Redd",
    "album": "A Love Letter to You",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/47c9da010417f0d9504af918964f2add.png",
    "genre": "Rap",
    "releaseYear": "2017",
    "runtime": "36 min",
    "streams": "17.2M",
    "topTrack": "Love Scars"
  },
  {
    "artist": "Usher",
    "album": "Confessions (Expanded Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/420c27aff4da33b13fa12d32d88be78c.png",
    "genre": "Soul",
    "releaseYear": "2004",
    "runtime": "78 min",
    "streams": "20.6M",
    "topTrack": "Yeah! (feat. Lil Jon & Ludacris)"
  },
  {
    "artist": "Usher",
    "album": "Raymond v Raymond (Expanded Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/25ca760e2b0f3ed7ad2f9079a94238cd.png",
    "genre": "Unknown",
    "releaseYear": "2010",
    "runtime": "16 min",
    "streams": "18.2M",
    "topTrack": "Hey Daddy (Daddy's Home)"
  },
  {
    "artist": "Usher",
    "album": "8701",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2b0c3dec9ff48568ee66946fb446ee95.png",
    "genre": "R&B",
    "releaseYear": "2001",
    "runtime": "56 min",
    "streams": "7.2M",
    "topTrack": "U Got It Bad"
  },
  {
    "artist": "Usher",
    "album": "Confessions",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d3c4b1e706ef4fb69f5ba203b730b37c.png",
    "genre": "R&B",
    "releaseYear": "2004",
    "runtime": "70 min",
    "streams": "7.0M",
    "topTrack": "My Boo"
  },
  {
    "artist": "Usher",
    "album": "Here I Stand",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a3fb9a77c2d0c97700f5ffa91ec9a59f.png",
    "genre": "R&B",
    "releaseYear": "2008",
    "runtime": "76 min",
    "streams": "6.4M",
    "topTrack": "Love in This Club (feat. Young Jeezy)"
  },
  {
    "artist": "Three Days Grace",
    "album": "Three Days Grace",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/eade5b1cda36e45cf989ce649d4b186f.png",
    "genre": "Rock",
    "releaseYear": "Unknown",
    "runtime": "43 min",
    "streams": "37.7M",
    "topTrack": "I Hate Everything About You"
  },
  {
    "artist": "Three Days Grace",
    "album": "One-X",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7d574c73804709ed8983e6261af8f1f7.png",
    "genre": "Rock",
    "releaseYear": "2003",
    "runtime": "20 min",
    "streams": "50.7M",
    "topTrack": "Animal I Have Become"
  },
  {
    "artist": "Three Days Grace",
    "album": "Life Starts Now",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c59bab1a342e46ba96013a3c26ca8302.png",
    "genre": "Rock",
    "releaseYear": "2009",
    "runtime": "40 min",
    "streams": "23.8M",
    "topTrack": "Break"
  },
  {
    "artist": "Three Days Grace",
    "album": "Three Days Grace (Expanded Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/05f00fb54eb07c6580452dc1c2b0fb89.png",
    "genre": "Rock",
    "releaseYear": "Unknown",
    "runtime": "39 min",
    "streams": "5.9M",
    "topTrack": "I Hate Everything About You"
  },
  {
    "artist": "Three Days Grace",
    "album": "Human",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/332da6a234b24004c0cf039773924649.png",
    "genre": "Rock",
    "releaseYear": "2015",
    "runtime": "36 min",
    "streams": "10.9M",
    "topTrack": "Painkiller"
  },
  {
    "artist": "50 Cent",
    "album": "Get Rich or Die Tryin'",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0df88df2ca9e67709d7a73a3553db7a1.png",
    "genre": "Hip-Hop",
    "releaseYear": "2003",
    "runtime": "71 min",
    "streams": "47.0M",
    "topTrack": "In Da Club"
  },
  {
    "artist": "50 Cent",
    "album": "The Massacre",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8afdac88376ef4b2ab005af87bcf52ec.png",
    "genre": "Rap",
    "releaseYear": "2005",
    "runtime": "66 min",
    "streams": "20.1M",
    "topTrack": "Just A Lil Bit"
  },
  {
    "artist": "50 Cent",
    "album": "Curtis",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fa9b08c8a4f54dba9f5fbca98882c2e7.png",
    "genre": "Rap",
    "releaseYear": "2007",
    "runtime": "60 min",
    "streams": "8.9M",
    "topTrack": "Ayo Technology"
  },
  {
    "artist": "50 Cent",
    "album": "The New Breed",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7f74ad8110ce9aff69178a6561e6adfb.png",
    "genre": "Hip-Hop",
    "releaseYear": "Unknown",
    "runtime": "93 min",
    "streams": "973.3K",
    "topTrack": "In Da Club"
  },
  {
    "artist": "50 Cent",
    "album": "Before I Self-Destruct",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/917a193559b5e826e0347e2b1d4ff6ea.png",
    "genre": "Rap",
    "releaseYear": "2009",
    "runtime": "6 min",
    "streams": "4.2M",
    "topTrack": "Death to My Enemies"
  },
  {
    "artist": "The Cardigans",
    "album": "First Band On The Moon (Remastered)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7b2357bb0ad16b4cd9efcb7b09d700ee.png",
    "genre": "Pop",
    "releaseYear": "Unknown",
    "runtime": "38 min",
    "streams": "33.0M",
    "topTrack": "Lovefool"
  },
  {
    "artist": "The Cardigans",
    "album": "First Band on the Moon",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/77e3006d4dadf39309660b4ead44bb3a.png",
    "genre": "Rock",
    "releaseYear": "Unknown",
    "runtime": "38 min",
    "streams": "6.6M",
    "topTrack": "Step On Me"
  },
  {
    "artist": "The Cardigans",
    "album": "Gran Turismo",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/042e8c4d00e95ead5ddc762492e5dd69.png",
    "genre": "Pop",
    "releaseYear": "1998",
    "runtime": "45 min",
    "streams": "7.4M",
    "topTrack": "My Favourite Game"
  },
  {
    "artist": "The Cardigans",
    "album": "Gran Turismo (Remastered)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b36588baa2de6196cc6602ea6f394f94.png",
    "genre": "Rock",
    "releaseYear": "Unknown",
    "runtime": "45 min",
    "streams": "5.5M",
    "topTrack": "My Favourite Game"
  },
  {
    "artist": "The Cardigans",
    "album": "Best Of",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/118cdb502af3929c505617d8e687e95c.png",
    "genre": "Pop",
    "releaseYear": "2008",
    "runtime": "161 min",
    "streams": "6.1M",
    "topTrack": "Lovefool"
  },
  {
    "artist": "Mazzy Star",
    "album": "So Tonight That I Might See",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/60615ead3d8383e70e84a526817de4bf.png",
    "genre": "Pop",
    "releaseYear": "1993",
    "runtime": "51 min",
    "streams": "54.3M",
    "topTrack": "Fade Into You"
  },
  {
    "artist": "Mazzy Star",
    "album": "Among My Swan",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9b2822cf9f5d457388fe3a40fcaeca31.png",
    "genre": "Pop",
    "releaseYear": "1996",
    "runtime": "54 min",
    "streams": "22.0M",
    "topTrack": "Look on Down From the Bridge"
  },
  {
    "artist": "Mazzy Star",
    "album": "She Hangs Brightly",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/74f05b741bd9481a88cf7b3b471697f1.png",
    "genre": "Pop",
    "releaseYear": "1990",
    "runtime": "40 min",
    "streams": "23.1M",
    "topTrack": "Halah"
  },
  {
    "artist": "Mazzy Star",
    "album": "Seasons of Your Day",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f4d3491a36804459c4ca279b2f2bcfec.png",
    "genre": "Indie",
    "releaseYear": "2013",
    "runtime": "49 min",
    "streams": "5.1M",
    "topTrack": "Common Burn"
  },
  {
    "artist": "Mazzy Star",
    "album": "Quiet, The Winter Harbor",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ccceb0c420bc2c2286aa38b13dbd3ded.png",
    "genre": "Pop",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "1.6M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Cage the Elephant",
    "album": "Melophobia",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d070e505cdab4b27cb39bfe28eb63343.png",
    "genre": "Rock",
    "releaseYear": "2013",
    "runtime": "37 min",
    "streams": "53.2M",
    "topTrack": "Cigarette Daydreams"
  },
  {
    "artist": "Cage the Elephant",
    "album": "Cage the Elephant",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c8a208b90f244c20cca7732f80edac97.png",
    "genre": "Rock",
    "releaseYear": "2008",
    "runtime": "14 min",
    "streams": "19.3M",
    "topTrack": "In One Ear"
  },
  {
    "artist": "Cage the Elephant",
    "album": "Tell Me I'm Pretty",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ce9efc0bc44d53bf05be6c0126be96c9.png",
    "genre": "Rock",
    "releaseYear": "2015",
    "runtime": "38 min",
    "streams": "22.9M",
    "topTrack": "Trouble"
  },
  {
    "artist": "Cage the Elephant",
    "album": "Social Cues",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/df8b4b56ea039510f335bf9f1f0e25c9.png",
    "genre": "Rock",
    "releaseYear": "2019",
    "runtime": "44 min",
    "streams": "18.9M",
    "topTrack": "Social Cues"
  },
  {
    "artist": "Cage the Elephant",
    "album": "Thank You Happy Birthday",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/99c95478719b4b559e98300c4bc10adc.png",
    "genre": "Rock",
    "releaseYear": "2011",
    "runtime": "44 min",
    "streams": "9.5M",
    "topTrack": "Shake Me Down"
  },
  {
    "artist": "Melanie Martinez",
    "album": "Cry Baby (Deluxe Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/48770963661b4a895dba1e9ab5091ec7.png",
    "genre": "Pop",
    "releaseYear": "2015",
    "runtime": "57 min",
    "streams": "85.0M",
    "topTrack": "Play Date"
  },
  {
    "artist": "Melanie Martinez",
    "album": "K-12",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/35df25e4fc8394903e600b5c34563c68.png",
    "genre": "Alternative",
    "releaseYear": "2019",
    "runtime": "46 min",
    "streams": "48.9M",
    "topTrack": "Teacher's Pet"
  },
  {
    "artist": "Melanie Martinez",
    "album": "PORTALS",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/313a2e52af21ee8aa951a07fd49688d6.png",
    "genre": "Alternative",
    "releaseYear": "2023",
    "runtime": "46 min",
    "streams": "31.3M",
    "topTrack": "VOID"
  },
  {
    "artist": "Melanie Martinez",
    "album": "PORTALS (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0380fa1555f28abe2ab6cf88781a5ee2.png",
    "genre": "Alternative",
    "releaseYear": "2023",
    "runtime": "58 min",
    "streams": "25.4M",
    "topTrack": "VOID"
  },
  {
    "artist": "Melanie Martinez",
    "album": "K-12 (After School – Deluxe Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/41287fe0beda1ad6690ef10420a1792e.png",
    "genre": "Indie",
    "releaseYear": "2019",
    "runtime": "68 min",
    "streams": "8.4M",
    "topTrack": "Teacher's Pet"
  },
  {
    "artist": "Imagine Dragons",
    "album": "Night Visions",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ecae82853b784726c7e2c4e2ba55a4fd.png",
    "genre": "Indie",
    "releaseYear": "2012",
    "runtime": "52 min",
    "streams": "52.1M",
    "topTrack": "Radioactive"
  },
  {
    "artist": "Imagine Dragons",
    "album": "Evolve",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8c77e9f509c4dd3bca8d3ac6b5344ce5.png",
    "genre": "Rock",
    "releaseYear": "2017",
    "runtime": "39 min",
    "streams": "35.5M",
    "topTrack": "Believer"
  },
  {
    "artist": "Imagine Dragons",
    "album": "Mercury - Acts 1 & 2",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0553855155afbee981f9e460021522c5.png",
    "genre": "Rock",
    "releaseYear": "2021",
    "runtime": "102 min",
    "streams": "20.4M",
    "topTrack": "Enemy (with JID) - from the series Arcane League of Legends"
  },
  {
    "artist": "Imagine Dragons",
    "album": "Origins (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/22fae11f52714165e3efeca3c14084ea.png",
    "genre": "Rock",
    "releaseYear": "2018",
    "runtime": "Unknown",
    "streams": "18.7M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Imagine Dragons",
    "album": "Night Visions (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ca8770d5ef7f08ffda7e5daa6d8b308e.png",
    "genre": "Indie",
    "releaseYear": "2012",
    "runtime": "78 min",
    "streams": "15.0M",
    "topTrack": "Radioactive"
  },
  {
    "artist": "Korn",
    "album": "Follow the Leader",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e7605ccbb6d5d7e7976dea23c182ba63.png",
    "genre": "Nu Metal",
    "releaseYear": "1998",
    "runtime": "63 min",
    "streams": "39.5M",
    "topTrack": "Freak on a Leash"
  },
  {
    "artist": "Korn",
    "album": "Issues",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/41e7ae63df3447ad102d806cd2758482.png",
    "genre": "Nu Metal",
    "releaseYear": "1999",
    "runtime": "45 min",
    "streams": "29.8M",
    "topTrack": "Falling Away From Me"
  },
  {
    "artist": "Korn",
    "album": "See You on the Other Side",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/84dd0944c5fe4d0e9b533ea1039a70aa.png",
    "genre": "Nu Metal",
    "releaseYear": "2005",
    "runtime": "59 min",
    "streams": "23.2M",
    "topTrack": "Coming Undone"
  },
  {
    "artist": "Korn",
    "album": "Korn",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/96a5ae52a9a04676f4e1ce2081bc15b6.png",
    "genre": "Nu Metal",
    "releaseYear": "1994",
    "runtime": "48 min",
    "streams": "24.3M",
    "topTrack": "Blind"
  },
  {
    "artist": "Korn",
    "album": "Take a Look in the Mirror",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8ad0ede562bd4bd98940366b3c9a2923.png",
    "genre": "Nu Metal",
    "releaseYear": "Unknown",
    "runtime": "45 min",
    "streams": "17.3M",
    "topTrack": "Y'all Want A Single"
  },
  {
    "artist": "Prince",
    "album": "Purple Rain",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2a783d64b0ea6d133eb7f6258ec1b6b0.png",
    "genre": "Pop",
    "releaseYear": "1984",
    "runtime": "25 min",
    "streams": "19.6M",
    "topTrack": "Purple Rain"
  },
  {
    "artist": "Prince",
    "album": "Parade - Music From the Motion Picture Under the Cherry Moon",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/67a79a7e960fde03715ebeb01680538b.png",
    "genre": "Funk",
    "releaseYear": "1981",
    "runtime": "37 min",
    "streams": "4.9M",
    "topTrack": "Kiss"
  },
  {
    "artist": "Prince",
    "album": "The Very Best of Prince",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8ce7d423fad97e032a48e7082bcdcad6.png",
    "genre": "Pop",
    "releaseYear": "2001",
    "runtime": "65 min",
    "streams": "5.3M",
    "topTrack": "Purple Rain"
  },
  {
    "artist": "Prince",
    "album": "1999",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7ec21e17d7987a7b54f0ba243d73d41f.png",
    "genre": "Funk",
    "releaseYear": "1999",
    "runtime": "55 min",
    "streams": "5.1M",
    "topTrack": "1999"
  },
  {
    "artist": "Prince",
    "album": "Around the World in a Day",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/33d0a183c8994458c463773a435cf1f0.png",
    "genre": "Pop",
    "releaseYear": "1985",
    "runtime": "39 min",
    "streams": "4.1M",
    "topTrack": "Raspberry Beret"
  },
  {
    "artist": "Faye Webster",
    "album": "Atlanta Millionaires Club",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c7e9b5e5ed23dd7a05e1dfce3c6051a5.png",
    "genre": "Indie",
    "releaseYear": "2019",
    "runtime": "31 min",
    "streams": "61.1M",
    "topTrack": "Kingston"
  },
  {
    "artist": "Faye Webster",
    "album": "Faye Webster",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a133a409f1012e24d2e9ca1613551f57.png",
    "genre": "Indie",
    "releaseYear": "2017",
    "runtime": "32 min",
    "streams": "26.5M",
    "topTrack": "I Know You"
  },
  {
    "artist": "Faye Webster",
    "album": "I Know I'm Funny haha",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3954d56601f31106b0be09fe183947ce.png",
    "genre": "Indie",
    "releaseYear": "2021",
    "runtime": "40 min",
    "streams": "29.7M",
    "topTrack": "In a Good Way"
  },
  {
    "artist": "Faye Webster",
    "album": "Underdressed at the Symphony",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/89473c46eb240a97039f340b6ae61067.png",
    "genre": "Rock",
    "releaseYear": "2024",
    "runtime": "36 min",
    "streams": "12.3M",
    "topTrack": "But Not Kiss"
  },
  {
    "artist": "Faye Webster",
    "album": "But Not Kiss",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1f700ab655b9d2ed69cdcbbdab978de2.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "1.2M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Kodak Black",
    "album": "DYING TO LIVE",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d6180cb5448bd672348163276a7491e9.png",
    "genre": "Rap",
    "releaseYear": "2018",
    "runtime": "47 min",
    "streams": "14.1M",
    "topTrack": "ZEZE (feat. Travis Scott & Offset)"
  },
  {
    "artist": "Kodak Black",
    "album": "Project Baby 2: All Grown Up",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3c48f86651675f2fafada0030cdee360.png",
    "genre": "Rap",
    "releaseYear": "2017",
    "runtime": "62 min",
    "streams": "13.0M",
    "topTrack": "Transportin'"
  },
  {
    "artist": "Kodak Black",
    "album": "Painting Pictures",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/dfb3515e4593aadc2676bad85bf26629.png",
    "genre": "Rap",
    "releaseYear": "2017",
    "runtime": "63 min",
    "streams": "10.2M",
    "topTrack": "Tunnel Vision"
  },
  {
    "artist": "Kodak Black",
    "album": "No Flockin'",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3b2c663446e225a8afd03ea0a8ad8d51.png",
    "genre": "Rap",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "6.3M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Kodak Black",
    "album": "Back for Everything",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/487b98d985fb7145bdc74aee395c57f3.png",
    "genre": "Hip-Hop",
    "releaseYear": "2021",
    "runtime": "57 min",
    "streams": "6.2M",
    "topTrack": "Love & War"
  },
  {
    "artist": "Led Zeppelin",
    "album": "Led Zeppelin IV (Deluxe Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c79fc02300b24cd3cc33009ae9194b74.png",
    "genre": "Rock",
    "releaseYear": "1971",
    "runtime": "88 min",
    "streams": "21.5M",
    "topTrack": "Stairway to Heaven"
  },
  {
    "artist": "Led Zeppelin",
    "album": "Led Zeppelin",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/82b68b8267234a289714c0e20c4e288d.png",
    "genre": "Rock",
    "releaseYear": "1968",
    "runtime": "65 min",
    "streams": "18.9M",
    "topTrack": "Dazed and Confused"
  },
  {
    "artist": "Led Zeppelin",
    "album": "Led Zeppelin IV",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1e6f99756d0342f891d3233ac1283d21.png",
    "genre": "Rock",
    "releaseYear": "1971",
    "runtime": "47 min",
    "streams": "21.6M",
    "topTrack": "Stairway to Heaven"
  },
  {
    "artist": "Led Zeppelin",
    "album": "Led Zeppelin III (Remaster)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6beb27c2ded6004184f2f6d37ed60584.png",
    "genre": "Rock",
    "releaseYear": "Unknown",
    "runtime": "43 min",
    "streams": "14.6M",
    "topTrack": "Immigrant Song - Remaster"
  },
  {
    "artist": "Led Zeppelin",
    "album": "Led Zeppelin II",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/79eb7925a57079641e698093417efde7.png",
    "genre": "Rock",
    "releaseYear": "1969",
    "runtime": "58 min",
    "streams": "21.3M",
    "topTrack": "Whole Lotta Love"
  },
  {
    "artist": "Lucki",
    "album": "Young & Clever",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/84ad5ce67d48b4f0267d65e6772cac26.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "0",
    "topTrack": "Unknown"
  },
  {
    "artist": "Jung Kook",
    "album": "GOLDEN",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/af7bea2e00fcd9a384e4a5e040896954.png",
    "genre": "Pop",
    "releaseYear": "2023",
    "runtime": "31 min",
    "streams": "372.9M",
    "topTrack": "Seven (feat. Latto) (Explicit Ver.)"
  },
  {
    "artist": "Jung Kook",
    "album": "Seven (feat. Latto)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fd1f2f9210b0be963dfdc17d50a3df21.png",
    "genre": "Summer",
    "releaseYear": "2023",
    "runtime": "9 min",
    "streams": "99.1M",
    "topTrack": "Seven (feat. Latto) (Explicit Ver.)"
  },
  {
    "artist": "Jung Kook",
    "album": "Still With You",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/81f9e98d3ffc0bf1c9363f836a0e9b75.png",
    "genre": "Unknown",
    "releaseYear": "2020",
    "runtime": "Unknown",
    "streams": "23.5M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Jung Kook",
    "album": "3D : The Remixes",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6c092843a9a5731638318e4df7e3bae9.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "22 min",
    "streams": "33.5M",
    "topTrack": "3D (Alternate Ver.)"
  },
  {
    "artist": "Jung Kook",
    "album": "Stay Alive (Prod. SUGA of BTS)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7724d99c9ad6147a4ba7a8052062633a.png",
    "genre": "Unknown",
    "releaseYear": "2022",
    "runtime": "Unknown",
    "streams": "46.4M",
    "topTrack": "Unknown"
  },
  {
    "artist": "Charlie Puth",
    "album": "Voicenotes",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/548ddc92a61f79f77e832ad3d66d110f.png",
    "genre": "Pop",
    "releaseYear": "2018",
    "runtime": "6 min",
    "streams": "22.3M",
    "topTrack": "Attention"
  },
  {
    "artist": "Charlie Puth",
    "album": "Nine Track Mind",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/29e688c6878b784fd8eb9755641b2b97.png",
    "genre": "Pop",
    "releaseYear": "2016",
    "runtime": "44 min",
    "streams": "14.9M",
    "topTrack": "We Don't Talk Anymore (feat. Selena Gomez)"
  },
  {
    "artist": "Charlie Puth",
    "album": "CHARLIE",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1f4d106bfc5a4d0e8dcec8490630fab3.png",
    "genre": "Pop",
    "releaseYear": "2022",
    "runtime": "22 min",
    "streams": "22.4M",
    "topTrack": "Left and Right (Feat. Jung Kook of BTS)"
  },
  {
    "artist": "Charlie Puth",
    "album": "Nine Track Mind (Special Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b6d81dbf4662c688ed3ddf9c4c2eac3f.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "43 min",
    "streams": "3.5M",
    "topTrack": "We Don't Talk Anymore (feat. Selena Gomez)"
  },
  {
    "artist": "Charlie Puth",
    "album": "Left and Right (feat. Jung Kook of BTS)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e16905d22e5913535a8c6acadc781659.png",
    "genre": "Jungkook",
    "releaseYear": "2022",
    "runtime": "7 min",
    "streams": "41.5M",
    "topTrack": "Left and Right (feat. Jung Kook of BTS)"
  },
  {
    "artist": "Lil Tecca",
    "album": "We Love You Tecca",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/eb40f384b2c2239fabeffd727d0167ac.png",
    "genre": "Hip-Hop",
    "releaseYear": "2019",
    "runtime": "30 min",
    "streams": "34.8M",
    "topTrack": "Ransom"
  },
  {
    "artist": "Lil Tecca",
    "album": "Tec",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5adb06e28b39139a002241cc09cbba44.png",
    "genre": "Unknown",
    "releaseYear": "2023",
    "runtime": "38 min",
    "streams": "25.8M",
    "topTrack": "500lbs"
  },
  {
    "artist": "Lil Tecca",
    "album": "We Love You Tecca 2",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b40b54b193466b28ed08aa3fcb55442f.png",
    "genre": "Rap",
    "releaseYear": "2019",
    "runtime": "37 min",
    "streams": "14.7M",
    "topTrack": "Lot Of Me"
  },
  {
    "artist": "Lil Tecca",
    "album": "Virgo World",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/72ad267b16d708dc4c13d1f2b226553c.png",
    "genre": "Rap",
    "releaseYear": "2019",
    "runtime": "45 min",
    "streams": "12.9M",
    "topTrack": "Our Time"
  },
  {
    "artist": "Lil Tecca",
    "album": "DOPAMINE",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/cba9196ce837bcb20094ea1a04f9a92a.png",
    "genre": "Hip-Hop",
    "releaseYear": "2025",
    "runtime": "41 min",
    "streams": "16.3M",
    "topTrack": "Dark Thoughts"
  },
  {
    "artist": "F3miii",
    "album": "NOBLE",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b3bf57ecb38282c469c9d3590266410d.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "2.0M",
    "topTrack": "Unknown"
  },
  {
    "artist": "F3miii",
    "album": "NOBLE (Slowed Down)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/afb4eb205b072e89a19c30857d651ca9.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "400.1K",
    "topTrack": "Unknown"
  },
  {
    "artist": "F3miii",
    "album": "FROM YOUR EYES",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/632299739d1bc797f8a57aab7e4c937b.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "134.8K",
    "topTrack": "Unknown"
  },
  {
    "artist": "F3miii",
    "album": "LOSTWITHOUTMARIA",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/69a77769829850ef3b02ff3dd40dd0ab.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "Unknown",
    "streams": "93.4K",
    "topTrack": "Unknown"
  },
  {
    "artist": "F3miii",
    "album": "Splinter",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3aee9147fa135a9a60e886aaaf1e6343.png",
    "genre": "Unknown",
    "releaseYear": "Unknown",
    "runtime": "5 min",
    "streams": "35.1K",
    "topTrack": "SPLINTER"
  },
  {
    "artist": "Marvin Gaye",
    "album": "United",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4822b8c62e382da54fba5adb646ee147.png",
    "genre": "Soul",
    "releaseYear": "Unknown",
    "runtime": "31 min",
    "streams": "10.3M",
    "topTrack": "Ain't No Mountain High Enough"
  },
  {
    "artist": "Marvin Gaye",
    "album": "What's Going On",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8700ee8059d6cfaaf50e0bbf090d6e34.png",
    "genre": "Soul",
    "releaseYear": "1971",
    "runtime": "35 min",
    "streams": "18.1M",
    "topTrack": "What's Going On"
  },
  {
    "artist": "Marvin Gaye",
    "album": "Let's Get It On",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1ce7f9e29ca649689b531965469b9801.png",
    "genre": "Soul",
    "releaseYear": "Unknown",
    "runtime": "6 min",
    "streams": "6.1M",
    "topTrack": "Let's Get It On"
  },
  {
    "artist": "Marvin Gaye",
    "album": "Midnight Love",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3332d8741b0f8af8c31ab1f550de49b3.png",
    "genre": "Soul",
    "releaseYear": "1980",
    "runtime": "39 min",
    "streams": "3.0M",
    "topTrack": "Sexual Healing"
  }
];