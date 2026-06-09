const albumsDB = [
  {
    "artist": "Ariana Grande",
    "album": "Dangerous Woman",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/51b8cd76546763550af19d0937cae80a.png"
  },
  {
    "artist": "Ariana Grande",
    "album": "thank u, next",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5d67250ce101c8afaaa33b5d9f8926e2.png"
  },
  {
    "artist": "Ariana Grande",
    "album": "My Everything (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b68854212b18163a584df683cb7c0fe0.png"
  },
  {
    "artist": "Ariana Grande",
    "album": "Sweetener",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/cd8c5ce4dad43c822c00dec987d295ca.png"
  },
  {
    "artist": "Ariana Grande",
    "album": "Positions",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8d71cf30ab608127ea3bac16d98c9937.png"
  },
  {
    "artist": "Michael Jackson",
    "album": "Thriller",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/85fdc23b75d77d4cf789fd1904d06863.png"
  },
  {
    "artist": "Michael Jackson",
    "album": "Off the Wall",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8fe6f2a0832392b384472f53a5d8cfd6.png"
  },
  {
    "artist": "Michael Jackson",
    "album": "Thriller 25 Super Deluxe Edition",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6e2894e4edba9f42ee448670a59fc12e.png"
  },
  {
    "artist": "Michael Jackson",
    "album": "Dangerous",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/faf8bde1253ec8da9559f915cb1bdf8a.png"
  },
  {
    "artist": "Michael Jackson",
    "album": "Xscape",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9cb658fab4a3458ec5309aa97379b8b6.png"
  },
  {
    "artist": "Drake",
    "album": "Views",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/99e7715edfbd4c4519e3483a1779d574.png"
  },
  {
    "artist": "Drake",
    "album": "Scorpion",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b42f8bf1987f3e1e4dc55d46d9c7bc3d.png"
  },
  {
    "artist": "Drake",
    "album": "More Life",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/434a922ecca5474f1f9d6bbcc3a1050c.png"
  },
  {
    "artist": "Drake",
    "album": "So Far Gone",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/304e6995dd50bc5956633ee69a77542e.png"
  },
  {
    "artist": "Drake",
    "album": "Certified Lover Boy",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b583ff3ab18082dfb733c1edeb92a262.png"
  },
  {
    "artist": "The Weeknd",
    "album": "Starboy",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/08e3f15aca0423b084fb49f342756f3b.png"
  },
  {
    "artist": "The Weeknd",
    "album": "After Hours",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4583932b753c96d0d2f22fe9774e5ef3.png"
  },
  {
    "artist": "The Weeknd",
    "album": "Beauty Behind the Madness",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9ea87cbc2865f38105cc1aecc49bfa82.png"
  },
  {
    "artist": "The Weeknd",
    "album": "My Dear Melancholy,",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6498660830a525a64f6a78bf94a2ec58.png"
  },
  {
    "artist": "The Weeknd",
    "album": "Dawn FM",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/34734ed0582256618ec64d4f90b4ebf4.png"
  },
  {
    "artist": "Taylor Swift",
    "album": "Lover",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/13c3fd969ea2d962c92d064884086e46.png"
  },
  {
    "artist": "Taylor Swift",
    "album": "reputation",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/dddb96a470fecc69d281f45c81a44d2a.png"
  },
  {
    "artist": "Taylor Swift",
    "album": "folklore",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7283dedc810f971388eba0b710d90020.png"
  },
  {
    "artist": "Taylor Swift",
    "album": "1989",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fd378412e92480577c0f2a4463c8998a.png"
  },
  {
    "artist": "Taylor Swift",
    "album": "1989 (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c9a32b7cd89473968115b12e0ef3339d.png"
  },
  {
    "artist": "Kanye West",
    "album": "Graduation",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8ddd1959a2bef460a5149b3e0cf5e18a.png"
  },
  {
    "artist": "Kanye West",
    "album": "My Beautiful Dark Twisted Fantasy",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f5afd8fe052b452c999b657664cae99f.png"
  },
  {
    "artist": "Kanye West",
    "album": "808s & Heartbreak",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a10a67180b666ce93a3bb79c49faca0b.png"
  },
  {
    "artist": "Kanye West",
    "album": "Late Registration",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9c0e7886d750a519c9ec63c30434b483.png"
  },
  {
    "artist": "Kanye West",
    "album": "Yeezus",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/71d8c1f84d67e60c5dda039d6fb3653f.png"
  },
  {
    "artist": "Rihanna",
    "album": "Good Girl Gone Bad: Reloaded",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9ba6843d054b4f449948bdb13957248c.png"
  },
  {
    "artist": "Rihanna",
    "album": "Good Girl Gone Bad",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/aa254b77897ce330348b1be77edfe6bf.png"
  },
  {
    "artist": "Rihanna",
    "album": "Loud",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a7cd5b2046514a52ba359e06743693f9.png"
  },
  {
    "artist": "Rihanna",
    "album": "ANTI (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d4a339a2bd2bc5fe470e0b0c10444903.png"
  },
  {
    "artist": "Rihanna",
    "album": "Talk That Talk",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/024eb3bcbf13bef347800a18c2c61f3b.png"
  },
  {
    "artist": "PinkPantheress",
    "album": "to hell with it",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b61a72706919e942872cbdf59b604275.png"
  },
  {
    "artist": "PinkPantheress",
    "album": "Fancy Some More?",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3e0f3dc821a8445892b0b65cb26b0194.png"
  },
  {
    "artist": "PinkPantheress",
    "album": "Fancy That",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5edfc17276a2c1f445f41faf2c9da1be.png"
  },
  {
    "artist": "PinkPantheress",
    "album": "Heaven knows",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/16cc8263e16931610bd9506c4be95859.png"
  },
  {
    "artist": "PinkPantheress",
    "album": "Boy's a liar Pt. 2",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/29499797f2bd56535cf6a345392ccd77.png"
  },
  {
    "artist": "Radiohead",
    "album": "OK Computer",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/62d26c6cb4ac4bdccb8f3a2a0fd55421.png"
  },
  {
    "artist": "Radiohead",
    "album": "Pablo Honey",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/03327d30bc3de35afb8cab929a3055f3.png"
  },
  {
    "artist": "Radiohead",
    "album": "In Rainbows",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9dbcd9399ac3e622b4f508323155b644.png"
  },
  {
    "artist": "Radiohead",
    "album": "The Bends",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9ea9931e129bb5efd3606866901855b5.png"
  },
  {
    "artist": "Radiohead",
    "album": "Kid A",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2ed343318c844d19cd897ec67fad11c4.png"
  },
  {
    "artist": "Kendrick Lamar",
    "album": "DAMN.",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8a59ed3a9c71cb5113325e2026889e4a.png"
  },
  {
    "artist": "Kendrick Lamar",
    "album": "good kid, m.A.A.d city",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/48628c6af67db437b0b9ff156b2c1085.png"
  },
  {
    "artist": "Kendrick Lamar",
    "album": "Black Panther the Album Music From and Inspired By",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/bad6b50569d18cdc9c6efb883b2ba213.png"
  },
  {
    "artist": "Kendrick Lamar",
    "album": "To Pimp a Butterfly",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/86b35c4eb3c479da49c915d8771bbd1a.png"
  },
  {
    "artist": "Kendrick Lamar",
    "album": "GNX",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a79564a9768d05272682b252deb02079.png"
  },
  {
    "artist": "Tame Impala",
    "album": "Currents",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/dd45b0438a315aed98b5830aa2fc43c5.png"
  },
  {
    "artist": "Tame Impala",
    "album": "The Slow Rush",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/832ade6a35ec2a224ea9a5be326b5de4.png"
  },
  {
    "artist": "Tame Impala",
    "album": "Lonerism",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7c9c4d1009514b178c82f2201e3a1fce.png"
  },
  {
    "artist": "Tame Impala",
    "album": "Deadbeat",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/29cd52e0f2ba0d5dcf2b2684cc71ef58.png"
  },
  {
    "artist": "Tame Impala",
    "album": "Innerspeaker",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/25baad6ad48e4459a97bd54790cd0026.png"
  },
  {
    "artist": "Lady Gaga",
    "album": "The Fame",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/212041a78d1b07d481404936f57314fb.png"
  },
  {
    "artist": "Lady Gaga",
    "album": "The Fame Monster (Deluxe Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0dc64dbb17438473725ef05fef4e6741.png"
  },
  {
    "artist": "Lady Gaga",
    "album": "The Fame Monster",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9ec0a5f1aad83ab4c401111b7fa22f70.png"
  },
  {
    "artist": "Lady Gaga",
    "album": "ARTPOP",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/999d7e355d4fd4c3a33bb84ac7236e94.png"
  },
  {
    "artist": "Lady Gaga",
    "album": "Born This Way (International Special Edition Version)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f739bd32764cc913b0e5ac52970ccced.png"
  },
  {
    "artist": "Olivia Rodrigo",
    "album": "SOUR",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9da8add22ca31771a440d2a6f7615f6d.png"
  },
  {
    "artist": "Olivia Rodrigo",
    "album": "GUTS",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e39eb31f874f4a5c4afa836845141437.png"
  },
  {
    "artist": "Olivia Rodrigo",
    "album": "GUTS (spilled)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b266469599e06ea2ab8ae33342795fd4.png"
  },
  {
    "artist": "Olivia Rodrigo",
    "album": "The Hunger Games: The Ballad of Songbirds & Snakes (Music From & Inspired By)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a1a922abcb8bb0858c0d603e53c2ed52.png"
  },
  {
    "artist": "Olivia Rodrigo",
    "album": "vampire",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/374d84241878b54aa716bceefd66abd4.png"
  },
  {
    "artist": "Tyler, The Creator",
    "album": "Flower Boy",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/52a7f32bdc99238080b0f17e859b3b4d.png"
  },
  {
    "artist": "Tyler, The Creator",
    "album": "IGOR",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e150fa362c89b8f1d92d883ae828b7ef.png"
  },
  {
    "artist": "Tyler, The Creator",
    "album": "Chromakopia",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8c0b389bb4cbf522bc5a2b58e15b6620.png"
  },
  {
    "artist": "Tyler, The Creator",
    "album": "CALL ME IF YOU GET LOST",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8bed6cc4a2f68d3bb2228fbe6654b887.png"
  },
  {
    "artist": "Tyler, The Creator",
    "album": "Goblin",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/969503c98a6cea946bf66db421d74923.png"
  },
  {
    "artist": "Charli xcx",
    "album": "BRAT",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b00527c6ae0cd1d4c9bf3706b130ad56.png"
  },
  {
    "artist": "Charli xcx",
    "album": "Brat and it’s completely different but also still brat",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/899f1ced9adb26175e0c93a9254820cc.png"
  },
  {
    "artist": "Charli xcx",
    "album": "how i'm feeling now",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9d584d6fc6300f7fbd98de3efacfd1ba.png"
  },
  {
    "artist": "Charli xcx",
    "album": "SUCKER",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/85efac150ce718b6c02807cc8f5acb91.png"
  },
  {
    "artist": "Charli xcx",
    "album": "Guess featuring billie eilish",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/18a20df834008bb671753dd255ee858e.png"
  },
  {
    "artist": "Sabrina Carpenter",
    "album": "Short n' Sweet",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8bf0ab10e23c95ccea08f75bc62e4865.png"
  },
  {
    "artist": "Sabrina Carpenter",
    "album": "Espresso",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/31af483995fa0388205995fc95f76318.png"
  },
  {
    "artist": "Sabrina Carpenter",
    "album": "emails i can't send",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e4198cd6ab64b73da4a8387bb87c62d3.png"
  },
  {
    "artist": "Sabrina Carpenter",
    "album": "emails i can’t send fwd:",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/177a1ef8117442c97ad096e8c758bbc4.png"
  },
  {
    "artist": "Sabrina Carpenter",
    "album": "Man’s Best Friend",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6bbc8416c1f1c3a25054d4ae3b5fbb35.png"
  },
  {
    "artist": "Justin Bieber",
    "album": "Purpose (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b7b8bdcf48864d6bdc6d4a266e7cc435.png"
  },
  {
    "artist": "Justin Bieber",
    "album": "Believe",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ca337a40bbb78937bf330454761ee592.png"
  },
  {
    "artist": "Justin Bieber",
    "album": "My World 2.0",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/cc2b72b088bdc3beb0cdb7636fbe02bb.png"
  },
  {
    "artist": "Justin Bieber",
    "album": "Justice",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f09689d30b3a8faeb9d1f2dcec968307.png"
  },
  {
    "artist": "Justin Bieber",
    "album": "Believe (Deluxe Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3659e65b38c59c07e2af1e73cc772b91.png"
  },
  {
    "artist": "Lana Del Rey",
    "album": "Born to Die - The Paradise Edition",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8c5a9f54785f4f928037fc1be53d375f.png"
  },
  {
    "artist": "Lana Del Rey",
    "album": "Ultraviolence (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/eb300e3afe470b74b4384b169b96dd56.png"
  },
  {
    "artist": "Lana Del Rey",
    "album": "Norman Fucking Rockwell!",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ab9ed65c5b337129f6b50ca5894d7319.png"
  },
  {
    "artist": "Lana Del Rey",
    "album": "Young and Beautiful",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f8408df7304e49685980e09662b6c808.png"
  },
  {
    "artist": "Lana Del Rey",
    "album": "Lust for Life",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9e9ddd9e9270cd400fcf60ab3d9fb1cc.png"
  },
  {
    "artist": "Arctic Monkeys",
    "album": "AM",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f579e414e20f40969185e41182d72472.png"
  },
  {
    "artist": "Arctic Monkeys",
    "album": "Favourite Worst Nightmare",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4debfeb504dc47779f0ff3df43fd9529.png"
  },
  {
    "artist": "Arctic Monkeys",
    "album": "Whatever People Say I Am, That's What I'm Not",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5e1480805bdf29da606e0de2ac07b205.png"
  },
  {
    "artist": "Arctic Monkeys",
    "album": "Favourite Worst Nightmare (Standard Version)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/809263677d3265378380bd3978b5c8d8.png"
  },
  {
    "artist": "Arctic Monkeys",
    "album": "Humbug",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/70163676ea2e4c44959c3af0f71b30d8.png"
  },
  {
    "artist": "Paramore",
    "album": "RIOT!",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b7a4b3000d0c431fbce299986ac51c48.png"
  },
  {
    "artist": "Paramore",
    "album": "brand new eyes",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8935ea2d777c8f2f5f3c7a8f521ea9fb.png"
  },
  {
    "artist": "Paramore",
    "album": "Paramore",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e2da8f55da0641bcaee8ba32f46e50bc.png"
  },
  {
    "artist": "Paramore",
    "album": "After Laughter",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fc4c4f4eb4fa6e9215ecb6705cbb72de.png"
  },
  {
    "artist": "Paramore",
    "album": "All We Know Is Falling",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4799fa93e32360c802cd9b99e2a12a54.png"
  },
  {
    "artist": "Frank Ocean",
    "album": "Blonde",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/82c92f044b27db86328ed6be3f8a735a.png"
  },
  {
    "artist": "Frank Ocean",
    "album": "channel ORANGE",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/553678d27570452839aec0fd0cdadd63.png"
  },
  {
    "artist": "Frank Ocean",
    "album": "Novacane",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fd4cd82172245b39decbef1617384b5c.png"
  },
  {
    "artist": "Frank Ocean",
    "album": "Chanel",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/33ddc52116ff8260159ee77312efa894.png"
  },
  {
    "artist": "Frank Ocean",
    "album": "In My Room",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/74a4c3db50ae3fe0150bc12938d42f2d.png"
  },
  {
    "artist": "Billie Eilish",
    "album": "WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c2652de4809e5b4349565518b34b85ca.png"
  },
  {
    "artist": "Billie Eilish",
    "album": "HIT ME HARD AND SOFT",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6db576307ee7bdd81056432542b6bab7.png"
  },
  {
    "artist": "Billie Eilish",
    "album": "Happier Than Ever",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7ebd8b6f8ac6766fb26303245a265a2e.png"
  },
  {
    "artist": "Billie Eilish",
    "album": "dont smile at me",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fa0cc28717131fb40092775c9b1f2213.png"
  },
  {
    "artist": "Billie Eilish",
    "album": "lovely (with Khalid)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d14b594f15b5629a3ba686cab2c95f83.png"
  },
  {
    "artist": "Katy Perry",
    "album": "One of the Boys",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/46c6aef9c93b1a87c4e453fbd74839ab.png"
  },
  {
    "artist": "Katy Perry",
    "album": "Teenage Dream",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9a9141d83ebd9056e7a212b3bb493ac3.png"
  },
  {
    "artist": "Katy Perry",
    "album": "Teenage Dream: The Complete Confection",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/efbd28cada9ae700d7e3732c7edfcc8b.png"
  },
  {
    "artist": "Katy Perry",
    "album": "PRISM",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/927fc2e644c8d1bb1a5b94ae834d1f44.png"
  },
  {
    "artist": "Katy Perry",
    "album": "PRISM (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2c5212bf492d1b571ff771dd25319d46.png"
  },
  {
    "artist": "Malcolm Todd",
    "album": "Sweet Boy",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/824921f6bdcf5846a4f5c25654abbbf8.png"
  },
  {
    "artist": "Malcolm Todd",
    "album": "Malcolm Todd",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4712eef00d71c3c3d9de2445a9e1ae7b.png"
  },
  {
    "artist": "Malcolm Todd",
    "album": "Chest Pain (I Love)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/924b432c1995754d0edb096a32b42e4b.png"
  },
  {
    "artist": "Malcolm Todd",
    "album": "Demos Before Prom",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9326f90d47771d0262766deb6128fce8.png"
  },
  {
    "artist": "Malcolm Todd",
    "album": "Malcolm Todd (still)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3737a717205ea47eb5dbced3c750197a.png"
  },
  {
    "artist": "Bruno Mars",
    "album": "Doo-Wops & Hooligans",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c3c4dde679eb3436694c2411fe0ff15c.png"
  },
  {
    "artist": "Bruno Mars",
    "album": "Unorthodox Jukebox",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c7cf0cd2fcd6efb0a33e063a8d82ff0e.png"
  },
  {
    "artist": "Bruno Mars",
    "album": "24K Magic",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f18dc30b48412484b34ebff24ba615be.png"
  },
  {
    "artist": "Bruno Mars",
    "album": "An Evening with Silk Sonic",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e98d14610e9739f6d5af237bab88d361.png"
  },
  {
    "artist": "Bruno Mars",
    "album": "It Will Rain",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c06c44704e034cd98a3ec40020147a56.png"
  },
  {
    "artist": "Fleetwood Mac",
    "album": "Rumours (Super Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e64ceb720a09f1f6072b84cdae41d751.png"
  },
  {
    "artist": "Fleetwood Mac",
    "album": "Rumours",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/349d64820e124b77cb5275ab03042693.png"
  },
  {
    "artist": "Fleetwood Mac",
    "album": "Fleetwood Mac",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/97e59a52bf1c49ceb28cfa4d763e8520.png"
  },
  {
    "artist": "Fleetwood Mac",
    "album": "Greatest Hits",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f390687c380a492dc4e71fd352c1dc91.png"
  },
  {
    "artist": "Fleetwood Mac",
    "album": "Tango in the Night (Deluxe Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f62b785112ce1a770e7f712df259962b.png"
  },
  {
    "artist": "Doja Cat",
    "album": "Planet Her",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2321c0b23c484ab566746c0dddfc777b.png"
  },
  {
    "artist": "Doja Cat",
    "album": "Hot Pink",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/be2aca67c96a044ec6e2726d7de50d94.png"
  },
  {
    "artist": "Doja Cat",
    "album": "Scarlet",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/47dbda956c44d06fc1a4f8dbf1c77f00.png"
  },
  {
    "artist": "Doja Cat",
    "album": "Amala",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3d8c6b5ea4a34c222a9a8069687c12e9.png"
  },
  {
    "artist": "Doja Cat",
    "album": "Amala (Deluxe Version)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5cef99c7b4199a3f4a05fdde792d84f5.png"
  },
  {
    "artist": "Harry Styles",
    "album": "Fine Line",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7940fbb1df766b4683951aed490a8b5a.png"
  },
  {
    "artist": "Harry Styles",
    "album": "Harry's House",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1534f4871b5acfffb2d621047a771fa0.png"
  },
  {
    "artist": "Harry Styles",
    "album": "Harry Styles",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/295ed1c0727ce10652867d628139beb1.png"
  },
  {
    "artist": "Harry Styles",
    "album": "As It Was",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a6d55d424092713cb0409d18de21ce09.png"
  },
  {
    "artist": "Harry Styles",
    "album": "Kiss All The Time. Disco, Occasionally.",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/11a212a9de9fe958cc5829849ebacbf8.png"
  },
  {
    "artist": "Gorillaz",
    "album": "Demon Days",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/271483e955d2b255160f3361a7f5fb78.png"
  },
  {
    "artist": "Gorillaz",
    "album": "Gorillaz",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/86fc45f14a789e9fee32a99ea9036d3d.png"
  },
  {
    "artist": "Gorillaz",
    "album": "Plastic Beach",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ce6e2af584a5480b85b79371b219a92e.png"
  },
  {
    "artist": "Gorillaz",
    "album": "Humanz (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c6be60edd13ecd2226b9ca7508484f99.png"
  },
  {
    "artist": "Gorillaz",
    "album": "Cracker Island",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/507c3f4c1863a05626a445057871b56e.png"
  },
  {
    "artist": "The Smiths",
    "album": "The Queen Is Dead",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fac0b27adf403efed8b368d3a236ab61.png"
  },
  {
    "artist": "The Smiths",
    "album": "Hatful of Hollow",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c1d87ec19e6f9c837d5f3b31441d1ff8.png"
  },
  {
    "artist": "The Smiths",
    "album": "Louder Than Bombs",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f431ff5eb377cef2177845147837492f.png"
  },
  {
    "artist": "The Smiths",
    "album": "The Smiths",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2e25a301cf23c2b28b0ff1b77a852e1b.png"
  },
  {
    "artist": "The Smiths",
    "album": "Meat Is Murder",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ebc53796f18f4c4bba97a26b71b4e0ac.png"
  },
  {
    "artist": "A$AP Rocky",
    "album": "LONG.LIVE.A$AP (Deluxe Version)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c0203b6fcecc7514ce88b34a99554694.png"
  },
  {
    "artist": "A$AP Rocky",
    "album": "AT.LONG.LAST.A$AP",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5184e16c4f2964ebb3e4b68b3ccb849e.png"
  },
  {
    "artist": "A$AP Rocky",
    "album": "TESTING",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fead178e9a987d1bb3814047344f52d0.png"
  },
  {
    "artist": "A$AP Rocky",
    "album": "Sundress",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0a4182a066608f5c74d5720d847466a6.png"
  },
  {
    "artist": "A$AP Rocky",
    "album": "I Smoked Away My Brain (I'm God x Demons Mashup) (feat. Imogen Heap & Clams Casino)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1348ff5689f37deeed1ae65eb815e937.png"
  },
  {
    "artist": "Linkin Park",
    "album": "Meteora",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fee069a98672ac3719f6c766ff6f0f9c.png"
  },
  {
    "artist": "Linkin Park",
    "album": "Minutes to Midnight",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/185a38ca7368d2c9ad9cb9ea95ae05f4.png"
  },
  {
    "artist": "Linkin Park",
    "album": "Hybrid Theory",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c21b3923a4d3ff5629996f3f8e178140.png"
  },
  {
    "artist": "Linkin Park",
    "album": "Hybrid Theory (Bonus Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/56989cdb558cb4f6609eb906029399d8.png"
  },
  {
    "artist": "Linkin Park",
    "album": "Meteora (Bonus Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2a3ab7d7e3155d3779e4997f5f23d0ef.png"
  },
  {
    "artist": "Childish Gambino",
    "album": "\"Awaken, My Love!\"",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d4f6f6f537a28b6b15f793515b95452b.png"
  },
  {
    "artist": "Childish Gambino",
    "album": "Camp",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d2c51831aa2b59b93c7e56b29efbbcf6.png"
  },
  {
    "artist": "Childish Gambino",
    "album": "Because the Internet",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0f636525495f1458c7c55f238eb8e27d.png"
  },
  {
    "artist": "Childish Gambino",
    "album": "Kauai",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/974d53ad755f450ec51caed92670ef97.png"
  },
  {
    "artist": "Childish Gambino",
    "album": "Summer Pack",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6db4bd793ab45369b54cfde2a5a362f8.png"
  },
  {
    "artist": "The Neighbourhood",
    "album": "I Love You.",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d787d7eb7324e25dfb03dd9c0220d818.png"
  },
  {
    "artist": "The Neighbourhood",
    "album": "Wiped Out!",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f21f9c3a0f63fb06990c0a66ef2ec741.png"
  },
  {
    "artist": "The Neighbourhood",
    "album": "Hard to Imagine the Neighbourhood Ever Changing",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/74e59938d6365ad84c92273028bdf595.png"
  },
  {
    "artist": "The Neighbourhood",
    "album": "Chip Chrome & The Mono-Tones",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fb16390c025edcd77e54f467195fc4ee.png"
  },
  {
    "artist": "The Neighbourhood",
    "album": "I'm Sorry...",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7b9992116ca548d085815bc8cf677675.png"
  },
  {
    "artist": "Travis Scott",
    "album": "Rodeo (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e3c598876a5acca5746ca0660d3dcdc6.png"
  },
  {
    "artist": "Travis Scott",
    "album": "Days Before Rodeo",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3d61b59130d858416b7725b6e45eb833.png"
  },
  {
    "artist": "Travis Scott",
    "album": "Antidote",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7d046b6f37842521c966ded4619efd98.png"
  },
  {
    "artist": "Travis Scott",
    "album": "Birds in the Trap Sing McKnight",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3298304ba5e10fc9a9991ba663dc7462.png"
  },
  {
    "artist": "Travis Scott",
    "album": "OWL PHARAOH",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1da334218cb9639513d2a850c381a841.png"
  },
  {
    "artist": "Coldplay",
    "album": "Parachutes",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5fbcfb7258117e88cb73b45e25c88b01.png"
  },
  {
    "artist": "Coldplay",
    "album": "A Rush of Blood to the Head",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a61e3c7b85303555ebac49fa460a17c3.png"
  },
  {
    "artist": "Coldplay",
    "album": "Viva la Vida or Death and All His Friends",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/df7ea51b2826b60175d4c332e0f7b8ca.png"
  },
  {
    "artist": "Coldplay",
    "album": "X&Y",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/38761f082a1b02ac535785fafc7964cc.png"
  },
  {
    "artist": "Coldplay",
    "album": "Mylo Xyloto",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1cf47ae5836c144211e8fc1a40087a0a.png"
  },
  {
    "artist": "Deftones",
    "album": "Around the Fur",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3e6814b457a9087e0c46d5a949de2766.png"
  },
  {
    "artist": "Deftones",
    "album": "White Pony",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/afac69dd8ee2b6f734d647fdbadcde55.png"
  },
  {
    "artist": "Deftones",
    "album": "Diamond Eyes",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/858efffdf737c869e754c2f4dbe89f4c.png"
  },
  {
    "artist": "Deftones",
    "album": "Saturday Night Wrist",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7b487d0ff8e1498d8284c014a01c961c.png"
  },
  {
    "artist": "Deftones",
    "album": "Koi No Yokan",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b50c4a0285750fe1159849f2bbccc08d.png"
  },
  {
    "artist": "SZA",
    "album": "SOS",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b2cfb5bdf137f4d6293565205965750f.png"
  },
  {
    "artist": "SZA",
    "album": "Ctrl",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9dcae165f522e0d818f7e75a3b5b6e16.png"
  },
  {
    "artist": "SZA",
    "album": "SOS Deluxe: LANA",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/80f922302652266472c5b8bced5123bb.png"
  },
  {
    "artist": "SZA",
    "album": "Good Days",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/cbd475e5b7a6127b06a62831b673301b.png"
  },
  {
    "artist": "SZA",
    "album": "Saturn",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2271106c089819b7b4242d49a2b9fac9.png"
  },
  {
    "artist": "Clairo",
    "album": "Immunity",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d2389b806dd5061b6a75e360c4c46c88.png"
  },
  {
    "artist": "Clairo",
    "album": "Charm",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6e8d5d5ca3c27594162651accd47cb7e.png"
  },
  {
    "artist": "Clairo",
    "album": "Pretty Girl",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2805853d6bb608c5ff0dd640e09b06b8.png"
  },
  {
    "artist": "Clairo",
    "album": "Sling",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0a9f1e6e0c825c1e7772fb049f2bf4a1.png"
  },
  {
    "artist": "Clairo",
    "album": "diary 001",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/93fe3c819e6073e735f7571929ffed8f.png"
  },
  {
    "artist": "Don Toliver",
    "album": "Heaven or Hell",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/778e527ba305e1d65d002df7ac9b7fa5.png"
  },
  {
    "artist": "Don Toliver",
    "album": "Love Sick (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/043211479ce1378b14ba16d86be0d2bd.png"
  },
  {
    "artist": "Don Toliver",
    "album": "HARDSTONE PSYCHO",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c406e01917b3c6f86c17889c265c2b60.png"
  },
  {
    "artist": "Don Toliver",
    "album": "Life of a DON",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c81aba542b3da47e1ac4dc4c80bb7643.png"
  },
  {
    "artist": "Don Toliver",
    "album": "Love Sick",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b0a4b37ad52e08922b38c0087657170a.png"
  },
  {
    "artist": "Chappell Roan",
    "album": "The Rise and Fall of a Midwest Princess",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b3987ea108b929eead2f59fdd3b4a007.png"
  },
  {
    "artist": "Chappell Roan",
    "album": "Good Luck, Babe!",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/86fa0d410ba70ada74d22cf4b690b05b.png"
  },
  {
    "artist": "Chappell Roan",
    "album": "The Subway",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/cf6587c307254821e78b809f0797a6ca.png"
  },
  {
    "artist": "Chappell Roan",
    "album": "The Giver",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/854afa25059c3d7be76ab8a0caab40ca.png"
  },
  {
    "artist": "Chappell Roan",
    "album": "Love Me Anyway",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/97387707f14caadff2946b45cc40ae0e.png"
  },
  {
    "artist": "Mac Miller",
    "album": "Swimming",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9f0e333c941c1a0147fc5d347d343e6d.png"
  },
  {
    "artist": "Mac Miller",
    "album": "The Divine Feminine",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b8f1d45f318d32329329727444c51239.png"
  },
  {
    "artist": "Mac Miller",
    "album": "Circles",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1fd5bc5de116097cb008d0b09576d216.png"
  },
  {
    "artist": "Mac Miller",
    "album": "K.I.D.S.",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4cc406a032e2418daa5a768e3391820c.png"
  },
  {
    "artist": "Mac Miller",
    "album": "K.I.D.S. (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a2f4ac18f43b8d2d8975913fb41ef720.png"
  },
  {
    "artist": "Bad Bunny",
    "album": "DeBÍ TiRAR MáS FOToS",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7d0982b56a5e4304eb6207d6688c917a.png"
  },
  {
    "artist": "Bad Bunny",
    "album": "Un Verano Sin Ti",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fd95bc0e534a5ab8c54c97791864f2d7.png"
  },
  {
    "artist": "Bad Bunny",
    "album": "YHLQMDLG",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/685fe30abda57ff91193f164101045e4.png"
  },
  {
    "artist": "Bad Bunny",
    "album": "nadie sabe lo que va a pasar mañana",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a2ac0a222d699b52da57959612b1a9cc.png"
  },
  {
    "artist": "Bad Bunny",
    "album": "EL ÚLTIMO TOUR DEL MUNDO",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/21482b89bec3657b28c059f3126f3af5.png"
  },
  {
    "artist": "The Marías",
    "album": "Submarine",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ff18c3c08f0e1c85d62eeee24d1154e9.png"
  },
  {
    "artist": "The Marías",
    "album": "CINEMA",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/669e4fdc792fffd53f969820325843ac.png"
  },
  {
    "artist": "The Marías",
    "album": "Superclean, Vol. II",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7ec497e801200146c55c6afe5d677519.png"
  },
  {
    "artist": "The Marías",
    "album": "No One Noticed (Extended)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0fc48f2b5906f39385216339b15388f3.png"
  },
  {
    "artist": "The Marías",
    "album": "Superclean, Vol. I",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5c8935c345285f574120a493c39c2a30.png"
  },
  {
    "artist": "Beyoncé",
    "album": "I AM...SASHA FIERCE",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3e80ed2c42b53bd8a3d69d91ed215715.png"
  },
  {
    "artist": "Beyoncé",
    "album": "Dangerously in Love",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/bb77c77fc1a103842c22022d7ed68f7f.png"
  },
  {
    "artist": "Beyoncé",
    "album": "4",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fd0acc299b94c6f067c6bac375909b9f.png"
  },
  {
    "artist": "Beyoncé",
    "album": "BEYONCÉ [Platinum Edition]",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f987797756a8614d65ee9f80addb040a.png"
  },
  {
    "artist": "Beyoncé",
    "album": "B'Day",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2660a4cb02b874e11485f7a8c93e1d33.png"
  },
  {
    "artist": "Steve Lacy",
    "album": "Dark Red",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3ddbcb76b0872091404a741e58b59562.png"
  },
  {
    "artist": "Steve Lacy",
    "album": "Gemini Rights",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/12dcf1122cccf14bd8d943480d04cd58.png"
  },
  {
    "artist": "Steve Lacy",
    "album": "The Lo-Fis",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/40dac4d3389349e54ac7258a4736ff2b.png"
  },
  {
    "artist": "Steve Lacy",
    "album": "Some",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6faa967d52c9dbc70b578ef50bb2cd44.png"
  },
  {
    "artist": "Steve Lacy",
    "album": "C U Girl",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/680763bf8802936007751735b5a1b936.png"
  },
  {
    "artist": "Mitski",
    "album": "Be the Cowboy",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a9b9c68a6ecb979e1ac95e28bb28e06b.png"
  },
  {
    "artist": "Mitski",
    "album": "The Land Is Inhospitable and So Are We",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/788dfbc94a424d3b344aa97e68f68eed.png"
  },
  {
    "artist": "Mitski",
    "album": "bury me at makeout creek",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/48b1e85daff0afa738996e8f7737f1ef.png"
  },
  {
    "artist": "Mitski",
    "album": "Puberty 2",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/703616fde4bec426d7819777f11e2e98.png"
  },
  {
    "artist": "Mitski",
    "album": "Retired from Sad, New Career in Business",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4b49d5d53345bc9fec05cbbb9722f8f4.png"
  },
  {
    "artist": "TV Girl",
    "album": "French Exit",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4f091d5082e04691c6d7f4b2e2efbdc0.png"
  },
  {
    "artist": "TV Girl",
    "album": "Who Really Cares",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7f606674cfa1fdc4603695021d3fbc95.png"
  },
  {
    "artist": "TV Girl",
    "album": "Death of a Party Girl",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5259fe63f165274122979eb9e4b47c2d.png"
  },
  {
    "artist": "TV Girl",
    "album": "The Night in Question: French Exit Outtakes",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/03b7f27f311665fe3f8952a902683499.png"
  },
  {
    "artist": "TV Girl",
    "album": "Lonely Women",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/079c8593e58cc1fdd2e54abb3af6ab01.png"
  },
  {
    "artist": "Future",
    "album": "WE DON'T TRUST YOU",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ed0b0acbc5af9cabb31acbf3ba9e79bb.png"
  },
  {
    "artist": "Future",
    "album": "FUTURE",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/221d53768d47338692fa9fc60b6a6b26.png"
  },
  {
    "artist": "Future",
    "album": "I NEVER LIKED YOU",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4f8401c7eae61f7df866141bf910b648.png"
  },
  {
    "artist": "Future",
    "album": "HNDRXX",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f230dc794738b869ac8d713a7c2f6168.png"
  },
  {
    "artist": "Future",
    "album": "DS2 (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/145bedc68ea1262d95bf0216e4291f6a.png"
  },
  {
    "artist": "Playboi Carti",
    "album": "Whole Lotta Red",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0db2bb3f8dcebb4279db97dc7608d090.png"
  },
  {
    "artist": "Playboi Carti",
    "album": "Playboi Carti",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9115b9fbc7cf8db99d504319cdf6bd90.png"
  },
  {
    "artist": "Playboi Carti",
    "album": "Die Lit",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d1761236c12379d3e1dfce76023231f6.png"
  },
  {
    "artist": "Playboi Carti",
    "album": "Music",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/10cf93995de9215931f95e1a2f34c37c.png"
  },
  {
    "artist": "Playboi Carti",
    "album": "ALL RED",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4c537d05c6ef71610d82d252434e2344.png"
  },
  {
    "artist": "Dominic Fike",
    "album": "Don't Forget About Me, Demos",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1f4447aa5510de93f025a475f6bdad33.png"
  },
  {
    "artist": "Dominic Fike",
    "album": "Sunburn",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ea11589f28426d0feeab162ca61e3d0f.png"
  },
  {
    "artist": "Dominic Fike",
    "album": "What Could Possibly Go Wrong",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5a012a2d2b06dcf28450639bd11238d8.png"
  },
  {
    "artist": "Dominic Fike",
    "album": "14 MINUTES",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0637fab4f65f73cdc443b254ef85bf29.png"
  },
  {
    "artist": "Dominic Fike",
    "album": "Phone Numbers",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b01eab872ab40506798d1e35fba40b69.png"
  },
  {
    "artist": "Britney Spears",
    "album": "In the Zone",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a559d5c65ee566e8480854c5497d2788.png"
  },
  {
    "artist": "Britney Spears",
    "album": "Blackout",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b9a14a64aed91932f0f45708d6b20a74.png"
  },
  {
    "artist": "Britney Spears",
    "album": "Circus (Deluxe Version)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5c866827fc07bed8ea1624b6de3d98b3.png"
  },
  {
    "artist": "Britney Spears",
    "album": "...Baby One More Time (Digital Deluxe Version)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a366e8cc3fb5adb4b75d138652fa721a.png"
  },
  {
    "artist": "Britney Spears",
    "album": "Oops!... I Did It Again",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9d9002ec4e0858cbeb0c89a2497173d1.png"
  },
  {
    "artist": "beabadoobee",
    "album": "Beatopia",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d47d0db3893fa94639514a2aa47372b8.png"
  },
  {
    "artist": "beabadoobee",
    "album": "This Is How Tomorrow Moves",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/794fdafa7b5fe907c6f9abe41060af6d.png"
  },
  {
    "artist": "beabadoobee",
    "album": "Glue Song",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/84c1ba3af1bff2e6f7aa1e5e21fb4195.png"
  },
  {
    "artist": "beabadoobee",
    "album": "Patched Up",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ed2ddfd6c3fae84a69912d918d80b510.png"
  },
  {
    "artist": "beabadoobee",
    "album": "Loveworm",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b7bf7eb6977b293768e4d7e7af0ac45b.png"
  },
  {
    "artist": "The Beatles",
    "album": "Abbey Road (Remastered)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a4bbf73ba62024be279364e867b0ca20.png"
  },
  {
    "artist": "The Beatles",
    "album": "The Beatles (Remastered)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/78bf9324efbc7583e6cae6f707568e59.png"
  },
  {
    "artist": "The Beatles",
    "album": "Help! (Remastered)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c70cda3df810b0d34904b55618e0eebe.png"
  },
  {
    "artist": "The Beatles",
    "album": "Let It Be (Remastered)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/724148c518ac36565baec48fa333cc31.png"
  },
  {
    "artist": "The Beatles",
    "album": "Revolver (Remastered)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1ac1b27a691107b32b1eabee93481fbc.png"
  },
  {
    "artist": "BTS",
    "album": "LOVE YOURSELF 結 'Answer'",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1c1100b20e2eb165f9093a8b6ca5a6ed.png"
  },
  {
    "artist": "BTS",
    "album": "MAP OF THE SOUL : PERSONA",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4172cfad0e4900cd93c961c33133ff1d.png"
  },
  {
    "artist": "BTS",
    "album": "LOVE YOURSELF 轉 'Tear'",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5f0214a58dec8ee36d902b50104b9740.png"
  },
  {
    "artist": "BTS",
    "album": "BE",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9380aeba3b3430e154263fc4bfae7efb.png"
  },
  {
    "artist": "BTS",
    "album": "LOVE YOURSELF 承 'Her'",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fac6de5d84939bd32422547cacb123fe.png"
  },
  {
    "artist": "Nirvana",
    "album": "Nevermind (Remastered)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d97d21d3884088e85785eb471f3c431b.png"
  },
  {
    "artist": "Nirvana",
    "album": "Nevermind",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e8693de0a153e609b3eaebb42d62e8be.png"
  },
  {
    "artist": "Nirvana",
    "album": "In Utero",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f8b772fdce8284a7c20cc254c7b32796.png"
  },
  {
    "artist": "Nirvana",
    "album": "MTV Unplugged in New York",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8e4304de63b44d6ca8f9d3df2576ac8f.png"
  },
  {
    "artist": "Nirvana",
    "album": "Nirvana",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/573899052466479da97b9207a780d06f.png"
  },
  {
    "artist": "Madonna",
    "album": "Confessions on a Dance Floor",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/940351f3cd3404d81c6dfe62ffb55c6c.png"
  },
  {
    "artist": "Madonna",
    "album": "Celebration (Double Disc Version)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5779fa945644a539ad2beeaede333d92.png"
  },
  {
    "artist": "Madonna",
    "album": "Like a Prayer",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1956b0e347081443f829998fca1105fa.png"
  },
  {
    "artist": "Madonna",
    "album": "True Blue",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c497ef1126c4cc7436a685e4ea32f62c.png"
  },
  {
    "artist": "Madonna",
    "album": "Like a Virgin",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a4ddbfef557fd92f733c307855b6fd80.png"
  },
  {
    "artist": "The Strokes",
    "album": "Is This It",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/80f256e56b1043cdbb99da3ac4dd69a0.png"
  },
  {
    "artist": "The Strokes",
    "album": "Room on Fire",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a9c961c8da0d4427b7d7a4018738f5df.png"
  },
  {
    "artist": "The Strokes",
    "album": "First Impressions of Earth",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f41698e47228486ac81690028794f18d.png"
  },
  {
    "artist": "The Strokes",
    "album": "The New Abnormal",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/576554c542da76c08f0e80c129afcb0e.png"
  },
  {
    "artist": "The Strokes",
    "album": "Comedown Machine",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/36a064d8029e4b9c9d52c07961fbeed2.png"
  },
  {
    "artist": "Calvin Harris",
    "album": "Motion",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6d9ccbf7bd97937241301e216d550a58.png"
  },
  {
    "artist": "Calvin Harris",
    "album": "18 Months",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/38a2d0c803cb46c1b99bc66babdb216f.png"
  },
  {
    "artist": "Calvin Harris",
    "album": "Funk Wav Bounces Vol.1",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/38d5dc8041655936e7c9b020561db74c.png"
  },
  {
    "artist": "Calvin Harris",
    "album": "This Is What You Came For",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f4bda5a899452047e6088e6ae80647f2.png"
  },
  {
    "artist": "Calvin Harris",
    "album": "One Kiss (with Dua Lipa)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/93fbe2928d46743f49e2a3a501202c5c.png"
  },
  {
    "artist": "Lorde",
    "album": "Pure Heroine",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1c3f14fba3dececc85d10d7252e68b93.png"
  },
  {
    "artist": "Lorde",
    "album": "Melodrama",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fdef4c7536c03d0a5a6689e4b1fa9b42.png"
  },
  {
    "artist": "Lorde",
    "album": "Pure Heroine (Extended)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8cbc7d500ea6f6c69012e71e0da1c356.png"
  },
  {
    "artist": "Lorde",
    "album": "Solar Power",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/708f941453e3f071547e34eaeeac9a4c.png"
  },
  {
    "artist": "Lorde",
    "album": "The Love Club EP",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d408dbd3065624d8da4a8098c61a8986.png"
  },
  {
    "artist": "Maroon 5",
    "album": "Songs About Jane",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/bbf019744c23450f80c16a492c6917e0.png"
  },
  {
    "artist": "Maroon 5",
    "album": "V",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1fd6e49508d7b077c8344f45853ded46.png"
  },
  {
    "artist": "Maroon 5",
    "album": "Songs About Jane: 10th Anniversary Edition",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/41fab0ba40fb460786628a9520f5001b.png"
  },
  {
    "artist": "Maroon 5",
    "album": "Overexposed Track By Track",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0c7860578798ed807a34cb0ddd91c373.png"
  },
  {
    "artist": "Maroon 5",
    "album": "Red Pill Blues (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/103aa20a67beffa98240fac2891ebc77.png"
  },
  {
    "artist": "Mac DeMarco",
    "album": "2",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0fd4ea33ee02465cc66904460ee8e91d.png"
  },
  {
    "artist": "Mac DeMarco",
    "album": "This Old Dog",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b6cc7efcf8c694136846f0b3af0b7984.png"
  },
  {
    "artist": "Mac DeMarco",
    "album": "Salad Days",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/28ffd87a1e554022c0065398979894c4.png"
  },
  {
    "artist": "Mac DeMarco",
    "album": "Here Comes the Cowboy",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2d0f45e9a45eb0473566db0afbbdff08.png"
  },
  {
    "artist": "Mac DeMarco",
    "album": "Another One",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/af64653c641bcca98fd66f46a7da26d6.png"
  },
  {
    "artist": "Twenty One Pilots",
    "album": "Blurryface",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6f9906f43b7b516e89f9ebc331dd990a.png"
  },
  {
    "artist": "Twenty One Pilots",
    "album": "Heathens",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f654427f55499896095d4af3d3978b1a.png"
  },
  {
    "artist": "Twenty One Pilots",
    "album": "Vessel",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/417836606e807092b32cd14517508478.png"
  },
  {
    "artist": "Twenty One Pilots",
    "album": "Trench",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9efc2181a3c5643cde2441c79451d1bc.png"
  },
  {
    "artist": "Twenty One Pilots",
    "album": "Scaled and Icy",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/faa186fa9fd9acdb6387de77355207d4.png"
  },
  {
    "artist": "sombr",
    "album": "I Barely Know Her",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d2dae57b56a88791e1b3d90639c436d6.png"
  },
  {
    "artist": "sombr",
    "album": "back to friends",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/afd68432bf916d1a6cab27c04b6c0e72.png"
  },
  {
    "artist": "sombr",
    "album": "undressed",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4bdcaf21f330563252e32ec74ba0ee81.png"
  },
  {
    "artist": "sombr",
    "album": "would've been you",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fb0096574e0f97ba5219c8e2ae93c00d.png"
  },
  {
    "artist": "sombr",
    "album": "do i ever cross your mind",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/29eaeea1ae76200adbe95e7d88f20f74.png"
  },
  {
    "artist": "The Cure",
    "album": "Greatest Hits",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/bdbc60c4bab8cf280166d31716bc0fc8.png"
  },
  {
    "artist": "The Cure",
    "album": "Wish",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7e1f7cafa97e32a9fc549f5cf13061ae.png"
  },
  {
    "artist": "The Cure",
    "album": "Three Imaginary Boys",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8a3c4f3610c1ed38d4b5fabddc37ed7b.png"
  },
  {
    "artist": "The Cure",
    "album": "Kiss Me, Kiss Me, Kiss Me",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0a5401fd4ef19dfc6f8583f108d7023b.png"
  },
  {
    "artist": "The Cure",
    "album": "Disintegration (Deluxe Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/429fd312f3d5cb652a9c9ec262495742.png"
  },
  {
    "artist": "Lil Uzi Vert",
    "album": "Luv Is Rage 2",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/28b5dfed6d5b4023e8f14c2303960cb5.png"
  },
  {
    "artist": "Lil Uzi Vert",
    "album": "Luv Is Rage 2 (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/dd7df4864af8cf12a2f3b736c47c4315.png"
  },
  {
    "artist": "Lil Uzi Vert",
    "album": "Pink Tape",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/edd1245072335f224886b55242ee0fc2.png"
  },
  {
    "artist": "Lil Uzi Vert",
    "album": "Eternal Atake",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/544aa5fe7908d216e17bf614c7e1ab27.png"
  },
  {
    "artist": "Lil Uzi Vert",
    "album": "Lil Uzi Vert vs. the World",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/50f8bdf6b97cce0c9edd4a46f60079e8.png"
  },
  {
    "artist": "Joji",
    "album": "BALLADS 1",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e6a34793a424eec94bde00c621caa70f.png"
  },
  {
    "artist": "Joji",
    "album": "Nectar",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b74dc22e72de2839db17e7e04b41e8f8.png"
  },
  {
    "artist": "Joji",
    "album": "SMITHEREENS",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6f2784172913db6982b2f6de18b837f6.png"
  },
  {
    "artist": "Joji",
    "album": "In Tongues (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a4899eef2c2db70976ad017dedfae48e.png"
  },
  {
    "artist": "Joji",
    "album": "Glimpse of Us",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d4fa44653857583f8fa2752bb872c3cf.png"
  },
  {
    "artist": "Red Hot Chili Peppers",
    "album": "Stadium Arcadium",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fb7d1a6c6e5240c48159d08b17ea022b.png"
  },
  {
    "artist": "Red Hot Chili Peppers",
    "album": "Californication",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1469e23c2f2b476b9ca68f87cb29bcd1.png"
  },
  {
    "artist": "Red Hot Chili Peppers",
    "album": "Californication (Deluxe Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/45dfde4f63a50f3aedeee21f3e9ed033.png"
  },
  {
    "artist": "Red Hot Chili Peppers",
    "album": "By the Way",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f95067353057a3c59fe6ba90469e56c6.png"
  },
  {
    "artist": "Red Hot Chili Peppers",
    "album": "By the Way (Deluxe Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7021709e21bbaf5f397f8ca16fa24b61.png"
  },
  {
    "artist": "Weezer",
    "album": "Weezer",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/82dea2ae26de9b443208cf21358c876f.png"
  },
  {
    "artist": "Weezer",
    "album": "Pinkerton",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/cef1f1d0756184860c3c8f60d91aba64.png"
  },
  {
    "artist": "Weezer",
    "album": "Make Believe",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1c8439b16ed4ca4e0bac727e7b325581.png"
  },
  {
    "artist": "Weezer",
    "album": "Weezer (Green Album)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/55f7ca70a9644479fa9dace6590094c8.png"
  },
  {
    "artist": "Weezer",
    "album": "Pinkerton - Deluxe Edition",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9384769ea3aea1889c546cdf9ed32ebb.png"
  },
  {
    "artist": "Zara Larsson",
    "album": "So Good",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/89ef50ca1a02e7d397b4b30fe742eeb5.png"
  },
  {
    "artist": "Zara Larsson",
    "album": "Midnight Sun",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d0c78dc3a80e2e45ac4972089360a051.png"
  },
  {
    "artist": "Zara Larsson",
    "album": "Poster Girl",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/96a9274db2022f46a53343a2a86eeac2.png"
  },
  {
    "artist": "Zara Larsson",
    "album": "Lush Life",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/164dc5b7d0ff1e042751667ac0143709.png"
  },
  {
    "artist": "Zara Larsson",
    "album": "Midnight Sun: Girls Trip",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/dd15c27db9ccb3d45efcbf13c982ff70.png"
  },
  {
    "artist": "Kali Uchis",
    "album": "Isolation",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/bf56b9acc7cdf77704bd0a9dbb602c65.png"
  },
  {
    "artist": "Kali Uchis",
    "album": "Sin Miedo (del Amor y Otros Demonios) ∞",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a2aa0354e06545fb4736694ee8639b89.png"
  },
  {
    "artist": "Kali Uchis",
    "album": "Red Moon in Venus",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6044a8163acfc5cb5f7fd68501e54e11.png"
  },
  {
    "artist": "Kali Uchis",
    "album": "Por Vida",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/592d449dac3e89946a1ab926d91c2bfc.png"
  },
  {
    "artist": "Kali Uchis",
    "album": "Moonlight",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fcf227f75c491a6c4824d2f872040ac2.png"
  },
  {
    "artist": "My Chemical Romance",
    "album": "The Black Parade",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7675defb2787ce67cd030081eb8ff77c.png"
  },
  {
    "artist": "My Chemical Romance",
    "album": "Three Cheers for Sweet Revenge",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/09cb27a9f908354fd210a07830951791.png"
  },
  {
    "artist": "My Chemical Romance",
    "album": "Danger Days: The True Lives of the Fabulous Killjoys",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5d859232fed7488a82d37ecabb232fce.png"
  },
  {
    "artist": "My Chemical Romance",
    "album": "I Brought You My Bullets, You Brought Me Your Love",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ac347cf3cda7e91e0d837220f6bb63ea.png"
  },
  {
    "artist": "My Chemical Romance",
    "album": "May Death Never Stop You",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1130c37a9ee5d059956ce01b4ac9003f.png"
  },
  {
    "artist": "Queen",
    "album": "Greatest Hits",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/03beaee047a99a75c8347461094c2344.png"
  },
  {
    "artist": "Queen",
    "album": "A Night At The Opera (2011 Remaster)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5bef877b7563e13a4218da382b86fe7a.png"
  },
  {
    "artist": "Queen",
    "album": "Jazz (2011 Remaster)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d9645ba9592445b1c5c35e1990c6964f.png"
  },
  {
    "artist": "Queen",
    "album": "The Game (2011 Remaster)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5a23956df65d9581338e0e71db00d79a.png"
  },
  {
    "artist": "Queen",
    "album": "Hot Space (2011 Remaster)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/de361a68c39e4468c4df73fb3c8ae178.png"
  },
  {
    "artist": "Laufey",
    "album": "Bewitched",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/94994638b4305d100e95026e361c1722.png"
  },
  {
    "artist": "Laufey",
    "album": "Everything I Know About Love",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/bc4202b19c488be8ca759874faa8548a.png"
  },
  {
    "artist": "Laufey",
    "album": "Let You Break My Heart Again",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/009cec63bf05aeeee701e217c062de80.png"
  },
  {
    "artist": "Laufey",
    "album": "A Matter of Time",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5272edc699288dc9495a9e46fded7616.png"
  },
  {
    "artist": "Laufey",
    "album": "From the Start",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a73c131e817873587fc4a8c2d5cd324a.png"
  },
  {
    "artist": "Daniel Caesar",
    "album": "Freudian",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1c892b22c3a14addc25f13a0abb5f1fe.png"
  },
  {
    "artist": "Daniel Caesar",
    "album": "NEVER ENOUGH",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/19102a409a0fbcb571788e0c4b9067b1.png"
  },
  {
    "artist": "Daniel Caesar",
    "album": "Get You - Single",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/18fb970a13c890f6342e5deda78c3b16.png"
  },
  {
    "artist": "Daniel Caesar",
    "album": "CASE STUDY 01",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f4c1af13e288af5f42a9064a23674b4f.png"
  },
  {
    "artist": "Daniel Caesar",
    "album": "Son of Spergy",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f247dd6550aa64165d070ff86837685a.png"
  },
  {
    "artist": "Green Day",
    "album": "American Idiot",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5bcb675866706c229ad9f77188b8ac44.png"
  },
  {
    "artist": "Green Day",
    "album": "Dookie",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2248e72411992639ffa8ab94ba97a631.png"
  },
  {
    "artist": "Green Day",
    "album": "Nimrod",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/cc7bcc37cf9f88e4700dfb9500d1b241.png"
  },
  {
    "artist": "Green Day",
    "album": "21st Century Breakdown",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/72a314e1e9064a0418159b144fe1ad72.png"
  },
  {
    "artist": "Green Day",
    "album": "Insomniac",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1a2cd1a286cc134cc531b23d727d66cf.png"
  },
  {
    "artist": "Black Eyed Peas",
    "album": "Monkey Business",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/496f388a6bd2fbe8587915943b4fd0c8.png"
  },
  {
    "artist": "Black Eyed Peas",
    "album": "Elephunk",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/16fcf158616c98161f59d831afd24d22.png"
  },
  {
    "artist": "Black Eyed Peas",
    "album": "The E.N.D. (The Energy Never Dies)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c1c93f40047046c1bce56e8fad76f3e1.png"
  },
  {
    "artist": "Black Eyed Peas",
    "album": "The E.N.D. (The Energy Never Dies) [Deluxe Version]",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/574bb33a1cebb9fa7a3fc28f34450de5.png"
  },
  {
    "artist": "Black Eyed Peas",
    "album": "The Beginning",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/97ecdb5bc71f48ba82e381c67e7c1c86.png"
  },
  {
    "artist": "LE SSERAFIM",
    "album": "UNFORGIVEN",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/97539440d0f639d7b970cc26b6df75c5.png"
  },
  {
    "artist": "LE SSERAFIM",
    "album": "FEARLESS",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d930ba65bb061c4c8a7849e3704216cd.png"
  },
  {
    "artist": "LE SSERAFIM",
    "album": "CRAZY (Party Remixes 1)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/cf981c4b01f094f747dde4f3f35fc22c.png"
  },
  {
    "artist": "LE SSERAFIM",
    "album": "Perfect Night",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/59684aef6f2df6266b84a06269ff0855.png"
  },
  {
    "artist": "LE SSERAFIM",
    "album": "ANTIFRAGILE",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/47403415f97336603c88ea4c1062d4b1.png"
  },
  {
    "artist": "Post Malone",
    "album": "Hollywood's Bleeding",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/53f65efa74120514ef6c94d1fa30580d.png"
  },
  {
    "artist": "Post Malone",
    "album": "beerbongs & bentleys",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d9a790b6c8526a4c8cb9862c64bc3342.png"
  },
  {
    "artist": "Post Malone",
    "album": "Stoney (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/77a5b763b18898ff78a68406029de753.png"
  },
  {
    "artist": "Post Malone",
    "album": "Twelve Carat Toothache",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d897b8b9afe75c015ae753ff914f9021.png"
  },
  {
    "artist": "Post Malone",
    "album": "One Right Now",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ba3caa637eaae7e13a2fd6977ac54dbe.png"
  },
  {
    "artist": "Justin Timberlake",
    "album": "FutureSex/LoveSounds",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e80e729a9cdcc98ddd7d1a3052142c37.png"
  },
  {
    "artist": "Justin Timberlake",
    "album": "Justified",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/89f49f994f808748e042177e73264256.png"
  },
  {
    "artist": "Justin Timberlake",
    "album": "The 20/20 Experience (Deluxe Version)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1de1b815025e2ceadfad8736d89047c7.png"
  },
  {
    "artist": "Justin Timberlake",
    "album": "FutureSex/LoveSounds Deluxe Edition",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1a8e7749f42573aff74093e8d82feac7.png"
  },
  {
    "artist": "Justin Timberlake",
    "album": "Can't Stop The Feeling! (From DreamWorks Animation's \"Trolls\")",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6485b56ebb06b63b11aaa205cb757c43.png"
  },
  {
    "artist": "Panic! at the Disco",
    "album": "A Fever You Can't Sweat Out",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/249a926fbef4487eb39bbb93d4a0618d.png"
  },
  {
    "artist": "Panic! at the Disco",
    "album": "Death of a Bachelor",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/257fe11067041f5b10e758f64afb601e.png"
  },
  {
    "artist": "Panic! at the Disco",
    "album": "Pray for the Wicked",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/15d962ee89b1690b3ad3abc9f558d4dd.png"
  },
  {
    "artist": "Panic! at the Disco",
    "album": "Vices & Virtues",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/816c5f1db2824db09d530471f8450f81.png"
  },
  {
    "artist": "Panic! at the Disco",
    "album": "Too Weird to Live, Too Rare to Die!",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a4774f5ef1874ef59f90a44d562c8e0d.png"
  },
  {
    "artist": "Eminem",
    "album": "The Eminem Show",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/74768435b4f70689863aa76f888d62a3.png"
  },
  {
    "artist": "Eminem",
    "album": "Recovery",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ee16dc01c93643b288b60e9806c1e68b.png"
  },
  {
    "artist": "Eminem",
    "album": "The Marshall Mathers LP",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a38c6a72117f413ec11534c214947b13.png"
  },
  {
    "artist": "Eminem",
    "album": "The Slim Shady LP",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6b71796a5a734c2f97a0daddd12115fe.png"
  },
  {
    "artist": "Eminem",
    "album": "Encore (Deluxe Version)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4fe6090ec6d37e0818ea216945062dbe.png"
  },
  {
    "artist": "Sade",
    "album": "The Best of Sade",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3e9f44a18466985b01748600ee4892a3.png"
  },
  {
    "artist": "Sade",
    "album": "Love Deluxe",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2fe564884d6a90885da819ed1ca631ce.png"
  },
  {
    "artist": "Sade",
    "album": "Lovers Rock",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/508fc788b188fafdf71ef1da9f10a48f.png"
  },
  {
    "artist": "Sade",
    "album": "Promise",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/29ce2666eebe380a0f882755aab75798.png"
  },
  {
    "artist": "Sade",
    "album": "Diamond Life",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d7cfcccb2d3964a66f43584f11c2e30d.png"
  },
  {
    "artist": "Cigarettes After Sex",
    "album": "Cigarettes After Sex",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5d53d7e6aad2f08c464e301d3bab6e96.png"
  },
  {
    "artist": "Cigarettes After Sex",
    "album": "Cry",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7f3eebc25ed0d0560adeb5c4d40007f9.png"
  },
  {
    "artist": "Cigarettes After Sex",
    "album": "I.",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9be0fce12d245f3f011961ab2179e95e.png"
  },
  {
    "artist": "Cigarettes After Sex",
    "album": "Crush",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4aaf017819232160dc10cbe516f9bf5e.png"
  },
  {
    "artist": "Cigarettes After Sex",
    "album": "You're All I Want",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/96fce9b1681f9ddc0db9b553b44368f6.png"
  },
  {
    "artist": "Daft Punk",
    "album": "Discovery",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1340e9e1082cf0dc748583b7eefce6d5.png"
  },
  {
    "artist": "Daft Punk",
    "album": "Random Access Memories",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/11dd7e48a1f042c688bf54985f01d088.png"
  },
  {
    "artist": "Daft Punk",
    "album": "Homework",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/38d4bac63b904e789e96e48e2c66098a.png"
  },
  {
    "artist": "Daft Punk",
    "album": "Human After All",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1df40a76f68b4d0a8410a0bae2127359.png"
  },
  {
    "artist": "Daft Punk",
    "album": "TRON: Legacy",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/598a910ff59e4fbca6a54307e5fee8fc.png"
  },
  {
    "artist": "System of a Down",
    "album": "Toxicity",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/faa79372c53139010902e67938ccf78e.png"
  },
  {
    "artist": "System of a Down",
    "album": "Hypnotize",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a96a0ff1cd9b384659b7edac19dc15b6.png"
  },
  {
    "artist": "System of a Down",
    "album": "Mezmerize",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6af731c307585bb1e496f80f7dbad566.png"
  },
  {
    "artist": "System of a Down",
    "album": "System of a Down",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/bce9493d4f2f8b54382bba2c23268005.png"
  },
  {
    "artist": "System of a Down",
    "album": "Steal This Album!",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/303fd758c06840a876e090ccc46f5c2e.png"
  },
  {
    "artist": "The Killers",
    "album": "Hot Fuss",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fae9c99bbb6ae827b508a97328551912.png"
  },
  {
    "artist": "The Killers",
    "album": "Sam's Town",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a7645386e75e465b9a9b5335bc9115ba.png"
  },
  {
    "artist": "The Killers",
    "album": "Day & Age",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e68669788bdf8e102229b14ab3b64f15.png"
  },
  {
    "artist": "The Killers",
    "album": "Sawdust",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/540b3ba392c599ecdc848cb80f2edd5a.png"
  },
  {
    "artist": "The Killers",
    "album": "Day & Age (Bonus Tracks)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b69b10b8e67de31021e66d3556f4cbf2.png"
  },
  {
    "artist": "J. Cole",
    "album": "2014 Forest Hills Drive",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1e35fab5d284a3e5b7b54596227f2c2e.png"
  },
  {
    "artist": "J. Cole",
    "album": "Cole World: The Sideline Story",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0e16b68c3a464068adf15d6d4ce5be9d.png"
  },
  {
    "artist": "J. Cole",
    "album": "Born Sinner (Deluxe Version)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5de1881985334258853f628825d1310e.png"
  },
  {
    "artist": "J. Cole",
    "album": "The Off-Season",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5d3c2db3f3d2858932ef0a77b9d15dcb.png"
  },
  {
    "artist": "J. Cole",
    "album": "4 Your Eyez Only",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/01a34a66db612b2a0bf049525c325654.png"
  },
  {
    "artist": "Tate McRae",
    "album": "greedy",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ff9e4b944f7abd725ec3ad3c3d572f3c.png"
  },
  {
    "artist": "Tate McRae",
    "album": "So Close to What",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2c927d26b092260dee2e79d4864c1de7.png"
  },
  {
    "artist": "Tate McRae",
    "album": "THINK LATER",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d5c9a69fcda54143308997e32981c139.png"
  },
  {
    "artist": "Tate McRae",
    "album": "Just Keep Watching (From F1® The Movie)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c3ed5bac4c4c523f4ee28e6318ce24d7.png"
  },
  {
    "artist": "Tate McRae",
    "album": "i used to think i could fly",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c02c128a3d62e8607614dc4f5ab990ae.png"
  },
  {
    "artist": "Addison Rae",
    "album": "Addison",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ad9e0bcc76824a8327dd4ed57d20dd5b.png"
  },
  {
    "artist": "Addison Rae",
    "album": "Diet Pepsi",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/409c8ccccfa05601c8645b1f9cd3e9c4.png"
  },
  {
    "artist": "Addison Rae",
    "album": "AR",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c6ae145428bde533606e5cf89912c0fd.png"
  },
  {
    "artist": "Addison Rae",
    "album": "Headphones On",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/cd95fb540a0655b1755c068644d02e4e.png"
  },
  {
    "artist": "Addison Rae",
    "album": "Fame Is a Gun",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d76e544b4e5eaa1e8823f14ed60cda45.png"
  },
  {
    "artist": "Dua Lipa",
    "album": "Future Nostalgia",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7017c94ef74a476838e751b0cee1f014.png"
  },
  {
    "artist": "Dua Lipa",
    "album": "Dua Lipa (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7c964930c1ba17fe12e919e047532491.png"
  },
  {
    "artist": "Dua Lipa",
    "album": "Dance the Night (From Barbie the Album)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/efdede2a94a0b7887d0041aa72177c6f.png"
  },
  {
    "artist": "Dua Lipa",
    "album": "Radical Optimism",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/787b99ed519694d755514a27a5ce3735.png"
  },
  {
    "artist": "Dua Lipa",
    "album": "Dua Lipa (Complete Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/38406b13a38d14fde551f7a2f124fa04.png"
  },
  {
    "artist": "Kesha",
    "album": "Animal",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/24546ab04aeb584825f465d8968301c4.png"
  },
  {
    "artist": "Kesha",
    "album": "TiK ToK",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ac1c39971d1abe30df72f4076ee9f6d4.png"
  },
  {
    "artist": "Kesha",
    "album": "Cannibal",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/52e18c5887c1c6c9eecb878dd6854160.png"
  },
  {
    "artist": "Kesha",
    "album": "Warrior (Deluxe Version)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ede5453783f7de83cffe2397a1157bbd.png"
  },
  {
    "artist": "Kesha",
    "album": "Die Young",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/085cfbba497bc89f456610e5f8651991.png"
  },
  {
    "artist": "Olivia Dean",
    "album": "The Art of Loving",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e9aedce534c4c0cf22f18483bed6620e.png"
  },
  {
    "artist": "Olivia Dean",
    "album": "Man I Need",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6e55edaaed5134db13090ecfec74a043.png"
  },
  {
    "artist": "Olivia Dean",
    "album": "Messy",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/46cddabe5aa8bf30fc591e12ed36bd98.png"
  },
  {
    "artist": "Olivia Dean",
    "album": "Nice To Each Other",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f56dfa3569b3164d048fd8341c8b422d.png"
  },
  {
    "artist": "Olivia Dean",
    "album": "Ok Love You Bye",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6cbd8cdd398089e1a8435d612784f3c4.png"
  },
  {
    "artist": "Pitbull",
    "album": "Planet Pit (Deluxe Version)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/207df6b9a5d67bffdd5cf454be4d6ebd.png"
  },
  {
    "artist": "Pitbull",
    "album": "Global Warming: Meltdown (Deluxe Version)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0bb5e59856964ea9ce3edd20bdb201d5.png"
  },
  {
    "artist": "Pitbull",
    "album": "Globalization",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9e5dfc556d4a44fcc4967721f258e8ea.png"
  },
  {
    "artist": "Pitbull",
    "album": "Pitbull Starring In Rebelution",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/36fe39b06a53bdc9967e5d8a6d1b0caf.png"
  },
  {
    "artist": "Pitbull",
    "album": "Rebelution",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/645421ed138ab5fc45b717614b6b4dd3.png"
  },
  {
    "artist": "Hozier",
    "album": "Hozier",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e7c6566aab7f8c89bc79b581030cb70f.png"
  },
  {
    "artist": "Hozier",
    "album": "Hozier (Expanded Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/edc416f16adf29c3097deade4acf8390.png"
  },
  {
    "artist": "Hozier",
    "album": "Wasteland, Baby!",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fad5cb49ef8ed3da329c08bd11d33e77.png"
  },
  {
    "artist": "Hozier",
    "album": "Hozier (Special Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/294236673237889ba97fcf54fd0bdc05.png"
  },
  {
    "artist": "Hozier",
    "album": "Unreal Unearth: Unaired",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ef74654fa53d8824e86ae07207876604.png"
  },
  {
    "artist": "Pierce the Veil",
    "album": "Collide With the Sky",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/557643a8faaa35768cb6088f576fed30.png"
  },
  {
    "artist": "Pierce the Veil",
    "album": "Selfish Machines",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2d23f6186a52429cc254acd176e75f4f.png"
  },
  {
    "artist": "Pierce the Veil",
    "album": "The Jaws of Life",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5ed2ed408623619d1b869928c88ffd42.png"
  },
  {
    "artist": "Pierce the Veil",
    "album": "Misadventures",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/65fc665467941fee867d6616909af71f.png"
  },
  {
    "artist": "Pierce the Veil",
    "album": "A Flair for the Dramatic",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/eaaf2dbd3cbc69a9520f53fb164caaa0.png"
  },
  {
    "artist": "Pink Floyd",
    "album": "The Dark Side of the Moon",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d4bdd038cacbec705e269edb0fd38419.png"
  },
  {
    "artist": "Pink Floyd",
    "album": "The Wall",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6af6a9a0d246464f976bef5193823322.png"
  },
  {
    "artist": "Pink Floyd",
    "album": "Wish You Were Here",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e19d2760d2c0cf4de9d2a68beda56efd.png"
  },
  {
    "artist": "Pink Floyd",
    "album": "The Division Bell",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/82d5936d6b5997791c300fc7743ff3ce.png"
  },
  {
    "artist": "Pink Floyd",
    "album": "Meddle",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/55dc29cfc3264ee3cee981181ddead2a.png"
  },
  {
    "artist": "David Guetta",
    "album": "One More Love",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/abea43811c0c48278574f036235c273f.png"
  },
  {
    "artist": "David Guetta",
    "album": "Nothing But The Beat (Ultimate Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/86880e316b76ac33bb039e2c67c71afe.png"
  },
  {
    "artist": "David Guetta",
    "album": "Nothing but the Beat 2.0",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6a85419c42f54dc984f1ea5df2f425de.png"
  },
  {
    "artist": "David Guetta",
    "album": "Nothing but the Beat",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4d02594598f0b7eadeb28b9589a8ee47.png"
  },
  {
    "artist": "David Guetta",
    "album": "I'm Good (Blue)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9ec15e64f71801819f40a48d3bdfde4b.png"
  },
  {
    "artist": "ABBA",
    "album": "Arrival",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9669591438fa40869420f91c617de999.png"
  },
  {
    "artist": "ABBA",
    "album": "Voulez-Vous",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d84bfbc85d894d51b4a845d0f5472109.png"
  },
  {
    "artist": "ABBA",
    "album": "Super Trouper",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d4bdb055af9f2ab12f8a785983602278.png"
  },
  {
    "artist": "ABBA",
    "album": "ABBA",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/27c248c47e5445e92043b60c7c170303.png"
  },
  {
    "artist": "ABBA",
    "album": "ABBA Gold",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/bcf43f2d64052516a21141fe72905aa6.png"
  },
  {
    "artist": "Muse",
    "album": "Black Holes and Revelations",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e18f810e3121c94531d10163bf58d8cd.png"
  },
  {
    "artist": "Muse",
    "album": "Absolution",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/32ec91c5d9ac38c57aeaabb3af3b7a83.png"
  },
  {
    "artist": "Muse",
    "album": "Origin of Symmetry",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8de0059651e6a6aedecd094f9a45bc5b.png"
  },
  {
    "artist": "Muse",
    "album": "The Resistance",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/dd4c95317aaa3537dbf0a8dc4d9c7d79.png"
  },
  {
    "artist": "Muse",
    "album": "Showbiz",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3155ff2e04252a98d8f6d0847c60c464.png"
  },
  {
    "artist": "The Smashing Pumpkins",
    "album": "Mellon Collie and the Infinite Sadness (Deluxe Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2a453e940a8945b4c5b2766f76ece94a.png"
  },
  {
    "artist": "The Smashing Pumpkins",
    "album": "Siamese Dream (Deluxe Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/23f92dcd4d6c0762422d0587a1b6a656.png"
  },
  {
    "artist": "The Smashing Pumpkins",
    "album": "Siamese Dream",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/53131f63cde3d29e26930209b91fce57.png"
  },
  {
    "artist": "The Smashing Pumpkins",
    "album": "(Rotten Apples) The Smashing Pumpkins Greatest Hits",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9ab2bb3f7ece43fd0f78ab7e5cb311c7.png"
  },
  {
    "artist": "The Smashing Pumpkins",
    "album": "Siamese Dream (2011 - Remaster)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d56592ca7b754d8b0160774fb603eaa1.png"
  },
  {
    "artist": "Metro Boomin",
    "album": "HEROES & VILLAINS",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1240a338ee297d49b02b8f4e608ae49c.png"
  },
  {
    "artist": "Metro Boomin",
    "album": "NOT ALL HEROES WEAR CAPES (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2ff8d65302db34c43947fa364e6096d6.png"
  },
  {
    "artist": "Metro Boomin",
    "album": "METRO BOOMIN PRESENTS SPIDER-MAN: ACROSS THE SPIDER-VERSE (SOUNDTRACK FROM AND INSPIRED BY THE MOTION PICTURE)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/dc3bdeadd7ef481945b1c8c062757bae.png"
  },
  {
    "artist": "Metro Boomin",
    "album": "Not All Heroes Wear Capes",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/005d18fdc08496b2674fb8e768e986b1.png"
  },
  {
    "artist": "Metro Boomin",
    "album": "METRO BOOMIN PRESENTS SPIDER-MAN: ACROSS THE SPIDER-VERSE (SOUNDTRACK FROM AND INSPIRED BY THE MOTION PICTURE / DELUXE EDITION)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f4901a0ac34a110caf91d9ca6fc4945a.png"
  },
  {
    "artist": "JAŸ-Z",
    "album": "Watch The Throne",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/969b962fbc507772ced5015898828d05.png"
  },
  {
    "artist": "JAŸ-Z",
    "album": "The Blueprint 3",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b0ea0b5adf7dafab5e8a4cf1b2cd80c7.png"
  },
  {
    "artist": "JAŸ-Z",
    "album": "Watch The Throne (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/887df921c7a1615d91dc95141a138ccc.png"
  },
  {
    "artist": "JAŸ-Z",
    "album": "4:44",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/321f6cc7a918c35db616c54a04b459cd.png"
  },
  {
    "artist": "JAŸ-Z",
    "album": "Numb / Encore: MTV Ultimate Mash-Ups Presents Collision Course",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5d19571a83a02a0b737f510f3b976980.png"
  },
  {
    "artist": "aespa",
    "album": "Armageddon - The 1st Album",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/61f49a9fa808644d4e39db28722e0548.png"
  },
  {
    "artist": "aespa",
    "album": "Savage - The 1st Mini Album",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9686de538a7ca3b967de4cc7e76e316b.png"
  },
  {
    "artist": "aespa",
    "album": "Drama - The 4th Mini Album",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/79507db3be8709792cd6689f9e69e530.png"
  },
  {
    "artist": "aespa",
    "album": "Whiplash - The 5th Mini Album",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/76a48016ed81d0fa016d0fd5507792b0.png"
  },
  {
    "artist": "aespa",
    "album": "Girls - The 2nd Mini Album",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/591a5302e9a0083b490cda67ba90d5b5.png"
  },
  {
    "artist": "KATSEYE",
    "album": "Gabriela",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0f95953437c8d4d79e09183f1456815e.png"
  },
  {
    "artist": "KATSEYE",
    "album": "Touch",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/04688e58d2f81866856b0f3b007f2d2d.png"
  },
  {
    "artist": "KATSEYE",
    "album": "Gnarly",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/235dfc6c42bb1d65cb3d65cda6973687.png"
  },
  {
    "artist": "KATSEYE",
    "album": "BEAUTIFUL CHAOS",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4cf643261041a69c4eaa79a4bdd5200d.png"
  },
  {
    "artist": "KATSEYE",
    "album": "Debut",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9da920a9dbda8d0210c9081a6e67399a.png"
  },
  {
    "artist": "Shakira",
    "album": "Oral Fixation, Vol. 2 (Expanded Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/947590b4fb3d6cc300b3fe4df42d9162.png"
  },
  {
    "artist": "Shakira",
    "album": "Laundry Service",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c13a86cdbedc5f2a337169544cf86f76.png"
  },
  {
    "artist": "Shakira",
    "album": "Sale el Sol",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9672f9478c2642a4a83f68713691f3a4.png"
  },
  {
    "artist": "Shakira",
    "album": "She Wolf (Expanded Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c1980010012d407e711d3760dfc7ff26.png"
  },
  {
    "artist": "Shakira",
    "album": "El Dorado",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/840530a7e450300f17a656ef1e9e4524.png"
  },
  {
    "artist": "Gracie Abrams",
    "album": "The Secret of Us",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/da9cb143b9587dd1e68cd92013294c75.png"
  },
  {
    "artist": "Gracie Abrams",
    "album": "The Secret of Us (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e84d919d43ddb2a1a0ce735e7b399e7e.png"
  },
  {
    "artist": "Gracie Abrams",
    "album": "minor",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/40693c1652f55d6cb3d63911000a4bb7.png"
  },
  {
    "artist": "Gracie Abrams",
    "album": "This Is What It Feels Like",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0dfb37d5d1a60bf8daefa69118523d49.png"
  },
  {
    "artist": "Gracie Abrams",
    "album": "Good Riddance (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5ed29867fce15adfac768c022aa8839f.png"
  },
  {
    "artist": "Fall Out Boy",
    "album": "From Under the Cork Tree",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/73ff2d6aea6d465ac6b9a697ce4c6168.png"
  },
  {
    "artist": "Fall Out Boy",
    "album": "Infinity on High",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b01817dacd044f7d9389e6b69933330b.png"
  },
  {
    "artist": "Fall Out Boy",
    "album": "American Beauty/American Psycho",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5696976fd66691b5423010d4831682ce.png"
  },
  {
    "artist": "Fall Out Boy",
    "album": "Save Rock and Roll",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9df53662061e4f30924723d65b42935c.png"
  },
  {
    "artist": "Fall Out Boy",
    "album": "Take This to Your Grave",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3afca400fc829b0f8c9e2006f99af261.png"
  },
  {
    "artist": "Brent Faiyaz",
    "album": "WASTELAND",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/74c7c0622904c1fdf629bc307952ccc4.png"
  },
  {
    "artist": "Brent Faiyaz",
    "album": "Fuck the World",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a976d858af46105fde41cade504bb328.png"
  },
  {
    "artist": "Brent Faiyaz",
    "album": "Larger Than Life",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/55d67ee97f2051afc325f4c19e42c728.png"
  },
  {
    "artist": "Brent Faiyaz",
    "album": "Lost",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/33bd6dc6368f57d110a389acb1cc8d4e.png"
  },
  {
    "artist": "Brent Faiyaz",
    "album": "Poison",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9d3337236a685ec0dd3d6ef26acd1f01.png"
  },
  {
    "artist": "Jeff Buckley",
    "album": "Grace",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b9c826bf4d8da57694c54d7403d5cb18.png"
  },
  {
    "artist": "Jeff Buckley",
    "album": "Grace (Legacy Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/304a2ed64d9e0dbbbeda229dc5264477.png"
  },
  {
    "artist": "Jeff Buckley",
    "album": "Sketches for My Sweetheart The Drunk (Expanded Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/001d1a532e2e7d842ba0b13504630922.png"
  },
  {
    "artist": "Jeff Buckley",
    "album": "You and I (Expanded Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d9df2abbdd41063d6ecbc4f2db1aa55e.png"
  },
  {
    "artist": "Jeff Buckley",
    "album": "So Real: Songs From Jeff Buckley",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c1df364b6c262df07caa6cde2d066d7b.png"
  },
  {
    "artist": "David Bowie",
    "album": "The Rise and Fall of Ziggy Stardust and the Spiders from Mars (2012 Remaster)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/781be87e74355cc5cb8db5a5442f7de9.png"
  },
  {
    "artist": "David Bowie",
    "album": "Best of Bowie",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ddbef24ddf79302be4c79d6cdc9f77e1.png"
  },
  {
    "artist": "David Bowie",
    "album": "\"Heroes\" (2017 remaster)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c8b1798abf4f517c0bb53e198df3a7b4.png"
  },
  {
    "artist": "David Bowie",
    "album": "Hunky Dory (2015 Remaster)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7d0d755a67cfa8d7653a1ea0b52178a1.png"
  },
  {
    "artist": "David Bowie",
    "album": "David Bowie (aka Space Oddity) [2015 Remaster]",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/06077338206904418e0aa0b343705935.png"
  },
  {
    "artist": "Slayyyter",
    "album": "WOR$T GIRL IN AMERICA",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d60a52a2d3e8eec7d9df29dc18d16ec2.png"
  },
  {
    "artist": "Slayyyter",
    "album": "Slayyyter",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/13ac0f00992b86bd3c6cda5c4dd38ea9.png"
  },
  {
    "artist": "Slayyyter",
    "album": "Mine",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/da4dfa0c105b6308cec20ba707fd9f82.png"
  },
  {
    "artist": "Slayyyter",
    "album": "Troubled Paradise",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/896c390039a0cba0e00dc03e9f2e7090.png"
  },
  {
    "artist": "Slayyyter",
    "album": "STARFUCKER",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/406a2f7862d86ed5dec8b5f308bcddde.png"
  },
  {
    "artist": "Yeat",
    "album": "Up 2 Më",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1e89fbb3aa2514cc450f01db338071b2.png"
  },
  {
    "artist": "Yeat",
    "album": "Lyfë",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5a48720b118fbe2a47a3117e07e6547a.png"
  },
  {
    "artist": "Yeat",
    "album": "2093",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/125700a0ef6faac975b7611bc8bcb6b1.png"
  },
  {
    "artist": "Yeat",
    "album": "2 Alivë",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ee31ec8adcc105fc3453930b731c7494.png"
  },
  {
    "artist": "Yeat",
    "album": "Aftërlyfe",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/067ca8638498cf1656e1727949130878.png"
  },
  {
    "artist": "TWICE",
    "album": "Summer Nights",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/86ac21ab36bbd416b225228745866bfe.png"
  },
  {
    "artist": "TWICE",
    "album": "FANCY YOU",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a9b4e7025d2217c85044064c984ff68d.png"
  },
  {
    "artist": "TWICE",
    "album": "Formula of Love: O+T=<3",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/799889a45a0aed866919708e1c6913a2.png"
  },
  {
    "artist": "TWICE",
    "album": "Eyes wide open",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4f02062dc96115392e5b8b671550dae5.png"
  },
  {
    "artist": "TWICE",
    "album": "Feel Special",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b8bba89b517241d34f53687a9a0fd9b4.png"
  },
  {
    "artist": "NewJeans",
    "album": "NewJeans 'Super Shy'",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8cc71c340b216b121ec7b7fc6e9ac5f1.png"
  },
  {
    "artist": "NewJeans",
    "album": "NewJeans 1st EP 'New Jeans'",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6b11d36a21405b894d8b198e225edc09.png"
  },
  {
    "artist": "NewJeans",
    "album": "NewJeans 2nd EP 'Get Up'",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a136d71542814b44868ebf2efe357a35.png"
  },
  {
    "artist": "NewJeans",
    "album": "NewJeans 'OMG'",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/833e2b1c9df787fd2ad468b008be96e4.png"
  },
  {
    "artist": "NewJeans",
    "album": "Ditto",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6f9983f2b539275c1aa94a21022eeaec.png"
  },
  {
    "artist": "One Direction",
    "album": "Up All Night",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/72be72f5d593a9b02f30700fd5079005.png"
  },
  {
    "artist": "One Direction",
    "album": "FOUR (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3e060aae2309e4f8fb60a16676394f4b.png"
  },
  {
    "artist": "One Direction",
    "album": "Midnight Memories (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8fdb593fa19d913d60538867637525fd.png"
  },
  {
    "artist": "One Direction",
    "album": "Made in the A.M. (Deluxe Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/afd3f86c013d0c4cd82da884526816a0.png"
  },
  {
    "artist": "One Direction",
    "album": "Take Me Home (Expanded Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/15fea320fec39f81d7c9bd0204533c8d.png"
  },
  {
    "artist": "Miley Cyrus",
    "album": "Bangerz (Deluxe Version)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/090bf88393d27cacca582301b15b7413.png"
  },
  {
    "artist": "Miley Cyrus",
    "album": "The Time of Our Lives",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e7130e203c9c62fc395efc909fe5f913.png"
  },
  {
    "artist": "Miley Cyrus",
    "album": "Plastic Hearts",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/69bdee0d5985c91adff44a4e04055b2c.png"
  },
  {
    "artist": "Miley Cyrus",
    "album": "The Time of Our Lives (International Version)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/cdd87ea8ebffec031bfdfd019a106d5e.png"
  },
  {
    "artist": "Miley Cyrus",
    "album": "Endless Summer Vacation",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9a8c97a8f4df58b16ff5b08d16f5f263.png"
  },
  {
    "artist": "Noah Kahan",
    "album": "Stick Season",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/370510f1781a9bd351389b6633c517ed.png"
  },
  {
    "artist": "Noah Kahan",
    "album": "Stick Season (We'll All Be Here Forever)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d4d93d94f46d2dda7e2fbf5f28ae1713.png"
  },
  {
    "artist": "Noah Kahan",
    "album": "Stick Season (Forever)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f31f8ca74147fb1051d9cadf5cf8dec9.png"
  },
  {
    "artist": "Noah Kahan",
    "album": "Busyhead",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/95bd1e9dd4bca15fa5b95867e7c2c1f9.png"
  },
  {
    "artist": "Noah Kahan",
    "album": "Dial Drunk (with Post Malone)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/18d5025852a008d4054ff53044c01936.png"
  },
  {
    "artist": "Cocteau Twins",
    "album": "Heaven or Las Vegas",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c34df33d23f970baafdfea3f846e489f.png"
  },
  {
    "artist": "Cocteau Twins",
    "album": "The Moon And The Melodies",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8750f9df0453ffc171ea067f78407a66.png"
  },
  {
    "artist": "Cocteau Twins",
    "album": "Treasure",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b76833d04383d440b3e5080e165245be.png"
  },
  {
    "artist": "Cocteau Twins",
    "album": "Milk & Kisses",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e606a81febdfccd074a04c625bf56973.png"
  },
  {
    "artist": "Cocteau Twins",
    "album": "Blue Bell Knoll",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6ac3bcf2d7e6fd3cfe692122b1135843.png"
  },
  {
    "artist": "Elton John",
    "album": "Too Low For Zero",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ddde78c1ce1ef733b729b789718b4821.png"
  },
  {
    "artist": "Elton John",
    "album": "Honky Chateau",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/600850c3207f8a27ff77e49d91f78c1b.png"
  },
  {
    "artist": "Elton John",
    "album": "Goodbye Yellow Brick Road (Remastered)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8c31fd884271a9dd3a59c068df05cfd0.png"
  },
  {
    "artist": "Elton John",
    "album": "Madman Across the Water",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/984188826369470d90143eda7df35959.png"
  },
  {
    "artist": "Elton John",
    "album": "Elton John",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f220a1afd589a02b37f2592bf0b0898b.png"
  },
  {
    "artist": "Oasis",
    "album": "(What's the Story) Morning Glory?",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1b217359e775a8b6a7bc443abe5b08c2.png"
  },
  {
    "artist": "Oasis",
    "album": "Definitely Maybe",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8d6acedbe66b4e69ced210643799dc4c.png"
  },
  {
    "artist": "Oasis",
    "album": "Heathen Chemistry",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6a54881070cc06d4d4a15f7847c4c255.png"
  },
  {
    "artist": "Oasis",
    "album": "(What's the Story) Morning Glory? [Remastered]",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/09d5c34c5afc7dcc30f2c456fedcb57e.png"
  },
  {
    "artist": "Oasis",
    "album": "Be Here Now",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ea807e74a77c4cae87af14643b6da549.png"
  },
  {
    "artist": "Foo Fighters",
    "album": "The Colour and the Shape",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/dedd41ef4d48d496755da5ba046438bd.png"
  },
  {
    "artist": "Foo Fighters",
    "album": "Echoes, Silence, Patience & Grace",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a1a33e78e5ee4efab5827b28776795fb.png"
  },
  {
    "artist": "Foo Fighters",
    "album": "There Is Nothing Left to Lose",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5f47acfda92b4ff488a52aee4b80da3f.png"
  },
  {
    "artist": "Foo Fighters",
    "album": "In Your Honor",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a3b076a45d944b508d4455556b96b5ad.png"
  },
  {
    "artist": "Foo Fighters",
    "album": "One by One",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c163489f35ce47d3a3ec6be7f8b39178.png"
  },
  {
    "artist": "Baby Keem",
    "album": "The Melodic Blue",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ef98499114e88d49ee36e8510f564f5c.png"
  },
  {
    "artist": "Baby Keem",
    "album": "DIE FOR MY BITCH",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5bbd2deff99418af019ed977334414c3.png"
  },
  {
    "artist": "Baby Keem",
    "album": "The Melodic Blue (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0f243845b408281d66470ba7bbd9d92f.png"
  },
  {
    "artist": "Baby Keem",
    "album": "family ties (with Kendrick Lamar)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/55b6621fd2dbb5905f91e9de2514d483.png"
  },
  {
    "artist": "Baby Keem",
    "album": "The Sound of Bad Habit",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/bcf698b96399c5f1904b5eddebbdcc97.png"
  },
  {
    "artist": "Evanescence",
    "album": "Fallen",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/709c71461153419d86742071e16426c8.png"
  },
  {
    "artist": "Evanescence",
    "album": "The Open Door",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a15c4f3ac52e8d53d14a1ae917c88a7b.png"
  },
  {
    "artist": "Evanescence",
    "album": "Origin",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e2b1644c8fae4971a10d9cffbb080968.png"
  },
  {
    "artist": "Evanescence",
    "album": "Evanescence",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c85b5752f1c84f6e8fd5c238c19fe750.png"
  },
  {
    "artist": "Evanescence",
    "album": "Not for Your Ears",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/df1f23b7cba74895b4876d1c523845f0.png"
  },
  {
    "artist": "The Cranberries",
    "album": "Everybody Else Is Doing It, So Why Can't We?",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/87138bbda83bd0ae8b4da2b6cab9b66a.png"
  },
  {
    "artist": "The Cranberries",
    "album": "No Need to Argue (The Complete Sessions 1994-1995)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/84d8e7ab301df9f5c53f079155f3fdee.png"
  },
  {
    "artist": "The Cranberries",
    "album": "No Need to Argue",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/01783165e340ca652384d141a05588fe.png"
  },
  {
    "artist": "The Cranberries",
    "album": "To the Faithful Departed",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0cc6c9beed44f068fd164bc006560700.png"
  },
  {
    "artist": "The Cranberries",
    "album": "Bury the Hatchet",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/132505b32c337aa10724ce6182164234.png"
  },
  {
    "artist": "The 1975",
    "album": "I like it when you sleep, for you are so beautiful yet so unaware of it",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b617b24a67aa1e15217da67817f29b6d.png"
  },
  {
    "artist": "The 1975",
    "album": "The 1975",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2666bdc9b7264b799f8a882e471cd62e.png"
  },
  {
    "artist": "The 1975",
    "album": "A Brief Inquiry Into Online Relationships",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7bf3a1eac0326073f56978b7f39021e1.png"
  },
  {
    "artist": "The 1975",
    "album": "Being Funny in a Foreign Language",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0dc221a4f275b250669990082e7f5f29.png"
  },
  {
    "artist": "The 1975",
    "album": "The 1975 (Deluxe Version)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/24612846aee1431ac36dee76af7cbc4f.png"
  },
  {
    "artist": "Metallica",
    "album": "Metallica",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d6a960e23328230e5e203007b7690cde.png"
  },
  {
    "artist": "Metallica",
    "album": "Reload",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/05f2982ee6632ae982622bebc18c0119.png"
  },
  {
    "artist": "Metallica",
    "album": "...and Justice for All",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/35b1faaf6bf5a35c351c73c8eee43425.png"
  },
  {
    "artist": "Metallica",
    "album": "Master of Puppets",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/07f492a00c904cc6ccf868010be4d5a6.png"
  },
  {
    "artist": "Metallica",
    "album": "Ride the Lightning",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4147ad1d3936b3d1ce11f5b3aaa40c87.png"
  },
  {
    "artist": "PARTYNEXTDOOR",
    "album": "PARTYNEXTDOOR",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/106f80967620a3cb558658a5c474d819.png"
  },
  {
    "artist": "PARTYNEXTDOOR",
    "album": "$ome $exy $ongs 4 U",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/aaf695fb9eaa17ec26d3228789dd5ff4.png"
  },
  {
    "artist": "PARTYNEXTDOOR",
    "album": "PARTYNEXTDOOR TWO",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/cf4805d65212d64e2de22f82d98c8ea9.png"
  },
  {
    "artist": "PARTYNEXTDOOR",
    "album": "PARTYNEXTDOOR 3 (P3)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d7761f80fb3004acfbfade7f04ab419a.png"
  },
  {
    "artist": "PARTYNEXTDOOR",
    "album": "PARTYMOBILE",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e321aa69c75245444df82c2f7c98efc2.png"
  },
  {
    "artist": "Lil Peep",
    "album": "Come Over When You're Sober, Pt. 2",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0f6c7e1323f12f50659c072eda4749bd.png"
  },
  {
    "artist": "Lil Peep",
    "album": "star shopping",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/262f8b7d976e084cec735dc2f5259811.png"
  },
  {
    "artist": "Lil Peep",
    "album": "Come Over When You're Sober, Pt. 1",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/df0b3f059ae2b537b1b2655aab719de9.png"
  },
  {
    "artist": "Lil Peep",
    "album": "LIVE FOREVER",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/acebc8b7f29fb0feb488f705e1504fba.png"
  },
  {
    "artist": "Lil Peep",
    "album": "crybaby",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b44551967422f08b63e26b86c115827d.png"
  },
  {
    "artist": "OutKast",
    "album": "Stankonia",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/28229f48f77f2c5f648055c3b6273099.png"
  },
  {
    "artist": "OutKast",
    "album": "Speakerboxxx/The Love Below",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fef975b2cf4c416eadee5f765f49ec34.png"
  },
  {
    "artist": "OutKast",
    "album": "Aquemini",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d525b9724ca5ccbb3aebf48918bd632b.png"
  },
  {
    "artist": "OutKast",
    "album": "ATLiens",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/02faa14e03554a73936ecb031c641bcf.png"
  },
  {
    "artist": "OutKast",
    "album": "Southernplayalisticadillacmuzik",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c6004c793c9542c899cba43b181a91df.png"
  },
  {
    "artist": "RAYE",
    "album": "My 21st Century Blues",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8b96a71ea87fb73d6affe067ef922c5a.png"
  },
  {
    "artist": "RAYE",
    "album": "WHERE IS MY HUSBAND!",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d699b39671911b7dfc69d4c0acdcc4f1.png"
  },
  {
    "artist": "RAYE",
    "album": "THIS MUSIC MAY CONTAIN HOPE.",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9a46ff6f5eff4b7f011dc63c87e800c0.png"
  },
  {
    "artist": "RAYE",
    "album": "Escapism.",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7dcc203ee82cd46826413e4a7b5a198e.png"
  },
  {
    "artist": "RAYE",
    "album": "Escapism. / The Thrill Is Gone.",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/aba6c3446e7c3c13dbb68cbec29b3d87.png"
  },
  {
    "artist": "Djo",
    "album": "DECIDE",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ffdc425993df98b4a3d40d92dcc2a331.png"
  },
  {
    "artist": "Djo",
    "album": "Twenty Twenty",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c3cd5a3161b024b3ab52809cdd616b49.png"
  },
  {
    "artist": "Djo",
    "album": "The Crux",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5c7d1ae702f11a96a1c9aabc810eb83d.png"
  },
  {
    "artist": "Djo",
    "album": "Basic Being Basic",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/bf2f239960a5dbf7a9441a3e8f56140d.png"
  },
  {
    "artist": "Djo",
    "album": "The Crux Deluxe",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/31bf6e4b9d150ffd84c4ae778aa5f9c9.png"
  },
  {
    "artist": "Lil Wayne",
    "album": "Tha Carter III",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/01eef4162bca3d4bd14afa908ccc4faa.png"
  },
  {
    "artist": "Lil Wayne",
    "album": "A Milli",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0f786fb1b0234ffbcf1583065df3623c.png"
  },
  {
    "artist": "Lil Wayne",
    "album": "Tha Carter II",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3a70acd67c584efeceb749bd9b4f2d2a.png"
  },
  {
    "artist": "Lil Wayne",
    "album": "Lights Out",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fe6187f5209aa90312ead425121dd7ab.png"
  },
  {
    "artist": "Lil Wayne",
    "album": "The Carter",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fd952585ef8f9b958a5f37ef0bb7c941.png"
  },
  {
    "artist": "Beach House",
    "album": "Depression Cherry",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/92ee7e4f3afdbe6a9a8c13a4a790baf1.png"
  },
  {
    "artist": "Beach House",
    "album": "Teen Dream",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/30d53a1f77170c021ee5ce20f2b82e3e.png"
  },
  {
    "artist": "Beach House",
    "album": "Bloom",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/63a3ea22de6c4c6b842c2a149b59e81f.png"
  },
  {
    "artist": "Beach House",
    "album": "Beach House",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/cd5ca6c942374d7da47e7880efa17f99.png"
  },
  {
    "artist": "Beach House",
    "album": "7",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/37dfce5a72272f70a84f858747859c9e.png"
  },
  {
    "artist": "XXXTENTACION",
    "album": "17",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e4ecd32d08c4669c4ddf057baaa87938.png"
  },
  {
    "artist": "XXXTENTACION",
    "album": "?",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/44256a0e77e7c3022be226b69d1f3c2e.png"
  },
  {
    "artist": "XXXTENTACION",
    "album": "Revenge",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e0ed40fd234e44c28e7799b994c4484c.png"
  },
  {
    "artist": "XXXTENTACION",
    "album": "Look at Me!",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f3511286965fbb86497f1a62d09e6550.png"
  },
  {
    "artist": "XXXTENTACION",
    "album": "SKINS",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/19b94be3c2e7086143751bf53dd5699a.png"
  },
  {
    "artist": "Billy Joel",
    "album": "An Innocent Man",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a12d150c799c416daef11949670485c8.png"
  },
  {
    "artist": "Billy Joel",
    "album": "The Stranger (Legacy Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d21555a2ec22989dcb3f7c7ea4580840.png"
  },
  {
    "artist": "Billy Joel",
    "album": "Piano Man (Legacy Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e0684204f7d2357c903854b3a6456b1a.png"
  },
  {
    "artist": "Billy Joel",
    "album": "Storm Front",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6a0581da482a7a6b2b637554babc65a0.png"
  },
  {
    "artist": "Billy Joel",
    "album": "52nd Street",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e6fea4a2ff966386519fcc17deb42b0a.png"
  },
  {
    "artist": "Slipknot",
    "album": "Vol. 3: The Subliminal Verses",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e82769f7d49d8452611f33f2cc02a478.png"
  },
  {
    "artist": "Slipknot",
    "album": "Slipknot",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9274398d6314cb5882bf4fe8dfd084f8.png"
  },
  {
    "artist": "Slipknot",
    "album": "Iowa",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/92ccba192b614b9faeeffe6841ab5c6d.png"
  },
  {
    "artist": "Slipknot",
    "album": "All Hope Is Gone",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b05a013bb6ee4e0ca28b8866990e5fc7.png"
  },
  {
    "artist": "Slipknot",
    "album": ".5: The Gray Chapter (Special Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/53afb0781825a1e75f275e0a49591d32.png"
  },
  {
    "artist": "MGMT",
    "album": "Oracular Spectacular",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/32774a8d1143a4a7087f4a18d5e2ede2.png"
  },
  {
    "artist": "MGMT",
    "album": "Little Dark Age",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/28700d076e5afb3bc0fba47ab8e71975.png"
  },
  {
    "artist": "MGMT",
    "album": "Congratulations",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9718ffa7a84a454594ebe64f627c0fde.png"
  },
  {
    "artist": "MGMT",
    "album": "Time To Pretend",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6757527496191c1771f816a406328dcb.png"
  },
  {
    "artist": "MGMT",
    "album": "MGMT",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b54a74605dc84b6db5a6d8f2b3aa344d.png"
  },
  {
    "artist": "Marina",
    "album": "Electra Heart (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7d04125ea845fff022f99d3b61d3e11f.png"
  },
  {
    "artist": "Marina",
    "album": "The Family Jewels",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/43a126df5445a6967655628d889c29bb.png"
  },
  {
    "artist": "Marina",
    "album": "Ancient Dreams in a Modern Land",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/efa18aba0a807663835d3bd79d9f999c.png"
  },
  {
    "artist": "Marina",
    "album": "Electra Heart",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5b29cad74be27985eeba3ae02b312381.png"
  },
  {
    "artist": "Marina",
    "album": "The Family Jewels (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3086e9a2917ce26204d7df9bb4eb0ac7.png"
  },
  {
    "artist": "Phoebe Bridgers",
    "album": "Stranger in the Alps",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/531bdb172f66ee3500e344936f1f22bd.png"
  },
  {
    "artist": "Phoebe Bridgers",
    "album": "Punisher",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4e31f6b52ff52b99a93650badd19b2c5.png"
  },
  {
    "artist": "Phoebe Bridgers",
    "album": "Stranger in the Alps (Deluxe Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/431f51f7525d2724d6f2e1eaf0867c7f.png"
  },
  {
    "artist": "Phoebe Bridgers",
    "album": "Sidelines",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8b20ddb05689187b31ceed082ea3ffad.png"
  },
  {
    "artist": "Phoebe Bridgers",
    "album": "That Funny Feeling",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e184760af02399bc4b8b0aa376e0b20e.png"
  },
  {
    "artist": "Nelly Furtado",
    "album": "Loose",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f3aa2afa43dc94eb79562be7a23ce876.png"
  },
  {
    "artist": "Nelly Furtado",
    "album": "Whoa, Nelly!",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b16aeae24629ee6d9b8d5be777c2b249.png"
  },
  {
    "artist": "Nelly Furtado",
    "album": "Folklore",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/37119a5e774e1bebb0c49003bfae775a.png"
  },
  {
    "artist": "Nelly Furtado",
    "album": "Whoa, Nelly! (Expanded Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/efcf3a6807ae390b8544ed610d13f9b7.png"
  },
  {
    "artist": "Nelly Furtado",
    "album": "Loose (International Version)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/72fb273b7f638c7c30699e594df7e0dc.png"
  },
  {
    "artist": "Conan Gray",
    "album": "Kid Krow",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4f133a7c64471f91a30bf6ae80946c8c.png"
  },
  {
    "artist": "Conan Gray",
    "album": "Superache",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/31631acd45122b003a251c34999b0142.png"
  },
  {
    "artist": "Conan Gray",
    "album": "Sunset Season",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/39220b5f7ea606e6ba7be7f57cc9ed0f.png"
  },
  {
    "artist": "Conan Gray",
    "album": "Found Heaven",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1259aa18a5b2f545082843afe8193b80.png"
  },
  {
    "artist": "Conan Gray",
    "album": "Overdrive",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/89826911a0fcb7317970744848afacd9.png"
  },
  {
    "artist": "Tory Lanez",
    "album": "Alone at Prom",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2b325cf7cba32af1f81402d1a57e447c.png"
  },
  {
    "artist": "Tory Lanez",
    "album": "I Told You",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f6592086cf020e36842d0721163e300f.png"
  },
  {
    "artist": "Tory Lanez",
    "album": "Hurts Me",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f2677d286bb34ca6185db12653634c09.png"
  },
  {
    "artist": "Tory Lanez",
    "album": "The New Toronto 3",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a4c93925ad959aa1713226e55f1eab9c.png"
  },
  {
    "artist": "Tory Lanez",
    "album": "In For It",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/75cd15eca8600841f47e0539d59229eb.png"
  },
  {
    "artist": "Adele",
    "album": "21",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7694508c2aa520df08bb8e6248bfedf0.png"
  },
  {
    "artist": "Adele",
    "album": "19",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/58a9a10b96ac70e224f67c8c41e406e7.png"
  },
  {
    "artist": "Adele",
    "album": "25",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6284ff0b115c46d1b28ae96e6d5b4099.png"
  },
  {
    "artist": "Adele",
    "album": "Skyfall",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2f99e0bb8fee4447e84b40fc9166e75a.png"
  },
  {
    "artist": "Adele",
    "album": "30",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/35a9537590ea3d5164b598c75b3a378c.png"
  },
  {
    "artist": "Ravyn Lenae",
    "album": "Bird's Eye",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/abf6d2550d60aecebc27bf20d77c3462.png"
  },
  {
    "artist": "Ravyn Lenae",
    "album": "Love Me Not / Love Is Blind",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b88d5362e111d108c3a8814f7a875123.png"
  },
  {
    "artist": "Ravyn Lenae",
    "album": "Love Me Not (feat. Rex Orange County)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/35dcd1dc142bff04d43dcc86a820a7c9.png"
  },
  {
    "artist": "Ravyn Lenae",
    "album": "Hypnos",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b92b71c08c39a0aa90f0b43df510dc0b.png"
  },
  {
    "artist": "Ravyn Lenae",
    "album": "Crush EP",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b0317cd69233b6a897f79232b05712dd.png"
  },
  {
    "artist": "21 Savage",
    "album": "i am > i was",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7ea88aad00e82f4927d1aea1e30922eb.png"
  },
  {
    "artist": "21 Savage",
    "album": "Savage Mode II",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/411d1b883438426f203335180089a9d9.png"
  },
  {
    "artist": "21 Savage",
    "album": "american dream",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a7dcf5182b8027d164ce1da8c2bc4a3f.png"
  },
  {
    "artist": "21 Savage",
    "album": "Without Warning",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/abcd3cac41c44f779f28ec745ed0e147.png"
  },
  {
    "artist": "21 Savage",
    "album": "Issa Album",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8c448cdd3dd444b99730b0fb2882f637.png"
  },
  {
    "artist": "Blood Orange",
    "album": "Coastal Grooves",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d9867bed34084454c47c43fc720b4ea7.png"
  },
  {
    "artist": "Blood Orange",
    "album": "Negro Swan",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/70a09d8a19462afd1e0b6e16b17380d5.png"
  },
  {
    "artist": "Blood Orange",
    "album": "Cupid Deluxe",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/65e9a04b44947d65c763528855cef7a2.png"
  },
  {
    "artist": "Blood Orange",
    "album": "Angel's Pulse",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/cbac43fe7d6601d43d078b9e76db4614.png"
  },
  {
    "artist": "Blood Orange",
    "album": "Freetown Sound",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/dcc3911687b7532d5c0135fa7a1efd09.png"
  },
  {
    "artist": "Demi Lovato",
    "album": "Confident",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/274293972903cfcff914aff5d8550d7e.png"
  },
  {
    "artist": "Demi Lovato",
    "album": "Demi",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/63bfa35e65521a818de70c491bc77855.png"
  },
  {
    "artist": "Demi Lovato",
    "album": "Unbroken",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8ea02283fba9eb10feec5df51df8380d.png"
  },
  {
    "artist": "Demi Lovato",
    "album": "Tell Me You Love Me",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e5c4b0aa2d13420c9629dc2c211f9104.png"
  },
  {
    "artist": "Demi Lovato",
    "album": "Confident (Deluxe Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a33989a32c9f9276c11dbeb27b1486b3.png"
  },
  {
    "artist": "ILLIT",
    "album": "SUPER REAL ME",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/417f9093f56aa032be0355bfc29e8cff.png"
  },
  {
    "artist": "ILLIT",
    "album": "I'LL LIKE YOU",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ddb80ab795d81fc18d1f65885c697018.png"
  },
  {
    "artist": "ILLIT",
    "album": "NOT CUTE ANYMORE",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/de9b80f0dd5cf69a10611094009b7ca3.png"
  },
  {
    "artist": "ILLIT",
    "album": "bomb",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/473029eccfb86622121ca829391301cd.png"
  },
  {
    "artist": "ILLIT",
    "album": "Cherish (My Love) (Remixes)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/663200918206747ab3b5a6d806764627.png"
  },
  {
    "artist": "Juice WRLD",
    "album": "Goodbye & Good Riddance",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/cb8e41ecc96f769575babd440b81e795.png"
  },
  {
    "artist": "Juice WRLD",
    "album": "Legends Never Die",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/431bced28b81be1ae3bade7236a4ea0e.png"
  },
  {
    "artist": "Juice WRLD",
    "album": "Death Race For Love (Bonus Track Version)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f034c724d8fdfb1e70a069e0d4471857.png"
  },
  {
    "artist": "Juice WRLD",
    "album": "Death Race for Love",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/16ee17f2d1f0aeebdf9ef057a336b9b6.png"
  },
  {
    "artist": "Juice WRLD",
    "album": "Fighting Demons (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/89e13333ab7a976384bfb696b97ede5c.png"
  },
  {
    "artist": "Alex G",
    "album": "TRICK",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0b8520054cfd8af493b44a8bed0a2361.png"
  },
  {
    "artist": "Alex G",
    "album": "Treehouse",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8a19aa03b741979ced36eb3ae001e8e7.png"
  },
  {
    "artist": "Alex G",
    "album": "RACE",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/03337c9410154aa74af1e6b23bafa085.png"
  },
  {
    "artist": "Alex G",
    "album": "RULES",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6b5cbb52f6a496fff407dc736a8a6235.png"
  },
  {
    "artist": "Alex G",
    "album": "DSU",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4818ff3977c24fe3cfbe50c0f6a91e41.png"
  },
  {
    "artist": "Sufjan Stevens",
    "album": "Carrie & Lowell",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7568c8fa48cc4fb6cf688fe89161f8a5.png"
  },
  {
    "artist": "Sufjan Stevens",
    "album": "Illinois",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4884fbb2a3714e42cef5a1782e10c26e.png"
  },
  {
    "artist": "Sufjan Stevens",
    "album": "Seven Swans",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8782fdc9f68d419dbdbeaa5a331c181c.png"
  },
  {
    "artist": "Sufjan Stevens",
    "album": "Mystery of Love",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/398b66a2d9c7cadea70ae5c7b76c88de.png"
  },
  {
    "artist": "Sufjan Stevens",
    "album": "The Age of Adz",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a4dfd7aae7ca0419edcade2414ecfafc.png"
  },
  {
    "artist": "Megan Thee Stallion",
    "album": "MEGAN",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4334b446d2918e8a838ae2d827059e80.png"
  },
  {
    "artist": "Megan Thee Stallion",
    "album": "Good News",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2c0cf30a79745b7f10496740c4421bc1.png"
  },
  {
    "artist": "Megan Thee Stallion",
    "album": "Something for Thee Hotties",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7383751452028954cbc5d3f920a3df9e.png"
  },
  {
    "artist": "Megan Thee Stallion",
    "album": "Traumazine",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/cc2ce3c73f0a915829c2fb2cc3d59212.png"
  },
  {
    "artist": "Megan Thee Stallion",
    "album": "Suga",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2a2a68c2abb29b4c4441bbab43c2ba6a.png"
  },
  {
    "artist": "Limp Bizkit",
    "album": "Chocolate Starfish and the Hot Dog Flavored Water",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9939a159279a21306d8d48a8562a5207.png"
  },
  {
    "artist": "Limp Bizkit",
    "album": "Significant Other",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1c00f7b9cd94c2b6fbd7f12fc00bd8d2.png"
  },
  {
    "artist": "Limp Bizkit",
    "album": "Results May Vary",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d4df5bf6ddc9809e08a277527af6d80d.png"
  },
  {
    "artist": "Limp Bizkit",
    "album": "Greatest Hitz",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/bf002e650cfd63417a2c18473e4975f9.png"
  },
  {
    "artist": "Limp Bizkit",
    "album": "Three Dollar Bill, Y'all $",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7db0b03f38e0ae97937250a24643792a.png"
  },
  {
    "artist": "The Kid LAROI",
    "album": "THE FIRST TIME",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d9e4ce5c573d38516e4de0c49b993bd0.png"
  },
  {
    "artist": "The Kid LAROI",
    "album": "F*CK LOVE 3+: OVER YOU",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e57e5cafe8c21c8024ab22facaa52ed7.png"
  },
  {
    "artist": "The Kid LAROI",
    "album": "STAY (with Justin Bieber)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5ae611e1e5653f6a0ef16f510297a310.png"
  },
  {
    "artist": "The Kid LAROI",
    "album": "F*CK LOVE 3: OVER YOU",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/54a8ba1b68322fab1b9b8059b0f46afa.png"
  },
  {
    "artist": "The Kid LAROI",
    "album": "THE FIRST TIME (DELUXE VERSION)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d1f65f84ae28ca0be400965482555172.png"
  },
  {
    "artist": "Halsey",
    "album": "Manic",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fc0dd217b63395a41a1ed4578996a928.png"
  },
  {
    "artist": "Halsey",
    "album": "BADLANDS (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d8241dd15fe7c16a8ee0e0e2940cc84e.png"
  },
  {
    "artist": "Halsey",
    "album": "hopeless fountain kingdom (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a0d84c010415c5ea584b109646a17a95.png"
  },
  {
    "artist": "Halsey",
    "album": "BADLANDS",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c50f1fd15b33b3535674eaaa9ebe4128.png"
  },
  {
    "artist": "Halsey",
    "album": "hopeless fountain kingdom (Deluxe Plus)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e6b41970aa5433c04772bf3bc2e0b827.png"
  },
  {
    "artist": "Kid Cudi",
    "album": "Man on the Moon: The End of Day",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8ca0fd6e84a14317a7d21eaebc81320a.png"
  },
  {
    "artist": "Kid Cudi",
    "album": "Man on the Moon II: The Legend of Mr. Rager",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/710d5f1abe58c7a83492a86d0235d2b9.png"
  },
  {
    "artist": "Kid Cudi",
    "album": "Man on the Moon: The End of Day (Int'l Version)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c75029a30eeb8fd9846cdb8e30d45440.png"
  },
  {
    "artist": "Kid Cudi",
    "album": "Man On The Moon: The End Of Day (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1b6d18d3a9c2a2c3fc4d7ddbab09c4c4.png"
  },
  {
    "artist": "Kid Cudi",
    "album": "Man on the Moon III: The Chosen",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c29770fff147fe5ff4250a581f3681ea.png"
  },
  {
    "artist": "Gunna",
    "album": "a Gift & a Curse",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/668aedd783a87c9cbd4eca09c68e379e.png"
  },
  {
    "artist": "Gunna",
    "album": "DS4EVER",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/838ce453d3ac787d7509edf5495b7ce1.png"
  },
  {
    "artist": "Gunna",
    "album": "One of Wun",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/cc61dda0c1d79176007fc61694a9dad3.png"
  },
  {
    "artist": "Gunna",
    "album": "Drip or Drown 2",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c30fd5896cf34242daa618f8a2266f5e.png"
  },
  {
    "artist": "Gunna",
    "album": "WUNNA",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e01fcfeaff4dc476345a35a0c015e322.png"
  },
  {
    "artist": "Young Thug",
    "album": "So Much Fun",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c3ef0cd171619836e07f1a7e180e649d.png"
  },
  {
    "artist": "Young Thug",
    "album": "So Much Fun (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7f18d6243932f54ff4131b5ac101cb47.png"
  },
  {
    "artist": "Young Thug",
    "album": "PUNK",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b2b2ec68a8c185f375f82ccc7dcafefd.png"
  },
  {
    "artist": "Young Thug",
    "album": "Slime Season 3",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a6c3aec9c934fb249a41818ac6d55360.png"
  },
  {
    "artist": "Young Thug",
    "album": "Jeffery",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0bddfa49e1d95f620267fac8f4663a60.png"
  },
  {
    "artist": "Avril Lavigne",
    "album": "Let Go",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2afa9f89a4ba981d3c6876e2e1725f28.png"
  },
  {
    "artist": "Avril Lavigne",
    "album": "Under My Skin",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/48b5d07f4f6bb78c0323ccabfa829767.png"
  },
  {
    "artist": "Avril Lavigne",
    "album": "The Best Damn Thing (Expanded Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d42e71af1b90e1400028a76880e37c5b.png"
  },
  {
    "artist": "Avril Lavigne",
    "album": "The Best Damn Thing",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f7737f9c03a2a862856d1ce0b3bdc69b.png"
  },
  {
    "artist": "Avril Lavigne",
    "album": "Goodbye Lullaby (Expanded Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/94b17ad8f8b3887f281ad93b5e5d315d.png"
  },
  {
    "artist": "Shawn Mendes",
    "album": "Illuminate (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ae06e2fcdfade4102007dcc5ffa9423d.png"
  },
  {
    "artist": "Shawn Mendes",
    "album": "Handwritten",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8639b86d5fa3ad7a880255328f73e4eb.png"
  },
  {
    "artist": "Shawn Mendes",
    "album": "Illuminate",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1e067d8d31c0064366c773f512d1e408.png"
  },
  {
    "artist": "Shawn Mendes",
    "album": "Shawn Mendes",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7fc1d5f109ade40ac913ff7b3466bdc9.png"
  },
  {
    "artist": "Shawn Mendes",
    "album": "Shawn Mendes (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0e1ae8730eab305c98c6accc5f7bd60d.png"
  },
  {
    "artist": "Empire of the Sun",
    "album": "Walking On A Dream (10th Anniversary Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7daa4cb95e9739838b966e7b8f69a84e.png"
  },
  {
    "artist": "Empire of the Sun",
    "album": "Walking on a Dream",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/461fe4e8e5ee4eed9cf34766f3541dc8.png"
  },
  {
    "artist": "Empire of the Sun",
    "album": "Ice on the Dune",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/13871c3190e64b3893cb457dc11ec132.png"
  },
  {
    "artist": "Empire of the Sun",
    "album": "Walking On A Dream (Special Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f4ae1bf8780a43fa8a731ed7f96ea281.png"
  },
  {
    "artist": "Empire of the Sun",
    "album": "Two Vines (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f43c175cb56876dd49e05a0140fdfe70.png"
  },
  {
    "artist": "bôa",
    "album": "Twilight",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/40564dd1a58f969fc3ee3c49bddffd23.png"
  },
  {
    "artist": "bôa",
    "album": "Get There",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/62378e6d22f640d0c0ad3b10ae2471fc.png"
  },
  {
    "artist": "bôa",
    "album": "Duvet",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/edb95c718cacddcfe052f6c63244a6db.png"
  },
  {
    "artist": "bôa",
    "album": "Whiplash",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e19645a65bb6a9ef626325e53fcbe994.png"
  },
  {
    "artist": "bôa",
    "album": "Walk With Me",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5983c15cb4805f5bcf25e3d9a7ec9c27.png"
  },
  {
    "artist": "Ed Sheeran",
    "album": "÷ (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5c808e167d1af3d4c89e711e3baaf8ab.png"
  },
  {
    "artist": "Ed Sheeran",
    "album": "x (Deluxe Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d904dd085fb44fabcfd0834b8d2a5d92.png"
  },
  {
    "artist": "Ed Sheeran",
    "album": "+",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d08fbb920e514f5c893d95552379d3fc.png"
  },
  {
    "artist": "Ed Sheeran",
    "album": "No.6 Collaborations Project",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/46f1ef53764a17485012bf817441ecb8.png"
  },
  {
    "artist": "Ed Sheeran",
    "album": "=",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/cb28e94e9867ea7388dc9b5b8eeab8f9.png"
  },
  {
    "artist": "Chief Keef",
    "album": "Finally Rich",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/032eedef1b09eed758de4429740195da.png"
  },
  {
    "artist": "Chief Keef",
    "album": "Back From The Dead 2",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7b89e12036a0472fcb424b711cd2916c.png"
  },
  {
    "artist": "Chief Keef",
    "album": "Back From The Dead",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/00982bab3aae4dacb671a4bf0682624a.png"
  },
  {
    "artist": "Chief Keef",
    "album": "Dedication",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8190cb8e7c44c5fb25342fee3d9863e5.png"
  },
  {
    "artist": "Chief Keef",
    "album": "Finally Rich (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c7302fd649a79e6c51f25839c3f0cab0.png"
  },
  {
    "artist": "Troye Sivan",
    "album": "Something to Give Each Other",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0a8521c16d07751d4ea03546825a4dea.png"
  },
  {
    "artist": "Troye Sivan",
    "album": "Blue Neighbourhood (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f018307055339656a43de6f27b992268.png"
  },
  {
    "artist": "Troye Sivan",
    "album": "Bloom",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1ca145aba5daa3b2a90c5c645e2f3346.png"
  },
  {
    "artist": "Troye Sivan",
    "album": "Strawberries & Cigarettes",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9fd3a99ccb3d783fdecb0b47c4ef725f.png"
  },
  {
    "artist": "Troye Sivan",
    "album": "Angel Baby",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f5882ddaea5c7724e229b86849df4daa.png"
  },
  {
    "artist": "Alice in Chains",
    "album": "Jar of Flies",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/92bc3c5f6ee57f0da77769f620a10ccd.png"
  },
  {
    "artist": "Alice in Chains",
    "album": "Facelift",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/61d67476df27e0c4b4450f47f654be27.png"
  },
  {
    "artist": "Alice in Chains",
    "album": "Dirt",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6f5180404cd849dcb9d1c108300befc3.png"
  },
  {
    "artist": "Alice in Chains",
    "album": "Dirt (2022 Remaster)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5c4b6583f6112eaa243f12ca00527068.png"
  },
  {
    "artist": "Alice in Chains",
    "album": "Alice in Chains",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/004fb80d419fcb44990c9a35190e4b1a.png"
  },
  {
    "artist": "Bring Me the Horizon",
    "album": "That's the Spirit",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3a4e081256c11f2a1fb72f0b005f9f04.png"
  },
  {
    "artist": "Bring Me the Horizon",
    "album": "Sempiternal (Expanded Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/bb2d860a26f50afdce45f482dd754b1c.png"
  },
  {
    "artist": "Bring Me the Horizon",
    "album": "POST HUMAN: SURVIVAL HORROR",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f729bad90a3a7ae02c78fae2ab755d00.png"
  },
  {
    "artist": "Bring Me the Horizon",
    "album": "Count Your Blessings",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e3e350f12045444cb76c710a43bb7452.png"
  },
  {
    "artist": "Bring Me the Horizon",
    "album": "Suicide Season",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0d92ccd8122b15ccc6301303b4455e29.png"
  },
  {
    "artist": "Miguel",
    "album": "All I Want Is You",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d9ffbbdd038682fc20a1f640b2eaacc5.png"
  },
  {
    "artist": "Miguel",
    "album": "War & Leisure",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/84126ad63faa8ad9365221eea8ccba91.png"
  },
  {
    "artist": "Miguel",
    "album": "Kaleidoscope Dream",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ba0d6b985daa7f31e67b16e0ca2ee1cd.png"
  },
  {
    "artist": "Miguel",
    "album": "Rogue Waves",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/17dbff47bf0c7adace37213242f411e0.png"
  },
  {
    "artist": "Miguel",
    "album": "Kaleidoscope Dream (Deluxe Version)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3d9667aa9b68dda691c7ce51c76b8b73.png"
  },
  {
    "artist": "Doechii",
    "album": "Alligator Bites Never Heal",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7860c303862f4cd1d1101f7e5726661b.png"
  },
  {
    "artist": "Doechii",
    "album": "Alter Ego (with JT)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ec6b57bccdb99c83bb68e7ccd7d6fe97.png"
  },
  {
    "artist": "Doechii",
    "album": "What It Is (Versions)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1f86e5419c855e3461bd92cd9daf621b.png"
  },
  {
    "artist": "Doechii",
    "album": "Anxiety",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d73cc272bab5eef2b1e86d925322fc5a.png"
  },
  {
    "artist": "Doechii",
    "album": "Alligator Bites Never Heal (Extended)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/36cc49445e63cdfb4c3f990a3403028a.png"
  },
  {
    "artist": "Chase Atlantic",
    "album": "Chase Atlantic",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9e3232f437c90e5ece62dd0b5df2950b.png"
  },
  {
    "artist": "Chase Atlantic",
    "album": "Nostalgia - EP",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d4b3e1652a3f9f019c3d5b06cc430c5c.png"
  },
  {
    "artist": "Chase Atlantic",
    "album": "Nostalgia",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a386f623aa1e57d57639adecd5d942ae.png"
  },
  {
    "artist": "Chase Atlantic",
    "album": "Phases",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5b2a146ab433ce9bd53e4d9f7ca4f771.png"
  },
  {
    "artist": "Chase Atlantic",
    "album": "Paradise - EP",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fd282ea3413751f7774ec5fcf462e69b.png"
  },
  {
    "artist": "Nicki Minaj",
    "album": "Pink Friday",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/830f1278fbfa4960ec0e82142ccc0ccf.png"
  },
  {
    "artist": "Nicki Minaj",
    "album": "Pink Friday (Complete Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/620018d2afa552f9a61a7a1d21d46066.png"
  },
  {
    "artist": "Nicki Minaj",
    "album": "Pink Friday ... Roman Reloaded",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/449cf941910b14fe8102e453776ff675.png"
  },
  {
    "artist": "Nicki Minaj",
    "album": "Pink Friday: Roman Reloaded The Re-Up (Explicit Version)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/65692769c0d1278df3b31fd0d333bfc3.png"
  },
  {
    "artist": "Nicki Minaj",
    "album": "Pink Friday ... Roman Reloaded (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/41494b656c177032cbfaca21096b2e1d.png"
  },
  {
    "artist": "Ellie Goulding",
    "album": "Lights",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/89e30a9185dd7c71a9f44c20a4ec593b.png"
  },
  {
    "artist": "Ellie Goulding",
    "album": "Halcyon Days",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0ade8377d6e5a0c7beb5b886062331ed.png"
  },
  {
    "artist": "Ellie Goulding",
    "album": "Delirium (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/305d648da0869ded53c7691ca3baadee.png"
  },
  {
    "artist": "Ellie Goulding",
    "album": "Brightest Blue",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9ca1dea5bb2ccf49f2fd078ad4df7c5b.png"
  },
  {
    "artist": "Ellie Goulding",
    "album": "Halcyon",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2f65b3f6d1554111b367915a2d7241e7.png"
  },
  {
    "artist": "The Police",
    "album": "Synchronicity (Remastered 2003)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/186d8f509e10fafc3493fc2ae7852a64.png"
  },
  {
    "artist": "The Police",
    "album": "Outlandos D'Amour (Remastered 2003)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c1a4b8068548ee324bbdcb77b983543f.png"
  },
  {
    "artist": "The Police",
    "album": "Reggatta de Blanc (Remastered 2003)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6035f622deeac73fa710df95c85e1369.png"
  },
  {
    "artist": "The Police",
    "album": "Ghost In The Machine (Remastered 2003)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/da40631f39c166b3108a82ae953a8ba8.png"
  },
  {
    "artist": "The Police",
    "album": "Synchronicity",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c98201c8cc944a939dd8e1e54abf69b3.png"
  },
  {
    "artist": "Chris Brown",
    "album": "Chris Brown",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f756ae41b874431ecfb35b40b4c93fb6.png"
  },
  {
    "artist": "Chris Brown",
    "album": "Indigo (Extended)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ad53a2b1eedf5d63c4fbc9bf3dd05a02.png"
  },
  {
    "artist": "Chris Brown",
    "album": "F.A.M.E. (Expanded Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a87d40fe905ed5efad4b671e81919166.png"
  },
  {
    "artist": "Chris Brown",
    "album": "Indigo",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d113179e77b9cc2d54528d77014e85a1.png"
  },
  {
    "artist": "Chris Brown",
    "album": "Chris Brown (Expanded Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b90b295a726fb0c5991bfb6e99898af1.png"
  },
  {
    "artist": "The Rolling Stones",
    "album": "Aftermath",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/cc919c5a2f70e421444249abf9185eb6.png"
  },
  {
    "artist": "The Rolling Stones",
    "album": "Let It Bleed",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4c38103f05b36d8c042b389a33ab0011.png"
  },
  {
    "artist": "The Rolling Stones",
    "album": "Some Girls",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2b25566ff3f1fc9afd419ba4bb6c72c7.png"
  },
  {
    "artist": "The Rolling Stones",
    "album": "Out of Our Heads",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/eb39a5c0b51eb6ac1d757077205859cb.png"
  },
  {
    "artist": "The Rolling Stones",
    "album": "Rolled Gold +",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0c9d4db3bdc435fa26793f28ea95f99a.png"
  },
  {
    "artist": "EsDeeKid",
    "album": "Rebel",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/08e715c0f5f7e77f6f1c6014e0f3e7d4.png"
  },
  {
    "artist": "EsDeeKid",
    "album": "Century",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fc0b26c605bbeb763482778c28c12cfa.png"
  },
  {
    "artist": "EsDeeKid",
    "album": "Palaces",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/319a5188a01172b42a6307a5d4c8448c.png"
  },
  {
    "artist": "EsDeeKid",
    "album": "Ferragamo",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c86b001513b61adf0f182f2e9273b73b.png"
  },
  {
    "artist": "EsDeeKid",
    "album": "LV Sandals",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/58cd432978d99ca5812649f830ca4fa1.png"
  },
  {
    "artist": "Gwen Stefani",
    "album": "The Sweet Escape",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/00f4aef783c07afd0bd8e33f84051362.png"
  },
  {
    "artist": "Gwen Stefani",
    "album": "Love Angel Music Baby",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9df65bc5682d88226c9b71436ee41d08.png"
  },
  {
    "artist": "Gwen Stefani",
    "album": "Love. Angel. Music. Baby.",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f822a11df7ae32fe4c76a21461325bf2.png"
  },
  {
    "artist": "Gwen Stefani",
    "album": "Love. Angel. Music. Baby. (Deluxe Version)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ae7f20f2d0b3440f956ff2124eaea6eb.png"
  },
  {
    "artist": "Gwen Stefani",
    "album": "So Fresh - The Hits of Summer 2008 & The Hits of 2007",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3b6720d434e24e65bd49355f6e79ff5d.png"
  },
  {
    "artist": "Tears for Fears",
    "album": "Songs From The Big Chair (Super Deluxe Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/db2010fbfdaeea0d270993d87af3c96a.png"
  },
  {
    "artist": "Tears for Fears",
    "album": "Songs from the Big Chair",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f3668f68387d4336c3a797a66196f851.png"
  },
  {
    "artist": "Tears for Fears",
    "album": "Songs From The Big Chair (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8ce8cee9d9435ba093d3cd8dc41f8892.png"
  },
  {
    "artist": "Tears for Fears",
    "album": "The Hurting",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d545a96b5f21aa48f5cdead6fdb4e319.png"
  },
  {
    "artist": "Tears for Fears",
    "album": "Tears Roll Down (Greatest Hits 82-92)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/dcd9b642fec54a00a4cb310fd9775608.png"
  },
  {
    "artist": "5 Seconds of Summer",
    "album": "Youngblood (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a888018398bf7b1909d0e3cb63f9f01f.png"
  },
  {
    "artist": "5 Seconds of Summer",
    "album": "5 Seconds of Summer",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/cdd6ecd970739e3634f26b7472cfe273.png"
  },
  {
    "artist": "5 Seconds of Summer",
    "album": "CALM",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0ee7f0ea17b3a3df65cb86a4fc4e91c9.png"
  },
  {
    "artist": "5 Seconds of Summer",
    "album": "Sounds Good Feels Good (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ebcf55112e76c2b03bd8a0dfaabcd7d8.png"
  },
  {
    "artist": "5 Seconds of Summer",
    "album": "13 Reasons Why (Season 3)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/183e3fd4ce533bd300ef17c6b444cc33.png"
  },
  {
    "artist": "Selena Gomez",
    "album": "Revival (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b4e4351135a9c06a00b9d9400c0db566.png"
  },
  {
    "artist": "Selena Gomez",
    "album": "Rare",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fa3c3c83b94b01f20bacdb38d538378e.png"
  },
  {
    "artist": "Selena Gomez",
    "album": "Fetish (feat. Gucci Mane)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1b2acd9a5df76d2d700aa0504214cdb9.png"
  },
  {
    "artist": "Selena Gomez",
    "album": "I Said I Love You First",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/17943569a85578e520ab389566bab003.png"
  },
  {
    "artist": "Selena Gomez",
    "album": "Wolves",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/243937f3de546bb46366bc4144b44403.png"
  },
  {
    "artist": "Trippie Redd",
    "album": "LIFE'S A TRIP",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/bfb89c7fd3f34653f6a90a569b09a6a9.png"
  },
  {
    "artist": "Trippie Redd",
    "album": "A Love Letter To You 4",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a6dd7ab5d7c64dd61fa0214ffb2b587d.png"
  },
  {
    "artist": "Trippie Redd",
    "album": "A Love Letter to You 3",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c39a2a791e8aa10f38a56959413705c8.png"
  },
  {
    "artist": "Trippie Redd",
    "album": "Trip at Knight",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2b6667f68df8bec11db3119ae815bd84.png"
  },
  {
    "artist": "Trippie Redd",
    "album": "A Love Letter to You",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/47c9da010417f0d9504af918964f2add.png"
  },
  {
    "artist": "Usher",
    "album": "Confessions (Expanded Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/420c27aff4da33b13fa12d32d88be78c.png"
  },
  {
    "artist": "Usher",
    "album": "Raymond v Raymond (Expanded Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/25ca760e2b0f3ed7ad2f9079a94238cd.png"
  },
  {
    "artist": "Usher",
    "album": "8701",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2b0c3dec9ff48568ee66946fb446ee95.png"
  },
  {
    "artist": "Usher",
    "album": "Confessions",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d3c4b1e706ef4fb69f5ba203b730b37c.png"
  },
  {
    "artist": "Usher",
    "album": "Here I Stand",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a3fb9a77c2d0c97700f5ffa91ec9a59f.png"
  },
  {
    "artist": "Three Days Grace",
    "album": "Three Days Grace",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/eade5b1cda36e45cf989ce649d4b186f.png"
  },
  {
    "artist": "Three Days Grace",
    "album": "One-X",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7d574c73804709ed8983e6261af8f1f7.png"
  },
  {
    "artist": "Three Days Grace",
    "album": "Life Starts Now",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c59bab1a342e46ba96013a3c26ca8302.png"
  },
  {
    "artist": "Three Days Grace",
    "album": "Three Days Grace (Expanded Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/05f00fb54eb07c6580452dc1c2b0fb89.png"
  },
  {
    "artist": "Three Days Grace",
    "album": "Human",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/332da6a234b24004c0cf039773924649.png"
  },
  {
    "artist": "50 Cent",
    "album": "Get Rich or Die Tryin'",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0df88df2ca9e67709d7a73a3553db7a1.png"
  },
  {
    "artist": "50 Cent",
    "album": "The Massacre",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8afdac88376ef4b2ab005af87bcf52ec.png"
  },
  {
    "artist": "50 Cent",
    "album": "Curtis",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fa9b08c8a4f54dba9f5fbca98882c2e7.png"
  },
  {
    "artist": "50 Cent",
    "album": "The New Breed",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7f74ad8110ce9aff69178a6561e6adfb.png"
  },
  {
    "artist": "50 Cent",
    "album": "Before I Self-Destruct",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/917a193559b5e826e0347e2b1d4ff6ea.png"
  },
  {
    "artist": "The Cardigans",
    "album": "First Band On The Moon (Remastered)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7b2357bb0ad16b4cd9efcb7b09d700ee.png"
  },
  {
    "artist": "The Cardigans",
    "album": "First Band on the Moon",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/77e3006d4dadf39309660b4ead44bb3a.png"
  },
  {
    "artist": "The Cardigans",
    "album": "Gran Turismo",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/042e8c4d00e95ead5ddc762492e5dd69.png"
  },
  {
    "artist": "The Cardigans",
    "album": "Gran Turismo (Remastered)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b36588baa2de6196cc6602ea6f394f94.png"
  },
  {
    "artist": "The Cardigans",
    "album": "Best Of",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/118cdb502af3929c505617d8e687e95c.png"
  },
  {
    "artist": "Mazzy Star",
    "album": "So Tonight That I Might See",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/60615ead3d8383e70e84a526817de4bf.png"
  },
  {
    "artist": "Mazzy Star",
    "album": "Among My Swan",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/9b2822cf9f5d457388fe3a40fcaeca31.png"
  },
  {
    "artist": "Mazzy Star",
    "album": "She Hangs Brightly",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/74f05b741bd9481a88cf7b3b471697f1.png"
  },
  {
    "artist": "Mazzy Star",
    "album": "Seasons of Your Day",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/f4d3491a36804459c4ca279b2f2bcfec.png"
  },
  {
    "artist": "Mazzy Star",
    "album": "Quiet, The Winter Harbor",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ccceb0c420bc2c2286aa38b13dbd3ded.png"
  },
  {
    "artist": "Cage the Elephant",
    "album": "Melophobia",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d070e505cdab4b27cb39bfe28eb63343.png"
  },
  {
    "artist": "Cage the Elephant",
    "album": "Cage the Elephant",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c8a208b90f244c20cca7732f80edac97.png"
  },
  {
    "artist": "Cage the Elephant",
    "album": "Tell Me I'm Pretty",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ce9efc0bc44d53bf05be6c0126be96c9.png"
  },
  {
    "artist": "Cage the Elephant",
    "album": "Social Cues",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/df8b4b56ea039510f335bf9f1f0e25c9.png"
  },
  {
    "artist": "Cage the Elephant",
    "album": "Thank You Happy Birthday",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/99c95478719b4b559e98300c4bc10adc.png"
  },
  {
    "artist": "Melanie Martinez",
    "album": "Cry Baby (Deluxe Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/48770963661b4a895dba1e9ab5091ec7.png"
  },
  {
    "artist": "Melanie Martinez",
    "album": "K-12",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/35df25e4fc8394903e600b5c34563c68.png"
  },
  {
    "artist": "Melanie Martinez",
    "album": "PORTALS",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/313a2e52af21ee8aa951a07fd49688d6.png"
  },
  {
    "artist": "Melanie Martinez",
    "album": "PORTALS (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0380fa1555f28abe2ab6cf88781a5ee2.png"
  },
  {
    "artist": "Melanie Martinez",
    "album": "K-12 (After School – Deluxe Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/41287fe0beda1ad6690ef10420a1792e.png"
  },
  {
    "artist": "Imagine Dragons",
    "album": "Night Visions",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ecae82853b784726c7e2c4e2ba55a4fd.png"
  },
  {
    "artist": "Imagine Dragons",
    "album": "Evolve",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8c77e9f509c4dd3bca8d3ac6b5344ce5.png"
  },
  {
    "artist": "Imagine Dragons",
    "album": "Mercury - Acts 1 & 2",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/0553855155afbee981f9e460021522c5.png"
  },
  {
    "artist": "Imagine Dragons",
    "album": "Origins (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/22fae11f52714165e3efeca3c14084ea.png"
  },
  {
    "artist": "Imagine Dragons",
    "album": "Night Visions (Deluxe)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/ca8770d5ef7f08ffda7e5daa6d8b308e.png"
  },
  {
    "artist": "Korn",
    "album": "Follow the Leader",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e7605ccbb6d5d7e7976dea23c182ba63.png"
  },
  {
    "artist": "Korn",
    "album": "Issues",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/41e7ae63df3447ad102d806cd2758482.png"
  },
  {
    "artist": "Korn",
    "album": "See You on the Other Side",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/84dd0944c5fe4d0e9b533ea1039a70aa.png"
  },
  {
    "artist": "Korn",
    "album": "Korn",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/96a5ae52a9a04676f4e1ce2081bc15b6.png"
  },
  {
    "artist": "Korn",
    "album": "Take a Look in the Mirror",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8ad0ede562bd4bd98940366b3c9a2923.png"
  },
  {
    "artist": "Prince",
    "album": "Purple Rain",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/2a783d64b0ea6d133eb7f6258ec1b6b0.png"
  },
  {
    "artist": "Prince",
    "album": "Parade - Music From the Motion Picture Under the Cherry Moon",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/67a79a7e960fde03715ebeb01680538b.png"
  },
  {
    "artist": "Prince",
    "album": "The Very Best of Prince",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8ce7d423fad97e032a48e7082bcdcad6.png"
  },
  {
    "artist": "Prince",
    "album": "1999",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7ec21e17d7987a7b54f0ba243d73d41f.png"
  },
  {
    "artist": "Prince",
    "album": "Around the World in a Day",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/33d0a183c8994458c463773a435cf1f0.png"
  },
  {
    "artist": "Faye Webster",
    "album": "Atlanta Millionaires Club",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c7e9b5e5ed23dd7a05e1dfce3c6051a5.png"
  },
  {
    "artist": "Faye Webster",
    "album": "Faye Webster",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/a133a409f1012e24d2e9ca1613551f57.png"
  },
  {
    "artist": "Faye Webster",
    "album": "I Know I'm Funny haha",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3954d56601f31106b0be09fe183947ce.png"
  },
  {
    "artist": "Faye Webster",
    "album": "Underdressed at the Symphony",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/89473c46eb240a97039f340b6ae61067.png"
  },
  {
    "artist": "Faye Webster",
    "album": "But Not Kiss",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1f700ab655b9d2ed69cdcbbdab978de2.png"
  },
  {
    "artist": "Kodak Black",
    "album": "DYING TO LIVE",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/d6180cb5448bd672348163276a7491e9.png"
  },
  {
    "artist": "Kodak Black",
    "album": "Project Baby 2: All Grown Up",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3c48f86651675f2fafada0030cdee360.png"
  },
  {
    "artist": "Kodak Black",
    "album": "Painting Pictures",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/dfb3515e4593aadc2676bad85bf26629.png"
  },
  {
    "artist": "Kodak Black",
    "album": "No Flockin'",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3b2c663446e225a8afd03ea0a8ad8d51.png"
  },
  {
    "artist": "Kodak Black",
    "album": "Back for Everything",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/487b98d985fb7145bdc74aee395c57f3.png"
  },
  {
    "artist": "Led Zeppelin",
    "album": "Led Zeppelin IV (Deluxe Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/c79fc02300b24cd3cc33009ae9194b74.png"
  },
  {
    "artist": "Led Zeppelin",
    "album": "Led Zeppelin",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/82b68b8267234a289714c0e20c4e288d.png"
  },
  {
    "artist": "Led Zeppelin",
    "album": "Led Zeppelin IV",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1e6f99756d0342f891d3233ac1283d21.png"
  },
  {
    "artist": "Led Zeppelin",
    "album": "Led Zeppelin III (Remaster)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6beb27c2ded6004184f2f6d37ed60584.png"
  },
  {
    "artist": "Led Zeppelin",
    "album": "Led Zeppelin II",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/79eb7925a57079641e698093417efde7.png"
  },
  {
    "artist": "Lucki",
    "album": "Young & Clever",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/84ad5ce67d48b4f0267d65e6772cac26.png"
  },
  {
    "artist": "Jung Kook",
    "album": "GOLDEN",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/af7bea2e00fcd9a384e4a5e040896954.png"
  },
  {
    "artist": "Jung Kook",
    "album": "Seven (feat. Latto)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/fd1f2f9210b0be963dfdc17d50a3df21.png"
  },
  {
    "artist": "Jung Kook",
    "album": "Still With You",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/81f9e98d3ffc0bf1c9363f836a0e9b75.png"
  },
  {
    "artist": "Jung Kook",
    "album": "3D : The Remixes",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/6c092843a9a5731638318e4df7e3bae9.png"
  },
  {
    "artist": "Jung Kook",
    "album": "Stay Alive (Prod. SUGA of BTS)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/7724d99c9ad6147a4ba7a8052062633a.png"
  },
  {
    "artist": "Charlie Puth",
    "album": "Voicenotes",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/548ddc92a61f79f77e832ad3d66d110f.png"
  },
  {
    "artist": "Charlie Puth",
    "album": "Nine Track Mind",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/29e688c6878b784fd8eb9755641b2b97.png"
  },
  {
    "artist": "Charlie Puth",
    "album": "CHARLIE",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1f4d106bfc5a4d0e8dcec8490630fab3.png"
  },
  {
    "artist": "Charlie Puth",
    "album": "Nine Track Mind (Special Edition)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b6d81dbf4662c688ed3ddf9c4c2eac3f.png"
  },
  {
    "artist": "Charlie Puth",
    "album": "Left and Right (feat. Jung Kook of BTS)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/e16905d22e5913535a8c6acadc781659.png"
  },
  {
    "artist": "Lil Tecca",
    "album": "We Love You Tecca",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/eb40f384b2c2239fabeffd727d0167ac.png"
  },
  {
    "artist": "Lil Tecca",
    "album": "Tec",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/5adb06e28b39139a002241cc09cbba44.png"
  },
  {
    "artist": "Lil Tecca",
    "album": "We Love You Tecca 2",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b40b54b193466b28ed08aa3fcb55442f.png"
  },
  {
    "artist": "Lil Tecca",
    "album": "Virgo World",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/72ad267b16d708dc4c13d1f2b226553c.png"
  },
  {
    "artist": "Lil Tecca",
    "album": "DOPAMINE",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/cba9196ce837bcb20094ea1a04f9a92a.png"
  },
  {
    "artist": "F3miii",
    "album": "NOBLE",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/b3bf57ecb38282c469c9d3590266410d.png"
  },
  {
    "artist": "F3miii",
    "album": "NOBLE (Slowed Down)",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/afb4eb205b072e89a19c30857d651ca9.png"
  },
  {
    "artist": "F3miii",
    "album": "FROM YOUR EYES",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/632299739d1bc797f8a57aab7e4c937b.png"
  },
  {
    "artist": "F3miii",
    "album": "LOSTWITHOUTMARIA",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/69a77769829850ef3b02ff3dd40dd0ab.png"
  },
  {
    "artist": "F3miii",
    "album": "Splinter",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3aee9147fa135a9a60e886aaaf1e6343.png"
  },
  {
    "artist": "Marvin Gaye",
    "album": "United",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/4822b8c62e382da54fba5adb646ee147.png"
  },
  {
    "artist": "Marvin Gaye",
    "album": "What's Going On",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/8700ee8059d6cfaaf50e0bbf090d6e34.png"
  },
  {
    "artist": "Marvin Gaye",
    "album": "Let's Get It On",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/1ce7f9e29ca649689b531965469b9801.png"
  },
  {
    "artist": "Marvin Gaye",
    "album": "Midnight Love",
    "image": "https://lastfm.freetls.fastly.net/i/u/300x300/3332d8741b0f8af8c31ab1f550de49b3.png"
  }
];