import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'app-autocomplete',
  template: `<div class="container">
    <h1>Autocomplete Interview</h1>
    <input
      class="form-control"
      type="text"
      [(ngModel)]="userName"
      (input)="onInputChange()"
      (focus)="onFocus()"
      (blur)="onBlur()"
    />
    <div *ngIf="showList && users.length > 0" class="drop-down">
      <span
        *ngFor="let user of users"
        class="list-item"
        (click)="setUserSelected($event)"
      >
        👤 {{ user.username }}
      </span>
    </div>
  </div>`,
  styles: [
    `
      .container {
        text-align: center;
      }

      .form-control {
        width: 100%;
      }

      .list-item {
        cursor: pointer;
        display: block;
        text-align: left;
        padding: 2px 5px 2px 5px;
      }

      .drop-down {
        width: 100%;
        z-index: 1;
        text-align: center;
        box-shadow: 0px 0px 8px rgba(32, 33, 36, 0.28) !important;
        margin: auto;
        border-bottom-left-radius: 10px;
        border-bottom: 20px;
        max-height: 25rem;
        overflow-y: scroll;
        scrollbar-width: none;
      }
    `,
  ],
})
export class AutocompleteComponent implements OnInit {
  userName: string = '';
  showList = true;
  userSearch: any = new Subject();
  ngOnInit() {
    this.userSearch.pipe(debounceTime(500)).subscribe(() => {
      this.userNameSearch();
    });
  }
  onFocus() {
    this.userSearch.next(this.userName);
    this.showList = true;
  }
  onBlur() {
    setTimeout(() => {
      this.showList = false;
    }, 500);
  }
  onInputChange() {
    this.userSearch.next(this.userName);
  }
  users: any[] = [];
  constructor(private http: HttpClient) {}
  userNameSearch() {
    //  this.users = this.users.filter((user: any) => {
    //   console.log("API Call", this.userName)
    //   return user.username.match(this.userName)
    //  });

    this.http
      .get(`https://dummyjson.com/users/search?q=${this.userName}`)
      .pipe(
        debounceTime(500), // Adjust the debounce time as needed (in milliseconds)
        distinctUntilChanged()
      )
      .subscribe((result: any) => {
        console.log(this.users);
        this.users = result.users;
        // this.users = result.filter((user: any) =>
        //   user.username.match($event.target.value)
        // );
        console.log(this.users);
      });
  }
  setUserSelected(e: any) {
    console.log(e);
    this.userName = e.target.value;
    this.users = this.users.filter((user) => user.username === e.target.value);
  }
}
