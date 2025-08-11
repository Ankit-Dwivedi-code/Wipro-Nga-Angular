import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { StyledCardComponent } from "./styled-card/styled-card.component";

@Component({
  selector: 'app-root',
  imports: [StyledCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  styles: [`
    .Inline {
      color: blue;
      font-weight: bold;
    }
  `]
})
export class AppComponent {
  title = 'styling_demo';
}
