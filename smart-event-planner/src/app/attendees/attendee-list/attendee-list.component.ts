import { Component, OnInit } from '@angular/core';
import { AttendeesService } from '../attendees.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-attendee-list',
  templateUrl: './attendee-list.component.html',
  standalone : true,
  imports: [CommonModule] 
})
export class AttendeeListComponent implements OnInit {
  attendees: any[] = [];

  constructor(private attendeeService: AttendeesService) {}

  ngOnInit(): void {
    this.attendeeService.getAttendees().subscribe(data => this.attendees = data);
  }
}
