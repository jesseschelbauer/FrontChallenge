import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrendsRoutingModule } from './trends-routing.module';
import { TrendsPageComponent } from './trends-page/trends-page.component';
import { TrendsComponent } from './trends/trends.component';


@NgModule({
  declarations: [
    TrendsComponent,
    TrendsPageComponent
  ],
  imports: [
    CommonModule,
    TrendsRoutingModule
  ], exports:[TrendsPageComponent]
})
export class TrendsModule { }
