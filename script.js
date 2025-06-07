// --------- COMPTE À REBOURS ET PROGRESSION ----------
let time = 10 * 60;
const countdownEl = document.getElementById('countdown');
const progressEl = document.getElementById('progress');
const finalMessage = document.getElementById('final-message');
const outputEl = document.getElementById('output');

const totalTime = time;
const lines = [
  'Tentative de récupération...',
  'Échec de la récupération.',
  'Erreur critique.',
  'Connexion perdue.',
  'Fichiers introuvables.',
  'Serveur compromis.',
  'Chiffrement en cours...',
  'Chiffrement terminé.',
  'Base de données effacée.',
  'Aucune restauration possible.',
  'Système irrécupérable.',
];

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  countdownEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

  const progress = 100 - (time / totalTime * 100);
  progressEl.style.width = `${progress}%`;

  if (time <= 0) {
    clearInterval(countdownInterval);
    finalMessage.classList.remove('hidden');
  } else {
    time--;
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);

// --------- TERMINAL FAUSSE SORTIE ----------
function addTerminalLine() {
  const line = lines[Math.floor(Math.random() * lines.length)];
  const el = document.createElement('div');
  el.textContent = line;
  outputEl.appendChild(el);
  outputEl.scrollTop = outputEl.scrollHeight;
}
setInterval(addTerminalLine, 800);

// --------- EFFET MATRIX ROUGE ----------
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const columns = Math.floor(canvas.width / 20);
const drops = new Array(columns).fill(1);

function drawMatrix() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#ff0000';
  ctx.font = '16px monospace';

  for (let i = 0; i < drops.length; i++) {
    const text = Math.random() > 0.5 ? '0' : '1';
    ctx.fillText(text, i * 20, drops[i] * 20);
    if (drops[i] * 20 > canvas.height || Math.random() > 0.95) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 50);

// --------- PLEIN ÉCRAN AUTOMATIQUE ---------
function activateFullscreen() {
  const el = document.documentElement;
  if (el.requestFullscreen) el.requestFullscreen();
  else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
  else if (el.msRequestFullscreen) el.msRequestFullscreen();
}

// Lancer le plein écran au premier clic
document.addEventListener('click', function handleClickOnce() {
  activateFullscreen();
  document.removeEventListener('click', handleClickOnce);
});

// Réactiver le plein écran si on en sort
document.addEventListener('fullscreenchange', () => {
  if (!document.fullscreenElement) {
    activateFullscreen();
  }
});

// --------- MOUSE HIDE APRÈS INACTIVITÉ ---------
let mouseTimeout;
document.addEventListener('mousemove', () => {
  document.body.style.cursor = 'default';
  clearTimeout(mouseTimeout);
  mouseTimeout = setTimeout(() => {
    document.body.style.cursor = 'none';
  }, 1000);
});
