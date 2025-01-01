function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

function getHumanChoice() {
    const choice = prompt("Please enter rock, paper, or scissors:").toLowerCase();
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
      return choice;
    } else {
      console.log("Invalid choice. Please enter rock, paper, or scissors.");
      return getHumanChoice();
    }
  }
  
console.log(getComputerChoice());
console.log(getHumanChoice());
