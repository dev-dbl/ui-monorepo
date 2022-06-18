import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesStatisticsActivitiesTableComponent } from './services-statistics-activities-table.component';

describe('ServicesStatisticsActivitiesTableComponent', () => {
  let component: ServicesStatisticsActivitiesTableComponent;
  let fixture: ComponentFixture<ServicesStatisticsActivitiesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesStatisticsActivitiesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesStatisticsActivitiesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
