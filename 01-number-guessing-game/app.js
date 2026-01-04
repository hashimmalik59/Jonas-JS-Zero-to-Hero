// Accesing elements
const container = document.querySelector(".container");
const userInput = document.querySelector("input");
const userButton = document.querySelector(".game-progress  button");
const randomNumber = Math.floor(Math.random() * 5) + 1;
const correctNumber = document.querySelector(".game-score");
const numberMessage = document.querySelector(".main p");
let score = 20;
let highscore = 0;
const userScore = document.querySelector(".user-score");
let userHighscore = document.querySelector(".user-highscore");
const resetButton = document.querySelector(".header button");

console.log(randomNumber);

// Adding Logic
userButton.addEventListener("click", () => {
    if (+userInput.value === randomNumber) {
        if (score > highscore) {
            highscore = score;
            userHighscore.textContent = `Highscore: ${score}`;
        }
        container.style.backgroundColor = "green";
        numberMessage.textContent = "Correct Number!";
        correctNumber.textContent = randomNumber;
    } else {
        score--;
        userScore.textContent = `Score: ${score}`;
        container.style.backgroundColor = "#000";
        if (score < 1) {
            userScore.style.color = "red";
            userScore.style.fontWeight = "900";
            userScore.textContent = "Game Over!";
            userButton.style.backgroundColor = "red";
            userButton.style.color = "#fff";
        }
        else if (userInput.value === "") {
            userInput.style.border = "3px solid red";
            numberMessage.style.color = "red"
            numberMessage.textContent = "Enter your number";
        }
        else if (userInput.value > randomNumber) {
            numberMessage.textContent = "Too High";
        } else {
            numberMessage.textContent = "Too Low";
        }
        if (userScore > userHighscore) {
            userHighscore = userScore;
        }
    }
});

resetButton.addEventListener("click", () => {
    container.style.backgroundColor = "#000";
    correctNumber.textContent = "?";
    userInput.value = "";
    userButton.style.backgroundColor = "#fff";
    numberMessage.textContent = "Start Guessing...";
    score = 20;
    userScore.textContent = "Score: 20";
});