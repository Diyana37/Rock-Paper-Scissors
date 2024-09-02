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
  printCurrentChoice();

  if (computerChoice === "Rock") {
    if (humanChoice === "Scissors") {
      computerPoints++;
      printCurrentScore("YOU LOSE!", "background-lose", "text-danger");
    } else if (humanChoice === "Paper") {
      humanPoints++;
      printCurrentScore("YOU WIN!", "background-win", "text-success");
    } else {
      printCurrentScore("TIE!", "background-tie", "text-info");
    }
  } else if (computerChoice === "Scissors") {
    if (humanChoice === "Rock") {
      humanPoints++;
      printCurrentScore("YOU WIN!", "background-win", "text-success");
    } else if (humanChoice === "Paper") {
      computerPoints++;
      printCurrentScore("YOU LOSE!", "background-lose", "text-danger");
    } else {
      printCurrentScore("TIE!", "background-tie", "text-info");
    }
  } else {
    if (humanChoice === "Rock") {
      computerPoints++;
      printCurrentScore("YOU LOSE!", "background-lose", "text-danger");
    } else if (humanChoice === "Scissors") {
      humanPoints++;
      printCurrentScore("YOU WIN!", "background-win", "text-success");
    } else {
      printCurrentScore("TIE!", "background-tie", "text-info");
    }
  }

  resetGame();
}

readHumanData();

function printCurrentScore(message, containerClassName, textClassName) {
  let container = document.querySelector(".current-text-container");
  let containerClasses = [
    "background-lose",
    "background-win",
    "background-tie",
  ];
  let textClasses = ["text-danger", "text-success", "text-info"];

  cleanUpClassNames(container, containerClasses);
  container.classList.add(containerClassName);

  let text = document.querySelector(".current-text");
  cleanUpClassNames(text, textClasses);
  text.classList.add(textClassName);
  text.textContent = message;

  let humanSpan = document.querySelector(".initial-score-human");
  humanSpan.textContent = `${humanPoints}`;

  let computerSpan = document.querySelector(".initial-score-computer");
  computerSpan.textContent = `${computerPoints}`;
}

function printCurrentChoice() {
  let currentHumanChoice = document.querySelector(".current-human-choice");
  currentHumanChoice.textContent = humanChoice.toUpperCase();

  let currentComputerChoice = document.querySelector(
    ".current-computer-choice"
  );
  currentComputerChoice.textContent = computerChoice.toUpperCase();
}

function cleanUpClassNames(container, classArray) {
  for (let i = 0; i < classArray.length; i++) {
    const element = classArray[i];
    container.classList.remove(element);
  }
}

function resetGame() {
  let modal = document.querySelector(".end-game-modal");
  let endGameModal = new bootstrap.Modal(modal);

  const playAgainButton = document.querySelector(".play-again-button");
  
  playAgainButton.addEventListener("click", function (e) {
    location.reload();
    endGameModal.hide();
  });

  if (humanPoints === 5) {
    endGameModal.show();

    let text = document.querySelector(".modal-text");
    text.textContent = `Human wins! ${humanPoints}-${computerPoints}`;

    humanPoints = 0;
    computerPoints = 0;

    return;
  }

  if (computerPoints === 5) {
    endGameModal.show();

    let text = document.querySelector(".modal-text");
    text.textContent = `Computer wins! ${computerPoints}-${humanPoints}`;

    humanPoints = 0;
    computerPoints = 0;

    return;
  }
}
