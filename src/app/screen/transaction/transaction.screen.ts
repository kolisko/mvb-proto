import {Component, OnInit, ViewChild} from '@angular/core';
import {Configuration} from '../../../config-loader';
import {AppService} from '../../app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'transaction-screen',
  templateUrl: './transaction.screen.html',
  styleUrls: ['./transaction.screen.scss']
})
export class TransactionScreen implements OnInit {

  transactions;
  @ViewChild('searchString') searchString;
  constructor(public appService: AppService,
              private router: Router) { }

  ngOnInit(): void {
    this.transactions = this.appService.transactions;
  }

  onSearchClick(): void {
    // const transactionSearchUrl: string = Configuration.get('transactionSearchUrl');
    // transactionSearchUrl.replace('{clientNumber}', this.appService.clientId);
    // this.httpClient.post(transactionSearchUrl, null).subscribe((next: any) => {
    //   const transactionSearchResult = next.transactionsFound;
    //   this.appService.transactions = transactionSearchResult;
    // }, error => {
    //   this.appService.alertMsg = 'TransactionSearch Error';
    // });

    const ssValue = this.searchString.nativeElement.value;
    this.transactions = this.appService.transactions.filter(t =>
      t.amount.toString().indexOf(ssValue) >= 0 ||
        t.fromAccount.indexOf(ssValue) >= 0 ||
        t.toAccount.indexOf(ssValue) >= 0);
  }

  onBackClick(): void {
    this.router.navigate(['home']);
  }

  onIncomingClick(): void {
    const ssValue = this.searchString.nativeElement.value;
    this.transactions = this.appService.transactions.filter(t => t.amount > 0);
  }

  onOutgoingClick(): void {
    const ssValue = this.searchString.nativeElement.value;
    this.transactions = this.appService.transactions.filter(t => t.amount < 0);
  }
}
