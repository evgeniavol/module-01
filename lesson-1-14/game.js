"use strict";

let compCountBalls = 5;
let playerCountBalls = 5;

let guessCompBalls;
let compEvenOdd;
let numBot;


function randomCompBall(max) {
    return Math.round(Math.random() * (max - 1) + 1)
}

function compGuess() {
    guessCompBalls = randomCompBall(compCountBalls);
    compEvenOdd = Math.round((Math.random() * 1));
}

function checkEven(num) {
    return (num % 2 === 0) ? 'четное' : 'нечетное';
}

function playGame() {
    function play() {
        compGuess();
        let playerStep = parseInt(prompt('Сколько шариков загадываете ?'));
        if (playerStep % 2 === 0 && compEvenOdd === 0) {
            compCountBalls += playerStep;
            playerCountBalls -= playerStep;

            if (playerCountBalls < 0) {
                alert('Игра окончена игрок проиграл');
                return;
            }
            confirm(`Бот выбрал ${checkEven(compEvenOdd)}:
                бот: ${compCountBalls};
                игрок: ${playerCountBalls};`);
            alert('Ход бота');

            numBot = guessCompBalls;

            let answerPlayer = prompt('Введите четное или нечетное (ч или н) ?');

            if (checkEven(numBot) === 'четное' && answerPlayer === 'ч') {
                compCountBalls -= numBot;
                playerCountBalls += numBot;

                if (compCountBalls < 0) {
                    alert('Игра окончена бот проиграл');
                    return;
                }

                confirm(`Бот загадал ${numBot}:
                    бот: ${compCountBalls};
                    игрок: ${playerCountBalls};`);
                alert('Ход игрока');

            } else {
                compCountBalls += numBot;
                playerCountBalls -= numBot;

                if (playerCountBalls < 0) {
                    alert('Игра окончена игрок проиграл');
                    return;
                }

                confirm(`Бот загадал ${numBot}:
                    бот: ${compCountBalls};
                    игрок: ${playerCountBalls};`);
                alert('Ход бота');
                play();

            }
        } else {
            compCountBalls -= playerStep;
            playerCountBalls += playerStep;

            if (compCountBalls < 0) {
                alert('Игра окончена бот проиграл');
                return;
            }

            if (confirm(`Бот выбрал ${compEvenOdd}:
            бот: ${compCountBalls};
            игрок: ${playerCountBalls};`)) {
                alert
            };
            alert('Ход игрока');
            play();
        }
    }
    play();
}
playGame();