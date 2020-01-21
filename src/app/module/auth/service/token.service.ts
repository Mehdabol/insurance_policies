import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {ApiService} from '../../../core/http/api.service';

@Injectable({providedIn: 'root'})
export class TokenService {
  private subject = new Subject<any>();
  url = 'InsuranceSrv/api/Common/';

  constructor(private apiService: ApiService<any>) {
  }
  sendMessage(message: string) {
    this.subject.next(message);
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  getSidebard() {
    return this.apiService.get(this.url + 'GetControllers');
  }
}
