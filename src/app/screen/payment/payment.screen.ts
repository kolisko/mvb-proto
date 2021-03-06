import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../../app.service';
import {Configuration} from '../../../config-loader';
import {HttpClient, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.screen.html',
  styleUrls: ['./payment.screen.scss']
})
export class PaymentScreen implements OnInit {

  constructor(
    private router: Router,
    public appService: AppService,
    // private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
  }

  onSendClick(): void {
    // const paymentUrl: string = Configuration.get('paymentUrl');
    // paymentUrl.replace('{clientNumber}', this.appService.clientId);
    // const params = new HttpParams()
    //   .append('amount', String(this.appService.piAmount))
    //   .append('toAccount', this.appService.piAccount);
    // this.httpClient.post(paymentUrl, null, { params}).subscribe((next: any) => {
    //   if (next.paymentState !== 'ACCEPTED') {
    //     this.appService.alertMsg = 'Payment denied';
    //     return;
    //   }
    //
    //   this.router.navigate(['payment-confirm']);
    // }, error => {
    //   this.appService.alertMsg = 'AccountOverview Error';
    // });

    this.router.navigate(['payment-confirm']);
  }

  onCancelClick(): void {
    this.router.navigate(['camera']);
  }
}
