import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ExperienceComponent } from './components/experience/experience.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'experience', component: ExperienceComponent },
];
