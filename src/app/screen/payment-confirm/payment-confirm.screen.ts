import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-payment-confirm',
  templateUrl: './payment-confirm.screen.html',
  styleUrls: ['./payment-confirm.screen.scss']
})
export class PaymentConfirmScreen implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onOkClick(): void {
    this.router.navigate(['home']);
  }
}
