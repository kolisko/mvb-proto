import { Injectable } from '@angular/core';

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
  transactions: Array<string> = [];
}
