import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appProducthigh]'
})
export class ProducthighDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @Input() set appProducthigh(condition: boolean){
    if (condition){
      this.renderer.addClass(this.element.nativeElement, 'highlight');
    }
  }
}
