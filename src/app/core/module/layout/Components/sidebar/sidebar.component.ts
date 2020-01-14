import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  token;
  menu = [
    // {title: 'خانه', icon: 'fa fa-home', path: 'health-centers', hasChile: false},
    {
      title: 'بیمه  مسافرتی', icon: 'fa fa-home', hasChile: true, subMenu: [
        {title: 'ورود به ایران', path: 'entrance-travel-insurance', hasChile: false},
        {title: 'خروج از ایران', path: 'agencies', hasChile: false},
      ]
    },
  ];

  constructor() {

  }


  ngOnInit() {
  }


}
