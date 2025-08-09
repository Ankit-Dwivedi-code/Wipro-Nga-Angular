import { Component } from '@angular/core';
import { Book } from '../models/book.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PriceInrPipe } from '../Pipes/price-inr.pipe';
import { HoverHighlightDirective } from '../Directives/hover-highlight.directive';

@Component({
  selector: 'app-book-list',
  imports: [CommonModule, FormsModule, PriceInrPipe, HoverHighlightDirective],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {
      filterTerm = '';

  books: Book[] = [
    { id: 1, title: 'Modern Angular', author: 'A. Author', price: 899, inStock: true, newArrival: false, description: 'A guide to Angular' },
    { id: 2, title: 'TypeScript Deep Dive', author: 'B. Writer', price: 650, inStock: true, newArrival: true, description: 'TS fundamentals' },
    { id: 3, title: 'Webcam 1080p', author: 'C. Dev', price: 1299, inStock: false, newArrival: false, description: 'Full HD webcam' },
    { id: 4, title: 'Angular Patterns', author: 'D. Engineer', price: 499, inStock: true, newArrival: true, description: 'Patterns & best practices' },
    { id: 5, title: 'CSS Mastery', author: 'E. Stylist', price: 999, inStock: false, newArrival: false, description: 'Modern CSS tips' }
  ];

  get filteredBooks(): Book[] {
    const t = this.filterTerm.trim().toLowerCase();
    return t ? this.books.filter(b => b.title.toLowerCase().includes(t)) : this.books;
  }
}
