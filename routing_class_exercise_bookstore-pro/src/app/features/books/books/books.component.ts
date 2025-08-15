import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { Subscription, Observable } from 'rxjs';
import { DataService } from '../../../core/data.service';
import { Book } from '../../../shared/models/book';
import { BookCardComponent } from '../book-card/book-card.component';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, AsyncPipe, BookCardComponent],
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit, OnDestroy {

  books$!: Observable<Book[]>; // async pipe demo
  manualBooks: Book[] = [];    // manual subscribe demo
  private sub = new Subscription();

  constructor(private data: DataService) {}

  ngOnInit(): void {
    // Assign books$ for async pipe
    this.books$ = this.data.getBooks();

    // Manual subscribe + cleanup
    this.sub.add(
      this.data.getBooks().subscribe({
        next: books => this.manualBooks = books,
        error: err => console.error('Fetch failed', err)
      })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  trackById = (_: number, b: Book) => b.id;
}
