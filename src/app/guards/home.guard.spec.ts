import { TestBed } from '@angular/core/testing';
import { CanActivateFn, provideRouter, Router } from '@angular/router';

import * as dateFns from 'date-fns';
import { routes } from '../app.routes';
import { eventDate } from '../utils/date';
import { homeGuard } from './home.guard';

jest.mock('date-fns', () => ({
  ...jest.requireActual('date-fns'),
  isAfter: jest.fn(),
}));

describe('homeGuard', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should be created', () => {
    TestBed.configureTestingModule({
      providers: [provideRouter(routes)],
    });

    const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => homeGuard(...guardParameters));
    expect(executeGuard).toBeTruthy();
  });

  // it('should navigate to /remaining and return false if current date is before event date', () => {
  //   TestBed.configureTestingModule({
  //     providers: [
  //       {
  //         provide: Router,
  //         useValue: {
  //           navigate: jest.fn(),
  //         },
  //       },
  //     ],
  //   });
  //   const router = TestBed.inject(Router);
  //   const navigateSpy = jest.spyOn(router, 'navigate');
  //   (dateFns.isAfter as jest.Mock).mockReturnValue(false);

  //   const executeGuard: CanActivateFn = (...guardParameters) =>
  //     TestBed.runInInjectionContext(() => homeGuard(...guardParameters));

  //   expect(dateFns.isAfter).toHaveBeenCalledWith(expect.any(Date), eventDate);
  //   expect(navigateSpy).toHaveBeenCalledWith(['/remaining']);
  //   expect(executeGuard).toBe(false);
  // });

  // it('should return true if current date is after event date', () => {
  //   TestBed.configureTestingModule({
  //     providers: [
  //       {
  //         provide: Router,
  //         useValue: {
  //           navigate: jest.fn(),
  //         },
  //       },
  //     ],
  //   });
  //   const router = TestBed.inject(Router);
  //   const navigateSpy = jest.spyOn(router, 'navigate');
  //   dateFns.isAfter.mockReturnValue(true);

  //   const executeGuard: CanActivateFn = (...guardParameters) =>
  //     TestBed.runInInjectionContext(() => homeGuard(...guardParameters));

  //   expect(dateFns.isAfter).toHaveBeenCalledWith(expect.any(Date), eventDate);
  //   expect(navigateSpy).not.toHaveBeenCalled();
  //   expect(executeGuard).toBe(true);
  // });
});
