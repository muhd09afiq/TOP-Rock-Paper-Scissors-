let randomNumber = () => Math.round((Math.random()) * 10);
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

let playerinput;

let playerScore = 0;
let cpuScore = 0;

function playRound(){
playerinput = (prompt('Choose rock, paper or scissor')).toLowerCase();
if (playerinput === 'rock'){  
    outputResult();
    console.log('CPU choice is: ' + cpuChoice);
    if (cpuChoice === "rock"){
        console.log("Draw");
    } else if (cpuChoice === "paper"){
        ++cpuScore;
        console.log("You lose");
    } else if (cpuChoice === "scissor"){
        ++playerScore;
        console.log("You win");
    }
} else if (playerinput === 'paper'){
    outputResult();
    console.log('CPU choice is: ' + cpuChoice);
    if (cpuChoice === "rock"){
        ++playerScore;
        console.log("You win");
    } else if (cpuChoice === "paper"){
        console.log("Draw");
    } else if (cpuChoice === "scissor"){
        ++cpuScore;
        console.log("You lose");
    }
} else if (playerinput === 'scissor'){
    outputResult();
    console.log('CPU choice is: ' + cpuChoice);
    if (cpuChoice === "rock"){
        ++cpuScore;
        console.log("You lose");
    } else if (cpuChoice === "paper"){
        ++playerScore;
        console.log("You win");
    } else if (cpuChoice === "scissor"){
        console.log("Draw");
    }
} else {
    console.log('wrong input');
};
console.log('Your choice is: ' + playerinput);
}

function score(){
    if (playerScore > cpuScore){
        console.log('You win the game with a score of ' + playerScore + ' out of 5')
    } else {
        console.log('You lose the game with a score of ' + playerScore + ' out of 5')
    }   
}
//game();
//score();

function game(){
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
}

let rock = document.createElement('button');
let paper = document.createElement('button');
let scissor = document.createElement('button');

rock.textContent = 'Rock';
paper.textContent = 'Paper';
scissor.textContent = 'Scissor';

document.body.appendChild(rock);
document.body.appendChild(paper);
document.body.appendChild(scissor);

rock.addEventListener('click', () => {
    outputResult();
    console.log('CPU choice is: ' + cpuChoice);
    if (cpuChoice === "rock"){
        console.log("Draw");
    } else if (cpuChoice === "paper"){
        ++cpuScore;
        console.log("You lose");
    } else if (cpuChoice === "scissor"){
        ++playerScore;
        console.log("You win");
    }
});