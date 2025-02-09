import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  template: `
    <div class="container">
      <div class="posts-list">
        <div class="post" *ngFor="let item of currentPosts">
          <div>
            <h6>{{ item.id }} : {{ item.title }}</h6>
          </div>
          <div>
            <span class="post-details">
              {{ item.body }}
            </span>
          </div>
        </div>
      </div>
      <div class="page-tiles">
        <span
          class="page-tile"
          *ngFor="let item of [].constructor(page.total); let i = index"
          (click)="getCurrentPageData(i)"
        >
          {{ i + 1 }}
        </span>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .posts-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap:10px
      }
      .post {
        display :flex;
        max-width: 20rem; 
        border: solid 1px aliceblue;
        background-color: antiquewhite;
        flex-direction:column;
        margin: 5px;
        max-height: 15rem;
        gap:5px;
        box-shadow: 0px 0px 10px rgba(32, 33, 36, 0.28) !important;
        padding :5px;
        justify-content:center;
        align-items:center;
      }
      .post-details {
      
      }
      .page-tiles {
        display: flex;
    
    align-items: center;
    justify-content: center;
    gap: 10px;
    text-align:center;
      }
      .page-tile {
        display:flex;
        border-right: solid 1px gray;
        cursor: pointer;
      }
    `,
  ],
})
export class PaginationComponent implements OnInit {
  posts: any[] = [];
  currentPosts: any[] = [];
  page: any = {
    current: 0,
    size: 10,
    total: 0,
  };
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getPosts();
  }
  getPosts() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((response: any) => {
        this.posts = response;
        this.page.total = Math.floor((response.length - 1) / this.page.size);
        console.log(this.page);

        this.getCurrentPageData(0);
      });
  }
  getCurrentPageData(index: number) {
    this.page.current = index;
    console.log(this.page);
    console.log(
      this.page.current * this.page.size,
      (this.page.current + 1) * this.page.size
    );

    this.currentPosts = [];
    this.currentPosts = this.posts.splice(
      this.page.current * this.page.size,
      this.page.size
    );

    console.log('🚑', this.currentPosts);
  }
}
