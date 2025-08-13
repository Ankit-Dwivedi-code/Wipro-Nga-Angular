import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { PostsComponent } from './posts/posts.component';
import { UserService } from './Services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})





export class AppComponent {
  title = 'http_obeserables_demo';

   users: any[] = [];

  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  });

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(data => this.users = data);
  }

  onSubmit() {
    console.log('Form submitted:', this.userForm.value);
    const newUser = this.userForm.value; // Get the form values
    this.users.push(newUser);  // Add new user to the list
    this.userForm.reset();  // This resets the form
    // this.userForm.setValue({ name: '', email: '' }); // Reset form fields

  }

  

}
