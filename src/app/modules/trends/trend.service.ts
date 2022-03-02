import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpService } from '../core/http.service';
import { Trend } from './models';

@Injectable({
  providedIn: 'root'
})
export class TrendService {

  sub = new BehaviorSubject<Trend[]>([]);
  topTrends$ = this.sub.asObservable();

  constructor(private httpService: HttpService) { }

  topTrends(): Observable<Trend[]> {
    return this.httpService.get<Trend[]>("/trends");
  }

  update(trends: Trend[]){
    this.sub.next(trends);
  }
}