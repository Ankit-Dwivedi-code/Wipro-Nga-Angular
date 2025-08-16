import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../events.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AttendeesService } from '../../attendees/attendees.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  standalone : true,
  imports: [CommonModule, FormsModule],
})
export class EventDetailComponent implements OnInit {
  event: any;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventsService,
    private attendeeService: AttendeesService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.eventService.getEventById(id).subscribe(data => this.event = data);
  }

  register(formValue: any) {
    const attendee = {
      name: formValue.name,
      email: formValue.email,
      eventId: this.event.id
    };
    this.attendeeService.addAttendee(attendee).subscribe(() => {
      alert('Registered Successfully!');
    });
  }
}
