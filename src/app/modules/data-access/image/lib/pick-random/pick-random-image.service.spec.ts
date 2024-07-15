import { TestBed } from '@angular/core/testing';

import { PickRandomImageService } from './pick-random-image.service';

describe('PickRandomImageService', () => {
  let service: PickRandomImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PickRandomImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
