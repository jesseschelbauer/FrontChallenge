import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { AuthService } from '../../auth/auth.service';
import { LoginUserInfo } from '../../auth/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user:LoginUserInfo | undefined = undefined;
  
  constructor(private authService:AuthService) { }
  ngOnInit(): void {
    this.user = this.authService.userInfo;
  }
}
