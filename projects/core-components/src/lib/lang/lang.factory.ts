import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Injector } from '@angular/core';

export function languageLoader(http: HttpClient, injector: Injector) {
  const ENDPOINT_URL = 'assets/configuration/i18n/login-locale-';
  return new TranslateHttpLoader(http, ENDPOINT_URL, '.json');
}
