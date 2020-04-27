import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LandingComponent } from './screen/landing/landing.component';
import { HomeComponent } from './screen/home/home.component';
import { CameraComponent } from './screen/camera/camera.component';
import { PaymentComponent } from './screen/payment/payment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AlertModule} from 'ngx-bootstrap/alert';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ButtonComponent } from './component/button/button.component';
import { TransactionComponent } from './component/transaction/transaction.component';
import { TransactionListComponent } from './component/transaction-list/transaction-list.component';
import { TransactionScreen } from './screen/transaction/transaction.screen';
import {CommonModule} from '@angular/common';
import { PaymentConfirmScreen } from './screen/payment-confirm/payment-confirm.screen';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HomeComponent,
    CameraComponent,
    PaymentComponent,
    ButtonComponent,
    TransactionComponent,
    TransactionListComponent,
    TransactionScreen,
    PaymentConfirmScreen,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    AlertModule.forRoot(),
    MatFormFieldModule,
    MatInputModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
