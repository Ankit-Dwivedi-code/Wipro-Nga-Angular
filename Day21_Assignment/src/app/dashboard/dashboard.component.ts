import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { Product } from '../models/product';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, ProductDetailsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  products: Product[] = [
    { id: 1, name: 'Laptop', price: 800 },
    { id: 2, name: 'Smartphone', price: 500 },
    { id: 3, name: 'Headphones', price: 100 }
  ];

  selectedProduct: Product | null = null;
  feedbackList: { productId: number; feedback: string }[] = [];

  selectProduct(product: Product) {
    this.selectedProduct = product;
  }

  onFeedbackReceived(feedback: string) {
    if (this.selectedProduct) {
      this.feedbackList.push({ productId: this.selectedProduct.id, feedback });
    }
  }

}
