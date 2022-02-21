import { Component, Input, OnInit } from '@angular/core';
import { AccountInfo } from '../models';
@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    
  }
  
  @Input()
  accountInfo:AccountInfo | null  = null ;

}