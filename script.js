let randomNumber = () => Math.round(Math.random() * 10);
let cpuChoice;

function outputResult() {
  if (randomNumber() <= 3) {
    cpuChoice = "rock";
  } else if (randomNumber() <= 6 && randomNumber() > 3) {
    cpuChoice = "paper";
  } else {
    cpuChoice = "scissor";
  }
}

let playerinput;

let playerScore = 0;
let cpuScore = 0;
let draw = 0;

function playRound() {
  playerinput = prompt("Choose rock, paper or scissor").toLowerCase();
  if (playerinput === "rock") {
    outputResult();
    console.log("CPU choice is: " + cpuChoice);
    if (cpuChoice === "rock") {
      console.log("Draw");
    } else if (cpuChoice === "paper") {
      ++cpuScore;
      console.log("You lose");
    } else if (cpuChoice === "scissor") {
      ++playerScore;
      console.log("You win");
    }
  } else if (playerinput === "paper") {
    outputResult();
    console.log("CPU choice is: " + cpuChoice);
    if (cpuChoice === "rock") {
      ++playerScore;
      console.log("You win");
    } else if (cpuChoice === "paper") {
      console.log("Draw");
    } else if (cpuChoice === "scissor") {
      ++cpuScore;
      console.log("You lose");
    }
  } else if (playerinput === "scissor") {
    outputResult();
    console.log("CPU choice is: " + cpuChoice);
    if (cpuChoice === "rock") {
      ++cpuScore;
      console.log("You lose");
    } else if (cpuChoice === "paper") {
      ++playerScore;
      console.log("You win");
    } else if (cpuChoice === "scissor") {
      console.log("Draw");
    }
  } else {
    console.log("wrong input");
  }
  console.log("Your choice is: " + playerinput);
}

function score() {
  if (playerScore > cpuScore) {
    console.log(
      "You win the game with a score of " + playerScore + " out of 5"
    );
  } else {
    console.log(
      "You lose the game with a score of " + playerScore + " out of 5"
    );
  }
}
//game();
//score();

function game() {
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
}

let rock = document.createElement("button");
let paper = document.createElement("button");
let scissor = document.createElement("button");

rock.textContent = "Rock";
paper.textContent = "Paper";
scissor.textContent = "Scissor";

document.body.appendChild(rock);
document.body.appendChild(paper);
document.body.appendChild(scissor);

let roundNumber = 0;

rock.addEventListener("click", () => {
  ++roundNumber;
  outputResult();
  if (cpuChoice === "rock") {
    ++draw;
    result.textContent = "Draw";
  } else if (cpuChoice === "paper") {
    ++cpuScore;
    result.textContent = "You lose";
  } else if (cpuChoice === "scissor") {
    ++playerScore;
    result.textContent = "You win";
  }
  displayPlayerScore.textContent = "Your score:\n" + playerScore;
  displayCpuScore.textContent = "CPU score:\n" + cpuScore;
  displayDraw.textContent = "Draw:\n" + draw;
  displayRound.textContent = "Round Number:\n" + roundNumber;
});

paper.addEventListener("click", () => {
  ++roundNumber;
  outputResult();
  if (cpuChoice === "rock") {
    ++playerScore;
    result.textContent = "You win";
  } else if (cpuChoice === "paper") {
    ++draw;
    result.textContent = "Draw";
  } else if (cpuChoice === "scissor") {
    ++cpuScore;
    result.textContent = "You lose";
  }
  displayPlayerScore.textContent = "Your score:\n" + playerScore;
  displayCpuScore.textContent = "CPU score:\n" + cpuScore;
  displayDraw.textContent = "Draw:\n" + draw;
  displayRound.textContent = "Round Number:\n" + roundNumber;
});

scissor.addEventListener("click", () => {
  ++roundNumber;
  outputResult();
  if (cpuChoice === "rock") {
    ++cpuScore;
    result.textContent = "You lose";
  } else if (cpuChoice === "paper") {
    ++playerScore;
    result.textContent = "You win";
  } else if (cpuChoice === "scissor") {
    ++draw;
    result.textContent = "Draw";
  }
  displayPlayerScore.textContent = "Your score:\n" + playerScore;
  displayCpuScore.textContent = "CPU score:\n" + cpuScore;
  displayDraw.textContent = "Draw:\n" + draw;
  displayRound.textContent = "Round Number:\n" + roundNumber;
});

let result = document.createElement("h3");
document.body.appendChild(result);

let displayPlayerScore = document.createElement("div");
document.body.appendChild(displayPlayerScore);

let displayCpuScore = document.createElement("div");
document.body.appendChild(displayCpuScore);

let displayDraw = document.createElement("div");
document.body.appendChild(displayDraw);

let displayRound = document.createElement("div");
document.body.appendChild(displayRound);
