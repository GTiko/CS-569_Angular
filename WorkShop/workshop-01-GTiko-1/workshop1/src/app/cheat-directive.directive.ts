import { Directive, ElementRef, HostListener, Input, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[appCheatDirective]'
})
export class CheatDirectiveDirective {

  @Input() cheatColor: string = "";
  
  private element = inject(ElementRef);
  private render2 = inject(Renderer2);

  @HostListener('dblclick') doubleClick() {

  }

}
