// Compte à rebours 10 minutes
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

// Affiche des lignes dans le terminal
function addTerminalLine() {
  const line = lines[Math.floor(Math.random() * lines.length)];
  const el = document.createElement('div');
  el.textContent = line;
  outputEl.appendChild(el);
  outputEl.scrollTop = outputEl.scrollHeight;
}
setInterval(addTerminalLine, 800);

// Effet Matrix avec des 0 et 1
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
// Plein écran automatique
document.addEventListener('DOMContentLoaded', () => {
  const requestFullscreen = document.body.requestFullscreen || document.body.webkitRequestFullscreen || document.body.mozRequestFullScreen || document.body.msRequestFullscreen;
  if (requestFullscreen) {
    requestFullscreen.call(document.body);
  }
});

// Masquer la souris quand elle est sur la page
document.body.style.cursor = 'none';
// Réactiver le plein écran si on en sort
document.addEventListener('fullscreenchange', () => {
  if (!document.fullscreenElement) {
    const requestFullscreen = document.body.requestFullscreen || document.body.webkitRequestFullscreen || document.body.mozRequestFullScreen || document.body.msRequestFullscreen;
    if (requestFullscreen) {
      requestFullscreen.call(document.body);
    }
  }
});
// Fonction pour activer le plein écran
function activateFullscreen() {
  const el = document.documentElement;
  if (el.requestFullscreen) el.requestFullscreen();
  else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
  else if (el.msRequestFullscreen) el.msRequestFullscreen();
}

// Lancer le plein écran au premier clic
document.addEventListener('click', function handleClickOnce() {
  activateFullscreen();
  document.removeEventListener('click', handleClickOnce); // ne le fait qu'une seule fois
});
