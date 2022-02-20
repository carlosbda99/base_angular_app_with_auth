import { NgModule } from '@angular/core';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PermissionDeniedComponent } from './pages/permission-denied/permission-denied.component';
import { UnexpectedErrorComponent } from './pages/unexpected-error/unexpected-error.component';
import {HandlersRoutingModule} from "./handlers-routing.module";

@NgModule({
  declarations: [
    NotFoundComponent,
    PermissionDeniedComponent,
    UnexpectedErrorComponent
  ],
  imports: [HandlersRoutingModule]
})
export class HandlersModule { }
