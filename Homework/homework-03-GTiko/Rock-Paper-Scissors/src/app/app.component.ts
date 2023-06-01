import { Component } from '@angular/core';
import IResult from './Type/IResult.interface';
import { IGameChoices } from './Type/IGameChoices.enum';

@Component({
  selector: 'app-root',
  template: `
    <h1>Rock Paper Scissor Game</h1>

    <app-scoreboard-component [score]="score" />

    <app-buttons-component
      [computerChoice]="score.computerChoice"
      (changeResult)="changeResult($event)"
    />

    <app-cheating-component [cheatValue]="score.computerChoice" />
  `,
  styles: [],
})
export class AppComponent {
  score: IResult = {
    winCount: 0,
    lossCount: 0,
    tieCount: 0,
    computerChoice: '',
  };

  constructor() {
    this.score.computerChoice = IGameChoices[Math.floor(Math.random() * 3)];
  }

  changeResult(result: string) {
    this.score.computerChoice = IGameChoices[Math.floor(Math.random() * 3)];

    if (result === 'It is a tie') {
      this.score.tieCount = this.score.tieCount + 1;
    }
    if (result === 'Player Wins') {
      this.score.winCount = this.score.winCount + 1;
    }
    if (result === 'Computer Wins') {
      this.score.lossCount = this.score.lossCount + 1;
    }
  }
}
