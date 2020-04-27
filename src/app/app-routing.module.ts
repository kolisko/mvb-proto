import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './screen/landing/landing.component';
import {HomeComponent} from './screen/home/home.component';
import {CameraComponent} from './screen/camera/camera.component';
import {PaymentComponent} from './screen/payment/payment.component';
import {TransactionScreen} from './screen/transaction/transaction.screen';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'camera',
    component: CameraComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
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
