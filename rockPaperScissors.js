const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error!');
  }
};

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
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
 if (userChoice === computerChoice) {
   return 'tie';
 } else if (userChoice === 'rock' && computerChoice === 'scissors') {
  return 'User Wins!';
 } else if (userChoice === 'paper' && computerChoice === 'rock') {
   return 'User Wins!';
 } else if (userChoice === 'scissors' && computerChoice === 'paper') {
   return 'User Wins!';
 } else if (userChoice === 'bomb') {
   return 'User is the ultimate winner and is greatest player of all time!!!'
 }else {
   return 'Computer Wins!';
 }
}

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You choose ' + userChoice);
  console.log('The computer chooses ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
