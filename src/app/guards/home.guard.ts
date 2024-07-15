import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { openingDate } from '../utils/opening-date';

export const homeGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if (!openingDate()) {
    router.navigateByUrl('/remaining');
    return false;
  }
  return true;
};
