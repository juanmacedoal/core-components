import { Injectable } from '@angular/core';
import { BrowserService } from '../browser/browser.service';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  private LEVEL_INFO = 'INFO';
  private LEVEL_DEBUG = 'DEBUG';
  private LEVEL_ERROR = 'ERROR';

  private infoStyles =
    'background-color: #0077c2; color: white; border-radius: 2px;';
  private errorStyles =
    'background-color: #F44336; color: white; border-radius: 2px';
  private debugStyles =
    'background-color: #F57C00; color: white; border-radius: 2px';

  constructor(
    private browser: BrowserService
  ) {}

  info(...args: any[]): void {
    // tslint:disable:no-console
    console.info('%c[INFO]', this.infoStyles, '', ...args);
  }

  debug(...args: any[]): void {
    // tslint:disable:no-console
    console.info('%c[DEBUG]', this.debugStyles, ...args);
  }

  error(...args: any[]): void {
    // tslint:disable:no-console
    console.info('%c[ERROR] ', this.errorStyles, '', ...args);
  }
}
