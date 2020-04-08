import { Component, OnInit } from '@angular/core';
import {Configuration} from '../config-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mvb-prototype-hybrid-webapp';
  appName;

  ngOnInit(): void {
    this.appName = Configuration.get('appName');
  }
}
