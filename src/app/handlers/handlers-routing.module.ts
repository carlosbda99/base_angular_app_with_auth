import { NgModule } from '@angular/core';
import {Route, RouterModule} from "@angular/router";
import {PermissionDeniedComponent} from "./pages/permission-denied/permission-denied.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {UnexpectedErrorComponent} from "./pages/unexpected-error/unexpected-error.component";

const routes: Route[] = [
  {
    path: 'nao-permitido',
    component: PermissionDeniedComponent,
  },
  {
    path: 'nao-encontrado',
    component: NotFoundComponent
  },
  {
    path: 'erro-inesperado',
    component: UnexpectedErrorComponent
  },
  {
    path: '**',
    redirectTo: 'e/nao-encontrado'
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HandlersRoutingModule { }
