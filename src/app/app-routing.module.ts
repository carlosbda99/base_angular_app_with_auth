import { NgModule } from '@angular/core';
import {Route, RouterModule} from "@angular/router";
import {GuestGuard} from "./shared/guards/guest.guard";
import {AuthorizedGuard} from "./shared/guards/authorized.guard";

const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate: [GuestGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    canLoad: [AuthorizedGuard]
  },
  {
    path: 'e',
    loadChildren: () => import('./handlers/handlers.module').then(m => m.HandlersModule)
  },
  {
    path: '**',
    redirectTo: '/e/nao-encontrado'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
