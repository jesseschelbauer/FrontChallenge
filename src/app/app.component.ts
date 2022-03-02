import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WsService } from './modules/core/ws.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private route: ActivatedRoute, private router: Router, private wsService:WsService) { }
  title = 'FrontChallenge';

  ngOnInit(): void {
    this.wsService.create();
    this.wsService.start();
    this.wsService.onTopTrends();
  }
}
