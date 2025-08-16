import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class EventCreateComponent {
  eventForm!: FormGroup;

  constructor(private fb: FormBuilder, private eventService: EventsService) {
    this.eventForm = this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      maxAttendees: [0, [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit() {
    if (this.eventForm.valid) {
      this.eventService.addEvent(this.eventForm.value).subscribe(() => {
        alert('Event Created!');
        this.eventForm.reset();
      });
    }
  }
}
