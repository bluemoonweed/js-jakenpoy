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
  
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
      console.log(`It's a tie! Both chose ${humanChoice}`);
      return 'tie';
    } else if (
      (humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'paper' && computerChoice === 'rock') ||
      (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      return 'human';
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      return 'computer';
    }
  }
  
  function playGame() {
    let humanScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      const humanChoice = getHumanChoice();
      const computerChoice = getComputerChoice();
      const roundWinner = playRound(humanChoice, computerChoice);
  
      if (roundWinner === 'human') {
        humanScore++;
      } else if (roundWinner === 'computer') {
        computerScore++;
      }
  
      console.log(`Round ${i + 1} winner: ${roundWinner}`);
      console.log(`Round ${i + 1} Scores: Human - ${humanScore}, Computer - ${computerScore}`);
    }
  
    if (humanScore > computerScore) {
      console.log(`You win the game! Final Score: Human - ${humanScore}, Computer - ${computerScore}`);
    } else if (computerScore > humanScore) {
      console.log(`You lose the game! Final Score: Human - ${humanScore}, Computer - ${computerScore}`);
    } else {
      console.log(`The game is a tie! Final Score: Human - ${humanScore}, Computer - ${computerScore}`);
    }
  }
  
  playGame();