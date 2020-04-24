import { Injectable } from '@angular/core';
import {Transaction} from './transaction/transaction';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  alertMsg: string;
  email: string;
  clientId: string;
  accountNumber: string;
  balance: number;
  transactions: Array<Transaction> = [];

  piAccount: string;
  piAmount: number;
  piVS: string;
}
