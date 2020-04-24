import {Component, Input, OnInit} from '@angular/core';
import {Transaction} from '../transaction/transaction';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  @Input() transactions: Array<Transaction> = [];

  constructor() { }

  ngOnInit(): void {
  }

  isEmpty(transactions: Array<Transaction>): boolean {
    if (transactions == null || transactions.length <= 0) {
      return true;
    }
    return false;
  }
}
