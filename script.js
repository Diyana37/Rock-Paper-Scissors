console.log("Hello Stefkooo");

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

function readHumanChoice() {
  let humanChoice = prompt("What's your choice?");

  while (humanChoice !== "Rock" && humanChoice !== "Paper" && humanChoice !== "Scissors") {
    humanChoice = prompt("What's your choice?");
  }
  return humanChoice;
}

let computerPoints = 0;
let humanPoints = 0;
function singleRound() {
  let computerChoice = randomComputerChoice();
  let humanChoice = readHumanChoice();

  if (computerChoice === "Rock") {
    if (humanChoice === "Scissors") {
      computerPoints++;
      console.log("Computer wins this round!");
    } else if (humanChoice === "Paper") {
      humanPoints++;
      console.log("Human wins this round!");
    }
  } else if (computerChoice === "Scissors") {
    if (humanChoice === "Rock") {
      humanPoints++;
      console.log("Human wins this round!");
    } else if (humanChoice === "Paper") {
      computerPoints++;
      console.log("Computer wins this round!");
    }
  } else {
    if (humanChoice === "Rock") {
      computerPoints++;
      console.log("Computer wins this round!");
    } else if (humanChoice === "Scissors") {
      humanPoints++;
      console.log("Human wins this round!");
    }
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    singleRound();
  }

  if (computerPoints < humanPoints) {
    console.log(`Human wins! ${humanPoints}-${computerPoints}`);
  } else if (computerPoints > humanPoints) {
    console.log(`Computer wins! ${humanPoints}-${computerPoints}`);
  } else {
    console.log(`Tie! No one wins. ${humanPoints}-${computerPoints}`);
  }
}

playGame();
