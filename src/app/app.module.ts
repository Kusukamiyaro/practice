import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts/posts.component';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveformComponent } from './froms/reactiveform/reactiveform.component';
import { AutocompleteComponent } from './practice/autocomplete';
import { PaginationComponent } from './practice/pagination';
import { CarouselComponent } from './practice/carousel.component';
@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    ReactiveformComponent,
    AutocompleteComponent,
    PaginationComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    MatCardModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatGridListModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [  ],
  bootstrap: [AppComponent,
    
  ]
})
export class AppModule { 

  
}
