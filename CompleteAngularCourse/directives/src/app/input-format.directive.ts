//HostLIstener will let us subscript to events raised from DOM
import { Directive, HostListener, ElementRef, Input } from '@angular/core';

//[] means any element that has this attribute, it wil apply this directive.
@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  //Change this to the selector of the directive to pass in the value with the custom directive. Usable when you have 1 property.
  @Input("appInputFormat") format;
  //ElementRef=service that gives access to DOM elements
  constructor(private el: ElementRef) { }

  @HostListener("blur")
  onBlur() {
    //nativeELement gives access to DOM
    let value: string = this.el.nativeElement.value;
    if(this.format==="lowercase") {
      this.el.nativeElement.value = value.toLowerCase();
    } else {
      this.el.nativeElement.value = value.toUpperCase();
    }
  }

}
