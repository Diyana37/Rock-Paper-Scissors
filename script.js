function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function randomComputerChoice() {
  let computerChoice = getRandomInt(3);

  if (computerChoice === 0) {
    return "Rock";
  } else if (computerChoice === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

let humanChoice = "";
let computerChoice = "";

function readHumanData() {
  const rockButton = document.querySelector(".rock-button");
  rockButton.addEventListener("click", function (e) {
    humanChoice = "Rock";
    computerChoice = randomComputerChoice();

    singleRound(humanChoice, computerChoice);
  });

  const paperButton = document.querySelector(".paper-button");
  paperButton.addEventListener("click", function (e) {
    humanChoice = "Paper";
    computerChoice = randomComputerChoice();

    singleRound(humanChoice, computerChoice);
  });

  const scissorsButton = document.querySelector(".scissors-button");
  scissorsButton.addEventListener("click", function (e) {
    humanChoice = "Scissors";
    computerChoice = randomComputerChoice();

    singleRound(humanChoice, computerChoice);
  });
}

let computerPoints = 0;
let humanPoints = 0;

function singleRound(humanChoice, computerChoice) {
  if (computerChoice === "Rock") {
    if (humanChoice === "Scissors") {
      computerPoints++;
      printCurrentScore("Computer wins this round!");
    } else if (humanChoice === "Paper") {
      humanPoints++;
      printCurrentScore("Human wins this round!");
    } else {
      printCurrentScore("Tie!");
    }
  } else if (computerChoice === "Scissors") {
    if (humanChoice === "Rock") {
      humanPoints++;
      printCurrentScore("Human wins this round!");
    } else if (humanChoice === "Paper") {
      computerPoints++;
      printCurrentScore("Computer wins this round!");
    } else {
      printCurrentScore("Tie!");
    }
  } else {
    if (humanChoice === "Rock") {
      computerPoints++;
      printCurrentScore("Computer wins this round!");
    } else if (humanChoice === "Scissors") {
      humanPoints++;
      printCurrentScore("Human wins this round!");
    } else {
      printCurrentScore("Tie!");
    }
  }
  
  resetGame();
}

readHumanData();

function printCurrentScore(message) {
  let text = document.querySelector(".current-text");
  text.textContent = message;

  let humanP = document.querySelector(".human-score-label");
  humanP.textContent = `Human points: ${humanPoints}`;

  let computerP = document.querySelector(".computer-score-label");
  computerP.textContent = `Computer points: ${computerPoints}`;
}

function resetGame() {
  if (humanPoints === 5) {
    let text = document.querySelector(".current-text");
    text.textContent = `Human wins! ${humanPoints}-${computerPoints}`;
    humanPoints = 0;
    computerPoints = 0;
    return;
  }

  if (computerPoints === 5) {
    let text = document.querySelector(".current-text");
    text.textContent = `Computer wins! ${computerPoints}-${humanPoints}`;
    humanPoints = 0;
    computerPoints = 0;
    return;
  }
};