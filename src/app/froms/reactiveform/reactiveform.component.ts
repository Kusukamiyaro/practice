import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  constructor() { }
fields :any = [
  {key : 'name',
    label:'Full Name',
    type:'input',
    control:'fname'
  },
  {key : 'age',
    label:'Age',
    type:'number',
    control:'age'
  }
]
  ngOnInit(): void {

  }
  submit(form:Form){
    
  }

}
