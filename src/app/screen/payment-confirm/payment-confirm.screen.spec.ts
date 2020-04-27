import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentConfirmScreen } from './payment-confirm.screen';

describe('PaymentConfirmScreen', () => {
  let component: PaymentConfirmScreen;
  let fixture: ComponentFixture<PaymentConfirmScreen>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentConfirmScreen ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentConfirmScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
