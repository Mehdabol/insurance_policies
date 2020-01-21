import {ApiService} from '../../../core/http/api.service';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {
  url = 'InsuranceSrv/api/Insurance/';
  loginUrl = 'authenticationwebservice/api/Authenticate/';

  constructor(private service: ApiService<any>) {
  }

  loginProject(data) {
    return this.service.postLogin(this.loginUrl + `GetUserToken`, data);

  }
  login(data) {
    return this.service.postLogin(this.url + `Login?userName=${data.UserName}&password=${data.Password}`, '');
  }
  resetPassword(data) {
    return this.service.postLogin(this.url + `ResetPassword`, data);
  }

  register(data) {
    return this.service.postLogin(this.url + `CreateUser`, data);
  }
  changePassword(data) {
    return this.service.postLogin(this.url + `ChangePassword`, data);
  }
}
