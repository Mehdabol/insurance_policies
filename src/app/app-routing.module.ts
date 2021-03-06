import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BaseLayoutComponent} from './core/module/layout/base-layout/base-layout.component';
import {PageDahsboardComponent} from './module/dashboard/page/page-dahsboard/page-dahsboard.component';
import {EntranceTravelInsuranceComponent} from './module/travel-insurance/page/entrance-travel-insurance/entrance-travel-insurance.component';
import {LoginComponent} from './module/auth/login/login.component';
import {PageShowInsuranceComponent} from './module/show-insurance/page/page-show-insurance/page-show-insurance.component';
import {PageCreateUserComponent} from './module/create-user/page/page-create-user/page-create-user.component';
import {AddCreateUserComponent} from './module/create-user/component/add-create-user/add-create-user.component';
import {PageGetTokenComponent} from './module/getToken/page/page-get-token/page-get-token.component';
import {AuthGuard} from './core/guard/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/pages/dashboard',
    pathMatch: 'full',
  },

  {
    path: 'pages',
    component: BaseLayoutComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'dashboard', component: PageDahsboardComponent, canActivate: [AuthGuard]},
      {path: 'entrance-travel-insurance', component: EntranceTravelInsuranceComponent, canActivate: [AuthGuard]},
      {path: 'show-insurance', component: PageShowInsuranceComponent, canActivate: [AuthGuard]},
      {path: 'create-user', component: PageCreateUserComponent, canActivate: [AuthGuard]},
      {path: 'add-create-user', component: AddCreateUserComponent, canActivate: [AuthGuard]},
      {path: 'get-token', component: PageGetTokenComponent, canActivate: [AuthGuard]},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
