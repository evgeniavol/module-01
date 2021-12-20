"use strict";

(() => {
    const FIGURES_ENG = ['rock', 'scissors', 'paper'];
    const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

    const getRandomIntInclusive = (min, max) => {

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
                let computerChoice = Math.floor(Math.random() * 3 + 1);
                let computer = computerChoice === 1 ? 'камень' : computerChoice === 2 ? 'бумага' : 'ножницы';
                if (playerOne === computer) {
                    alert('Ничья');
                    userPoints++;
                    computerPoints++;
                    alert('Ещё?');
                } else if (playerOne === 'камень' && computer === 'бумага') {
                    alert(`Игрок: ${playerOne}\nКомпьютер: ${computer}
            \nВыиграл компьютер!`);
                    computerPoints++;
                    alert('Ещё?');
                } else if (playerOne === 'бумага' && computer === 'ножницы') {
                    alert(`Игрок: ${playerOne}\nКомпьютер: ${computer}
            \nВыиграл компьютер!`);
                    computerPoints++;
                    alert('Ещё?');

                } else if (playerOne === 'ножницы' && computer === 'камень') {
                    alert(`Игрок: ${playerOne}\nКомпьютер: ${computer}\nВы выиграли!`);
                    userPoints++;
                    alert('Ещё?');
                }
            } else {
                alert("Вы не ввели камень, ножницы, бумага.");
            }
            game(playerChoice);
        } else {
            alert('Точно ли хочешь покинуть игру?');
            alert(`Результат:\nИгрок набрал: ${userPoints} очк.\nКомпьютер набрал: ${computerPoints} очк.`);
        }
    };
    window.RPS = game;

})();