import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cheat-board',
  template: `
  
  <!-- <textarea [ngStyle]="textareaStyles" cols="30" rows="10" disabled ></textarea> <br /> -->
  `,
  styles: [
  ]
})
export class CheatBoardComponent {

  @Input() x: any = ""
  
  ngOnInit(){
    console.log(this.x)
  }
}
