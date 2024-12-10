import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
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
  StoreService: StoreService = inject(StoreService);

  constructor() {
    this.diagnosisData = this.StoreService.getClientData()?.current_diagnosis;
  }

  public setActive(n: number) {
    this.activity1 = '';
    this.activity2 = '';
    switch (n) {
      case 1:
        this.activity1 = 'selected';
        break;
      case 2:
        this.activity2 = 'selected';
        break;
    }
  }
}
