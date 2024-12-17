import { CommonModule } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DiagnosisTableComponent } from '../../components/diagnosis-table/diagnosis-table.component';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-diagnosis-symptoms',
  imports: [RouterModule, RouterOutlet, CommonModule, DiagnosisTableComponent],
  templateUrl: './diagnosis-page.component.html',
  styleUrl: './diagnosis-page.component.css',
})
export class DiagnosisPageComponent {
  activity1: string = 'selected';
  activity2: string = '';
  diagnosisData: any;
  storeService: StoreService = inject(StoreService);
  editMode = false;
  @ViewChild(DiagnosisTableComponent)
  diagnosisTableComponent!: DiagnosisTableComponent;

  constructor() {
    this.diagnosisData = this.storeService.getClientData()?.current_diagnosis;
    this.diagnosisData.sort((a: any, b: any) => b.score - a.score);
  }

  public editDiagnosis() {
    this.editMode = true;
  }
  public cancelEditDiagnosis() {
    this.editMode = false;
  }
  public saveSelectedDiagnosis() {
    // Тут массив выбранных диагнозов, хз, я не знаю что дальше делать
    const selectedItems = this.diagnosisTableComponent.getSelectedItems();

    this.storeService.addSavedDiagnosis(selectedItems);

    this.editMode = false;
  }
}
