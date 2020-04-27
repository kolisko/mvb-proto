import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Configuration, MissingKeyConfigurationEnum} from '../../../config-loader';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.screen.html',
  styleUrls: ['./landing.screen.scss']
})
export class LandingScreen implements OnInit {

  constructor(private router: Router,
              // private httpClient: HttpClient,
              private appService: AppService) { }

  ngOnInit(): void {
  }

  onTouchIdClick(): void {
    // this.httpClient.post(Configuration.get('loginUrl'), null).subscribe((next: any) => {
    //   this.appService.email = next.sessionInfo.email;
    //   this.appService.clientId = next.sessionInfo.clientId;
    //   this.router.navigate(['home']);
    // }, error => {
    //   this.appService.alertMsg = 'Authentication Error';
    // });

    this.router.navigate(['home']);
  }
}
