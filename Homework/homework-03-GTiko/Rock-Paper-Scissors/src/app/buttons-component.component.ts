import { Component, EventEmitter, Input, Output } from '@angular/core';
import compare from './Type/Comparator';

@Component({
  selector: 'app-buttons-component',
  template: `
    <div>
      <h1>Choose an option</h1>
      <button (click)="handleGame('rock')">Rock</button>
      <button (click)="handleGame('paper')">Paper</button>
      <button (click)="handleGame('scissors')">Scissor</button>
    </div>
  `,
  styles: [],
})

export class ButtonsComponentComponent {
  @Output() changeResult = new EventEmitter<string>();
  @Input({ required: true }) computerChoice: string = '';

  handleGame(playerChoice: string) {
    let result = compare(playerChoice, this.computerChoice);
    this.changeResult.emit(result);
  }
}
