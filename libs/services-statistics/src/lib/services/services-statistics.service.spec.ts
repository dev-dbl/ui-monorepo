import { TestBed } from '@angular/core/testing';

import { ServicesStatisticsService } from './services-statistics.service';

describe('ServicesStatisticsService', () => {
  let service: ServicesStatisticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesStatisticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
