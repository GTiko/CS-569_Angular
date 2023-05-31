import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child-two ',
  template: ` <p>child-two !</p> `,
  styles: [
    `
      p {
        color: red;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ChildTwoComponent implements OnInit {

  ngOnInit() {
    console.log('Child 2: OnInit');
  }
  ngDoCheck() {
    console.log('Child 2: doCheck');
  }
  ngAfterViewChecked() {
    console.log('Child 2: AfterViewChecked');
  }
  ngOnDestroy() {
    console.log('Child 2: OnDestroy');
  }
}
