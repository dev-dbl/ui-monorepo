import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesStatisticsSupportCardsComponent } from './services-statistics-support-cards.component';

describe('ServicesStatisticsSupportCardsComponent', () => {
  let component: ServicesStatisticsSupportCardsComponent;
  let fixture: ComponentFixture<ServicesStatisticsSupportCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesStatisticsSupportCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesStatisticsSupportCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
