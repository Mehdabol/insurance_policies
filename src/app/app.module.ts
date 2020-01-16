import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './core/module/layout/Components/header/header.component';
import {SidebarComponent} from './core/module/layout/Components/sidebar/sidebar.component';
import {FooterComponent} from './core/module/layout/Components/footer/footer.component';
import {PagesLayoutComponent} from './core/module/layout/pages-layout/pages-layout.component';
import {BaseLayoutComponent} from './core/module/layout/base-layout/base-layout.component';
import {ThemeSettingComponent} from './core/module/layout/Components/theme-setting/theme-setting.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SpinnerComponent} from './core/module/spinner/spinner.component';
import {NotificationComponent} from './core/module/layout/Components/notification/notification.component';
import {APP_BASE_HREF, HashLocationStrategy, LocationStrategy} from '@angular/common';
import {MatDatepickerModule, MatInputModule, MatNativeDateModule, MatSelectModule, MatSlideToggleModule} from '@angular/material';
import {DpDatePickerModule} from 'ng2-jalali-date-picker';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LoaderInterceptor} from './core/interceptor/loader.interceptor';
import {NgxMaskModule} from 'ngx-mask';
import {AgGridModule} from 'ag-grid-angular';
import {PageDahsboardComponent} from './module/dashboard/page/page-dahsboard/page-dahsboard.component';
import {EntranceTravelInsuranceComponent} from './module/travel-insurance/page/entrance-travel-insurance/entrance-travel-insurance.component';
import {EntranceTravelInsuranceService} from './module/travel-insurance/service/entrance-travel-insurance.service';
import {FormValidateService} from './core/services/Form-Validate.service';
import {EntranceSodorBimeComponent} from './module/travel-insurance/page/entrance-sodor-bime/entrance-sodor-bime.component';
import {LoginComponent} from './module/auth/login/login.component';
import {JwtInterceptor} from './core/interceptor/jwt.interceptor';
import {AuthGuard} from './core/guard/auth-guard.service';
import {AuthService} from './module/auth/service/auth.service';
import {PageShowInsuranceComponent} from './module/show-insurance/page/page-show-insurance/page-show-insurance.component';
import {GridShowInsuranceComponent} from './module/show-insurance/components/grid-show-insurance/grid-show-insurance.component';
import {PageCreateUserComponent} from './module/create-user/page/page-create-user/page-create-user.component';
import {GridCreateUserComponent} from './module/create-user/component/grid-create-user/grid-create-user.component';
import {AddCreateUserComponent} from './module/create-user/component/add-create-user/add-create-user.component';
import {CreateUserService} from './module/create-user/service/create-user.service';
import {ButtonGridPdfComponent} from './module/show-insurance/components/button-grid-pdf/button-grid-pdf.component';
import {ShowInsuranceService} from './module/show-insurance/service/show-insurance.service';

@NgModule({
  declarations: [
    AppComponent,
    // theme
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    PagesLayoutComponent,
    BaseLayoutComponent,
    ThemeSettingComponent,
    SpinnerComponent,
    NotificationComponent,
    // pages
    PageDahsboardComponent,
    EntranceTravelInsuranceComponent,
    EntranceSodorBimeComponent,
    LoginComponent,
    PageShowInsuranceComponent,
    GridShowInsuranceComponent,
    PageCreateUserComponent,
    GridCreateUserComponent,
    AddCreateUserComponent,
    ButtonGridPdfComponent
  ],
  imports: [
    AppRoutingModule,
    AgGridModule.withComponents([ButtonGridPdfComponent]),
    BrowserAnimationsModule,
    MatSelectModule,
    AutocompleteLibModule,
    MatInputModule,
    HttpClientModule,
    DpDatePickerModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-top-left'
    }),

  ],
  providers: [
    MatDatepickerModule,
    EntranceTravelInsuranceService,
    FormValidateService,
    CreateUserService,
    AuthGuard,
    ShowInsuranceService,
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true},
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
