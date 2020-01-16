import {Component, OnDestroy, OnInit} from '@angular/core';
import {TokenService} from '../../../../../module/auth/service/token.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  token;
  subscribe;
  hasLogin;
  menu = [
    {
      title: 'بیمه  مسافرتی', icon: 'fa fa-home', hasChile: true, subMenu: [
        {title: 'ورود به ایران', path: 'entrance-travel-insurance', hasChile: false},
      ]
    }, {
      title: 'نمایش بیمه ها', icon: 'fa fa-home', hasChile: true, subMenu: [
        {title: 'بیمه‌نامه‌های ورود به ایران', path: 'show-insurance', hasChile: false},
      ]
    }, {
      title: 'ثبت کاربر توسط نمایندگان', icon: 'fa fa-home', hasChile: false, path: 'create-user'
    },
  ];

  constructor(private tokenService: TokenService) {

  }


  ngOnInit() {
    // this.getToken();
    // this.token = localStorage.getItem('token');
    // this.hasLogin = this.token;
    // if (this.token === undefined || this.token === null) {
    //   this.menu = [];
    // } else {
    //   this.menu = [...this.menu];
    // }
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

  onClick() {
    window.location.href = 'http://faranam.net/';
  }

  getToken() {
    this.tokenService.getMessage().subscribe((res) => {
      this.hasLogin = res;

      if (res === null) {
        this.menu = [];
      } else {
        this.menu = [...this.menu];
      }
    });
  }

}
