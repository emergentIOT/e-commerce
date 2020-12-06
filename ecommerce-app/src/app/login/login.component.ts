import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string | undefined;
  password: string | undefined;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['']);
  }
}
