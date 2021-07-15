import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorsFormComponent } from './sponsors-form.component';

describe('SponsorsFormComponent', () => {
  let component: SponsorsFormComponent;
  let fixture: ComponentFixture<SponsorsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsorsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
