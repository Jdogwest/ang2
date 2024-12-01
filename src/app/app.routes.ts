import { Routes } from '@angular/router';
import { DiagnosisPageComponent } from './views/diagnosis-page/diagnosis-page.component';
import { DiagnosisSymptomsComponent } from './views/diagnosis-page/diagnosis-symptoms/diagnosis-symptoms.component';
import { DiagnosisComponent } from './views/diagnosis-page/diagnosis/diagnosis.component';
import { HomeComponent } from './views/home/home.component';
import { AllTestsDetailsComponent } from './views/tests-page/all-tests-details/all-tests-details.component';
import { TestsDetailsComponent } from './views/tests-page/tests-details/tests-details.component';
import { testsPageComponent } from './views/tests-page/tests-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
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
    children: [
      { path: 'symptoms', component: DiagnosisSymptomsComponent },
      { path: 'tests', component: DiagnosisComponent },
    ],
  },
];
