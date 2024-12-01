import { Component, OnInit } from '@angular/core';
import { TableTestsComponent } from '../../../components/table-tests/table-tests.component';

@Component({
  selector: 'app-all-tests-details',
  imports: [TableTestsComponent],
  templateUrl: './all-tests-details.component.html',
  styleUrl: './all-tests-details.component.css',
})
export class AllTestsDetailsComponent implements OnInit {
  analysisData: any[] = [
    {
      analysisType: 'Общий анализ крови',
      executionDate: '22.11.2024',
    },
    {
      analysisType: 'Биохимический анализ крови',
      executionDate: '22.11.2024',
    },
    {
      analysisType: 'Гормональный анализ крови',
      executionDate: '22.11.2024',
    },
    {
      analysisType: 'Общий анализ крови',
      executionDate: '22.11.2024',
    },
    {
      analysisType: 'Еще какой-нибудь анализ крови',
      executionDate: '22.11.2024',
    },
  ];
  constructor() {}
  ngOnInit(): void {}
}
