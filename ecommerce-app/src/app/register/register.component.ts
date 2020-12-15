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
    repeatPassword: new FormControl('', [Validators.required, this.passwordMatch])
  });
  constructor(private  authService: AuthService,
    private router: Router) { }

  ngOnInit() {
     
  }

  //Custom password match
  passwordMatch(control: FormControl) {
    let password = control.root.get('password');
    return password && control.value !== password.value ? {
      passwordMatch: true
    } : null ;
  }

  register() {
    if(!this.userGroup.valid) {
      return;
    }

    const user = this.userGroup.getRawValue();
    this.authService.register(user).subscribe(data => {
      console.log("Data received");
      this.router.navigate(['/login']);
    })
  }

  get fullname() {
    return this.userGroup.get('fullname');
  }

  get email() {
    return this.userGroup.get('email');
  }

  get password() {
    return this.userGroup.get('password');
  }

  get repeatPassword() {
    return this.userGroup.get('repeatPassword');
  }





}
