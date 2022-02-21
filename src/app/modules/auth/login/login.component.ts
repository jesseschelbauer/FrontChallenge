import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoginModel } from '../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.form = this.createForm();
  }
  
  ngOnInit(): void {
  }

  private createForm() {
    return this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
  }

  @Output()
  login = new EventEmitter<LoginModel>();

  onSubmit(){
    this.login.emit(this.form.value);
  }

  checkError(abstractControl: AbstractControl | null, error:string){
    return abstractControl?.touched && abstractControl.hasError(error);
  }
}
