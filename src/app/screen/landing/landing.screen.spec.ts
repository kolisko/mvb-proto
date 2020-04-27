import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingScreen } from './landing.screen';

describe('LandingScreen', () => {
  let component: LandingScreen;
  let fixture: ComponentFixture<LandingScreen>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingScreen ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
