import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: () => import('./modules/feature/counter/counter.routes').then(r => r.COUNTER_ROUTES) },
];
