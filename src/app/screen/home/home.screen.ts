import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Configuration} from '../../../config-loader';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.screen.html',
  styleUrls: ['./home.screen.scss']
})
export class HomeScreen implements OnInit {

  constructor(private router: Router,
              // private httpClient: HttpClient,
              public appService: AppService) { }

  ngOnInit(): void {
    // const accountOverviewUrl: string = Configuration.get('accountOverviewUrl');
    // accountOverviewUrl.replace('{clientNumber}', this.appService.clientId);
    // this.httpClient.get(accountOverviewUrl).subscribe((next: any) => {
    //   const accountOverview = next[0];
    //   this.appService.accountNumber = accountOverview.accountNumber;
    //   this.appService.balance = accountOverview.balance;
    // }, error => {
    //   this.appService.alertMsg = 'AccountOverview Error';
    // });
  }

  onPayWithQRClick(): void {
    this.router.navigate(['camera']);
  }

  onTransactionClick(): void {
    this.router.navigate(['transaction']);
  }

}
