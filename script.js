// 💥 Mode plein écran
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

// ⌛ Timer
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

// Texte glitché encrypté
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

// 🧮 Matrix animation
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01";
const fontSize = 18;
const columns = Math.floor(canvas.width / fontSize);

const drops = Array.from({ length: columns }).map(() => Math.random() * canvas.height);

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00FF00";
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

// 👨‍💻 Terminal avec curseur, son et hex
const terminal = document.getElementById("terminal");
const keySound = document.getElementById("keySound");
const fakeCommands = [
  "[+] Connexion établie avec 192.168.0.3",
  "[+] Accès root obtenu",
  "[+] Téléchargement des mots de passe...",
  "[*] Analyse des fichiers sensibles...",
  "[!] Chiffrement de /home en cours...",
  "[!] Suppression des logs système...",
  "[+] Clé RSA injectée",
  "[*] Envoi des données vers serveur distant...",
  "[*] Injection de malware réussie",
  "[!] Données exfiltrées : 24.3MB",
  "[!] Suppression de toutes les sauvegardes...",
  "[+] Mission accomplie. Rançon demandée."
];

let cmdIndex = 0;

function writeToTerminal() {
  let line;
  if (cmdIndex < fakeCommands.length) {
    line = fakeCommands[cmdIndex];
    cmdIndex++;
  } else {
    line = [...Array(60)].map(() =>
      Math.floor(Math.random() * 16).toString(16).toUpperCase()
    ).join(" ");
  }

  terminal.textContent += line + "\n";
  terminal.scrollTop = terminal.scrollHeight;

  keySound.currentTime = 0;
  keySound.play().catch(() => {});
}

setInterval(writeToTerminal, 600);

// 📋 Copier terminal
terminal.addEventListener("click", () => {
  navigator.clipboard.writeText(terminal.textContent).then(() => {
    alert("Contenu du terminal copié !");
  });
});
