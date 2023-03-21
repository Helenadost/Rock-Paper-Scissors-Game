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

});