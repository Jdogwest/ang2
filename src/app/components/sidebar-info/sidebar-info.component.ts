import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MessageService } from '../../services/message.service';
import { StoreService } from '../../services/store.service';
import { ClientCharacteristics } from './../../interface/cliend-data.interface';

@Component({
  selector: 'app-sidebar-info',
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar-info.component.html',
  styleUrl: './sidebar-info.component.css',
})
export class SidebarInfoComponent {
  activity1: string = 'active';
  activity2: string = '';
  activity3: string = '';

  patientName: string = '';
  patientCharacteristics: ClientCharacteristics | undefined = undefined;

  messageService: MessageService = inject(MessageService);
  storeService: StoreService = inject(StoreService);

  constructor() {
    this.patientName = this.storeService.getClientName();
    this.patientCharacteristics = this.storeService.getClientCharacteristics();
  }

  public setActive(n: number) {
    this.activity1 = '';
    this.activity2 = '';
    this.activity3 = '';
    switch (n) {
      case 1:
        this.activity1 = 'active';
        break;
      case 2:
        this.activity2 = 'active';
        break;
      case 3:
        this.activity3 = 'active';
        break;
    }
    console.log(this.patientCharacteristics);
  }

  public goHome() {
    this.messageService.sendMessage(false);
  }
}
