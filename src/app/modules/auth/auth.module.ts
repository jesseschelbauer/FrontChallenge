import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    LoginPageComponent,
    RegisterPageComponent
    
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    CoreModule, 
    FormsModule
  ]
})
export class AuthModule { }
