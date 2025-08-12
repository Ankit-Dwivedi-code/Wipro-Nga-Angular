import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';
import { CommonModule } from '@angular/common';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-posts',
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit{
  dataservice = inject(DataService);
  posts: any[] = [];

  // constructor() {
  //   this.loadPosts();
  // }

  // loadPosts() {
  //   this.dataservice.getPosts().subscribe((todos) => {
  //     this.posts = todos;
  //   } );
  // }

  ngOnInit(): void {
    this.dataservice.getPosts().pipe(
      catchError((error) => {
        console.error('Error fetching posts:', error);
        throw error;
      })
    ).subscribe((todos) => {
      this.posts = todos;
    });
  }

}
