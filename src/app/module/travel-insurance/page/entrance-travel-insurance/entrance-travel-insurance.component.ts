import {Component, OnInit} from '@angular/core';
import {EntranceTravelInsuranceService} from '../../service/entrance-travel-insurance.service';
import {FormValidateService} from '../../../../core/services/Form-Validate.service';

@Component({
  selector: 'app-entrance-travel-insurance',
  templateUrl: './entrance-travel-insurance.component.html',
  styleUrls: ['./entrance-travel-insurance.component.scss']
})
export class EntranceTravelInsuranceComponent implements OnInit {
  maxDate = new Date();
  genderList = [];
  countryList = [];

  constructor(private service: EntranceTravelInsuranceService,
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
      this.submittedForm(form);
    }
  }


  submittedForm(data) {
    this.service.submitForm(data.value).subscribe(res => {
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
