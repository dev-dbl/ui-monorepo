import { TestBed } from '@angular/core/testing';

import { ServicesClientsService } from './services-clients.service';

describe('ServicesClientsService', () => {
  let service: ServicesClientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesClientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
