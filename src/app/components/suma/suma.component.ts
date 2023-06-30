import {Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent {
  public inputNum1! : ElementRef<HTMLInputElement>;
  public inputNum2! : ElementRef<HTMLInputElement>;
  public inputResultado! : ElementRef<HTMLInputElement>;
  public botonSumar! : ElementRef<HTMLButtonElement>;

}
