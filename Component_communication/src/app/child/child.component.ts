import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input () childMessage!: string // recieving data from parent
  @Output() messageEvent = new EventEmitter<string>();  // sending events to parent


  sendMessage() {
    this.messageEvent.emit("Hello from Child...");  // emit payload to parent
  }
}
