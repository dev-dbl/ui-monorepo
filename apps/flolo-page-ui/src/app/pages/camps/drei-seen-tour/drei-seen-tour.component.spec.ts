import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreiSeenTourComponent } from './drei-seen-tour.component';

describe('DreiSeenTourComponent', () => {
  let component: DreiSeenTourComponent;
  let fixture: ComponentFixture<DreiSeenTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DreiSeenTourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DreiSeenTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
