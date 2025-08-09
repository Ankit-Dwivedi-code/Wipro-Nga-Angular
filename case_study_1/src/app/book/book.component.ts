import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
    productName = 'IKIGAI';
  productPrice = 40;
  addedToCart = false;
  addToCart() {
    this.addedToCart = true;
}

}
