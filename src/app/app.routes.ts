import { Routes } from '@angular/router';
import { Hero } from './components/hero/hero';
import { Features } from './components/features/features';

export const routes: Routes = [
     { path: '', component: Hero },
  { path: 'features', component: Features },
  { path: '**', redirectTo: '' }
];
