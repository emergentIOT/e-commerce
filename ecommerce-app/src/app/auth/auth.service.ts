import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { User } from '../interfaces/User';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user$ = new Subject<User>();
  private apiUrl = 'http://localhost:8000/api/auth/'

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string) {
    const loginCredentials = { email, password };
    return this.httpClient
      .post<User>(`${this.apiUrl}login`, loginCredentials)
      .pipe(
        switchMap(foundUser => {
          console.log(`Found User ${foundUser}`);
          this.setUser(foundUser);
          return of(foundUser);
        }),
        catchError(error => {
          return throwError(`Login details not verified ${error}`)
        })
      );

  }

  logout() {
    //Remove user from Subject
    //Clean tokens
    //this.user$.next(null);
    console.log("User has been logout");
  }

  get user() {
    return this.user$.asObservable();
  }

  register(user: any) {
    
    //Make an API call to save user in db.
    //update the user subject.
    this.setUser(user);
    console.log("User Regitration", user);
    return of(user);
  }

  private setUser(user: User | undefined) {
    this.user$.next(user);
  }
}
