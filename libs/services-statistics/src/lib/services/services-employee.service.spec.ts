import { TestBed } from '@angular/core/testing';

import { ServicesEmployeeService } from './services-employee.service';

describe('ServicesEmployeeService', () => {
  let service: ServicesEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
