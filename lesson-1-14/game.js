"use strict";

let compCountBalls = 5;
let playerCountBalls = 5;

let guessCompBalls;
let compEvenOdd;
let BotWishBalls;

function randomCompBall(max) {
    return Math.round(Math.random() * (max - 1) + 1);
}

function compGuess() {
    guessCompBalls = randomCompBall(compCountBalls);
    compEvenOdd = Math.round(Math.random() * 1);
}

function checkEven(num) {
    return num % 2 === 0 ? "четное" : "нечетное";
}

function playGame() {

    function playerPlay() {
        compGuess();
        let playerStep = parseInt(prompt(`Сколько шариков загадываете от 1 до ${playerCountBalls} ?`));

        if (playerStep % 2 === 0 && compEvenOdd === 0 || playerStep % 2 != 0 && compEvenOdd === 1) {
            compCountBalls += playerStep;
            playerCountBalls -= playerStep;


            if (playerCountBalls <= 0) {
                alert("Игра окончена игрок проиграл");
                return;
            }

            confirm(`Бот выбрал ${checkEven(compEvenOdd)}:
            бот: ${compCountBalls};
            игрок: ${playerCountBalls};`);

        } else if (playerStep % 2 === 0 && compEvenOdd === 1 ||
            playerStep % 2 != 0 && compEvenOdd === 0) {
            compCountBalls -= playerStep;
            playerCountBalls += playerStep;

            if (compCountBalls <= 0) {
                return alert("Игра окончена бот проиграл");
            }

             confirm(`Бот выбрал ${checkEven(compEvenOdd)}:
           бот: ${compCountBalls};
           игрок: ${playerCountBalls};`);
        }
       botPlay();
    }

    function botPlay() {

        BotWishBalls = randomCompBall(compCountBalls);

        let answerPlayer = prompt("Введите четное или нечетное (ч или н) ?");

        if (BotWishBalls % 2 === 0 && answerPlayer === "ч" || BotWishBalls % 2 != 0 && answerPlayer === "н") {
            playerCountBalls += BotWishBalls;
            compCountBalls -= BotWishBalls;

            if (compCountBalls <= 0) {
                return alert("Игра окончена бот проиграл");
            }

            confirm(`Бот загадал ${BotWishBalls}:
            бот: ${compCountBalls};
            игрок: ${playerCountBalls};`);
        } else if (BotWishBalls % 2 === 0 && answerPlayer === "н" || BotWishBalls % 2 != 0 && answerPlayer === "ч") {
            playerCountBalls -= BotWishBalls;
            compCountBalls += BotWishBalls;

            if (playerCountBalls <= 0) {
                return alert("Игра окончена игрок проиграл");
            }

            confirm(`Бот загадал ${BotWishBalls}:
            бот: ${compCountBalls};
            игрок: ${playerCountBalls};`);

        } else {
            return;
        }
        playerPlay();
    }
    botPlay();
}
playGame();