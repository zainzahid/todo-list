import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [ FormsModule, HttpClientModule, HttpClientTestingModule]
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
});
