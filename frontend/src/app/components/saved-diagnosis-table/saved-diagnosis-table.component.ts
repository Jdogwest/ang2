import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-saved-diagnosis-table',
  imports: [CommonModule],
  templateUrl: './saved-diagnosis-table.component.html',
  styleUrl: './saved-diagnosis-table.component.css',
})
export class savedDiagnosisTableComponent {
  @Input() data!: any[];

  constructor(private appComponent: AppComponent) {}

  openDialog(item: any): void {
    this.appComponent.openDialog({
      diagnosisData: item,
    });
  }
}
