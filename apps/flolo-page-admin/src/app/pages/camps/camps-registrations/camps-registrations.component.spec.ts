import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampsRegistrationsComponent } from './camps-registrations.component';

describe('CampsRegistrationsComponent', () => {
  let component: CampsRegistrationsComponent;
  let fixture: ComponentFixture<CampsRegistrationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampsRegistrationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampsRegistrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
