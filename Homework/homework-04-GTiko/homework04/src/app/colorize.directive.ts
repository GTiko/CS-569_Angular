import { Directive, ElementRef, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[colorize]',
})
export class ColorizeDirective {
  color = ['red', 'blue', 'green', 'yellow', 'maroon'];

  private element = inject(ElementRef);
  private render2 = inject(Renderer2);

  ngOnInit() {
    let interval = setInterval(() => {
      const random_item =
        this.color[Math.floor(Math.random() * this.color.length)];
      this.render2.setStyle(this.element.nativeElement, 'color', random_item);
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
    }, 10000);
  }
}
