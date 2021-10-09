import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachcampsComponent } from './beachcamps.component';

describe('BeachcampsComponent', () => {
  let component: BeachcampsComponent;
  let fixture: ComponentFixture<BeachcampsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeachcampsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeachcampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
