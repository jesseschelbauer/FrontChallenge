import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { AccountInfo } from '../models';

@Component({
  selector: 'app-account-info-page',
  templateUrl: './account-info-page.component.html',
  styleUrls: ['./account-info-page.component.css']
})
export class AccountInfoPageComponent implements OnInit {
  accountInfo$: any;
  constructor(private accountService:AccountService) { }
  ngOnInit(): void {
    this.accountInfo$ = this.accountService.accountInfo();
  }
}
