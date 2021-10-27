import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newTask: string = '';
  tasks: string[] = [];
  invalid: boolean = false;

  addTask() {
    if(!this.newTask){
      this.invalid = true;
      return;
    }
    this.invalid = false;
    this.tasks.push(this.newTask);
    this.newTask = '';
  }
}
