import { Component } from '@angular/core';
import { LifecycleDemoComponent } from "../lifecycle-demo/lifecycle-demo.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-parent',
  imports: [LifecycleDemoComponent, NgIf],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  parentTitle = 'Hello from Parent Component';

  changeTitle() {
    this.parentTitle = 'Title Changed!';
  }

  removeChild = true;

}
