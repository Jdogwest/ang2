import { Component, OnInit } from '@angular/core';
import { DiagnosisTableComponent } from '../../../components/diagnosis-table/diagnosis-table.component';

@Component({
  selector: 'app-diagnosis',
  imports: [DiagnosisTableComponent],
  templateUrl: './diagnosis.component.html',
  styleUrl: './diagnosis.component.css',
})
export class DiagnosisComponent implements OnInit {
  diagnosisData: any[] = [
    {
      number: '1',
      diagnosis: 'Какой-то диагноз',
      points: '100/10',
    },
    {
      number: '2',
      diagnosis: 'Еще какой-то диагноз',
      points: '8',
    },
    {
      number: '3',
      diagnosis: 'Ну и вот еще',
      points: '2',
    },
    {
      number: '4',
      diagnosis: 'И сноваа... ДИАГНОЗ',
      points: '10',
    },
  ];
  constructor() {}
  ngOnInit(): void {}
}
