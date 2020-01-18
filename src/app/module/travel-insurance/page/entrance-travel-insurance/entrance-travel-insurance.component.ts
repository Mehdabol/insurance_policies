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
    const data = {
      AuthToken: token,
      NationalCode: 'string',
      FirstName: '22',
      LastName: 'صضثضص',
      EnglishFirstName: formValue.name,
      EnglishLastName: formValue.lastName,
      Gender: 1,
      IdentityNo: '',
      PhoneNumber: '02186757000',
      CellPhone: '',
      FatherName: '',
      IssueCity: '',
      PostalCode: '',
      BirthDate: '1366/03/14',
      IsIranian: 0,
      Address: 'ایران تهران فرودگاه امام خمینی',
      ForeignCode: '',
      InsuranceType: 31,
      ContractNo: 6128,
      PassportNo: formValue.passNo,
      AgentCode: 210223,
      CoverageLimit: 10000,
      TripType: 0,
      TripDurationType: 0,
      InsuranceDuration: 7,
      GroupDiscountType: 84,
      Zone: 133,
      CountryId: 591,
      LocationZoneId: '822',
      PrintFormName: 'SoundPrint',
      Serie: 100,
      Serial: 100,
      ClearingType: 2313,
      DepositAccount: 'string',
      PayId: '',
      FirstInstallmentDate: '1398/10/28',
      FirstInstallmentPercent: 100,
      InstallmentPeriod: 1,
      InstallmentCount: 1,
      ReceivedNo: '',
      ReceivedDate: ''

    };
    this.service.sodorBimeName(data).subscribe((res) => {

    });
  }
}
