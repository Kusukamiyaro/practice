import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AutocompleteComponent } from './practice/autocomplete';
import { PaginationComponent } from './practice/pagination';

const routes: Routes = [

  {
    path:'',
    component :AppComponent
  },
  {
    path:'autocomplete',
    component:AutocompleteComponent
  },
  {
    path:'pagination',
    component:PaginationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
