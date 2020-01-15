import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EstealamService} from '../../service/estealam.service';
import * as moment from 'jalali-moment';
import {GetEstelamService} from '../../service/get-estelam.service';

@Component({
  selector: 'app-entrance-sodor-bime',
  templateUrl: './entrance-sodor-bime.component.html',
  styleUrls: ['./entrance-sodor-bime.component.scss']
})
export class EntranceSodorBimeComponent implements OnInit, OnDestroy {
  subscribe;
  formValue = {
    name: '', lastName: '', passNo: '',
    gender: '', country: '', duration: '', date: ''
  };
  reqRes = [];

  constructor(private router: Router,
              private sendFormValue: EstealamService,
              private getEstelamService: GetEstelamService,
  ) {
  }

  ngOnInit() {
    this.getFormValue();
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

  getFormValue() {
    this.subscribe = this.sendFormValue.getMessage().subscribe(res => {
      res.message.formValue.date = moment(res.message.formValue.date).format('YYYY-MM-DD');
      this.formValue = res.message.formValue;
      this.reqRes = res.message.reqRes;
    });
  }

  onEdit() {
    this.getEstelamService.sendMessageEdit(this.formValue);
    this.onBack();
  }

  onBack() {
    this.router.navigate(['/pages/entrance-travel-insurance']);
  }

}
