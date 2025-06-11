(function() {
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js';
  script.onload = function() {
    let time = 10 * 60;
    const countdownEl = document.getElementById('countdown');
    const progressEl = document.getElementById('progress');
    const finalMessage = document.getElementById('final-message');
    const outputEl = document.getElementById('output');
    const totalTime = time;
    const lines = [
  'Initialisation du protocole Σ-13...',
  'Injection du vecteur d’attaque ZeroDay...',
  'Détection d’une signature inconnue [HASH:0xE6F9A1]...',
  'Exécution du module Blackout.exe...',
  'Bypass du pare-feu réussi.',
  'Élévation de privilèges en cours...',
  'Accès root obtenu.',
  'Effacement des logs système...',
  'Connexion au serveur maître établie.',
  'Écriture dans le MBR détectée.',
  'Altération du registre en cours...',
  'Chiffrement des partitions C:, D:, E:...',
  'Extraction de tokens de session...',
  'Création de tunnel SSH clandestin...',
  'Déploiement du backdoor [Cerberus.AI].',
  'Encodage XOR actif.',
  'Encapsulation dans le flux DNS...',
  'Détection de sandbox. Passage en mode furtif.',
  'Désactivation des protections antivirus.',
  'Injection du loader polymorphe.',
  'Surcharge du bus PCI-E...',
  'Corruption du schéma mémoire.',
  'Fuite de clé privée RSA détectée.',
  'Blocage des ports 443, 80, 21...',
  'Déconnexion forcée de tous les clients.',
  'Exploit kernel 0xC0000428 en cours.',
  'Téléversement de charge utile : 92%.',
  'Processus SYSTEM_32 compromis.',
  'Redéfinition des privilèges UID:0.',
  'Manipulation de la pile TCP/IP.',
  'Clé AES non valide — tentative de force brute.',
  'Effacement progressif des secteurs système.',
  'Connexion proxy inversé vers 185.21.42.90 établie.',
  'Module "Spectre" activé.',
  'Encodage base64 d’urgence lancé.',
  'Fuite mémoire non contrôlée.',
  'Surveillance désactivée par script root.',
  'Chargement du rootkit Phantom-6...',
  'Override des routines de vérification BIOS.',
  'Saturation des entrées I/O en cours.',
  'Modification des attributs NTFS.',
  'Compression des volumes virtuels.',
  'Réécriture de l’index LDAP.',
  'Synchronisation avec botnet externe.',
  'Verrouillage du clavier imminent.',
  'Spoofing de la passerelle réseau.',
  'Création de partitions leurres.',
  'Script auto-destructeur activé.',
  'Suppression silencieuse des comptes locaux.',
  'Injection SQL dans la base "auth".',
  'Session admin clonée.',
  'Détection d’activité anormale dans /etc/shadow.',
  'Override de la politique SELinux.',
  'Séquence logicielle illégale en cours.',
  'Protocole de fuite de données actif.',
  'Modification de l’horloge système.',
  'Forkbomb détectée.',
  'Changement non autorisé dans le registre boot.',
  'Empreinte numérique modifiée.',
  'Signature cryptographique inconnue.',
  'Falsification des certificats TLS.',
  'Réécriture silencieuse du firmware.',
  'Division par zéro en mémoire vive.',
  'Signal ELF malformé intercepté.',
  'Panne de contrôle du ventilateur CPU.',
  'Overclocking non sollicité détecté.',
  'Surcharge CPU critique.',
  'Fluctuation de tension suspecte.',
  'Entrée USB non identifiée analysée.',
  'Code HEX injecté dans pile système.',
  'Checksum incohérent dans le binaire principal.',
  'Témoin de compromission : ACTIVÉ.',
  'Programme résiduel : VISIBLE.',
  'Script en boucle infinie détecté.',
  'Clé BIOS piratée.',
  'Driver falsifié en mémoire.',
  'IP locale remplacée par valeur fantôme.',
  'Alerte : collision MAC improbable.',
  'Propagation virale interprocessus observée.',
  'Redirection du flux DNS : INCONNUE.',
  'Téléchargement depuis .onion confirmé.',
  'Données utilisateurs compressées (97%)',
  'Indexation forcée du répertoire racine.',
  'Découverte d’un pattern "worm-like".',
  'Requêtes anormales sur port 6667 (IRC).',
  'Lien vers serveur TOR actif.',
  'Certificat SSL auto-signé injecté.',
  'Disque virtuel mappé sans autorisation.',
  'Hash SHA-256 non reconnu.',
  'Protocole ALPHA-NOVA violé.',
  'Appel système : interdit.',
  'Processus zombie détecté.',
  'Encryption asymétrique renversée.',
  'Tentative de spoof IPv6 local.',
  'Détection de pattern "Stuxnet-like".',
  'Démon de surveillance désactivé.',
  'Fichier "config.sys" altéré.',
  'Temps système désynchronisé (Δ = 214ms).',
  'Modèle comportemental de l’utilisateur rompu.',
  'Appareil en mode "ghost".',
  'Écran principal désindexé.',
  'Profondeur de pile dépassée.',
  'Dernier point de restauration détruit.',
  'Nœud maître injoignable.',
  'Menace persistante avancée (APT) suspectée.',
  'Ancrage du bootloader compromis.',
  'Symétrie système perturbée.',
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
        playAlertSound();
      } else {
        time--;
      }
    }

    const countdownInterval = setInterval(updateCountdown, 1000);

    function addTerminalLine() {
      const line = lines[Math.floor(Math.random() * lines.length)];
      const el = document.createElement('div');
      el.textContent = line;
      outputEl.appendChild(el);
      outputEl.scrollTop = outputEl.scrollHeight;
    }

    setInterval(addTerminalLine, 800);

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

    function activateFullscreen() {
      const el = document.documentElement;
      if (el.requestFullscreen) el.requestFullscreen();
      else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
      else if (el.msRequestFullscreen) el.msRequestFullscreen();
    }

    document.addEventListener('click', function handleClickOnce() {
      activateFullscreen();
      document.removeEventListener('click', handleClickOnce);
    });

    document.addEventListener('fullscreenchange', () => {
      if (!document.fullscreenElement) {
        activateFullscreen();
      }
    });

    let mouseTimeout;
    document.addEventListener('mousemove', () => {
      document.body.style.cursor = 'default';
      clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => {
        document.body.style.cursor = 'none';
      }, 1000);
    });

    function playAlertSound() {
      const sound = new Howl({
        src: ['https://www.soundjay.com/button/sounds/button-3.mp3'],
        volume: 1.0,
        onend: function() {
          console.log('Son terminé');
        }
      });
      sound.play();
    }
  };
  document.head.appendChild(script);
})();
