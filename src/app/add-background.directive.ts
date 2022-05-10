import { ThisReceiver } from '@angular/compiler';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAddBackground]'
})
export class AddBackgroundDirective {

  constructor(private ele: ElementRef) {
    this.ele.nativeElement.style.backgroundColor='yellow';}

}
