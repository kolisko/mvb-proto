import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionScreen } from './transaction.screen';

describe('TransactionScreen', () => {
  let component: TransactionScreen;
  let fixture: ComponentFixture<TransactionScreen>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionScreen ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
