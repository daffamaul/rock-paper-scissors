let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return "rock";
  }

  if (randomNumber === 1) {
    return "paper";
  }

  if (randomNumber === 2) {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Rock/Paper/Scissors: ");
  return choice;
}

function playRound(humanChoice, computerChoice) {
  let status = "";
  if (computerChoice === "rock") {
    if (humanChoice === "rock") {
      status = "Draw! Rock versus Rock";
    }
    if (humanChoice === "paper") {
      humanScore += 1;
      status = "You win! Paper beats Rock";
    }
    if (humanChoice === "scissors") {
      computerScore += 1;
      status = "You lose! Rock beats Scissors";
    }
  }

  if (computerChoice === "paper") {
    if (humanChoice === "rock") {
      computerScore += 1;
      status = "You lose! Paper beats Rock";
    }
    if (humanChoice === "paper") {
      status = "Draw! Paper versus Paper";
    }
    if (humanChoice === "scissors") {
      humanScore += 1;
      status = "You win! Scissors beats Paper";
    }
  }

  if (computerChoice === "scissors") {
    if (humanChoice === "rock") {
      humanScore += 1;
      status = "You win! Rock beats Scissors";
    }
    if (humanChoice === "paper") {
      computerScore += 1;
      status = "You lose! Scissors beats Paper";
    }
    if (humanChoice === "scissors") {
      status = "Draw! Scissors versus Scissors";
    }
  }

  return status;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playGame() {
  console.log(playRound(humanSelection, computerSelection));
  console.log(playRound(humanSelection, computerSelection));
  console.log(playRound(humanSelection, computerSelection));
  console.log(playRound(humanSelection, computerSelection));
  console.log(playRound(humanSelection, computerSelection));

  console.log(humanScore, computerScore);
  if (humanScore > computerScore) {
    console.log("Winner! Your score is ", humanScore);
  } else if (humanScore === computerScore) {
    console.log("Draw!");
  } else {
    console.log("Loser! computer score is ", computerScore);
  }
}

playGame();
