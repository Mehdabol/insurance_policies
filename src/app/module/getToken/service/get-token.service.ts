import {Injectable} from '@angular/core';
import {ApiService} from '../../../core/http/api.service';

@Injectable()
export class GetTokenService {
  url = 'InsuranceSrv/api/Common/';

  constructor(private apiService: ApiService<any>) {
  }

  getUserToken(data) {
    return this.apiService.post(this.url + `GetToken`, data);
  }
}
