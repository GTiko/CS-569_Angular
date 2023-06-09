[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/GkjVlWBe)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-7f7980b617ed060a017424585567c406b6ee15c891e84e1186181d67ecf80aa0.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=11264116)
# CS569 Homework
Your will build a Rock-Paper-Scissors game with Angular framework, the application has the following components rendered in the following structure:  
* AppComponent (root)
  * ScoreboardComponent
  * ButtonsComponent
  * CheatingComponent
    
### Application Specifications
* The root component contains the application state: `{winCount: number, lossCount: number, tieCount: number, computerChoice: string}` to track number of wins/losses/ties, and the computer choice. 
* Game choices should be declared as `enum`.
* Make the necessary changes so only components that receive new state will be checked and re-rendered.
  
<p align="center">
  <img src="./snapshot.png" />
</p>

Here is something to help you with the game logic:
```javascript
function compare(playerChoice, computerChoice) {

    //Checking for a tie
    if (playerChoice === computerChoice) {
        return "It is a tie";
    }

    //Check for Rock
    if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
            return "Player Wins";
        } else {
            return "Computer Wins";
        }
    }
    //Check for Paper
    if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
            return "Computer Wins";
        } else {
            return "Player Wins";
        }
    }
    //Check for Scissors
    if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            return "Computer Wins";
        } else {
            return "Player Wins";
        }
    }
}
```
