let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  const computerChoice = ["rock", "paper", "scissors"];

  return computerChoice.at(randomNumber);
}

function playRound(humanChoice, computerChoice) {
  let status = "";

  switch (true) {
    case computerChoice === "rock" && humanChoice === "rock":
      status = "Draw! Rock versus Rock";
      break;
    case computerChoice === "rock" && humanChoice === "paper":
      humanScore += 1;
      status = "You win! Paper beats Rock";
      break;
    case computerChoice === "rock" && humanChoice === "scissors":
      computerScore += 1;
      status = "You lose! Rock beats Scissors";
      break;
    case computerChoice === "paper" && humanChoice === "rock":
      computerScore += 1;
      status = "You lose! Paper beats Rock";
      break;
    case computerChoice === "paper" && humanChoice === "paper":
      status = "Draw! Paper versus Paper";
      break;
    case computerChoice === "paper" && humanChoice === "scissors":
      humanScore += 1;
      status = "You win! Scissors beats Paper";
      break;
    case computerChoice === "scissors" && humanChoice === "rock":
      humanScore += 1;
      status = "You win! Rock beats Scissors";
      break;
    case computerChoice === "scissors" && humanChoice === "paper":
      computerScore += 1;
      status = "You lose! Scissors beats Paper";
      break;
    case computerChoice === "scissors" && humanChoice === "scissors":
      status = "Draw! Scissors versus Scissors";
      break;
    default:
      status = "";
      break;
  }

  return status;
}

/** DOM */
const playerSelection = document.querySelector("#playerSelection");
const div = document.createElement("div");
document.body.appendChild(div);

const battleContext = document.createElement("p");
const scoreBoard = document.createElement("p");
const winner = document.createElement("h1");
div.appendChild(winner);
div.appendChild(battleContext);
div.appendChild(scoreBoard);

playerSelection.addEventListener("click", function (e) {
  const humanSelection = e.target.id;
  const computerSelection = getComputerChoice();

  let context;

  switch (humanSelection) {
    case "rock":
      context = playRound("rock", computerSelection);
      break;
    case "paper":
      context = playRound("paper", computerSelection);
      break;
    case "scissors":
      context = playRound("scissors", computerSelection);
      break;
    default:
      context = `${humanSelection} not found`;
      break;
  }

  battleContext.textContent = `${context}`;
  scoreBoard.textContent = `Your score is ${humanScore} | Computer score is ${computerScore}`;
  winner.textContent = "";

  if (computerScore === 5 || humanScore === 5) {
    if (computerScore >= humanScore) {
      winner.textContent = "You lose!";
      computerScore = 0;
      humanScore = 0;
    } else {
      winner.textContent = "You win!";
      computerScore = 0;
      humanScore = 0;
    }
  }
});
