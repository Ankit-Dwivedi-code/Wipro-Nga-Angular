import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
   @Input() product: Product | null = null;
  @Output() feedback = new EventEmitter<string>();

  userFeedback: string = '';

  submitFeedback() {
    if (this.userFeedback.trim()) {
      this.feedback.emit(this.userFeedback);
      this.userFeedback = '';
    }
  }

}
