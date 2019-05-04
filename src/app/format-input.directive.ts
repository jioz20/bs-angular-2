import { Directive, HostListener, ElementRef} from '@angular/core';

@Directive({
  selector: '[appFormatInput]'
})
export class FormatInputDirective {

  constructor(private el: ElementRef) { }

  //Blur click bên ngoài ô input mới có sự kiện blur
  @HostListener('blur') onblur()
  {
    //Lay gia tri tu o input
    let value: string = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toUpperCase(); //Chuyen doi thanh chu Hoa
  }

  


}
