import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
CommonModule;

@Component({
  selector: 'app-table-tests',
  imports: [CommonModule],
  templateUrl: './table-tests.component.html',
  styleUrl: './table-tests.component.css',
})
export class TableTestsComponent {
  @Input() data!: any[];
}
