const countdownEl = document.getElementById("countdown");
let timeLeft = 600; // 10 minutes

function updateCountdown() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  countdownEl.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  if (timeLeft > 0) {
    timeLeft--;
    setTimeout(updateCountdown, 1000);
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
  "[#] Connecting to target system...",
  "[#] Gaining access...",
  "[#] Elevating privileges...",
  "[#] Encrypting files in C:/...",
  "[#] Encrypting files in D:/...",
  "[#] Uploading encryption keys...",
  "[#] Locking screen...",
  "[#] All files have been encrypted.",
  "[#] Awaiting payment...",
  "[#] Monitoring keyboard activity...",
  "[#] Injecting persistence module...",
  "[#] System override complete.",
  "[#] Tracing external connections...",
];

let index = 0;
function typeTerminalLine() {
  if (index >= messages.length) index = 0;
  const line = document.createElement("div");
  line.textContent = messages[index++];
  terminal.appendChild(line);
  terminal.scrollTop = terminal.scrollHeight;
  setTimeout(typeTerminalLine, 1500);
}

typeTerminalLine();
