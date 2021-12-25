"use strict";

let playerBalls = 5;
let computerBalls = 5;
let compEvenOdd;

function playGame() {

    function play() {

        let playerStep = parseInt(prompt(`Загадай число от 1 до ${playerBalls}`));
        console.log(playerStep);

        let compEvenOdd = Math.floor((Math.random() * 1) + 0.5);
        console.log(compEvenOdd);

        if (playerStep % 2 === 0 && compEvenOdd % 2 === 0) {
            computerBalls += playerStep;
            playerBalls -= playerStep;
        } else {
            playerBalls += playerStep;
            computerBalls -= playerStep;
        }
    }
    console.log(computerBalls);
    console.log(playerBalls);
    play();
};

playGame();