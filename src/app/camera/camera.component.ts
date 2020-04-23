import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {Configuration} from '../../config-loader';
import {AppService} from '../app.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {

  constructor(private router: Router,
              public appService: AppService,
              private httpClient: HttpClient) { }

  /**
   * Nejaka dokumentace k testovacimu inputu
   */
  @Input() testovaciInput: boolean = true;
  @Output() testovaciOutputx: EventEmitter<any>;

  ngOnInit(): void {
  }

  onUseQRClick(): void {
    const analyseQrCodeUrl: string = Configuration.get('analyseQrCodeUrl');
    analyseQrCodeUrl.replace('{clientNumber}', this.appService.clientId);
    this.httpClient.post(analyseQrCodeUrl, null).subscribe((next: any) => {
      if (!next.valid) {
        this.appService.alertMsg = 'QR Code is not valid';
        return;
      }

      const pi = next.paymentInstruction;
      this.appService.piAccount = pi.toAccount;
      this.appService.piAmount = pi.amount;
      this.appService.piVS = pi.variableSymbol;

      this.router.navigate(['payment']);
    }, error => {
      this.appService.alertMsg = 'QR Code analysing Error';
    });
  }
}
