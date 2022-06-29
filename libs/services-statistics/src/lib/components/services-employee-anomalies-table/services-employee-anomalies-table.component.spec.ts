import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesEmployeeAnomaliesTableComponent } from './services-employee-anomalies-table.component';

describe('ServicesEmployeeAnomaliesTableComponent', () => {
  let component: ServicesEmployeeAnomaliesTableComponent;
  let fixture: ComponentFixture<ServicesEmployeeAnomaliesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesEmployeeAnomaliesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesEmployeeAnomaliesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
