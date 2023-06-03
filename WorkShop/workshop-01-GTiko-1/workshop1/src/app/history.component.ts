import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-history',
  template: `
      <button (click)="showHistory()">History</button>
       
        <ul *ngIf="show">
        <li *ngFor="let item of data;">
            Hex1: {{item.hex1}} 
            Hex2: {{item.hex2}} 
            Hex3: {{item.hex3}} 
            displayedHex: {{item.displayedHex}} 
            userHex: {{item.userHex}} 
            wins: {{item.wins}}
            loss: {{item.loss}}
          </li>
        </ul>
      <button (click)="clearHistory()">clear History</button>
  `,
  styles: [
  ]
})
export class HistoryComponent {
  show = false;  
  data: any = [];
  KEY = "HEX_GAME";
  
  ngDoCheck() {
    let result = localStorage.getItem(this.KEY);
    if(result){
      this.data = JSON.parse(result);
    }
  }
  showHistory(){
    this.show = !this.show;
  }
  clearHistory(){
    localStorage.clear()
  }

}
