'use strict';
let body = document.querySelector("body");
let again = document.querySelector(".again");
let number = document.querySelector(".number");
let check = document.querySelector(".check");
let message = document.querySelector(".message");
let score = document.querySelector(".score");
let highscore = document.querySelector(".highscore");
let guess = document.querySelector(".guess");


// Emoji shortcut = Command + control + space

let secretNumber = Math.trunc(Math.random() * 20) + 1;
score = 20;
highscore = 0;

check.addEventListener("click", () => {
    //          NO INPUT
    let guess = Number(document.querySelector(".guess").value);
    if (!guess) {
        message.textContent = "⛔️ No number!";
    }

    //          PLAYER WINS
    else if (guess === secretNumber) {
        message.textContent = "🎉 Correct Number!";
        number.textContent = secretNumber;

        body.style.backgroundColor = "#60b347";
        number.style.width = "30rem";

        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    }

    //          GUESS IS TOO HIGH
    else if (guess > secretNumber) {
        if (score > 1) {
            message.textContent = "📈 Too high";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            message.textContent = "💥 You lost the game!";
            document.querySelector(".score").textContent = 0;
        }
    }

    //          GUESS IS TOO LOW
    else if (guess < secretNumber) {
        if (score > 1) {
            message.textContent = "📉 Too low";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            message.textContent = "💥 You lost the game!";
            document.querySelector(".score").textContent = 0;
        }
    }

});

//          AGAIN BUTTON
again.addEventListener("click", () => {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    let message = document.querySelector(".message");
    let guess = document.querySelector(".guess");
    
    number.textContent = "?";
    guess.value = "";
    message.textContent = "Start guessing...";
    document.querySelector(".score").textContent = 20;
    body.style.backgroundColor = "#222";
    number.style.width = "15rem";
});