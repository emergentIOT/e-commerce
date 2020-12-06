import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string, password: string){
    const loginCredentials = { email, password };
    console.log("User logn", loginCredentials);
    return of(loginCredentials);
  }
}
