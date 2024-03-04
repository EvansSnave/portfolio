import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { MyBackgroundComponent } from './components/my-background/my-background.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'background', component: MyBackgroundComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'about', component: AboutComponent},
];
