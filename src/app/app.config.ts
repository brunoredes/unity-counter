import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { IMAGE_CONFIG } from '@angular/common';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    { provide: IMAGE_CONFIG, useValue: { placeholderResolution: 120 } },
  ],
};
