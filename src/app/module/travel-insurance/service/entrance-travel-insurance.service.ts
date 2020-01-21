import {Injectable} from '@angular/core';
import {ApiService} from '../../../core/http/api.service';

@Injectable()
export class EntranceTravelInsuranceService {
  url = 'InsuranceSrv/api/Inquiry/';
  InsuranceUrl = 'InsuranceSrv/api/BTOB/';
  urlCommon = 'InsuranceSrv/api/Common/';

  constructor(private apiService: ApiService<any>) {
  }

  submitForm(data) {
    return this.apiService.post(this.url + 'GetTripInsuranceInquiry', data);
  }

  getGender() {
    return this.apiService.post(this.urlCommon + 'GetAllGender', '');
  }

  getCountry() {
    return this.apiService.post(this.urlCommon + 'GetAllCoutries', '');
  }

  sodorBimeName(data) {
    return this.apiService.post(this.InsuranceUrl + 'RegisterBTOBTravelInsurance', data);

  }
}
