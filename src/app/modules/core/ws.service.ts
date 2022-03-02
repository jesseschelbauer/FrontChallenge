import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { TrendService } from '../trends/trend.service';

@Injectable({
  providedIn: 'root'
})
export class WsService {
  connection: signalR.HubConnection | undefined;
  

  constructor(private trendService:TrendService) {
    this.create();
  }

  public create() {
    this.connection = new signalR.HubConnectionBuilder().withUrl("https://localhost:49319/ws-trends", { withCredentials: false }).build();
    this.connection
  }

  public start(){
    this.connection?.start().then(() => {

    });
  }

  onTopTrends(){
    this.connection?.on("TopTrends", (a) =>{
      this.trendService.update(a);
    });
  }
}