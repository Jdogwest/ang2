import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { SidebarInfoComponent } from './components/sidebar-info/sidebar-info.component';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarInfoComponent, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  messageService: MessageService = inject(MessageService);
  subscription!: Subscription;
  ngOnInit() {
    this.subscription = this.messageService.message$.subscribe(
      (message: boolean) => {
        this.clientFound = message;
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  title = 'MedApp';
  clientFound = false;
}
