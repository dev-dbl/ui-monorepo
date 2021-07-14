import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCheckoutPersonalDataComponent } from './event-checkout-personal-data.component';

describe('EventCheckoutPersonalDataComponent', () => {
  let component: EventCheckoutPersonalDataComponent;
  let fixture: ComponentFixture<EventCheckoutPersonalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventCheckoutPersonalDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCheckoutPersonalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
