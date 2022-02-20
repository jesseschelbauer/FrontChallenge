import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderModel } from '../models';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  form: FormGroup;
  name = new FormControl(0);

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      amount: [0, Validators.min(1)]
    })
  }

  ngOnInit(): void {

  }

  @Output()
  create = new EventEmitter<OrderModel>();

  onSubmit() {
    var order = Object.assign({}, this.form.value, { symbol:this.symbol });
    this.create.emit(order);
  }

  @Input()
  symbol: string = "";
}
