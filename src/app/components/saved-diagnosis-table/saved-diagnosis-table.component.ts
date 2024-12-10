import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-saved-diagnosis-table',
  imports: [CommonModule],
  templateUrl: './saved-diagnosis-table.component.html',
  styleUrl: './saved-diagnosis-table.component.css',
})
export class savedDiagnosisTableComponent {
  @Input() data!: any[];
}
