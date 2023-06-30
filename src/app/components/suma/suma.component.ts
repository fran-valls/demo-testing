import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent {
  @ViewChild("num1") public inputNum1! : ElementRef<HTMLInputElement>;
  @ViewChild("num2")public inputNum2! : ElementRef<HTMLInputElement>;
  @ViewChild("resultado")public inputResultado! : ElementRef<HTMLInputElement>;
  @ViewChild("btnSumar")public botonSumar! : ElementRef<HTMLButtonElement>;

  public sumar(){
    let resultado: number = this.inputNum1.nativeElement.valueAsNumber + this.inputNum2.nativeElement.valueAsNumber;
    this.inputResultado.nativeElement.value = resultado + "";
  }

}
