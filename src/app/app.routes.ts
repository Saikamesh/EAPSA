import { Routes } from '@angular/router';
import { GeneralComponent } from './general/general.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { WorkDetailsComponent } from './work-details/work-details.component';
import { ExperienceComponent } from './experience/experience.component';
import { ExitScreenComponent } from './exit-screen/exit-screen.component';
export const routes: Routes = [
  {
    path: '',
    component: DisclaimerComponent,
    title: 'disclaimer',
  },
  {
    path: 'general',
    component: GeneralComponent,
    title: 'start',
  },
  {
    path: 'work',
    component: WorkDetailsComponent,
    title: 'work',
  },
  {
    path: 'experience',
    component: ExperienceComponent,
    title: 'experience',
  },
  {
    path: 'exit',
    component: ExitScreenComponent,
    title: 'exit',
  },
];
