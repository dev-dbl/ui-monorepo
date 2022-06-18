import { TestBed } from '@angular/core/testing';

import { ServicesActivitiesService } from './services-activities.service';

describe('ServicesActivitiesService', () => {
  let service: ServicesActivitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesActivitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
