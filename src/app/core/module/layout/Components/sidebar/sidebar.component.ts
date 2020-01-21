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
      title: 'بیمه  مسافرتی', icon: 'fa fa-home', hasChile: true, role: 'Insurance', subMenu: [
        {title: 'ورود به ایران', path: 'entrance-travel-insurance', hasChile: false},
      ]
    }, {
      title: 'نمایش بیمه ها', icon: 'fa fa-home', hasChile: true, role: 'Insurance', subMenu: [
        {title: 'بیمه‌نامه‌های ورود به ایران', path: 'show-insurance', hasChile: false},
      ]
    }, {
      title: 'امور نمایندگان', icon: 'fa fa-home', hasChile: true, role: 'Token', subMenu: [
        {title: 'دریافت Token', path: 'get-token', hasChile: false},
      ]
    }, {
      title: 'ثبت کاربر توسط نمایندگان', icon: 'fa fa-home', role: 'Agent', hasChile: false, path: 'create-user'
    },
  ];
  sidebarValueControl = [];

  constructor(private tokenService: TokenService) {
  }


  ngOnInit() {
    this.token = localStorage.getItem('token');
    this.hasLogin = this.token;
    if (this.token !== undefined && this.token !== null) {
      this.getSideBar();
    } else {
      this.menu = [];
    }

  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

  onClick() {
    window.location.href = 'http://faranam.net/';
  }

  getSideBar() {
    this.tokenService.getSidebard().subscribe(res => {
      this.sidebarValueControl = res.Items;
      this.getItems();
    });
  }

  getItems() {
    const menu = this.menu;
    for (let i = menu.length - 1; i >= 0; i--) {
      this.getSunMenu(i);
    }
  }

  getSunMenu(i) {
    const sidebar = this.sidebarValueControl;
    const has = [];
    for (let x = sidebar.length - 1; x >= 0; x--) {
      const index = this.sidebarValueControl[x].ControllerName.indexOf(this.menu[i].role);
      const data = this.getTrue(index);
      has.push(data);
    }
    if (has.indexOf(true) === -1) {
      this.menu.splice(i, 1);
    }
  }

  getTrue(val) {
    if (val === -1) {
      return false;
    } else {
      return true;
    }
  }

}
