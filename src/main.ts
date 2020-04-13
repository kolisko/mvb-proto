import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {Configuration, ConfigurationLoader} from './config-loader';

if (environment.production) {
  enableProdMode();
}

//const configLoader = new ConfigurationLoader('assets/config/config.json?v=' + new Date().getTime());
const configLoader = new ConfigurationLoader('assets/config/config.json');
configLoader.load(() => {
  // tslint:disable-next-line:no-console
  console.info('Configuration loaded -' + Configuration.get('appName', true));
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
});
