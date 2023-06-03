import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p highlight>
      This text have a shadow when the mouse hovers over it, and no shadow when
      the mouse leaves.
    </p>

    <h2>{{ 'Welcome to WADII course' | shorten : 10 }}</h2>

    <h2>{{ 'Welcome MSD!' | shorten : 25 }}</h2>

    <h2 colorize>This text will change color every second</h2>

    <h3 [clickToIncrease]="size1">
      when double-click the paragraph, it will increase its size by 2px
    </h3>

    <h3 [clickToIncrease]="size2">
      when double-click the paragraph, it will increase its size by 6px
    </h3>

    <h2>{{ 'Asaad and Theo' | swapLetters : { a: '@', o: '0' } }}</h2>
    <!-- it will render @s@@d @nd The0 -->
  `,
  styles: [``],
})
export class AppComponent {
  size1: number = 2;
  size2: number = 6;
}
