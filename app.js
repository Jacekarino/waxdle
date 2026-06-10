const artFrame = document.getElementById('art-frame');
const progressTrack = document.getElementById('progress-track');
const guessInput = document.getElementById('guess-input');
const autocompleteList = document.getElementById('autocomplete-list');
const gameStatusMessage = document.getElementById('game-status-message');
const postGameActions = document.getElementById('post-game-actions');

const modeSwitchBtn = document.getElementById('mode-switch-btn');
const helpBtn = document.getElementById('help-btn');
const aboutBtn = document.getElementById('about-btn');
const statsBtn = document.getElementById('stats-btn');
const helpModal = document.getElementById('help-modal');
const aboutModal = document.getElementById('about-modal');
const statsModal = document.getElementById('stats-modal');

const MAX_ATTEMPTS = 6;

const ZOOM_LEVELS = [1000, 800, 600, 400, 200, 100];

let currentMode = 'daily';
let targetAlbum = null;
let attempts = [];
let zoomOrigin = { x: 50, y: 50 };
let isGameOver = false;
let timeOffset = 0;
let countdownInterval = null;

let dailyStats = {
  played: 0,
  wins: 0,
  currentStreak: 0,
  maxStreak: 0,
  lastPlayedDate: null,
  dailyGuesses: [],
  dailyWon: false,
  dailyFinished: false
};

async function init() {
  await syncTime();
  loadStats();
  setupEventListeners();
  startNewGame();
}

async function syncTime() {
  try {
    const response = await fetch('https://worldtimeapi.org/api/timezone/Etc/UTC');
    const data = await res.json();
    const serverTime = new Date(data.datetime).getTime();
    const localTime = new Date().getTime();
    timeOffset = serverTime - localTime;
  } catch (e) {
    console.warn("Failed to sync time, using local device time.");
    timeOffset = 0;
  }
}

function getNowGMT() {
  return new Date(new Date().getTime() + timeOffset);
}

function getTodayString() {
  const date = getNowGMT();
  return `${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate()}`;
}

function getDisplayDateString() {
  const date = getNowGMT();
  const d = String(date.getUTCDate()).padStart(2, '0');
  const m = String(date.getUTCMonth() + 1).padStart(2, '0');
  const y = date.getUTCFullYear();
  return `${d}.${m}.${y}`;
}

function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

function selectTargetAlbum() {
  if (currentMode === 'daily') {
    const seed = hashCode(getTodayString() + "v4");
    return albumsDB[seed % albumsDB.length];
  } else {
    const randomIndex = Math.floor(Math.random() * albumsDB.length);
    return albumsDB[randomIndex];
  }
}

function startNewGame() {
  targetAlbum = selectTargetAlbum();
  attempts = [];
  isGameOver = false;

  if (currentMode === 'daily') {
    const today = getTodayString();
    if (dailyStats.lastPlayedDate === today) {
      attempts = [...dailyStats.dailyGuesses];
      if (dailyStats.dailyFinished) {
        isGameOver = true;
      }
    } else {
      dailyStats.dailyGuesses = [];
      dailyStats.dailyFinished = false;
      dailyStats.dailyWon = false;
      saveStats();
    }
  }

  if (currentMode === 'daily') {
    const seed = hashCode(getTodayString() + "zoom");
    zoomOrigin = {
      x: (seed % 61) + 20,
      y: ((seed >> 2) % 61) + 20
    };
  } else {
    zoomOrigin = {
      x: Math.floor(Math.random() * 61) + 20,
      y: Math.floor(Math.random() * 61) + 20
    };
  }

  renderUI();
}

function processGuess(guessAlbum) {
  if (isGameOver) return;

  const isCorrect = guessAlbum.album === targetAlbum.album && guessAlbum.artist === targetAlbum.artist;
  const isArtistCorrect = guessAlbum.artist === targetAlbum.artist;

  attempts.push({
    guess: `${guessAlbum.artist} - ${guessAlbum.album}`,
    correct: isCorrect,
    artistCorrect: isArtistCorrect
  });

  if (currentMode === 'daily') {
    dailyStats.dailyGuesses = attempts;
    saveStats();
  }

  if (isCorrect) {
    handleWin();
  } else if (attempts.length >= MAX_ATTEMPTS) {
    handleLoss();
  } else {
    renderUI();
  }
}

