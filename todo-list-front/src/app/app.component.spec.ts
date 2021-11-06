import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { TodoService } from './todo.service';
import * as Rx from 'rxjs';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [ FormsModule, HttpClientModule, HttpClientTestingModule],
      providers: [TodoService]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('component should have the input to take todo_task', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const inputElement = fixture.nativeElement.querySelector('#todo')
    expect(inputElement instanceof HTMLInputElement).toBeTruthy();
  });

  it('component should have the button to submit/add todo_task', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const inputElement = fixture.nativeElement.querySelector('#submit')
    expect(inputElement instanceof HTMLButtonElement).toBeTruthy();
  });

  it('component should have the ul to display the added todo_tasks', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const inputElement = fixture.nativeElement.querySelector('#list')
    expect(inputElement instanceof HTMLUListElement).toBeTruthy();
  });

  it(`component should have as newTask propery (empty string) to bind with new task input`, () => {
    const app = TestBed.createComponent(AppComponent).componentInstance;;
    expect(app.newTask).toBe('');
  });

  it(`component should have as tasks array`, () => {
    const app = TestBed.createComponent(AppComponent).componentInstance;
    expect(Array.isArray(app.tasks)).toBeTruthy();
  });

  it(`component should have propery called 'invalid' with type boolean to check the input validity`, () => {
    const app = TestBed.createComponent(AppComponent).componentInstance;
    expect(app.invalid).toBeDefined();
    expect(typeof app.invalid == "boolean").toBeTruthy();
  });

  it(`component should set 'invalid' propery to true, when no new task is not provided on addTask`, () => {
    const app = TestBed.createComponent(AppComponent).componentInstance;
    app.newTask = '';
    app.addTask();
    expect(app.invalid).toBe(true);
  });

  it(`component should have the div to display the message when input is invalid`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.invalid = true;
    fixture.detectChanges();
    const inputElement = fixture.nativeElement.querySelector('.invalid-feedback')
    expect(inputElement instanceof HTMLDivElement).toBeTruthy();
  });

  it(`component should not have the div to display the message when input is valid`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.invalid = false;
    fixture.detectChanges();
    const inputElement = fixture.nativeElement.querySelector('.invalid-feedback')
    expect(inputElement instanceof HTMLDivElement).toBeFalsy();
  });

  it(`component intialzation should get all the tasks in a tasks array`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const service = fixture.debugElement.injector.get(TodoService);
    let spy_getTodoList = jest.spyOn(service,"getTodoList").mockImplementation(() => {
      return Rx.of([{
          _id: "61775b8d7fc1164b78a2617d",
          name: "make a new app",
          status: false,
      },
      {
          _id: "617768dc702c7322046dd1c7",
          name: "sleep",
          status: false,
      }]);
    });
    app.ngOnInit();
    expect(spy_getTodoList).toHaveBeenCalled();
    expect(app.tasks).toEqual(["make a new app", "sleep"]);
  });

  it(`component method addTask() should add a new task in the tasks array`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const service = fixture.debugElement.injector.get(TodoService);
    app.newTask = 'New Test Task';
    let spy_createTask = jest.spyOn(service,"createTask").mockImplementation(() => {
      app.tasks.push(app.newTask);
      return Rx.of({ _id: "6185c401db4d1644033c7890", name: "Test Task", status: false, "__v": 0 });
    });
    app.addTask();
    expect(spy_createTask).toHaveBeenCalled();
    expect(app.tasks[app.tasks.length - 1]).toBe('New Test Task')
  });
});
