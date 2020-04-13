import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../app.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(private router: Router,
              public appService: AppService) { }

  ngOnInit(): void {
  }

  onSendClick(): void {
    this.router.navigate(['home']);
  }

  onCancelClick(): void {
    this.router.navigate(['camera']);
  }
}
