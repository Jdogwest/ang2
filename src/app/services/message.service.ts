import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessageService {
  private messageSource = new Subject<boolean>();
  message$ = this.messageSource.asObservable();

  private gotData = new Subject<boolean>();
  gotData$ = this.gotData.asObservable();

  private gotError = new Subject<string>();
  gotError$ = this.gotError.asObservable();

  sendMessage(message: boolean) {
    this.messageSource.next(message);
  }

  changeaState(message: boolean) {
    this.gotData.next(message);
  }

  sendError(message: string) {
    this.gotError.next(message);
  }
}
