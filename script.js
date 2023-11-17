// begin with a function called getComputerChoice that will
// randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
// 
// GET random number (JScript Math.random() return random number below 1)
//  FROM random number (range of 0 to 0.9999999 > lets turn it to integer 1-10)
//    DETERMINE rock, paper, scissor (rock = 1 to 3 / paper = 4 to 6 / scissor = 7 to 9)
//    PRINT rock/paper/scissor

let randomNumber = Math.round((Math.random()) * 10);
