import {Injectable} from '@angular/core';
import {ApiService} from '../../../core/http/api.service';

@Injectable()
export class GetTokenService {
  url = 'authenticationwebservice/api/Authenticate/';

  constructor(private apiService: ApiService<any>) {
  }

  getUserToken(data) {
    return this.apiService.post(this.url + 'GetUserToken', data);
  }
}
