import { Injectable } from '@angular/core';
import { HttpService } from '../core/http.service';
import { OrderModel } from './models';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private httpService: HttpService) { }

  create(order: OrderModel) {
    return this.httpService.post<OrderModel[]>("/order",order);  
  }
}