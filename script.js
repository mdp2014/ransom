// Mode plein écran
function enableFullscreen() {
  const el = document.documentElement;
  if (el.requestFullscreen) {
    el.requestFullscreen().catch(() => {});
  } else if (el.webkitRequestFullscreen) {
    el.webkitRequestFullscreen();
  } else if (el.msRequestFullscreen) {
    el.msRequestFullscreen();
  }
}

// Timer de compte à rebours
let seconds = 3600;
const timerEl = document.getElementById("timer");

setInterval(() => {
  seconds--;
  const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  timerEl.textContent = `Temps restant : ${h}:${m}:${s}`;

  if (seconds === 1800) {
    document.getElementById("alarmSound").play().catch(() => {});
  }
}, 1000);

// Texte encrypté glitché
const msgEl = document.getElementById("message");
const baseMsg = "CHIFFREMENT DES DONNÉES EN COURS...";

function randomChar() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&@!";
  return chars[Math.floor(Math.random() * chars.length)];
}

setInterval(() => {
  let glitched = "";
  for (let i = 0; i < baseMsg.length; i++) {
    glitched += Math.random() > 0.2 ? baseMsg[i] : randomChar();
  }
  msgEl.textContent = glitched;
}, 80);

// Matrix rouge sombre
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01";
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array.from({ length: columns }).map(() => Math.random() * canvas.height);

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgba(255, 0, 0, 0.15)";
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(text, i * fontSize, drops[i]);
    drops[i] = drops[i] > canvas.height ? 0 : drops[i] + fontSize * 0.8;
  }
}
setInterval(draw, 33);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
