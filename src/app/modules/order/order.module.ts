import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order/order.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { CoreModule } from '../core/core.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [OrderComponent, OrderPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OrderRoutingModule,
    CoreModule
  ]
})
export class OrderModule { }
