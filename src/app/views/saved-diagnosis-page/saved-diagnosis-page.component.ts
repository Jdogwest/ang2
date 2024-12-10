import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { savedDiagnosisTableComponent } from '../../components/saved-diagnosis-table/saved-diagnosis-table.component';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-diagnosis-symptoms',
  imports: [
    RouterModule,
    RouterOutlet,
    CommonModule,
    savedDiagnosisTableComponent,
  ],
  templateUrl: './saved-diagnosis-page.component.html',
  styleUrl: './saved-diagnosis-page.component.css',
})
export class SavedDiagnosisPageComponent {
  activity1: string = 'selected';
  activity2: string = '';
  storeService: StoreService = inject(StoreService);

  public savedDiagnosisData: any;

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

  constructor() {
    this.savedDiagnosisData =
      this.storeService.getClientData()?.saved_diagnosis;
  }
}
