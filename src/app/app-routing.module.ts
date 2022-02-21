import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardGuard } from './modules/dashboard/dashboard.guard';
import { DashboardComponent } from './modules/dashboard/dashboard/dashboard.component';

const Path = {
  Dashboard: "dashboard"
}

const routes: Routes = [
  { path: "", loadChildren: () => import("./modules/auth/auth.module").then(m => m.AuthModule) },
  { path: Path.Dashboard, component: DashboardComponent, canLoad: [DashboardGuard], canActivate: [DashboardGuard],
    children: [
      { path: "trends", loadChildren: () => import("./modules/trends/trends.module").then(m => m.TrendsModule) },
      { path: "order/:symbol", loadChildren: () => import("./modules/order/order.module").then(m => m.OrderModule), outlet: "orderOutlet" },
      { path: "account", loadChildren: () => import("./modules/account/account.module").then(m => m.AccountModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
