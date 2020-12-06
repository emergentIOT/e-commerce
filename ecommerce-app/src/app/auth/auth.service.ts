import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
export interface User{
  name: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user$ = new Subject<User>();
 
  constructor() { }

  login(email: string, password: string) {
    const loginCredentials = { email, password };
    console.log("User logn", loginCredentials);
    return of(loginCredentials);
  }

  get user() {
    return this.user$.asObservable();
  }

  register(user: User) {
    const registerCredentials = { user };
    this.user$.next(user);
    console.log("User Regitration", registerCredentials);
    return of(registerCredentials);
  }
}
