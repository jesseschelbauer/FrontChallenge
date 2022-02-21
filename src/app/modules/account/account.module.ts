import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountInfoComponent } from './account-info/account-info.component';
import { AccountInfoPageComponent } from './account-info-page/account-info-page.component';


@NgModule({
  declarations: [
    AccountInfoComponent,
    AccountInfoPageComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
