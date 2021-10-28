import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, HttpClientTestingModule ]
    });
    service = TestBed.inject(TodoService);
  });

  it('service should be created', () => {
    expect(service).toBeTruthy();
  });

  it('service should have apiUrl property', () => {
    service = TestBed.inject(TodoService);
    expect(service.apiURL).toBeDefined;
  });

  it('service should have getTodoList function', () => {
    service = TestBed.inject(TodoService);
    expect(service.getTodoList).toBeDefined;
  });

  it('service should have createTask fucntion', () => {
    service = TestBed.inject(TodoService);
    expect(service.createTask).toBeDefined;
  });

  it('service should handleError function', () => {
    service = TestBed.inject(TodoService);
    expect(service.handleError).toBeDefined;
  });
});
