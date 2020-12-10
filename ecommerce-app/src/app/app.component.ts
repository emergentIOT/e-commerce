import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';
import { User } from './interfaces/User';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {


  title = 'ecommerce-app';

  user: User | undefined;
  userSubscription: Subscription | undefined;

  ngOnInit(): void {
   
  }

  ngOnDestroy(): void {
    if(this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  

  constructor(private authService: AuthService,
    private router: Router) {
     this.userSubscription = this.authService.user.subscribe(user => {
      console.log("this.user", this.user);    
      this.user = user;
     });

     console.log("this.userSsubscription", this.userSubscription);
  }

  logout() {
      this.authService.logout();
      this.router.navigate(['/']);
  }




}
