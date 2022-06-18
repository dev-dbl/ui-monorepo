import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesStatisticsActivityTableComponent } from './services-statistics-activity-table.component';

describe('ServicesStatisticsActivityTableComponent', () => {
  let component: ServicesStatisticsActivityTableComponent;
  let fixture: ComponentFixture<ServicesStatisticsActivityTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesStatisticsActivityTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesStatisticsActivityTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
