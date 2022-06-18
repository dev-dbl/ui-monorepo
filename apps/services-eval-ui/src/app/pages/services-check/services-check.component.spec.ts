import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesCheckComponent } from './services-check.component';

describe('ServicesCheckComponent', () => {
  let component: ServicesCheckComponent;
  let fixture: ComponentFixture<ServicesCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
