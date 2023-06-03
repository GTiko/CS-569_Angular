import { Directive, ElementRef, HostListener, Input, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[clickToIncrease]'
})
export class ClickToIncreaseDirective {

  @Input({ required: true }) clickToIncrease: number = 0;

  private element = inject(ElementRef);
  private render2 = inject(Renderer2);

  currentFont = 18.8    //I gave the approximate value of h3

  @HostListener('dblclick') doubleClick() {
    this.render2.setStyle(this.element.nativeElement, "font-size", (this.currentFont * this.clickToIncrease) + "px")
    this.currentFont = this.currentFont * this.clickToIncrease;
  }
}
