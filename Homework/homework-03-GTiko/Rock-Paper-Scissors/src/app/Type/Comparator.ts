export default function compare(playerChoice: string, computerChoice: string) {
  //Checking for a tie
  if (playerChoice === computerChoice) {
    return 'It is a tie';
  }

  //Check for Rock
  if (playerChoice === 'rock') {
    if (computerChoice === 'scissors') {
      return 'Player Wins';
    } else {
      return 'Computer Wins';
    }
  }
  //Check for Paper
  if (playerChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer Wins';
    } else {
      return 'Player Wins';
    }
  }
  //Check for Scissors
  if (playerChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer Wins';
    } else {
      return 'Player Wins';
    }
  }

  return;
}
