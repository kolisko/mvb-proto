import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentScreen } from './payment.screen';

describe('PaymentScreen', () => {
  let component: PaymentScreen;
  let fixture: ComponentFixture<PaymentScreen>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentScreen ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
