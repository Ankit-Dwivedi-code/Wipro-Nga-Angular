import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { PriceFormatPipe } from '../../pipes/price-format.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';
// adding interface implementation

@Component({
  selector: 'app-product-list',
  imports: [NgFor, NgIf, NgClass, PriceFormatPipe, HighlightDirective],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
    products: Product[] = [
    { id: 1, name: 'Wireless Mouse', price: 799, inStock: true, description: 'Ergonomic wireless mouse' },
    { id: 2, name: 'Mechanical Keyboard', price: 2499, inStock: true, description: 'RGB backlit keyboard' },
    { id: 3, name: 'Webcam 1080p', price: 1299, inStock: false, description: 'Full HD webcam' },
    { id: 4, name: 'USB-C Hub', price: 1999, inStock: true, description: '6-in-1 USB-C hub' },
    { id: 5, name: 'Laptop Stand', price: 999, inStock: false, description: 'Aluminium laptop stand' }
    ];
}
