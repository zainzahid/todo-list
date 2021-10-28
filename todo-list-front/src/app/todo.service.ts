import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
    // Define API
    apiURL: string = 'http://localhost:3000/todo';

  constructor(private httpClient: HttpClient) { }

  getTodoList(): Observable<any> {
    return this.httpClient.get(this.apiURL).pipe(
      catchError(this.handleError)
    );
  }

  createTask(data: any): Observable<any> {
    return this.httpClient.post(this.apiURL, data).pipe(
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
}
