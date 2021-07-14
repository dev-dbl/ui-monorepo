import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCheckoutConfirmationComponent } from './event-checkout-confirmation.component';

describe('EventCheckoutConfirmationComponent', () => {
  let component: EventCheckoutConfirmationComponent;
  let fixture: ComponentFixture<EventCheckoutConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventCheckoutConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCheckoutConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
