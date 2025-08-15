import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
// import {HttpCli}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [RouterLink],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'travel-planner-14 app is running!';
}
