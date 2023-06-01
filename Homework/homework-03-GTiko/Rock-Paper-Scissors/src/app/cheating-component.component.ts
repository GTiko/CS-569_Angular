import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cheating-component',
  template: `
    <h1>Cheating</h1>
    <h2>Current computer choice is {{ computerChoice }}</h2>
    <button (click)="handleCheat()">cheat</button>
  `,
  styles: [],
})
export class CheatingComponentComponent {
  @Input({ required: true }) cheatValue: string = '';
  computerChoice = '';
  handleCheat() {
    this.computerChoice = this.cheatValue;
    setTimeout(() => {
      this.computerChoice = '';
    }, 3000);
  }
}
