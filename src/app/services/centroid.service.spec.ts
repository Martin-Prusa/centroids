import { TestBed } from '@angular/core/testing';

import { CentroidService } from './centroid.service';

describe('CentroidService', () => {
  let service: CentroidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentroidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
