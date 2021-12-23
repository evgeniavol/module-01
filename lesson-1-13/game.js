"use strict";

(() => {
    const FIGURES_ENG = ['rock', 'scissors', 'paper'];
    const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

    const getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * max + min);
    };

    const getFigure = lang => {

    };


    const game = () => {

       let playerChoice = prompt('камень, ножницы, бумага?');
        let userPoints = 0;
        let computerPoints = 0;


        if (playerChoice) {
            let playerOne = playerChoice.trim().toLowerCase();

            if (playerOne === 'камень' ||
                playerOne === 'ножницы' ||
                playerOne === 'бумага'
            ) {
                let computerChoice = getRandomIntInclusive(1, 3);
                let computer = computerChoice === 1 ? 'камень' : computerChoice === 2 ? 'бумага' : 'ножницы';

                if (playerOne === computer) {
                    userPoints++;
                    computerPoints++;
                    alert('Ничья');
                } else if (playerOne === 'камень') {
                    if (computer === 'бумага') {
                        alert('Компьютер выиграл!');
                        computerPoints++;
                    } else {
                        userPoints++;
                        alert('Вы выиграли!');
                    }
                } else if (playerOne === 'ножницы') {
                    if (computer === 'камень') {
                        computerPoints++;
                        alert('Компьютер выиграл!');
                    } else {
                        userPoints++;
                        alert('Вы выиграли!');
                    }
                } else if (playerOne === 'бумага') {
                    if (computer === 'ножницы') {
                        alert('Компьютер выиграл!');
                        computerPoints++;
                    } else {
                        userPoints++;
                        alert('Вы выиграли!');
                    }
                }
            } else {
                alert("Вы не ввели камень, ножницы, бумага.");
            }

        } else {
            alert('Точно ли хочешь покинуть игру?');
            alert(`Результат:\nИгрок набрал: ${userPoints} очк.\nКомпьютер набрал: ${computerPoints} очк.`);
        }
    };
    window.RPS = game;

})();