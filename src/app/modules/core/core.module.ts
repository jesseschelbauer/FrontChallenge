import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasePageComponent } from './base-page.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [BasePageComponent, NotificationComponent],
  imports: [
    CommonModule
  ], exports:[
    BasePageComponent
  ]
})
export class CoreModule { }
