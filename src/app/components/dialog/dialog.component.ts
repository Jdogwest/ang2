import { Component, EventEmitter, Output } from '@angular/core';
import { DialogTableComponent } from '../dialog-table/dialog-table.component';

@Component({
  selector: 'app-dialog',
  imports: [DialogTableComponent],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
})
export class DialogComponent {}
