import {Component, Input, OnInit} from '@angular/core';
import {Transaction} from './transaction';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  @Input() toAccount: string;
  @Input() fromAccount: string;
  @Input() issueDate: string;
  @Input() amount: number;

  constructor() { }

  ngOnInit(): void {
  }

}
