import { Component, HostListener } from '@angular/core';
import { PostsService } from './posts.service';
import { PageEvent } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  posts: any[] = [
    { title: 'Post 1', content: 'Content 1' },
    { title: 'Post 2', content: 'Content 2' },
    // Add more posts here
  ];
  paginatedPosts: any = [];
  totalPosts = this.posts.length;
  postsPerPage = 10;
  currentPage = 0;
  showUsers = true;
  // ngOnInit() {
  //   this.postService.getPosts().subscribe((data:any)=>{
  //     this.posts = data;
  //     this.totalPosts = data.length;
  //     this.paginatePosts();
  //   })
  // }

  // paginatePosts() {
  //   const startIndex = this.currentPage * this.postsPerPage;
  //   const endIndex = startIndex + this.postsPerPage;
  //   this.paginatedPosts = this.posts.slice(startIndex, endIndex);
  // }

  // onPageChange(event: PageEvent) {
  //   this.postsPerPage = event.pageSize;
  //   this.currentPage = event.pageIndex;
  //   this.paginatePosts();
  // }


  // getResponsiveCols(): number {
  //   if (window.innerWidth >= 1200) {
  //     return 3; // 3 columns for large screens
  //   } else if (window.innerWidth >= 800) {
  //     return 2; // 2 columns for medium screens
  //   } else {
  //     return 1; // 1 column for small screens
  //   }
  // }
  // @HostListener('window:resize', ['$event'])
  // onResize(event:any) {
  //   this.getResponsiveCols();
  // }
  navitems: any = [];
  constructor(private route: Router, private activeRoute: ActivatedRoute) {
    console.log(this.route);

  }
  ngOnInit(): void {
    this.getNavTabs()
  }
  redirect(item: any) {
    this.route.navigate([item]);
  }
  getNavTabs() {
    this.route.config.forEach((path) => {
      console.log(path);
      if (path.path && path.path.length > 0) {
        this.navitems.push(path)
      }
    })
  }
}


