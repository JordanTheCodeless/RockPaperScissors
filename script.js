console.log("hi");
let options = ["rock", "paper", "scissors"];
// This ffunction below takes a random item from the array using math.random
function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}
function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Tie";
  }
  else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
    return "Player"
  }
  else {
    return "Computer";
  }
}

function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);
  if (result == "Tie") {
    return "It's a tie!"
  }
  else if (result == "Player") {
    return `You win ${playerSelection} beats ${computerSelection}`
  }
  else {
    return `You lost ${computerSelection} beats ${playerSelection} `
  }
}
function getPlayerChoice() {
  let validatedInput = false;
  while (validatedInput == false) {
    const choice = prompt("Rock Paper Scissors");
    if (choice == null) {
      continue;
    }
    const choiceInLower = choice.toLowerCase();
    if (options.includes(choiceInLower)) {
      validatedInput = true;
      return choiceInLower;
    }
  }
}


function game() {
  let score = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log("-----------------------")
    if (checkWinner(playerSelection, computerSelection) == "Player") {
      score++;
    }
    else if (checkWinner(playerSelection, computerSelection) == "Computer") {
      computerScore++

    }
  }
  if(score>computerScore){
    console.log("Player is the winner");
  }
  else if (score === computerScore){
    console.log("It is a Tie !")

  }
  else{
    console.log("computer is the winner");
  }

}
game();
// const playerSelection =  "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
