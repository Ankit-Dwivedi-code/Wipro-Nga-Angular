import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Book } from '../shared/models/book';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor() {}

  getBooks(): Observable<Book[]> {
    const books: Book[] = [
      {
        id: 1,
        title: 'Clean Code',
        author: 'Robert C. Martin',
        price: 799,
        publicationDate: '2008-08-01',
        description: "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees.",
      },
      {
        id: 2,
        title: "You Don't Know JS Yet",
        author: 'Kyle Simpson',
        price: 499,
        publicationDate: '2020-01-28',
        description: 'A deep-dive into the core mechanisms of the JavaScript language.',
      },
      {
        id: 3,
        title: 'Design Patterns',
        author: 'GoF',
        price: 1299,
        publicationDate: '1994-10-31',
        description: 'Elements of reusable object-oriented software.',
      }
    ];

    // Simulate network latency
    return of(books).pipe(delay(300));
  }
}
