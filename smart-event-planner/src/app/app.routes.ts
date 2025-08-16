import { Routes } from '@angular/router';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { EventCreateComponent } from './events/event-create/event-create.component';
import { AttendeeListComponent } from './attendees/attendee-list/attendee-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  { path: 'events', component: EventListComponent },
  { path: 'events/create', component: EventCreateComponent },
  { path: 'events/:id', component: EventDetailComponent },
  { path: 'attendees', component: AttendeeListComponent }
];
