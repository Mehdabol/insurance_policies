import {Component, OnDestroy, OnInit} from '@angular/core';
import {EntranceTravelInsuranceService} from '../../service/entrance-travel-insurance.service';
import {FormValidateService} from '../../../../core/services/Form-Validate.service';
import {Router} from '@angular/router';
import {EstealamService} from '../../service/estealam.service';
import {GetEstelamService} from '../../service/get-estelam.service';


@Component({
  selector: 'app-entrance-travel-insurance',
  templateUrl: './entrance-travel-insurance.component.html',
  styleUrls: ['./entrance-travel-insurance.component.scss']
})
export class EntranceTravelInsuranceComponent implements OnInit, OnDestroy {
  maxDate = new Date();
  genderList = [
    {id: 1, title: 'مرد'},
    {id: 2, title: 'زن'}


  ];
  countryList = [
    {id: 1, title: 'iran'}
  ];
  formValue = {
    name: '', lastName: '', passNo: '',
    gender: '', country: '', duration: '', date: ''
  };
  subscribe;
  constructor(private service: EntranceTravelInsuranceService,
              private router: Router,
              private sendFormValue: EstealamService,
              private getEstelamService: GetEstelamService,
              private validateForm: FormValidateService) {
    this.subscribe = this.getEstelamService.getMessageEdit().subscribe(res => {
      debugger;
      // res.message.formValue.date = moment(res.message.formValue.date).format('YYYY-MM-DD');
      // this.formValue = res.message.formValue;
    });
  }

  ngOnInit() {
    this.getFormValue();
    // this.getCountry();
    // this.getGender();
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }


  getFormValue() {

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
    this.router.navigate(['pages/entrance-sodor']);
    const value = {Age: 20, Duration: this.formValue.duration};
    this.service.submitForm(value).subscribe(res => {
      const data = {formValue: this.formValue, reqRes: res.Data};
      this.sendFormValue.sendMessage(data);
    });
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
