import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingScreen} from './screen/landing/landing.screen';
import {HomeScreen} from './screen/home/home.screen';
import {CameraScreen} from './screen/camera/camera.screen';
import {PaymentScreen} from './screen/payment/payment.screen';
import {TransactionScreen} from './screen/transaction/transaction.screen';
import {PaymentConfirmScreen} from './screen/payment-confirm/payment-confirm.screen';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    component: LandingScreen
  },
  {
    path: 'home',
    component: HomeScreen
  },
  {
    path: 'camera',
    component: CameraScreen
  },
  {
    path: 'payment',
    component: PaymentScreen
  },
  {
    path: 'payment-confirm',
    component: PaymentConfirmScreen
  },
  {
    path: 'transaction',
    component: TransactionScreen
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
