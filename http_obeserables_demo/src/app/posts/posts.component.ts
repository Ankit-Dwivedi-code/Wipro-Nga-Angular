import { Component, inject } from '@angular/core';
import { DataService } from '../Services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  dataservice = inject(DataService);
  posts: any[] = [];

  constructor() {
    this.loadPosts();
  }

  loadPosts() {
    this.dataservice.getPosts().subscribe((todos) => {
      this.posts = todos;
    } );
  }

}
