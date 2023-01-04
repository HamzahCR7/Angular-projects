import { Directive, ElementRef, HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appModify]',
})
export class ModifyDirective {
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('green');
  }
  constructor(private el: ElementRef) {
    // el.nativeElement.style.color="red";   using ElementRef directy
    // el.nativeElement.innerHTML ="hamzah"
  }
  highlight(color: string) {
    this.el.nativeElement.style.color = color;//handling user events
  }
}
