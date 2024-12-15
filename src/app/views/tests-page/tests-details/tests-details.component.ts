import { Component, inject } from '@angular/core';
import { TableTestsComponent } from '../../../components/table-tests/table-tests.component';
import { StoreService } from '../../../services/store.service';

@Component({
  selector: 'app-tests-details',
  imports: [TableTestsComponent],
  templateUrl: './tests-details.component.html',
  styleUrl: './tests-details.component.css',
})
export class TestsDetailsComponent {
  storeService: StoreService = inject(StoreService);
  analysisData: any;
  constructor() {
    this.analysisData = this.storeService
      .getClientData()
      ?.analysis.filter((item: any) => item.status === 'Действителен')
      .sort()
      .reverse();
  }
}
