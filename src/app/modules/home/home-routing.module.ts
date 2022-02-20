import { NgModule } from '@angular/core';
import {Route, RouterModule} from "@angular/router";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";

const routes: Route[] = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: '**',
    redirectTo: '/e/nao-encontrado'
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
