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
  ],
  imports: [
    AppRoutingModule,
    AgGridModule.withComponents([]),
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
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true},
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
