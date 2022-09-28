import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSoloNumeros]'
})
export class SoloNumerosDirective {
  private regex: RegExp = new RegExp(/^[0-9]*$/g);
  // Allow key codes for special events. Reflect :
  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'ArrowRight', 'ArrowLeft', 'v'];

  constructor(private el: ElementRef) { }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    // Allow Backspace, tab, end, and home keys
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    const current: string = this.el.nativeElement.value;
    const next: string = current.concat(event.key);
    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    }
  }

  // @HostListener('paste', ['$event'])
  // onPaste($event: ClipboardEvent) {
  //   let clipboardData = $event.clipboardData;
  //   $event.preventDefault();
  //   let pastedText = clipboardData.getData('text');
  //   this.el.nativeElement.value = pastedText.replace(/[^0-9]/g, '');
  //   $event.target.dispatchEvent(new KeyboardEvent('input'));
  // }
  
}
