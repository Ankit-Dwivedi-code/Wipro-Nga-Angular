import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
// import { PriceInrPipe } from './Pipes/price-inr.pipe';
// import { HoverHighlightDirective } from './Directives/hover-highlight.directive';

@Component({
  selector: 'app-root',
  imports: [ BookListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'case_study_3_library_book_mgnt_sys';
}
