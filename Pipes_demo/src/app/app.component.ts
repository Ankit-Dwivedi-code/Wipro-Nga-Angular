import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PipesComponent } from "./pipes/pipes.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PipesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pipes_demo';
}
