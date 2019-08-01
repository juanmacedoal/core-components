import { Injectable, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';
import { LoggerService } from '../logger/logger.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LangService {
  private ATTR_DOC_LANGUAGE = 'lang';

  constructor(
    private translate: TranslateService,
    @Inject(DOCUMENT) private doc: any,
    private logger: LoggerService
  ) {}

  instant(key: string | string[], interpolateParams?: Object): string {
    return this.translate.instant(key, interpolateParams);
  }

  setDefaultLang(lang: string): void {
    this.logger.debug('LangService : setDefaultLang ::', lang);
    this.setDocLang(lang);
    this.translate.setDefaultLang(lang);
  }

  use(lang: string): Observable<any> {
    this.logger.debug('LangService : use ::', lang);
    this.setDocLang(lang);
    return this.translate.use(lang);
  }

  private setDocLang(lang: string): void {
    this.logger.debug('Setting default language as', lang);
    this.doc.documentElement.setAttribute(this.ATTR_DOC_LANGUAGE, lang);
  }
}
