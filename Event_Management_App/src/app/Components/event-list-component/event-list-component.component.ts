import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { HighlightDirectiveDirective } from '../../Directives/highlight-directive.directive';
import { PriceFormatPipePipe } from '../../Pipes/price-format-pipe.pipe';

@Component({
  selector: 'app-event-list-component',
  imports: [NgFor, PriceFormatPipePipe, HighlightDirectiveDirective],
  templateUrl: './event-list-component.component.html',
  styleUrl: './event-list-component.component.scss'
})
export class EventListComponentComponent {

  events = [
 { name: 'Tech Innovators Conference', date: '2025-09-12', price: 3500, category: 'Conference' },
 { name: 'Creative Writing Workshop', date: '2025-10-05', price: 800, category: 'Workshop' },
 { name: 'Rock Music Concert', date: '2025-11-20', price: 2500, category: 'Concert' },
 { name: 'AI & Machine Learning Summit', date: '2025-12-02', price: 5000, category: 'Conference' }
];


}
