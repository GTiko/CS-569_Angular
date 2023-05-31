import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>App component</h1>
    <app-child-one />
    <app-child-two />
  `,
  styles: [],
})
export class AppComponent {
  title = 'homework2';
}
