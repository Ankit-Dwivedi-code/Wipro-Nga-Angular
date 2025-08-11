import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventListComponentComponent } from './Components/event-list-component/event-list-component.component';

@Component({
  selector: 'app-root',
  imports: [EventListComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Event_Management_App';
}
