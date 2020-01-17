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
      this.genderList = res.Data;
    });
  }

  getCountry() {
    this.service.getCountry().subscribe(res => {
      this.countryList = res.Data;
    });
  }


  sodorBimeName(id) {

    const token = localStorage.getItem('userToken');
    const formValue = this.formValue;
    const reqValue = this.reqRes.filter(x => x.Id = id);
    const data = {
      AuthToken: token,
      NationalCode: 'string',
      FirstName: 'string',
      LastName: 'string',
      EnglishFirstName: formValue.name,
      EnglishLastName: formValue.lastName,
      Gender: formValue.gender,
      IdentityNo: 'string',
      PhoneNumber: 'string',
      CellPhone: 'string',
      FatherName: 'string',
      IssueCity: 'string',
      PostalCode: 'string',
      BirthDate: formValue.date,
      IsIranian: 0,
      Address: 'string',
      ForeignCode: 'string',
      InsuranceType: 'string',
      ContractNo: 'string',
      PassportNo: formValue.passNo,
      AgentCode: 'string',
      CoverageLimit: 'string',
      TripType: 0,
      TripDurationType: 0,
      InsuranceDuration: 'string',
      GroupDiscountType: 'string',
      Zone: reqValue[0].ZoneTitle,
      CountryId: reqValue[0].Name,
      LocationZoneId: 'string',
      PrintFormName: 'string',
      Serie: 'string',
      Serial: 'string',
      ClearingType: 0,
      DepositAccount: 'string',
      PayId: 'string',
      FirstInstallmentDate: 'string',
      FirstInstallmentPercent: 'string',
      InstallmentPeriod: 'string',
      InstallmentCount: 'string',
      ReceivedNo: 'string',
      ReceivedDate: 'string'

    };
    this.service.sodorBimeName(data).subscribe((res) => {

    });
  }
}
