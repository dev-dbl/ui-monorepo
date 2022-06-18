import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesAnomaliesTableComponent } from './services-anomalies-table.component';

describe('ServicesAnomaliesTableComponent', () => {
  let component: ServicesAnomaliesTableComponent;
  let fixture: ComponentFixture<ServicesAnomaliesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesAnomaliesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesAnomaliesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
