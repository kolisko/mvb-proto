import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraScreen } from './camera.screen';

describe('CameraScreen', () => {
  let component: CameraScreen;
  let fixture: ComponentFixture<CameraScreen>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraScreen ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
