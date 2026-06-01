//your JS code here. If required.
const sounds = [
  "applause",
  "boo",
  "gasp",
  "tada",
  "victory",
  "wrong"
];

const buttons = document.getElementById("buttons");

let currentAudio = null;

sounds.forEach(sound => {
  const btn = document.createElement("button");

  btn.innerText = sound;
  btn.className = "btn";

  btn.addEventListener("click", () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    currentAudio = new Audio(`sounds/${sound}.mp3`);
    currentAudio.play();
  });

  buttons.appendChild(btn);
});

const stopBtn = document.createElement("button");
stopBtn.innerText = "stop";
stopBtn.className = "stop";

stopBtn.addEventListener("click", () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
});

buttons.appendChild(stopBtn);