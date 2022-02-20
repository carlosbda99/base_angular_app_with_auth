import { NgModule } from '@angular/core';
import {Route, RouterModule} from "@angular/router";
import {LoginComponent} from "./pages/login/login.component";

const routes: Route[] = [
  {
    path: '',
    component: LoginComponent
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
export class AuthRoutingModule { }
