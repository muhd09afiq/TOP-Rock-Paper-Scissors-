// begin with a function called getComputerChoice that will
// randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
// 
// GET random number (JScript Math.random() return random number below 1)
//  FROM random number (range of 0 to 0.9999999 > lets turn it to integer 1-10)
//    DETERMINE rock, paper, scissor (rock = 1 to 3 / paper = 4 to 6 / scissor = 7 to 9)
//    PRINT rock/paper/scissor

let randomNumber = () => Math.round((Math.random()) * 10);

let outputResult = () => {
    if (randomNumber() <= 3){
    //    console.log('rock');
       outputResult = 'rock';
    } else if (randomNumber() <= 6 && randomNumber() > 3) {
    //    console.log('paper');
    outputResult = 'paper';
    } else {
        // console.log('scissor');
        outputResult = 'scissor';    
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

let playerinput = prompt('Choose rock, paper or scissor');
if (playerinput === 'rock'){
    outputResult();
    if (outputResult === "rock"){
        console.log("Draw");
    } else if (outputResult === "paper"){
        console.log("You lose");
    } else if (outputResult === "scissor"){
        console.log("You win");
    }
}
// outputResult();

// if (playerinput === 'rock' && ){
    // default:

    //     console.log('rock paper scissor input only');

// }

// if (playerinput === 'rock'){
//     if (outputResult() === "rock"){
//         console.log("Draw");
//     } else if (outputResult() === "paper"){
//         console.log("You lose");
//     } else if (outputResult() === "scissor"){
//         console.log("You win");
//     }
// }


// if (playerinput === 'paper'){
// switch(playerinput ==='paper'){
//     case outputResult === 'rock':
//         console.log('You win');
//         break;
//     case outputResult === 'paper':
//         console.log('Draw');
//         break;
//     case outputResult === 'scissor':
//         console.log('You lose');
//         break;
// }
// }

// if (playerinput === 'scissor'){
// switch(playerinput ==='scissor'){
//     case outputResult === 'rock':
//         console.log('You lose');
//         break;
//     case outputResult === 'paper':
//         console.log('You win');
//         break;
//     case outputResult === 'scissor':
//         console.log('Draw');
//         break;
// }
// }