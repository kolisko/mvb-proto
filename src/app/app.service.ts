import { Injectable } from '@angular/core';
import {Transaction} from './component/transaction/transaction';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  alertMsg: string;
  email: string;
  clientId: string;
  accountNumber: string = '12345678/0100';
  balance: number = 1000;
  transactions: Array<Transaction> = [
    {fromAccount: '12345678/0100',
    toAccount: '87654321/0100',
    amount: -9000,
    issueDate: '2020-03-03'},
    {fromAccount: '12345678/0100',
      toAccount: '87654321/0100',
      amount: -400,
      issueDate: '2020-04-03'},
    {fromAccount: '222111222/5500',
      toAccount: '12345678/0100',
      amount: 20000,
      issueDate: '2020-04-04'}
  ];

  piAccount: string;
  piAmount: number;
  piVS: string;
}
