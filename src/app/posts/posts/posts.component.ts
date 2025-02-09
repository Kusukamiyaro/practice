import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private postService :PostsService) { }
postData$!: Observable<Object>;
  ngOnInit(): void {
    this.postData$ = this.postService.getPosts();
  }

}
