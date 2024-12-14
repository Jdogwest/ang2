import { Routes } from '@angular/router';
import { DiagnosisPageComponent } from './views/diagnosis-page/diagnosis-page.component';
import { HomeComponent } from './views/home/home.component';
import { SavedDiagnosisPageComponent } from './views/saved-diagnosis-page/saved-diagnosis-page.component';
import { AllTestsDetailsComponent } from './views/tests-page/all-tests-details/all-tests-details.component';
import { TestsDetailsComponent } from './views/tests-page/tests-details/tests-details.component';
import { testsPageComponent } from './views/tests-page/tests-page.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'tests-details',
    component: testsPageComponent,
    children: [
      { path: 'actual', component: TestsDetailsComponent },
      { path: 'all', component: AllTestsDetailsComponent },
    ],
  },
  {
    path: 'diagnosis',
    component: DiagnosisPageComponent,
  },
  {
    path: 'saved-diagnosis',
    component: SavedDiagnosisPageComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
