import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appLog]',
  standalone: true,
  host:{
    '(click)': 'onLog()'
  }
})
export class LogDirective {

  private hostRef = inject(ElementRef);

  onLog(){
    console.log("clicked");
    console.log(this.hostRef.nativeElement);
  }

}
