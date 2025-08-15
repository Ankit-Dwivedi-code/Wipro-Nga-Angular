import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe, DatePipe, UpperCasePipe, SlicePipe } from '@angular/common';
// import { Book } from '../../shared/models/book';
import { Book } from '../../../shared/models/book';
// import { DiscountPipe } from '../../shared/pipes/discount.pipe';
import { DiscountPipe } from '../../../shared/pipes/discount.pipe';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, DatePipe, UpperCasePipe, SlicePipe, DiscountPipe],
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {
  @Input({ required: true }) book!: Book;
  discountPercent = 10; // show 10% off
}
