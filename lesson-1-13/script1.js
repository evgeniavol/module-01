'use strict';


let playerChoice = prompt('камень, ножницы, бумага?');

// let userPoints=0;
// let computerPoints=0;

if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    if (playerOne === 'камень' ||
        playerOne === 'ножницы' ||
        playerOne === 'бумага'
    ) {
        let computerChoice = Math.floor(Math.random() * 3 + 1);
        let computer = computerChoice === 1 ? 'камень' : computerChoice === 2 ? 'бумага' : 'ножницы';
        let result = playerOne === computer ? 'Ничья' :
            playerOne === 'камень' && computer === 'бумага' ?
            `Игрок: ${playerOne}\nКомпьютер: ${computer}
             \nВыиграл компьютер!` :
            playerOne === 'бумага' && computer === 'ножницы' ?
            `Игрок: ${playerOne}\nКомпьютер: ${computer}
              \nВыиграл компьютер!` :
            playerOne === 'ножницы' && computer === 'камень' ?
            `Игрок: ${playerOne}\nКомпьютер: ${computer}
              \nВыиграл компьютер!` :
            `Игрок: ${playerOne}\nКомпьютер: ${computer}\nВы выиграли!`;
        alert(result);
    } else {
        alert("Вы не ввели камень, ножницы, бумага.");
    }
} else {
    alert('Точно ли хочешь покинуть игру?');
} 







