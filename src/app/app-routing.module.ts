import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BaseLayoutComponent} from './core/module/layout/base-layout/base-layout.component';
import {PageDahsboardComponent} from './module/dashboard/page/page-dahsboard/page-dahsboard.component';
import {EntranceTravelInsuranceComponent} from './module/travel-insurance/page/entrance-travel-insurance/entrance-travel-insurance.component';
import {LoginComponent} from './module/auth/login/login.component';

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
      {path: 'dashboard', component: PageDahsboardComponent},
      // , canActivate: [AuthGuard]
      {path: 'entrance-travel-insurance', component: EntranceTravelInsuranceComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
