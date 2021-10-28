import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newTask: string = '';
  tasks: string[] = [];
  invalid: boolean = false;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodoList()
    .subscribe(
      (tasks) => {
        if(tasks){ 
          this.tasks = tasks.map((t: any) => t.name)
          console.log('tasks', this.tasks)
        }
      },
      (error: any) => {
        console.log('Error Getting Task: ', error);
      });
  }

  addTask() {
    if(!this.newTask){
      this.invalid = true;
      return;
    }
    this.todoService.createTask({name: this.newTask, status: false})
    .subscribe(
      response => {
        console.log(response);
        this.invalid = false;
        this.tasks.push(this.newTask);
        this.newTask = '';
      },
      error => {
        console.log('Error Adding New Task: ', error);
      });
  }
}
