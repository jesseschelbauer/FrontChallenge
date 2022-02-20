import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { LoginModel } from '../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel:LoginModel = new LoginModel();

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  submit = new EventEmitter<LoginModel>();

  login(){
    this.submit.emit(this.loginModel);
  }
}
