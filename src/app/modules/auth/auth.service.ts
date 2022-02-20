import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpService } from '../core/http.service';
import { LocalStorageService } from '../core/local-storage.service';
import { AuthInfo, LoginModel, LoginRespose, LoginUserInfo, RegisterModel, registerRespose, TOKEN_KEY } from './models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  private _userInfo: LoginUserInfo | undefined ;

  constructor(private localStorageService:LocalStorageService, private httpService: HttpService) { }

  login(loginModel: LoginModel): Observable<LoginRespose> {
    return this.httpService.post<LoginRespose>("/auth", loginModel).pipe(
      tap(t => {
        this.localStorageService.set(TOKEN_KEY, t.token);
        this._userInfo = t.user;
      }));
  }

  register(registerModel: RegisterModel): Observable<registerRespose> {
    return this.httpService.post<registerRespose>("/register", registerModel);
  }

  public get isLoggedIn() : AuthInfo {
    const token = this.localStorageService.get(TOKEN_KEY);
    return { isLoggedIn : token != null, token : token   };
  } 

  public get userInfo() : LoginUserInfo | undefined  {
    return this._userInfo;
  }
}