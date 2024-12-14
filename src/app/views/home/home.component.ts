import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MessageService } from '../../services/message.service';
import { StoreService } from './../../services/store.service';

@Component({
  selector: 'app-home',
  imports: [RouterModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  fio: string = '';
  messageService: MessageService = inject(MessageService);
  storeService: StoreService = inject(StoreService);
  router: Router = inject(Router);

  constructor() {}

  searchForClient() {
    this.storeService.getClientDataWithName(this.fio);
    this.messageService.sendMessage(true);
    this.messageService.gotData$.subscribe((data) => {
      if (data) {
        this.router.navigate(['tests-details/actual']);
      }
    });
    this.fio = '';
  }
}
