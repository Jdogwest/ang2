import { Component, Input } from '@angular/core';
import { AppComponent } from '../../app.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog',
  imports: [CommonModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
})
export class DialogComponent {
  @Input() data: any;

  constructor(private appComponent: AppComponent) {}

  closeDialog() {
    this.appComponent.closeDialog();
  }
}
