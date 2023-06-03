import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-scoreboard',
  template: `
   <h2>Scoreboard: wins: {{state.wins}} losses: {{state.loss}}</h2>
  `,
  styles: [
  ]
})
export class ScoreboardComponent {
  @Input({required: true}) state:{wins: number, loss: number, cheat:string} = {wins: 0, loss: 0, cheat:""} 

}
