import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";

  constructor(private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.email, this.password).subscribe(done => {
      console.log(`User Login Request submitted, received : ${done}`)
      this.router.navigate(['']);
    })
   
  }
}
