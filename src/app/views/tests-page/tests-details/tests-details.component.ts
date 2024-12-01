import { Component, OnInit } from '@angular/core';
import { ButtonSelectComponent } from '../../../components/button-select/button-select.component';
import { TableTestsComponent } from '../../../components/table-tests/table-tests.component';

@Component({
  selector: 'app-tests-details',
  imports: [TableTestsComponent, ButtonSelectComponent],
  templateUrl: './tests-details.component.html',
  styleUrl: './tests-details.component.css',
})
export class TestsDetailsComponent implements OnInit {
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
  ];
  constructor() {}
  ngOnInit(): void {}
}
