import { Component, inject } from '@angular/core';
import { TableTestsComponent } from '../../../components/table-tests/table-tests.component';
import { StoreService } from '../../../services/store.service';

@Component({
  selector: 'app-all-tests-details',
  imports: [TableTestsComponent],
  templateUrl: './all-tests-details.component.html',
  styleUrl: './all-tests-details.component.css',
})
export class AllTestsDetailsComponent {
  storeService: StoreService = inject(StoreService);
  analysisData: any;
  constructor() {
    this.analysisData = this.storeService
      .getClientData()
      ?.analysis.sort()
      .reverse();
  }
}
