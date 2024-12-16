import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { first, Subscription } from 'rxjs';
import { MessageService } from '../../services/message.service';
import { StoreService } from './../../services/store.service';

@Component({
  selector: 'app-home',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  fio: string = '';
  messageService: MessageService = inject(MessageService);
  storeService: StoreService = inject(StoreService);
  router: Router = inject(Router);
  gotError: boolean = false;
  errorSub: Subscription | undefined;
  messageSub: Subscription | undefined;

  constructor() {}

  ngOndestroy() {
    this.errorSub?.unsubscribe();
    this.messageSub?.unsubscribe();
  }

  searchForClient() {
    let response = this.storeService.getClientDataWithName(this.fio);

    this.messageService.gotError$.subscribe((message: string) => {
      if (message) {
        console.log(123);
        this.gotError = true;
        this.router.navigate(['home']);
        this.messageService.sendMessage(false);
        this.messageService.sendError('');
      }
    });

    this.messageService.sendMessage(true);
    this.messageService.gotData$.pipe(first()).subscribe((data) => {
      if (data) {
        this.router.navigate(['tests-details/actual']);
      }
    });
    this.fio = '';
  }
}
