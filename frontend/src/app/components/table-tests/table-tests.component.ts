import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-table-tests',
  imports: [CommonModule],
  templateUrl: './table-tests.component.html',
  styleUrl: './table-tests.component.css',
})
export class TableTestsComponent {
  @Input() data!: any[];

  constructor(private appComponent: AppComponent) {}

  openDialog(item: any): void {
    this.appComponent.openDialog({
      analysisData: item,
    });
  }
}
