import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-all-tests-details',
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './tests-page.component.html',
  styleUrl: './tests-page.component.css',
})
export class testsPageComponent {
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
