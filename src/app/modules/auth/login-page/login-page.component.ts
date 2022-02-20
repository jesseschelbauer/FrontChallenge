
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BasePageComponent } from '../../core/base-page.component';
import { AuthService } from '../auth.service';
import { LoginModel } from '../models';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent extends BasePageComponent {
  

  constructor(private authService: AuthService, private router:Router) {
    super();
    
  }
  public login(loginModel: LoginModel) {
    super.subscription = this.authService.login(loginModel).subscribe(a => this.router.navigateByUrl(`/dashboard`));
  }
}