import { Component, OnInit } from '@angular/core';
import { interval, takeWhile } from 'rxjs';

@Component({
  selector: 'app-progress-bar',
  template: `
  <div class="d-flex" #bar [style]="{width : '100%'}">
      <span class="complete-progress" [style]="{width:object.completed+'%'}">{{total-completeCount}} </span>
    <span class="pending-progress" [style]="{width:object.pending+'%'}">{{completeCount}}</span>
  
  </div>
  
  `,
  styles: [`
    .d-flex{
        display :flex;
        
    }
    .pending-progress{
        background-color:orange;

    }
    .complete-progress{
        background-color:green;
    }
    `],
})
export class ProgressBarComponent implements OnInit {
  object = {
    completed :50,
    pending:50,
    total:100
  }
  completeCount =1;
  total=50
  intervalId :any
  ngOnInit(): void {
  this.intervalId=  setInterval(() => {
        if (this.completeCount < this.total) {
          this.completeCount++;
          this.updateBar();
        } else {
          clearInterval(this.intervalId);
        }
      }, 100)
   
  }
updateBar(){
    this.object.completed = Math.ceil((this.completeCount / this.total) * 100);
    this.object.pending = Math.floor(((this.total - this.completeCount)/this.total) *100);
    console.log(this.object);
    
}
updateCount(){
    
   
}
}
