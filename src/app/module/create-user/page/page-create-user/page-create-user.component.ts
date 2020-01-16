import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-create-user',
  templateUrl: './page-create-user.component.html',
  styleUrls: ['./page-create-user.component.scss']
})
export class PageCreateUserComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onCreate() {
    this.router.navigate(['/pages/add-create-user']);
  }

}
