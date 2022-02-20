import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const Path = {
  Dashboard: "dashboard"
}

const routes: Routes = [
  { path: "", loadChildren: () => import("./modules/auth/auth.module").then(m => m.AuthModule) },
  { path: Path.Dashboard, component: DashboardComponent, canLoad: [DashboardGuard], canActivate: [DashboardGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
