import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class EstealamService {
  private subject = new Subject<any>();
  private subjectEdit = new Subject<any>();

  sendMessage(message: any) {
    this.subject.next({message});
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
  sendMessageEdit(message: any) {
    this.subjectEdit.next({message});
  }

  clearMessageEdit() {
    this.subjectEdit.next();
  }

  getMessageEdit(): Observable<any> {
    return this.subjectEdit.asObservable();
  }
}
