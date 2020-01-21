import {ApiService} from '../../../core/http/api.service';
import {Injectable} from '@angular/core';

@Injectable()
export class CreateUserService {
  url = 'InsuranceSrv/api/User/';

  constructor(private service: ApiService<any>) {
  }


  getGridData(data) {
    return this.service.post(this.url + `GetAllUsers` , data);

  }
  createUser(data) {
    return this.service.post(this.url + `CreateUserWithRole`, data);

  }

}
