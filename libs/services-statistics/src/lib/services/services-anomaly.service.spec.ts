import { TestBed } from '@angular/core/testing';

import { ServicesAnomalyService } from './services-anomaly.service';

describe('ServicesAnomalyService', () => {
  let service: ServicesAnomalyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesAnomalyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
