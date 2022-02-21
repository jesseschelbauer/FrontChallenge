import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterModel } from '../models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.createForm();
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', Validators.required],
      cpf: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  @Output()
  register = new EventEmitter<RegisterModel>();

  onSubmit() {
    if(!this.form.valid)
      return;

      this.register.emit(this.form.value);
  }

  // Duplicated in login This code need be moved to a another place
  // Validation messages should de placed inside a directive or component
  checkError(abstractControl: AbstractControl | null, error:string){
    return abstractControl?.touched && abstractControl.hasError(error);
  }
}