const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const message = document.getElementById("message");

const wrongSound = document.getElementById("wrongSound");
const correctSound = document.getElementById("correctSound");

let noClickCount = 0;
let yesSize = 18;

noBtn.addEventListener("click", () => {
  noClickCount++;

  wrongSound.currentTime = 0;
  wrongSound.play();

  const x = Math.random() * 300 - 150;
  const y = Math.random() * 300 - 150;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  yesSize += 10;
  yesBtn.style.fontSize = yesSize + "px";
  yesBtn.style.padding = `${yesSize / 2}px`;

  if (noClickCount >= 5) {
    noBtn.style.display = "none";
  }
});

yesBtn.addEventListener("click", () => {
  correctSound.currentTime = 0;
  correctSound.play();

  message.innerText = "Makasih udah mau nerima aku 💖";
  noBtn.style.display = "none";

  confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 }
  });
});
