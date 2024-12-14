import { Component, inject } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { filter } from 'rxjs/operators';
import { StoreService } from './services/store.service';

import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { DialogComponent } from './components/dialog/dialog.component';
import { SidebarInfoComponent } from './components/sidebar-info/sidebar-info.component';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SidebarInfoComponent,
    RouterModule,
    CommonModule,
    DialogComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  messageService: MessageService = inject(MessageService);
  storeService: StoreService = inject(StoreService);
  subscription!: Subscription;
  loadingSubscription!: Subscription;
  routerSubscription!: Subscription;
  clientFound = false;
  dialogOpened = false;
  dialogData: any;

  openDialog(data: any) {
    this.dialogData = data;
    this.dialogOpened = true;
  }

  closeDialog() {
    this.dialogOpened = false;
  }
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['home']);
    this.storeService.clear();

    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.clientFound = event.urlAfterRedirects !== '/home';
      });

    this.subscription = this.messageService.message$.subscribe(
      (message: boolean) => {
        this.clientFound = message;
      }
    );
  }

  title = 'MedApp';
}
