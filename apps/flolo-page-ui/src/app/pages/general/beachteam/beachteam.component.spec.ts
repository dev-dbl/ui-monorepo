import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachteamComponent } from './beachteam.component';

describe('BeachteamComponent', () => {
  let component: BeachteamComponent;
  let fixture: ComponentFixture<BeachteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeachteamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeachteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
