import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesStatisticsCardsComponent } from './services-statistics-cards.component';

describe('ServicesStatisticsCardsComponent', () => {
  let component: ServicesStatisticsCardsComponent;
  let fixture: ComponentFixture<ServicesStatisticsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesStatisticsCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesStatisticsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