function handleWin() {
  isGameOver = true;
  if (currentMode === 'daily' && !dailyStats.dailyFinished) {
    dailyStats.dailyFinished = true;
    dailyStats.dailyWon = true;
    dailyStats.played++;
    dailyStats.wins++;
    dailyStats.currentStreak++;
    dailyStats.maxStreak = Math.max(dailyStats.maxStreak, dailyStats.currentStreak);
    dailyStats.lastPlayedDate = getTodayString();
    saveStats();
  }
  renderUI();
}

function handleLoss() {
  isGameOver = true;
  if (currentMode === 'daily' && !dailyStats.dailyFinished) {
    dailyStats.dailyFinished = true;
    dailyStats.dailyWon = false;
    dailyStats.played++;
    dailyStats.currentStreak = 0;
    dailyStats.lastPlayedDate = getTodayString();
    saveStats();
  }
  renderUI();
}

function renderUI() {
  artFrame.style.backgroundImage = `url('${targetAlbum.image}')`;

  if (isGameOver) {
    artFrame.classList.add('revealed');
    artFrame.style.backgroundPosition = 'center';
    artFrame.style.backgroundSize = '100%';
  } else {
    artFrame.classList.remove('revealed');
    artFrame.style.backgroundPosition = `${zoomOrigin.x}% ${zoomOrigin.y}%`;
    const currentAttemptIndex = attempts.length;
    artFrame.style.backgroundSize = `${ZOOM_LEVELS[currentAttemptIndex]}%`;
  }

  progressTrack.innerHTML = '';
  for (let i = 0; i < MAX_ATTEMPTS; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot';
    if (i < attempts.length) {
      if (attempts[i].correct) {
        dot.classList.add('correct');
      } else if (attempts[i].artistCorrect) {
        dot.classList.add('partial');
      } else {
        dot.classList.add('wrong');
      }
    }
    progressTrack.appendChild(dot);
  }

  guessInput.value = '';
  if (isGameOver) {
    guessInput.disabled = true;
    guessInput.placeholder = attempts[attempts.length - 1].correct ? "You got it!" : "Game Over";
    document.getElementById('search-wrapper').classList.add('hidden');

    gameStatusMessage.classList.remove('hidden');
    gameStatusMessage.innerHTML = attempts[attempts.length - 1].correct
      ? `<span class="status-win">Correct! It was ${targetAlbum.artist} - ${targetAlbum.album}</span>`
      : `<span class="status-loss">The album was ${targetAlbum.artist} - ${targetAlbum.album}</span>`;

    postGameActions.classList.remove('hidden');
    postGameActions.innerHTML = '';

    if (currentMode === 'daily') {
      const countdownDiv = document.createElement('div');
      countdownDiv.id = 'countdown-timer';
      countdownDiv.style.fontWeight = 'bold';
      countdownDiv.style.marginBottom = '10px';
      countdownDiv.style.textAlign = 'center';

      const shareBtn = document.createElement('button');
      shareBtn.className = 'btn btn-primary';
      shareBtn.textContent = 'Share Result';
      shareBtn.onclick = shareDaily;

      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.flexDirection = 'column';
      wrapper.style.alignItems = 'center';

      wrapper.appendChild(countdownDiv);
      wrapper.appendChild(shareBtn);
      postGameActions.appendChild(wrapper);

      startCountdown(countdownDiv);
    } else {
      const nextBtn = document.createElement('button');
      nextBtn.className = 'btn btn-primary';
      nextBtn.textContent = 'Play Next Album';
      nextBtn.onclick = () => {
        postGameActions.classList.add('hidden');
        gameStatusMessage.classList.add('hidden');
        document.getElementById('search-wrapper').classList.remove('hidden');
        guessInput.disabled = false;
        guessInput.placeholder = "Guess the album or artist...";
        startNewGame();
      };
      postGameActions.appendChild(nextBtn);
    }

  } else {
    document.getElementById('search-wrapper').classList.remove('hidden');
    gameStatusMessage.classList.add('hidden');
    postGameActions.classList.add('hidden');
    guessInput.disabled = false;
    guessInput.placeholder = "Guess the album or artist...";
  }
}

