import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
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

});
