import { Component } from '@angular/core';

@Component({
  selector: 'app-styled-card',
  imports: [],
  templateUrl: './styled-card.component.html',
  styleUrls: ['./styled-card.component.css'],
  styles: [
    `
      h2{
        color: darkblue;
      }
    `
  ]
})
export class StyledCardComponent {

}
