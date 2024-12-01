import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diagnosis-table',
  imports: [CommonModule],
  templateUrl: './diagnosis-table.component.html',
  styleUrl: './diagnosis-table.component.css',
})
export class DiagnosisTableComponent {
  @Input() data!: any[];
}
