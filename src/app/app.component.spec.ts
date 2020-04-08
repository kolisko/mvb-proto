import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {Configuration, ConfigurationLoader} from '../config-loader';

describe('AppComponent', () => {
  beforeEach((done) => {
    const configLoader = new ConfigurationLoader('assets/config/config.json?v=' + new Date().getTime());
    configLoader.load(() => {
      // tslint:disable-next-line:no-console
      console.info('Configuration loaded - ' + Configuration.get('appName', true));
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule
        ],
        declarations: [
          AppComponent
        ],
      }).compileComponents();
      done();
    });
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'mvb-prototype-hybrid-webapp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('mvb-prototype-hybrid-webapp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('mvb-prototype-hybrid-webapp app is running!');
  });
});
