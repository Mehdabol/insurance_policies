import {Injectable} from '@angular/core';
import {ApiService} from '../../../core/http/api.service';

@Injectable()
export class GetTokenService {
  url = 'InsuranceSrv/api/Insurance/';

  constructor(private apiService: ApiService<any>) {
  }

  getUserToken(data) {
    return this.apiService.post(this.url + `GetToken?userName=${data.userName}&password=${data.password}`, '');
  }
}
