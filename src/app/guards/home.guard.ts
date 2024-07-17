import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { isAfter } from 'date-fns';
import { eventDate } from '../utils/date';

export const homeGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const currentDate = new Date();

  if (!isAfter(currentDate, eventDate)) {
    router.navigate(['/remaining']);
    return false;
  } else {
    return true;
  }
};
