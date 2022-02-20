import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RegisterModel } from '../models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerModel:RegisterModel = new RegisterModel();
  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  submit = new EventEmitter<RegisterModel>();

  register(){
    this.submit.emit(this.registerModel);
  }
}