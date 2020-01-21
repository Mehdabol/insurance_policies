import {Component, OnInit} from '@angular/core';
import {EntranceTravelInsuranceService} from '../../service/entrance-travel-insurance.service';
import {FormValidateService} from '../../../../core/services/Form-Validate.service';
import {Router} from '@angular/router';
import * as moment from 'jalali-moment';
import {AlertService} from '../../../../core/services/alert.service';


@Component({
  selector: 'app-entrance-travel-insurance',
  templateUrl: './entrance-travel-insurance.component.html',
  styleUrls: ['./entrance-travel-insurance.component.scss']
})
export class EntranceTravelInsuranceComponent implements OnInit {
  maxDate = new Date();
  genderList = [];
  first = true;
  countryList = [];
  formValue: any = {
    name: '', lastName: '', passNo: '',
    gender: '', country: '', duration: '', date: ''
  };
  reqRes = [];
  subscribe;
  keyword = 'Text';
  country: any;
  constructor(private service: EntranceTravelInsuranceService,
              private router: Router,
              private alertService: AlertService,
              private validateForm: FormValidateService) {
  }

  ngOnInit() {
    this.getCountry();
    this.getGender();
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
    const value = {BirthDate: this.formValue.date, Duration: this.formValue.duration};
    if (typeof this.formValue.country !== 'string') {
      this.formValue.country = this.formValue.country.Text;
    }
    this.service.submitForm(value).subscribe(res => {
      this.formValue.date = moment(this.formValue.date).format('YYYY-MM-DD');
      this.reqRes = res.Items;
      this.first = false;

    });
  }

  onEdit() {
    if (typeof this.formValue.country !== 'string') {
      this.formValue.country = this.formValue.country.Text;
    }
    this.first = true;
  }

  getGender() {
    this.service.getGender().subscribe(res => {
      this.genderList = res.Data;
    });
  }

  getCountry() {
    this.service.getCountry().subscribe(res => {
      this.countryList = res.Data;
    });
  }


  selectEvent(item) {
    this.formValue.country = item.Text;
  }

  onChangeSearch(val: string) {
  }

  onFocused(e) {
  }


  sodorBimeName(id) {

    const token = localStorage.getItem('userToken');
    const formValue = this.formValue;
    const reqValue = this.reqRes.filter(x => x.Id = id);
    const gender = this.genderList.filter(x => x.Text === formValue.gender);
    const country = this.countryList.filter(x => x.Text === formValue.country);
    const brithDate = moment(formValue.date).format('jYYYY/jMM/jDD');
    const date = new Date();
    const nowDate = moment(date).format('jYYYY/jMM/jDD');
    const data = {
      AuthToken: token,
      NationalCode: '061019609',
      FirstName: formValue.name,
      LastName: formValue.lastName,
      EnglishFirstName: formValue.name,
      EnglishLastName: formValue.lastName,
      Gender: gender[0].Value,
      IdentityNo: '',
      PhoneNumber: '02186757000',
      CellPhone: '09125079975',
      FatherName: '',
      IssueCity: '',
      PostalCode: '',
      BirthDate: brithDate, // '1366/03/14',
      IsIranian: 0,
      Address: reqValue[0].Name, // for working app
      ForeignCode: '',
      InsuranceType: 31,
      ContractNo: 6128,
      PassportNo: formValue.passNo,
      AgentCode: 210223,
      CoverageLimit: reqValue[0].Coverage,
      TripType: 0,
      TripDurationType: 0,
      InsuranceDuration: formValue.duration,
      GroupDiscountType: '84',
      Zone: reqValue[0].Zone,
      CountryId: country[0].Value,
      LocationZoneId: reqValue[0].LocationZoneId,
      PrintFormName: 'SoundPrint',
      Serie: 100,
      Serial: 100,
      ClearingType: 2313,
      DepositAccount: '',
      PayId: '',
      FirstInstallmentDate: nowDate,
      FirstInstallmentPercent: 100,
      InstallmentPeriod: 1,
      InstallmentCount: 1,
      ReceivedNo: '',
      ReceivedDate: ''

    };
    this.service.sodorBimeName(data).subscribe((res) => {
      this.alertService.success('صدور بیمه نامه با موفقیت انجام شد');

    });
  }
}
