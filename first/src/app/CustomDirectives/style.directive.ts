import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @Input() set appStyle(styles: Object){
    let style = Object.entries(styles);
    //console.log(style);
    for(let s of style){
      this.renderer.setStyle(this.element.nativeElement, s[0],s[1]);
    }

  }
}
