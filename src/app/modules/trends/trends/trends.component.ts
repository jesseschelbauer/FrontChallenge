import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trend } from '../models';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  trends:Trend[] | null = [];
  
  public trackBy(index:number, trend:Trend){
    return trend.symbol;
  }

  @Output("order")
  orderEmitter = new EventEmitter<Trend>();

  order(trend:Trend){
    this.orderEmitter.emit(trend);
  }
}