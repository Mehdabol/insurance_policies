import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  token;
  menu = [
    {title: 'خانه', icon: 'fa fa-home', path: 'health-centers', hasChile: false},
    // {
    //   title: 'اطلاع رسانی', icon: 'fa fa-home', hasChile: true, subMenu: [
    //     {title: 'مراکز درمانی', path: 'health-centers', hasChile: false},
    //     {title: 'نمایندگان', path: 'agencies', hasChile: false},
    //     {title: 'شعب', path: 'dashboard1', hasChile: false},
    //     {title: 'خدمات بیمه ای', path: 'dashboard1', hasChile: false},
    //   ]
    // },
  ];

  constructor() {

  }


  ngOnInit() {
  }


}
