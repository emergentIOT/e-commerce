import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { User } from '../interfaces/User';


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
