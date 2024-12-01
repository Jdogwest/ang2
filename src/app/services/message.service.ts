import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessageService {
  private messageSource = new Subject<boolean>();
  message$ = this.messageSource.asObservable();

  sendMessage(message: boolean) {
    this.messageSource.next(message);
  }
}
