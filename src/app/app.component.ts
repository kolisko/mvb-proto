import { Component, OnInit } from '@angular/core';
import {Configuration} from '../config-loader';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mvb-prototype-hybrid-webapp';
  appName;

  constructor(public appService: AppService) {
  }

  ngOnInit(): void {
    this.appName = Configuration.get('appName');
  }

  onClosed(): void {
    this.appService.alertMsg = null;
  }
}
