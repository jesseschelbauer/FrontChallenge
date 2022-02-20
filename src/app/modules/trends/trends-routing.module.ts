import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrendsPageComponent } from './trends-page/trends-page.component';

const routes: Routes = [
  { path: "tops", component: TrendsPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrendsRoutingModule { }
