import {Injectable} from '@angular/core';
import {ApiService} from '../../../core/http/api.service';

@Injectable()
export class EntranceTravelInsuranceService {
  url = 'razitenderinquiry/api/Inquery/';

  constructor(private apiService: ApiService<any>) {
  }

  submitForm(data) {
    return this.apiService.post(this.url + 'GetTripInsuranceInquiry', data);
  }

  getGender() {
    return this.apiService.get(this.url);
  }

  getCountry() {
    return this.apiService.get(this.url);
  }
}
