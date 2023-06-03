import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
    <textarea [ngStyle]="textareaStyles" cols="30" rows="10" disabled ></textarea> <br />
    <button (click)=" handleClick(btn1)" [disabled]="buttonsDisabled">{{ btn1 }}</button>
    <button (click)=" handleClick(btn2)" [disabled]="buttonsDisabled">{{ btn2 }}</button>
    <button (click)=" handleClick(btn3)" [disabled]="buttonsDisabled">{{ btn3 }}</button>

    <h2 *ngIf="hideShow else  wrongAnswer" > that is correct</h2>
    <ng-template #wrongAnswer> <h2>wrong Answer ths color is: {{bgColor}}</h2> </ng-template>
    <h3 *ngIf="hideReset">Resting in : {{timer}}</h3>
  `,
  styles: [],
})
export class ButtonsComponent {
  buttonsDisabled = false;
  hideShow = true;
  hideReset = false;
  timer = 5;
  colors: string[] = [];
  bgColor: string = '';
  btn1: string = '';
  btn2: string = '';
  btn3: string = '';
  textareaStyles: any;

  data = [];
  KEY = "HEX_GAME"

  private generateRandomHexColor(): string {
    return (
      '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0')
    );
  }
  private getRandomItemFromArray(arr: string[]): string {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  @Input({ required: true }) state: { wins: number, loss: number, cheat: string } = { wins: 0, loss: 0, cheat: "" }
  @Output() sendState = new EventEmitter();

  autoColorGenerator() {
    for (let i = 0; i < 3; i++) {
      this.colors.push(this.generateRandomHexColor());
    }
    this.btn1 = this.colors[0];
    this.btn2 = this.colors[1];
    this.btn3 = this.colors[2];
    this.bgColor = this.getRandomItemFromArray(this.colors);
    this.textareaStyles = { 'background-color': `${this.bgColor}` }
    this.state.cheat = this.bgColor;
    this.colors = [];
  }
  ngOnInit() {
    this.autoColorGenerator()
  }
  ngDoCheck() {
    let result = localStorage.getItem(this.KEY);
    if(result){
      this.data = JSON.parse(result);
    }
  }

  handleClick(selectedColor: string) {
    console.log(selectedColor, this.bgColor);
    if (selectedColor === this.bgColor) {
      this.state.wins++;
      this.hideShow = true;
      this.buttonsDisabled = true;
      this.hideReset = true
      let click = setInterval(()=>{
        this.timer = this.timer -1;
      },1000)
      setTimeout(()=>{
        this.buttonsDisabled = false;
        this.hideReset = false;
        this.timer= 5;
        clearInterval(click);
      },5000)
      this.autoColorGenerator()
      let obj = {hex1:this.btn1, hex2: this.btn2, hex3:this.btn3, cheat: this.bgColor, userHex: selectedColor, 
        wins: this.state.wins, loss: this.state.loss
        }
      let newData = [...this.data, obj];
      localStorage.setItem(this.KEY, JSON.stringify(newData))
    } else {
      this.state.loss++;
      this.hideShow = false;
      this.buttonsDisabled = true;
      this.hideReset = true
      let click = setInterval(()=>{
        this.timer = this.timer -1;
      },1000)
      setTimeout(()=>{
        this.buttonsDisabled = false;
        this.hideReset = false
        this.timer = 5;
        clearInterval(click);
      },5000)
      
      this.autoColorGenerator()
      let obj = {hex1:this.btn1, hex2: this.btn2, hex3:this.btn3, cheat: this.bgColor, userHex: selectedColor, 
        wins: this.state.wins, loss: this.state.loss
        }
      let newData = [...this.data, obj];
      localStorage.setItem(this.KEY, JSON.stringify(newData))
    }
  }
}
