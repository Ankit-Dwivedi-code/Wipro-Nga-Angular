import { Routes } from '@angular/router';
import { BooksComponent } from './features/books/books/books.component';

export const routes: Routes = [
    { path: '', component: BooksComponent },
    { path: '**', redirectTo: '' }
];
