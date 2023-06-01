import { Component,  Input } from '@angular/core';
import IResult from './Type/IResult.interface';

@Component({
  selector: 'app-scoreboard-component',
  template: `
    <h1>Scoreboard</h1>
    <h2>Wins {{score.winCount}} - Losses {{score.lossCount}} - Ties {{score.tieCount}}</h2>
  `,
  styles: [],
})
export class ScoreboardComponentComponent {

  @Input({ required: true }) score: IResult = {
    winCount: 0,
    lossCount: 0,
    tieCount: 0,
    computerChoice: '',
  };
}
