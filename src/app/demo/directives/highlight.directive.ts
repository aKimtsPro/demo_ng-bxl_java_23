import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

   @Input() //('highlight') permet de pouvoir directement utiliser la dir. pour donner la valeur
  color: string = 'yellow';

  constructor( private ref: ElementRef ) {
    // this.ref.nativeElement.onmouseover = () => this.mouseenter();
    // this.ref.nativeElement.onmouseout = () => this.mouseleave();
  }

  @HostListener('mouseover')
  mouseenter() {
    this.ref.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseout')
  mouseleave() {
    this.ref.nativeElement.style.backgroundColor = 'transparent';
  }

}
