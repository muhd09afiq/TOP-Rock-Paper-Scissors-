// begin with a function called getComputerChoice that will
// randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
// 
// GET random number (JScript Math.random() return random number below 1)
//  FROM random number (range of 0 to 0.9999999 > lets turn it to integer 1-10)
//    DETERMINE rock, paper, scissor (rock = 1 to 3 / paper = 4 to 6 / scissor = 7 to 9)
//    PRINT rock/paper/scissor

let randomNumber = () => Math.round((Math.random()) * 10);

// let outputResult = () => {
//     if (randomNumber() <= 3){
//        outputResult = 'rock';
//     } else if (randomNumber() <= 6 && randomNumber() > 3) {
//     outputResult = 'paper';
//     } else {
//         outputResult = 'scissor';    
//     }
// }

let cpuChoice;

function outputResult(){
    if (randomNumber() <= 3){
        cpuChoice = 'rock';
     } else if (randomNumber() <= 6 && randomNumber() > 3) {
        cpuChoice = 'paper';
     } else {
        cpuChoice = 'scissor';    
     }
}

// Write a function that plays a single round of Rock Paper Scissors
// The function should take two parameters - the playerSelection and computerSelection - 
// and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// 
// GET playerinput (rock/paper/scissor)
// GET computerselection (outputResult() = rock/paper/scissor)
//     CASE playerinput
//          OF rock
//            IF computerselection rock PRINT Draw
//            IF computerselection paper PRINT You lose
//            IF computerselection scissor PRINT You win
//          OF paper
//            IF computerselection rock PRINT You win
//            IF computerselection paper PRINT Draw
//            IF computerselection scissor PRINT You lose
//          OF scissor
//            IF computerselection rock PRINT You lose
//            IF computerselection paper PRINT You win
//            IF computerselection scissor PRINT Draw

let playerinput;
console.log('Your choice is: ' + playerinput);

function playRound(){
playerinput = (prompt('Choose rock, paper or scissor')).toLowerCase();

if (playerinput === 'rock'){  
    outputResult();
    console.log('CPU choice is: ' + cpuChoice);
    if (cpuChoice === "rock"){
        console.log("Draw");
    } else if (cpuChoice === "paper"){
        console.log("You lose");
    } else if (cpuChoice === "scissor"){
        console.log("You win");
    }
} else if (playerinput === 'paper'){
    outputResult();
    console.log('CPU choice is: ' + cpuChoice);
    if (cpuChoice === "rock"){
        console.log("You win");
    } else if (cpuChoice === "paper"){
        console.log("Draw");
    } else if (cpuChoice === "scissor"){
        console.log("You lose");
    }
} else if (playerinput === 'scissor'){
    outputResult();
    console.log('CPU choice is: ' + cpuChoice);
    if (cpuChoice === "rock"){
        console.log("You lose");
    } else if (cpuChoice === "paper"){
        console.log("You win");
        
    } else if (cpuChoice === "scissor"){
        console.log("Draw");
    }
} else {
    console.log('wrong input');
}
}

let scorePlayer = 0;
let scoreCPU = 0;

function score() {
    if (console.log(playRound) === 'You win'){
        console.log(1);
    } else {
        console.log(2);
    }
}

function game(){
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
}


// score();

// function score(){
//     if playRound

// }


// NEW function called game()
// to play a 5 round game that keeps score and reports a winner or loser at the end.
// using console.log() to display the results of each round and the winner at the end.
// 1. play 5 round of playRound
// 2. keep score of each result of playRound
// 3. calculate the winner and show the result
//  FOR playRound
//      INIT score for player
//      INIT score for cpu
//          ADD 1 for each win
//      
//      PRINT winner
//      GET winner
//  REPEAT 5 TIMES
//

function game(){
    playRound();
    let score
    playRound();
    playRound();
    playRound();
    playRound();
}
