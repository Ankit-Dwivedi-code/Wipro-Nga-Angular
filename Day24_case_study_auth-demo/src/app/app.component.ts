import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from "./user/register/register.component";
// import { RouterLink } from "../../node_modules/@angular/router/router_module.d-Bx9ArA6K";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Day24_case_study_auth-demo';
}
