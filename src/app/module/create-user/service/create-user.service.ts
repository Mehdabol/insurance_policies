import {ApiService} from '../../../core/http/api.service';
import {Injectable} from '@angular/core';

@Injectable()
export class CreateUserService {
  url = 'authenticationwebservice/api/Authenticate/';

  constructor(private service: ApiService<any>) {
  }

  createUser(data) {
    return this.service.post(this.url + `CreateUserWithRole`, data);

  }

}
