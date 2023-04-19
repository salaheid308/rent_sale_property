import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService: AuthService,
             private alertify: AlertifyService ,
             private router: Router) { }

  ngOnInit() {
  }
  onLogin(loginForm){
  console.log(loginForm.value );
  const user = this.authService.authUser(loginForm.value);
  if(user){
    localStorage.setItem('token', user.userName);
    localStorage.setItem('userName', user.userName);
    this.alertify.success('yeeeeeeeeeeees');
    this.router.navigate(['/']);
     }else{
      this.alertify.error('noooooooooo');
     }

  }

}
