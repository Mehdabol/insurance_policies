import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class GetEstelamService {
  private subject = new Subject<any>();

  sendMessageEdit(message: any) {
    this.subject.next({message});
  }

  clearMessageEdit() {
    this.subject.next();
  }

  getMessageEdit(): Observable<any> {
    return this.subject.asObservable();
  }
}
