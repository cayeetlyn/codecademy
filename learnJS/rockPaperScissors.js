const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
  
    if (userInput == 'rock' || userInput == 'paper' || userInput == 'scissors' || userInput == 'bomb'){
      return userInput;
    } else {
      console.log("Error: Invalid input.")
    }
  
  }
  
  const getComputerChoice = () => {
    var randomNumber = Math.floor(Math.random() * 3);
  
    switch (randomNumber) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice == computerChoice){
      return "It's a tie!";
    } else if (userChoice == 'rock'){
      if (computerChoice == 'paper'){
        return "Computer wins. Try again!";
      } else {
        return "You win!";
      }
    } else if (userChoice == 'paper') {
      if (computerChoice == 'scissors') {
        return "Computer wins. Try again!"
      } else {
        return "You win!";
      }
    } else if (userChoice == 'scissors'){
      if (computerChoice == 'rock'){
        return "Computer wins. Try again!";
      } else {
        return "You win!";
      }
    } else if (userChoice == 'bomb'){
      return "You win!";
    }
  }
  
  const playGame = (userInput) => {
    var userChoice = getUserChoice(userInput);
    console.log(`You chose ${userChoice}.`);
    var computerChoice = getComputerChoice();
    console.log(`The computer chose ${computerChoice}.`);
    console.log(determineWinner(userChoice, computerChoice) + "\n");
  }
  
  playGame('rock');
  playGame('paper');
  playGame('scissors');
  playGame('bomb');