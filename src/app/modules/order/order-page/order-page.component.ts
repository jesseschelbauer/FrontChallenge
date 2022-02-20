import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasePageComponent } from '../../core/base-page.component';
import { LocationService } from '../../core/location.service';

import { OrderModel } from '../models';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent extends BasePageComponent implements OnInit {
  symbol: string = "";

  constructor(private orderService:OrderService, private locationService: LocationService, private route: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    super.subscription = this.route.parent!.params.subscribe(params => {
      this.symbol = params.symbol;
    });
  }

  public create(order:OrderModel){
    super.subscription = this.orderService.create(order).subscribe(a => this.locationService.back());
  }

}
