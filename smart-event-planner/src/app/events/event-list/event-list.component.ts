import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { CommonModule, DatePipe, UpperCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  standalone: true,
  imports: [UpperCasePipe, DatePipe, RouterLink, CommonModule],
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: any[] = [];

  constructor(private eventService: EventsService) {}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(data => this.events = data);
  }
}
