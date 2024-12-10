import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DiagnosisTableComponent } from '../../components/diagnosis-table/diagnosis-table.component';

@Component({
  selector: 'app-diagnosis-symptoms',
  imports: [RouterModule, RouterOutlet, CommonModule, DiagnosisTableComponent],
  templateUrl: './saved-diagnosis-page.component.html',
  styleUrl: './saved-diagnosis-page.component.css',
})
export class SavedDiagnosisPageComponent {
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
      diagnosis: 'Какой-то cохранённый диагноз',
      points: '100/10',
    },
    {
      number: '2',
      diagnosis: 'Еще какой-то сохранённый диагноз',
      points: '8',
    },
    {
      number: '3',
      diagnosis: 'Ну и вот еще сохранённый',
      points: '2',
    },
    {
      number: '4',
      diagnosis: 'И сноваа сохранённый... ДИАГНОЗ',
      points: '10',
    },
  ];
  constructor() {}
  ngOnInit(): void {}
}
