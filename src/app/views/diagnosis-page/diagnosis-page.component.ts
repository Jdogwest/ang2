import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-diagnosis-symptoms',
  imports: [RouterModule, RouterOutlet, CommonModule],
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
}
