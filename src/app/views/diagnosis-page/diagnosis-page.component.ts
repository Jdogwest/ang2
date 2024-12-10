import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DiagnosisTableComponent } from '../../components/diagnosis-table/diagnosis-table.component';

@Component({
  selector: 'app-diagnosis-symptoms',
  imports: [RouterModule, RouterOutlet, CommonModule, DiagnosisTableComponent],
  templateUrl: './diagnosis-page.component.html',
  styleUrl: './diagnosis-page.component.css',
})
export class DiagnosisPageComponent {
  activity1: string = 'selected';
  activity2: string = '';

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