function startCountdown(element) {
  if (countdownInterval) clearInterval(countdownInterval);

  function update() {
    const now = getNowGMT();
    const tomorrow = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1));
    const diff = tomorrow - now;

    if (diff <= 0) {
      element.textContent = "New Waxdle available! Refresh the page.";
      clearInterval(countdownInterval);
      return;
    }

    const h = Math.floor(diff / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    element.textContent = `Next Waxdle in: ${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }

  update();
  countdownInterval = setInterval(update, 1000);
}

function handleSearchInput(e) {
  const query = e.target.value.toLowerCase().trim();
  autocompleteList.innerHTML = '';

  if (query.length < 2) {
    autocompleteList.classList.add('hidden');
    return;
  }

  const results = albumsDB.filter(a =>
    a.album.toLowerCase().includes(query) ||
    a.artist.toLowerCase().includes(query)
  ).slice(0, 5);

  if (results.length > 0) {
    autocompleteList.classList.remove('hidden');
    results.forEach(album => {
      const li = document.createElement('li');

      const albumName = document.createElement('div');
      albumName.className = 'album-name';
      albumName.textContent = album.album;

      const artistName = document.createElement('div');
      artistName.className = 'artist-name';
      artistName.textContent = album.artist;

      li.appendChild(albumName);
      li.appendChild(artistName);

      li.onclick = () => {
        autocompleteList.classList.add('hidden');
        processGuess(album);
      };
      autocompleteList.appendChild(li);
    });
  } else {
    autocompleteList.classList.add('hidden');
  }
}

function setupEventListeners() {
  modeSwitchBtn.addEventListener('click', () => {
    currentMode = currentMode === 'daily' ? 'endless' : 'daily';
    document.getElementById('mode-text').textContent = currentMode === 'daily' ? 'Daily' : 'Endless';
    startNewGame();
  });

  guessInput.addEventListener('input', handleSearchInput);

  document.addEventListener('click', (e) => {
    if (!document.getElementById('search-wrapper').contains(e.target)) {
      autocompleteList.classList.add('hidden');
    }
  });

  helpBtn.onclick = () => helpModal.classList.remove('hidden');
  aboutBtn.onclick = () => aboutModal.classList.remove('hidden');
  statsBtn.onclick = () => {
    updateStatsUI();
    statsModal.classList.remove('hidden');
  };

  document.querySelectorAll('.close-btn, .modal-backdrop').forEach(btn => {
    btn.onclick = (e) => {
      helpModal.classList.add('hidden');
      aboutModal.classList.add('hidden');
      statsModal.classList.add('hidden');
    };
  });
}

function loadStats() {
  const saved = localStorage.getItem('waxdle_stats');
  if (saved) {
    dailyStats = JSON.parse(saved);
  } else {
    // Show help modal for first-time visitors
    setTimeout(() => {
      helpModal.classList.remove('hidden');
    }, 100);
  }
}

function saveStats() {
  localStorage.setItem('waxdle_stats', JSON.stringify(dailyStats));
}

function updateStatsUI() {
  document.getElementById('stat-played').textContent = dailyStats.played;
  const winRate = dailyStats.played > 0 ? Math.round((dailyStats.wins / dailyStats.played) * 100) : 0;
  document.getElementById('stat-win').textContent = `${winRate}%`;
  document.getElementById('stat-streak').textContent = dailyStats.currentStreak;
  document.getElementById('stat-max-streak').textContent = dailyStats.maxStreak;
}

function shareDaily() {
  const isWin = attempts[attempts.length - 1].correct;
  const guessCount = isWin ? attempts.length : 'X';
  const displayDate = getDisplayDateString();

  let grid = '';
  for (let i = 0; i < MAX_ATTEMPTS; i++) {
    if (i < attempts.length) {
      if (attempts[i].correct) {
        grid += '🟩 ';
      } else if (attempts[i].artistCorrect) {
        grid += '🟨 ';
      } else {
        grid += '🟥 ';
      }
    } else {
      grid += '⬛ ';
    }
  }

  const shareText = `💿 Waxdle ${displayDate}\n🔍 ${grid.trim()}\n🔊 Guessed in ${guessCount}/6 \n🌐 Play at: waxdle.pages.dev`;

  navigator.clipboard.writeText(shareText).then(() => {
    const btn = postGameActions.querySelector('button');
    const originalText = btn.textContent;
    btn.textContent = 'Copied to Clipboard!';
    setTimeout(() => { btn.textContent = originalText; }, 2000);
  }).catch(err => {
    alert("Failed to copy to clipboard");
  });
}

init();
