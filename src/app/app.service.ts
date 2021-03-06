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
  balance: number = 20600;
  transactions: Array<Transaction> = [
    {fromAccount: '222111222/5500',
      toAccount: '12345678/0100',
      amount: 20000,
      issueDate: '2020-04-04'},
    {fromAccount: '12345678/0100',
      toAccount: '87654321/0100',
      amount: -400,
      issueDate: '2020-04-03'},
    {fromAccount: '12345678/0100',
    toAccount: '87654321/0100',
    amount: -9000,
    issueDate: '2020-03-03'},
    {fromAccount: '111333555/0800',
    toAccount: '12345678/0100',
    amount: 10000,
    issueDate: '2020-03-03'}
  ];

  piAccount: string = '333444555/0100';
  piAmount: number = 500;
  piVS: string = '1212';
}
