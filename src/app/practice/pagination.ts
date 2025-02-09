import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  template: `


      
      <div *ngFor="let item of currentPosts">
        <div class="post">
    
            <span>
                {{item.id}} : {{item.title}}
            </span>
        
           <span>
               {{item.body}}
           </span>
        </div>
      </div>

  
   <span *ngFor="let item of page.total,let i = index">
    {{i}}
   </span>

  
  
  `,
  styles: [``],
})
export class PaginationComponent implements OnInit {
posts:any[]= [];
currentPosts:any []=[]
page:any = {
    current : 0,
    size: 5,
    total: 0
}
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getPosts();
  }
  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((response:any)=>{
        this.posts = response;
        this.page.total = Math.ceil(response.length/this.page.size);
        console.log(this.page);
        
        this.currentPosts = this.posts.splice( this.page.current * this.page.size, this.page.current+1 * this.page.size)
    });
  }


}
