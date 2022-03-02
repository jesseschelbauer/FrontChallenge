import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Trend } from '../models';
import { TrendService } from '../trend.service';

@Component({
  selector: 'app-trends-page',
  templateUrl: './trends-page.component.html',
  styleUrls: ['./trends-page.component.css']
})
export class TrendsPageComponent implements OnInit {

  trends$: Observable<Trend[]> = of([]);

  constructor(private trendService: TrendService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.trends$ = this.trendService.topTrends$;
  }

  public order(trend: Trend) {
   this.router.navigateByUrl(`dashboard/(trends/tops//orderOutlet:order/${trend.symbol}/create)`,{ skipLocationChange:true});
  }
}