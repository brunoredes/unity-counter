import { Routes } from '@angular/router';
import { homeGuard } from './guards/home.guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/feature/counter/counter.routes').then(
        (r) => r.COUNTER_ROUTES
      ),
    canActivate: [homeGuard],
  },
  {
    path: 'remaining',
    loadChildren: () =>
      import('./modules/feature/timer/timer/timer.routes').then(
        (r) => r.TIMER_ROUTES
      ),
  },
];
