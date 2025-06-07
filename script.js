const countdownEl = document.getElementById("countdown");
let timeLeft = 600; // 10 minutes

function updateCountdown() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  countdownEl.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
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
  if (el.requestFullscreen) {
    el.requestFullscreen();
  } else if (el.webkitRequestFullscreen) {
    el.webkitRequestFullscreen();
  } else if (el.msRequestFullscreen) {
    el.msRequestFullscreen();
  }
}

const terminal = document.getElementById("terminal");

const messages = [
  "[#] Initialisation du module d'attaque...",
  "[#] Vérification du pare-feu...",
  "[#] Pare-feu contourné.",
  "[#] Connexion au serveur distant établie.",
  "[#] Téléchargement des modules...",
  "[#] Décryptage du noyau système...",
  "[#] Processus PID 9342 terminé.",
  "[#] Suppression des logs système...",
  "[#] Extraction des fichiers .doc/.pdf/.xls...",
  "[#] Chiffrement AES-256 en cours...",
  "[#] Génération de clés RSA privées...",
  "[#] Compression des données sensibles...",
  "[#] Upload sur serveur onion...",
  "[#] Analyse des fichiers personnels...",
  "[#] Requête POST /vault/upload terminée.",
  "[#] Activation du verrouillage du BIOS...",
  "[#] Injection dans la MBR détectée...",
  "[#] Ouverture de la backdoor système...",
  "[#] Processus de persistance activé.",
  "[#] Analyse du micro et de la webcam...",
  "[#] Surveillance des frappes clavier démarrée...",
  "[#] Transfert bancaire en attente...",
  "[#] Requête SSH brute force envoyée...",
  "[#] Synchronisation avec les nœuds du réseau noir...",
  "[#] Tentative de désinstallation détectée. Contre-mesures lancées.",
  "[#] Clé de déchiffrement supprimée localement.",
  "[#] Système désormais contrôlé à distance.",
  "[#] Attente de rançon en cours...",
  "[#] Dernier avertissement...",
];

let index = 0;

function typeTerminalLine() {
  if (index >= messages.length) index = 0;
  const line = document.createElement("div");
  line.textContent = messages[index++];
  terminal.appendChild(line);
  terminal.scrollTop = terminal.scrollHeight;
  setTimeout(typeTerminalLine, 1200 + Math.random() * 400);
}

typeTerminalLine();
