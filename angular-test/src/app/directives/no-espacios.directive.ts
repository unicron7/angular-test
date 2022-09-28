import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoEspacios]'
})
export class NoEspaciosDirective {

  private regex: RegExp = new RegExp(/^\s*$/g);
  // Allow key codes for special events. Reflect :
  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'ArrowRight', 'ArrowLeft', 'v'];

  constructor(private el: ElementRef) { }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    // Allow Backspace, tab, end, and home keys
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }

    if (this.isNullOrWhiteSpace(event.key)) {
      event.preventDefault();
    }
  }

  @HostListener('paste', ['$event'])
  onPaste($event: ClipboardEvent) {
    $event.preventDefault();
  }

  isNullOrWhiteSpace(value:string) {
    if(value)
      return value === null || value.match(this.regex) !== null;
    return true;
  }

}
