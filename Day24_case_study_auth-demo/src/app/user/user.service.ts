import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl = 'https://689da622ce755fe697896006.mockapi.io/destination/destinations'; // change if needed

  constructor(private http: HttpClient) {}

  registerUser(userData: any): Observable<any> {
    return this.http.post(this.apiUrl, userData).pipe(
      catchError(() =>
        throwError(() => new Error('Registration failed. Please try again.'))
      )
    );
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(() =>
        throwError(() => new Error('Failed to fetch users.'))
      )
    );
  }
}
