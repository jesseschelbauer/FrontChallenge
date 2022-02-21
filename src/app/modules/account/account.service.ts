import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../core/http.service';
import { AccountInfo } from './models';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private httpService: HttpService) { }

  accountInfo(): Observable<AccountInfo> {
    return this.httpService.get<AccountInfo>("/account-info");
  }
}
