import { TestBed } from '@angular/core/testing';
import { CanActivateFn, Router } from '@angular/router';

import { homeGuard } from './home.guard';

describe('homeGuard', () => {
  let router: Router;
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => homeGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });

  // it('should redirect to /remaining when current date is before set date', () => {
  //   spyOn(router, 'navigate');

  //   // Mock current date to be before set date
  //   const currentDate = new Date('2024-07-16T19:00:00');
  //   spyOn(global, 'Date').and.returnValue(currentDate as any);

  //   const canActivate = executeGuard;

  //   expect(canActivate).toEqual(false);
  //   expect(router.navigate).toHaveBeenCalledWith(['/remaining']);
  // });

  // it('should redirect to /home when current date is after set date', () => {
  //   spyOn(router, 'navigate');

  //   // Mock current date to be after set date
  //   const currentDate = new Date('2024-07-17T01:00:01');
  //   spyOn(global, 'Date').and.returnValue(currentDate as any);

  //   const canActivate = executeGuard;

  //   expect(canActivate).toEqual(false);
  //   expect(router.navigate).toHaveBeenCalledWith(['/home']);
  // });
});
