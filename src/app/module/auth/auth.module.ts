import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AuthComponent} from './auth.component';
import {AuthRoutingModule} from './auth.routing.module';

@NgModule({
  declarations: [
    AuthComponent,
    // LoginComponent,
    // RegisterComponent,
    // ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule

  ],
  providers: [],
  bootstrap: []
})
export class AuthModule {
}
