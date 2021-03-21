let score1 = document.querySelector("#score1");
let score2 = document.querySelector("#score2");
let currentScore1 = document.querySelector("#root1");
let currentScore2 = document.querySelector("#root2");
let roll = document.querySelector("#roll");
let hold = document.querySelector("#hold");
let newGame = document.querySelector("#new");
let image = document.getElementById("image");

let count = 0;
let currentScore = currentScore1;

roll.addEventListener("click", function () {
  let diceImage = "null";
  let rand = Math.trunc(Math.random() * 6 + 1);
  console.log(`rand = ${rand}`);
  switch (rand) {
    case 1:
      diceImage = "./images/dice-1.png";
      count = 0;
      currentScore.textContent = count;
      if (currentScore === currentScore1) {
        currentScore = currentScore2;
      } else {
        currentScore = currentScore1;
      }
      break;
    case 2:
      diceImage = "./images/dice-2.png";
      count += 2;
      break;
    case 3:
      diceImage = "./images/dice-3.png";
      count += 3;
      break;
    case 4:
      diceImage = "./images/dice-4.png";
      count += 4;
      break;
    case 5:
      diceImage = "./images/dice-5.png";
      count += 5;
      break;
    case 6:
      diceImage = "./images/dice-6.png";
      count += 6;
  }
  image.src = diceImage;
  currentScore.textContent = count;
  console.log(`count = ${count}`);
});

hold.addEventListener("click", () => {
  currentScore.textContent = 0;
  if (currentScore === currentScore1) {
    score1.textContent = Number(score1.textContent) + count;
    currentScore = currentScore2;
  } else if (currentScore === currentScore2) {
    score2.textContent = Number(score2.textContent) + count;
    currentScore = currentScore1;
  }
  count = 0;
});

newGame.addEventListener("click", () => {
  count = 0;
  score1.textContent = 0;
  score2.textContent = 0;
  currentScore = currentScore1;
});
