import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hex Color Guessing Game</h1>
    <app-history/>
    <app-scoreboard [state]="state" />
    <app-buttons  [state]="state" />
    <app-cheat-board appCheatDirective = "backGround" />
  `,
  styles: [],
})
export class AppComponent {
  state = { wins: 0, loss: 0, cheat: '' };
  data = [];
  KEY = "HEX_GAME";
  
  ngDoCheck() {
    let result = localStorage.getItem(this.KEY);
    if(result){
      this.data = JSON.parse(result);
    }
  }
}
