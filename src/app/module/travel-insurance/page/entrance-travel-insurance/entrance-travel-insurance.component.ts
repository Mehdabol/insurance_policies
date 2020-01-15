import {Component, OnInit} from '@angular/core';
import {EntranceTravelInsuranceService} from '../../service/entrance-travel-insurance.service';
import {FormValidateService} from '../../../../core/services/Form-Validate.service';
import {Router} from '@angular/router';
import * as moment from 'jalali-moment';


@Component({
  selector: 'app-entrance-travel-insurance',
  templateUrl: './entrance-travel-insurance.component.html',
  styleUrls: ['./entrance-travel-insurance.component.scss']
})
export class EntranceTravelInsuranceComponent implements OnInit {
  maxDate = new Date();
  genderList = [
    {id: 1, title: 'مرد'},
    {id: 2, title: 'زن'}
  ];
  first = true;
  countryList = [
    {id: 1, title: 'iran'}
  ];
  formValue = {
    name: '', lastName: '', passNo: '',
    gender: '', country: '', duration: '', date: ''
  };
  reqRes = [];
  subscribe;
  constructor(private service: EntranceTravelInsuranceService,
              private router: Router,
              private validateForm: FormValidateService) {
  }

  ngOnInit() {
    // this.getCountry();
    // this.getGender();
  }


  formSubmit(form) {
    if (form.invalid) {
      this.validateForm.generateArray(form);
    } else {
      this.formValue = form.value;
      this.submittedForm();
    }
  }


  submittedForm() {
    const value = {Age: 20, Duration: this.formValue.duration};
    this.service.submitForm(value).subscribe(res => {
      this.formValue.date = moment(this.formValue.date).format('YYYY-MM-DD');
      this.reqRes = res.Items;
      this.first = false;

    });
  }

  onEdit() {
    this.first = true;
  }

  getGender() {
    this.service.getGender().subscribe(res => {
      this.genderList = res;
    });
  }

  getCountry() {
    this.service.getCountry().subscribe(res => {
      this.countryList = res;
    });
  }

}
