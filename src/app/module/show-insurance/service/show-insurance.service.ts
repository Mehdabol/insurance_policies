import {ApiService} from '../../../core/http/api.service';
import {Injectable} from '@angular/core';

@Injectable()
export class ShowInsuranceService {
  url = 'InsuranceSrv/api/Insurance/';

  constructor(private service: ApiService<any>) {
  }

  getGridData(data) {
    return this.service.post(this.url + `GetAllBTOB`, data);

  }

}
