import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutPersonDataComponent } from './checkout-person-data.component';

describe('CheckoutPersonDataComponent', () => {
  let component: CheckoutPersonDataComponent;
  let fixture: ComponentFixture<CheckoutPersonDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutPersonDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutPersonDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
