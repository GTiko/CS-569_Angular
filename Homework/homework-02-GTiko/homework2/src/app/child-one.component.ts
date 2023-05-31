import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child-one',
  template: ` <p>child-one counter: {{ data.count }}</p> `,
  styles: [
    `
      p {
        color: green;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ChildOneComponent implements OnInit {
  data = { count: 0 };

  constructor() {
    setTimeout(() => {
      this.data.count = ++this.data.count;
    }, 5000);
  }

  ngOnInit() {
    console.log('Child 1: OnInit');
  }
  ngDoCheck() {
    console.log('Child 1: doCheck');
  }
  ngAfterViewChecked() {
    console.log('Child 1: AfterViewChecked');
  }
  ngOnDestroy() {
    console.log('Child 1: OnDestroy');
  }
}
