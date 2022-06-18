import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesStatisticsTableComponent } from './services-statistics-table.component';

describe('ServicesStatisticsTableComponent', () => {
  let component: ServicesStatisticsTableComponent;
  let fixture: ComponentFixture<ServicesStatisticsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesStatisticsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesStatisticsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
