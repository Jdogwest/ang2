import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private messageService: MessageService) {}

  searchForClient() {
    this.messageService.sendMessage(true);
  }
}
