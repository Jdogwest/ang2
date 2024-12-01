import { Component } from '@angular/core';
import { DiagnosisTableComponent } from '../../../components/diagnosis-table/diagnosis-table.component';

@Component({
  selector: 'app-diagnosis-symptoms',
  imports: [DiagnosisTableComponent],
  templateUrl: './diagnosis-symptoms.component.html',
  styleUrl: './diagnosis-symptoms.component.css',
})
export class DiagnosisSymptomsComponent {
  diagnosisData: any[] = [
    {
      number: '1',
      diagnosis: 'Какой-то диагноз по симптому',
      points: '5',
    },
    {
      number: '2',
      diagnosis: 'Еще какой-то диагноз по симптому',
      points: '4',
    },
    {
      number: '3',
      diagnosis: 'Ну и вот еще по симптому',
      points: '2',
    },
    {
      number: '4',
      diagnosis: 'И сноваа... по симптому ДИАГНОЗ',
      points: '1',
    },
  ];
  constructor() {}
  ngOnInit(): void {}
}
