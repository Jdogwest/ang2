import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-diagnosis-table',
  imports: [CommonModule],
  templateUrl: './diagnosis-table.component.html',
  styleUrl: './diagnosis-table.component.css',
})
export class DiagnosisTableComponent {
  @Input() data!: any[];
  @Input() editMode: boolean = false;
  selectedItems: any[] = [];

  constructor(private appComponent: AppComponent) {}

  openDialog(item: any): void {
    this.appComponent.openDialog({
      diagnosisData: item,
    });
  }

  onCheckboxChange(event: any, item: any): void {
    if (event.target.checked) {
      this.selectedItems.push(item);
    } else {
      this.selectedItems = this.selectedItems.filter((i) => 1 !== item);
    }
  }

  getSelectedItems(): any[] {
    return this.selectedItems;
  }
}
