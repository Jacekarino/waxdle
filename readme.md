<div align="center">

# 💿 Waxdle

**A daily visual puzzle game where music enthusiasts guess legendary vinyl album covers.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-waxdle.pages.dev-8b5cf6?style=for-the-badge&logo=googlechrome&logoColor=white)](https://waxdle.pages.dev/)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare%20Pages-Hosting-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)
[![Last.fm API](https://img.shields.io/badge/Data-Last.fm%20API-D51007?style=for-the-badge&logo=lastdotfm&logoColor=white)](https://www.last.fm/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Zero Dependencies](https://img.shields.io/badge/Dependencies-0%20(Client)-06B6D4?style=for-the-badge&logo=npm&logoColor=white)](#%EF%B8%8F-tech-stack)
[![GitHub Stars](https://img.shields.io/github/stars/Jacekarino/waxdle?style=for-the-badge&logo=github&color=EAB308)](https://github.com/Jacekarino/waxdle/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/Jacekarino/waxdle?style=for-the-badge&logo=github&color=6366F1)](https://github.com/Jacekarino/waxdle/network/members)
[![GitHub Issues](https://img.shields.io/github/issues/Jacekarino/waxdle?style=for-the-badge&logo=github&color=EC4899)](https://github.com/Jacekarino/waxdle/issues)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-22C55E?style=for-the-badge&logo=github)](https://github.com/Jacekarino/waxdle/pulls)
[![License: MIT](https://img.shields.io/badge/License-MIT-3B82F6?style=for-the-badge&logo=open-source-initiative&logoColor=white)](license.txt)

<br />

<p align="center">
  <img src="https://raw.githubusercontent.com/Jacekarino/waxdle/main/thumbnail.png" alt="Waxdle Game Interface Preview" width="720" />
</p>
<br />

</div>

---

## 🌟 Overview

**Waxdle** is a daily visual music guessing game inspired by *Wordle* and designed for vinyl crate-diggers, audiophiles, and casual music fans. 

Every day, players are presented with a heavily obscured, pixelated, or zoomed-in fragment of an iconic album cover. With each incorrect guess or skipped turn, the image progressively sharpens and reveals more visual clues. Can you name the artist and album in as few attempts as possible?

---

## ✨ Features

- 🎨 **Progressive Visual Reveal** — Dynamic image de-pixelation and unblurring that becomes clearer with every guess.
- 🔍 **Fuzzy Autocomplete Search** — Instant search across a curated database of hundreds of world-famous albums and artists.
- 📅 **Daily Challenge System** — A synchronized daily puzzle sequence offering a fresh challenge every 24 hours.
- 📊 **Streak & Win Rate Tracking** — Comprehensive statistics stored in `localStorage` including win percentage, guess distribution, and current/max streaks.
- 📋 **Wordle-Style Share Grid** — Copy spoiler-free emoji grids (🟩 🟥 ⬛) to share your daily score with friends.
- 🎵 **Last.fm Data Pipeline** — Integrated Node.js ingestion script (`fetch-albums.js`) to curate high-resolution album art directly via the Last.fm API.
- ⚡ **Zero Client Dependencies** — Pure Vanilla JavaScript frontend with instant load times and no bloated UI libraries.

---

## 🚀 Live Instances

Play the daily game online:

| Provider | URL | Status |
| :--- | :--- | :--- |
| **Cloudflare Pages** | [https://waxdle.pages.dev/](https://waxdle.pages.dev/) | ![Active](https://img.shields.io/badge/online-emerald?style=flat-square) |

---

## 🛠️ Tech Stack

- **Frontend:** Vanilla HTML5, CSS3 (Custom Variables, Flexbox/Grid, Animations), Modern JavaScript (ES6+)
- **Data Ingestion:** Node.js, Last.fm REST API, `dotenv`
- **Database:** Static Pre-indexed Album Catalog (`albums-db.js`)
- **Hosting & Edge Delivery:** Cloudflare Pages

---

## 💻 Getting Started

### 1. Clone Repository
```bash
git clone https://github.com/Jacekarino/waxdle.git
cd waxdle
```

### 2. Run Locally
Simply open `index.html` in your browser:

```bash
# On Windows (PowerShell)
Start-Process index.html

# On macOS
open index.html

# On Linux
xdg-open index.html
```

Or serve with your favorite local web server:
```bash
# Python
python -m http.server 8080

# Node / npx
npx serve .
```

---

## 🎵 Updating Album Data (Last.fm CLI)

To fetch and compile new albums into the game catalog:

1. Create a `.env` file based on `.env.template`:
   ```env
   LASTFM_API_KEY=your_api_key_here
   ```
2. Install dependencies & execute the fetcher:
   ```bash
   npm install
   node fetch-albums.js
   ```

---

## 📂 Project Structure

```text
waxdle/
├── albums-db.js          # Compiled client-side album catalog
├── app.js                # Core game loop, guess evaluation & local stats
├── fetch-albums.js       # Node.js ingestion script fetching Last.fm API
├── index.html            # Main markup and UI container
├── styles.css            # Retro-modern dark styling & album flip animations
├── vinyl.svg             # Vinyl record graphic asset
├── thumbnail.png         # Gameplay preview screenshot
├── license.txt           # MIT License documentation
└── readme.md             # Project documentation
```

---

## 🤝 Contributing

Contributions, new album suggestions, and bug fixes are welcome!

1. Fork the Project (**Fork**)
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a **Pull Request**

---

## 📄 License

Distributed under the **MIT License**. See [`license.txt`](license.txt) for more information.

---

<div align="center">

Made with ♡ by [**Jacekarino**](https://github.com/Jacekarino)

</div>