import { Component, EventEmitter, Input, Output } from '@angular/core';
import compare from './Type/Comparator';

@Component({
  selector: 'app-buttons-component',
  template: `
    <h1>Choose an option</h1>
    <h1 *ngIf="showHands">
      🧔
      {{ playerHand }}
      {{ computerHand }}
      <span *ngIf="!showAngry; else face">🤗</span>
    </h1>
    <ng-template #face> 😡 </ng-template>

    <button (click)="handleGame('rock')">Rock</button>
    <button (click)="handleGame('paper')">Paper</button>
    <button (click)="handleGame('scissors')">Scissor</button>
  `,
  styles: [],
})
export class ButtonsComponentComponent {
  showHands = false;
  showAngry = false;
  playerHand = '';
  computerHand = '';
  @Output() changeResult = new EventEmitter<string>();
  @Input({ required: true }) computerChoice: string = '';
  handleGame(playerChoice: string) {
    this.showHands = true;
    if (playerChoice === 'rock') {
      this.playerHand = '🤜';
    }
    if (playerChoice === 'paper') {
      this.playerHand = '✋';
    }
    if (playerChoice === 'scissors') {
      this.playerHand = '✌';
    }
    if (this.computerChoice === 'rock') {
      this.computerHand = '🤛';
    }
    if (this.computerChoice === 'paper') {
      this.computerHand = '✋';
    }
    if (this.computerChoice === 'scissors') {
      this.computerHand = '✌';
    }
    let result = compare(playerChoice, this.computerChoice);
    if (result === 'Player Wins') {
      this.showAngry = true;
    } else {
      this.showAngry = false;
    }
    this.changeResult.emit(result);
  }
}
