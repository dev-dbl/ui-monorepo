import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesActivityDetailsComponent } from './services-activity-details.component';

describe('ServicesActivityDetailsComponent', () => {
  let component: ServicesActivityDetailsComponent;
  let fixture: ComponentFixture<ServicesActivityDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesActivityDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesActivityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
