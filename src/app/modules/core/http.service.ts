import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl = `http://localhost:21323`

  constructor(private httpClient: HttpClient) { }
  post<T>(route: string, data: any) {
    return this.httpClient.post<T>(`${this.baseUrl}${route}`, data);
  }

  get<T>(route: string, params?: HttpParams) {
    return this.httpClient.get<T>(`${this.baseUrl}${route}`, { params: params });
  }
}