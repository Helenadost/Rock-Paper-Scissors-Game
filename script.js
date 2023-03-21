'use strict';
document.addEventListener('DOMContentLoaded', () => {
    //Initial References
    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper');
    const scissors = document.getElementById('scissors');
    const playerOptions = [rock, scissors, paper];
    const resultPlayer = document.getElementById('player_result');
    const resultPc = document.getElementById('pc_result');
    const roundWinner = document.querySelector('.roundWinner');
    const gameWinner = document.querySelector('.gameWinner');
    const playerScoreBoard = document.getElementById('p-count');
    const computerScoreBoard = document.getElementById('c-count');
    const movesLeft = document.getElementById('moves_left');
    const caption = document.querySelector('.caption')
    const restart = document.getElementById('restartButton');
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
    let countMove = true;
    // Generate a random number for computer
    let pcChoice = Math.trunc(Math.random() * 3) + 1;

    // Set the src property of the resultPlayer element based on the index of the clicked option, and execute all functions
    playerOptions.forEach(function (playerOption, index) {
        playerOption.addEventListener('click', function () {
            resultPlayer.src = `img/${index + 1}.png`;
            elementsDisplay();
            displayRandomPcChoice();
            checkResult();
            movesCounting();
        });
    });

    // assign a random number to a resultPc source
    function displayRandomPcChoice() {
        resultPc.src = `img/${pcChoice}.png`;
    };

    // check the choice of player and computer and decide who won the round
    function checkResult() {
        let playerChoice = parseInt(resultPlayer.src.split("/").pop().split(".")[0]);
        if (playerChoice === 1 && pcChoice === 3 || playerChoice === 2 && pcChoice === 1 || playerChoice === 3 && pcChoice === 2) {
            roundWinner.textContent = 'You Win!';
            updatePlayer();
        } else if (playerChoice === pcChoice) {
            roundWinner.textContent = `It's a DRAW!`;
            countMove = false;
        } else {
            roundWinner.textContent = 'Computer Win!';
            updateComputer();
        }
    };

    // increase a computer score of 1 and display it 
    function updateComputer() {
        computerScore = computerScore + 1;
        computerScoreBoard.textContent = `${computerScore}`;
    };

    // increase a player score of 1 and display it 
    function updatePlayer() {
        playerScore = playerScore + 1;
        playerScoreBoard.textContent = `${playerScore}`;
    };

    // display roundWinner text and restart button
    function elementsDisplay() {
        roundWinner.style.display = 'block';
        restart.style.display = 'inline';
    };

    // check if we can count moves or if its a draw
    function movesCounting() {
        if (countMove) {
            moves++;
        } else {
            countMove = true;
        }
        // if moves value is over 10 gameOver function is executed
        movesLeft.innerText = `${10 - moves}`;
        if (moves >= 10) {
            gameOver();
        } else {
            pcChoice = Math.trunc(Math.random() * 3) + 1;
        }
    };

    // setting for elements when game is over
    function gameOver() {
        movesLeft.innerText = `0`;
        caption.innerText = 'Game Over!';
        playerOptions.forEach(option => {
            option.disabled = true;
        });
        // check the score of player and computer and decide who won the game
        gameWinner.style.display = 'block';
        if (playerScore > computerScore) {
            gameWinner.textContent = `YOU are a Winner! 🎉`;
        } else if (playerScore < computerScore) {
            gameWinner.textContent = `COMPUTER is a Winner! 👎`;
        } else {
            gameWinner.textContent = `It's a DRAW!`;
        }
    };

    // After clicking the restart button, set the elements to their default values
    restart.onclick = function () {
        computerScore = 0;
        playerScore = 0;
        moves = 0;
        computerScoreBoard.textContent = `${computerScore}`;
        playerScoreBoard.textContent = `${playerScore}`;
        movesLeft.innerText = `${10 - moves}`;
        resultPc.src = `img/${5}.png`;
        resultPlayer.src = `img/${4}.png`;
        roundWinner.style.display = 'none';
        gameWinner.style.display = 'none';
        restart.style.display = 'none';
        caption.innerText = 'Choose an option';
        playerOptions.forEach(option => {
            option.disabled = false;
        });
    };
});



