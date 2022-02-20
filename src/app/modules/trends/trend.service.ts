import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../core/http.service';
import { Trend } from './models';

@Injectable({
  providedIn: 'root'
})
export class TrendService {

  constructor(private httpService: HttpService) { }

  topTrends(): Observable<Trend[]> {
    return this.httpService.get<Trend[]>("/trends");
  }
}