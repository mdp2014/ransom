const countdownEl = document.getElementById("countdown");
const progressBar = document.getElementById("progress");
let timeLeft = 600; // 10 minutes

function updateCountdown() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  countdownEl.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  const progressPercent = ((600 - timeLeft) / 600) * 100;
  progressBar.style.width = `${progressPercent}%`;

  if (timeLeft > 0) {
    timeLeft--;
    setTimeout(updateCountdown, 1000);
  } else {
    terminal.innerHTML += `<div style="color:red; font-weight:bold;">[#] TEMPS ÉCOULÉ - SUPPRESSION DÉFINITIVE EN COURS...</div>`;
  }
}

updateCountdown();

function enterFullscreen() {
  const el = document.documentElement;
  if (el.requestFullscreen) el.requestFullscreen();
  else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
  else if (el.msRequestFullscreen) el.msRequestFullscreen();
}

const terminal = document.getElementById("terminal");

const messages = [
  "[#] Initialisation du module d'attaque...",
  "[#] Connexion à 127.0.0.1:666...",
  "[#] Analyse des fichiers en cours...",
  "[#] Fichiers trouvés : 48 392",
  "[#] Chiffrement avec AES-256...",
  "[#] Création de la clé de déchiffrement...",
  "[#] Clé supprimée localement.",
  "[#] Transfert en cours vers serveur onion...",
  "[#] Upload terminé.",
  "[#] Infiltration du BIOS...",
  "[#] Processus PID 8743 terminé.",
  "[#] Activation du verrouillage du système.",
  "[#] Suppression des points de restauration...",
  "[#] Injection dans le MBR détectée...",
  "[#] Persistance assurée après redémarrage.",
  "[#] Surveillance clavier activée.",
  "[#] Caméra détectée - flux en direct...",
  "[#] Transfert bancaire simulé...",
  "[#] Données personnelles exportées.",
  "[#] Attente de paiement...",
  "[#] Récupération impossible sans la clé.",
  "[#] DERNIER AVERTISSEMENT.",
];

let index = 0;

function typeTerminalLine() {
  if (index >= messages.length) index = 0;
  const line = document.createElement("div");
  line.textContent = messages[index++];
  terminal.appendChild(line);
  terminal.scrollTop = terminal.scrollHeight;
  setTimeout(typeTerminalLine, 1000 + Math.random() * 500);
}

typeTerminalLine();
