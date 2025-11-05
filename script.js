// --------- INCLURE HOWLER.JS VIA CDN (chargement existant conservé) ----------
(function() {
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js';
  script.onload = function() {
    // --------- COMPTE À REBOURS ET PROGRESSION ----------
    let time = 10 * 60; // secondes
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
  'Connexion proxy inversé vers serveur distant établie.',
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
  'Forkbomb simulée (isolation) — neutralisée.',
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
  'Clé BIOS altérée.',
  'Driver falsifié en mémoire.',
  'IP locale remplacée par valeur fantôme.',
  'Alerte : collision MAC improbable.',
  'Propagation virale interprocessus observée.',
  'Redirection du flux DNS : INCONNUE.',
  'Téléchargement depuis réseau masqué confirmé.',
  'Données utilisateurs compressées (97%).',
  'Indexation forcée du répertoire racine.',
  'Découverte d’un pattern "worm-like".',
  'Requêtes anormales sur port 6667 (IRC).',
  'Lien vers réseau anonyme actif.',
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
  // nouvelles lignes demandées (fictionnelles / non-actionnables)
  'comromption systeme 32 détectée (mode simulation)...',
  'installation de "content.js" — checksum inconnu.',
  'téléchargement de "faille.ex" signalé (quarantaine).',
  'module "veil" chargé en mémoire volatile.',
  'flag DEBUG: true — traces masquées.',
  'réplication fichier "ghost.tmp" sur répertoires système.',
  'hydrate du cache I/O pour dissimulation.',
  'processus "watchdog" stoppé par override.',
  'rafraîchissement des ACLs : accès limité.',
  'archive chiffrée "payload.arc" créée.',
  'masquage des timestamps (UTC -> local modifié).',
  'activation du mode "stealth" (heuristique élevée).',
  'verification CRC échouée — tentative d’adaptation.',
  'liaison dynamique de "libshadow" falsifiée.',
  'cache DNS purgé puis réinjecté.',
  'séquence d’évasion anti-forensics initialisée.',
  'branchement virtuel "usb0" simulé.',
  'fork de processus critique neutralisé.',
  'template de réponse serveur altéré.',
  'statut service "authd": compromis (lecture seule).',
  'compaction des journaux pour masquer empreintes.',
  'node "worker-07" isolé en sandbox.',
  'hashing adaptatif en cours (itérations augmentées).',
  'reconstruction d’un index corrompu (simulé).',
  'marqueur "do_not_touch" inséré dans BLOB.',
  'orchestration de tâches retardées planifiée.',
  'nonce réutilisé — alerte incohérence.',
  'protocole d’envoi fragmenté activé.',
  'réécriture d’entêtes HTTP en transit.',
  'tentative d’émulation hardware détectée.',
  'partition miroir montée en lecture seule.',
  'polling anormal sur bus série observé.',
  'taux d’erreur sur chipset inconnu élevé.',
  'compte invité transformé en stub administratif.',
  'télétravail du démon d’écoute mis en pause.',
  'sémaphore bloqué — journalisation forcée.',
  'heuristique de détection rétrogradée.',
  'réponse ICMP modifiée pour camouflage.',
  'masque d’adresse appliqué aux logs réseau.',
  'préfixe BGP altéré (notification interne).',
  'routage local basculé vers interface virtuelle.',
  'empreinte TLS tronquée pour compatibilité.',
  'sous-système de fichiers virtuel répliqué.',
  'contrôle d’intégrité corrompu (bitflip détecté).',
  'module d’audit désarmé (compte-rendu supprimé).',
  'séquence de redémarrage forcée initiée.',
  'copie cachée de "users.db" exportée.',
  'synchronisation horaire falsifiée (NTP spoof).',
  'séance RDP fantôme ouverte (UID:9999).',
  'vectorisation du binaire principale dénaturée.',
  'profil de risque ajusté à "critique".',
  'étiquette de confiance retirée du composant.',
  'méta-données fichiers nettoyées automatiquement.',
  'contrôle de version altéré (commit fantôme).',
  'accélération matériel désactivée pour stabilité.',
  'une-only lock forcé pour masquer écriture.',
  'partition d’échange chiffrée renommée.',
  'chemin d’accès utilisateur remplacé par alias.',
  'Connexion socket instable — maintien actif.',
  'cache d’indexation corrompu — rebuild différé.',
  'heuristique "user-behavior" noyée par bruit.',
  'cible marquée pour export différé (TTL:72h).',
  'signature heuristique ajoutée au registre local.',
  'transcodage de flux binaire en cours.',
  'vérification CRC partielle autorisée.',
  'fichier "readme.tmp" laissé comme leurre.',
  'routine "cleanup" programmée en arrière-plan.',
  'table de routage interne réécrite (temp).',
  'boucle de supervision redirigée vers null.',
  'état de sécurité basculé : PROBABLE_COMPROMIS.',
  'marquage de session : ORPHELIN (recovery needed).'
];
    // mise à jour du compte à rebours
    let accelerated = false; // drapeau pour déclencher l'accélération une seule fois
    function updateCountdown() {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      countdownEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
      const progress = 100 - (time / totalTime * 100);
      progressEl.style.width = `${progress}%`;

      // déclenchement : quand il reste 60 secondes, accélérer le terminal pendant ~1min
      if (time === 60 && !accelerated) {
        startRapidTerminal(60 * 1000, 40); // 60s à ~40ms par ligne (très rapide)
        accelerated = true;
      }

      if (time <= 0) {
        clearInterval(countdownInterval);
        finalMessage.classList.remove('hidden');
        playAlertSound();
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
      // limiter la taille du terminal pour éviter mémoire trop grande
      if (outputEl.children.length > 1000) {
        outputEl.removeChild(outputEl.firstChild);
      }
    }

    // intervalle "normal"
    let terminalInterval = setInterval(addTerminalLine, 800);

    // --------- ACCELÉRER LE TERMINAL POUR UNE DURÉE (ex: dernière minute) ----------
    // durationMs : durée de l'accélération en ms
    // rapidIntervalMs : intervalle entre lignes en ms (petit => plus rapide)
    function startRapidTerminal(durationMs, rapidIntervalMs) {
      // arrêter l'intervalle normal
      clearInterval(terminalInterval);

      // démarrer l'intervalle rapide
      const rapidInterval = setInterval(addTerminalLine, rapidIntervalMs);

      // augmenter aussi légèrement la vitesse du matrix (optionnel)
      let originalMatrixSpeed = matrixIntervalDelay;
      matrixIntervalDelay = Math.max(20, Math.floor(originalMatrixSpeed / 3));
      restartMatrixInterval();

      // au terme de la durée, restaurer l'intervalle normal (si le compte à rebours continue)
      setTimeout(() => {
        clearInterval(rapidInterval);
        // Si le compte n'est pas fini, restaurer le rythme normal
        if (time > 0) {
          terminalInterval = setInterval(addTerminalLine, 800);
        }
        // restaurer la vitesse du matrix
        matrixIntervalDelay = originalMatrixSpeed;
        restartMatrixInterval();
      }, durationMs);
    }

    // --------- EFFET MATRIX ROUGE ----------
    const canvas = document.getElementById('matrixCanvas');
    const ctx = canvas.getContext('2d');
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / 20);
      drops.length = 0;
      for (let i = 0; i < columns; i++) drops.push(1);
    }
    window.addEventListener('resize', resizeCanvas);

    // initialisation variables matrix
    let columns = Math.floor(window.innerWidth / 20);
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

    // pour pouvoir ajuster la vitesse du matrix lors de l'accélération
    let matrixIntervalDelay = 50;
    let matrixIntervalId = setInterval(drawMatrix, matrixIntervalDelay);

    function restartMatrixInterval() {
      clearInterval(matrixIntervalId);
      matrixIntervalId = setInterval(drawMatrix, matrixIntervalDelay);
    }

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
      document.body.style.cursor = 'none';
      clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => {
        document.body.style.cursor = 'default';
      }, 1000);
    });

    // --------- AJOUTER UN SON AVEC HOWLER.JS ----------
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

    // --------- CURSEUR CRYPTÉ ----------
    const customCursor = document.createElement('div');
    customCursor.id = 'customCursor';
    customCursor.textContent = '0';
    document.body.appendChild(customCursor);

    document.addEventListener('mousemove', (e) => {
      customCursor.style.left = `${e.pageX}px`;
      customCursor.style.top = `${e.pageY}px`;
      customCursor.textContent = Math.random() > 0.5 ? '0' : '1';
    });
  };
  document.head.appendChild(script);
})();
