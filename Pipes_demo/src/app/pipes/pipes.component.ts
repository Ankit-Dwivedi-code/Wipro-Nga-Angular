import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  imports: [DatePipe, CurrencyPipe, UpperCasePipe, LowerCasePipe, TitleCasePipe, PercentPipe, SlicePipe, DecimalPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

  //declaring variables where values needs basic transformation
  
  todaysDate: Date = new Date();
  productPrice : number =  1250.5;
  welcomeMessage: string = 'Hello Angular learners';
  productRatings: number = 4.5678;
  discount: number = 0.25;
  productName: string = 'Angular E Book';

}
