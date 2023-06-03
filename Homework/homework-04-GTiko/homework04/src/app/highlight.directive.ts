import { Directive, ElementRef, HostListener, Input, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @Input() color = "black"

  private element = inject(ElementRef);
  private render2 = inject(Renderer2);

  @HostListener('mouseover') over(){
    this.render2.setStyle(this.element.nativeElement, 'text-shadow', '1px 1px 2px blue');
  }

  @HostListener('mouseout') out (){
    this.render2.setStyle(this.element.nativeElement, 'text-shadow', '');
  }
}
