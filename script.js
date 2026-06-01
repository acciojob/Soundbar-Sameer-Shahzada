const sounds = [
  "applause",
  "boo",
  "gasp",
  "tada",
  "victory",
  "wrong"
];

const buttons = document.getElementById("buttons");

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.className = "btn";
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    const audio = document.getElementById(sound);
    audio.currentTime = 0;
    audio.play();
  });

  buttons.appendChild(btn);
});

const stopBtn = document.createElement("button");
stopBtn.className = "stop";
stopBtn.innerText = "stop";

stopBtn.addEventListener("click", () => {
  sounds.forEach((sound) => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
  });
});

buttons.appendChild(stopBtn);