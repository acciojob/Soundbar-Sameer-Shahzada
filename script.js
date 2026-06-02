const sounds = [
  "applause",
  "boo",
  "gasp",
  "tada",
  "victory",
  "wrong"
];

const buttons = document.getElementById("buttons");

// Create audio elements
sounds.forEach(sound => {
  const audio = document.createElement("audio");
  audio.src = `sounds/${sound}.mp3`;
  audio.id = sound;
  document.body.appendChild(audio);

  const btn = document.createElement("button");
  btn.className = "btn";
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSongs();
    audio.play();
  });

  buttons.appendChild(btn);
});

// Stop button
const stopBtn = document.createElement("button");
stopBtn.className = "stop";
stopBtn.innerText = "stop";

stopBtn.addEventListener("click", stopSongs);

buttons.appendChild(stopBtn);

function stopSongs() {
  sounds.forEach(sound => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}