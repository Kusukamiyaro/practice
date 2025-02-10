import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  template: `
    <div class="container">
      <h1>This Carousel</h1>
      <div class="card">
        <div class="header">
          <h3>{{ slide.id }} : {{ slide.name }}</h3>
        </div>
        <div class="body">
          <div class="navigate"  (click)="previous()"><</div>
          <div class="user-info">
            <div *ngFor="let item of slide | keyvalue">
             <b> {{ item.key }}</b> :{{ item.value | json }}
            </div>
          </div>
          <div class="navigate"  (click)="next()">></div>
        </div>
      </div>
      <div>
        <span
          *ngFor="let item of slides; let i = index"
          class="footer"
          (click)="goToSlide(item)"
        ></span>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        display: flex;
        text-align: center;
        flex-direction: column;
      }
      .header {
        border-bottom: solid 1px lightblue;
      }
      .card {
        box-shadow: 0px 0px 10px rgba(32, 33, 36, 0.28) !important;
        min-height: 22rem;
        background-color: aliceblue;
        border: solid 2px lightblue;
        border-radius: 0.5rem;
      }
      .body {
        display: flex;
        justify-content: space-between;
      }
      .navigate {
        color: gray;
        font-size: xxx-large;
        font-weight: 600;
        cursor: pointer;
        margin-top: auto;
      }
      .user-info{
        margin-top:20px;
        text-align:left;
      }
      .footer {
        cursor: pointer;
        height: 15px;
        width: 15px;
        margin: 0 2px;
        background-color: gray;
        border-radius: 50%;
        display: inline-block;
        transition: background-color 0.6s ease;
      }
      
      .active,
      .footer:hover {
        background-color: #717171;
      }
    `,
  ],
})
export class CarouselComponent implements OnInit {
  slides: any = [];
  slide: any = {};
  index: number = 0;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((result: any) => {
        this.slides = result;
        this.slide = this.slides[this.index];
      });
  }
  next() {
    this.index = this.index + 1;
    this.slide = this.slides[(this.index % this.slides.length) - 1];
  }
  previous() {
    this.index = this.index - 1;
    this.slide = this.slides[(this.index % this.slides.length) - 1];
  }
  goToSlide(item: any) {
    this.slide = item;
  }
}
