import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  //FormGroup
  userGroup = new FormGroup({
    name : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required]),
  });
  constructor(private  authService: AuthService,
    private router: Router) { }

  ngOnInit() {
     
  }

  register() {
    const user = this.userGroup.getRawValue();
    this.authService.register(user).subscribe(data => {
      console.log("Data received");
      this.router.navigate(['/login']);
    })
  }



}
