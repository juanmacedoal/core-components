import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { LoggerService } from '../../logger/logger.service';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { StoreService } from '../../store/store.service';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptorService implements HttpInterceptor {

  private regexApi = /(.*)(lypres)(.+)(api)(.*)/;

  constructor(
    private logger: LoggerService,
    private store: StoreService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const shouldIntercept = this.regexApi.test(request.url);

    if (shouldIntercept) {
      this.logger.debug('ApiInterceptor : intercept ::', request);

      request = request.clone({
        setHeaders: {
          // Authorization: this.store.recover(ApiService.API_TOKEN_KEY)
        }
      });
    }

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse && shouldIntercept) {
          this.logger.debug('ApiInterceptor : intercept :: HttpResponse', request);
        }

        return event;
      })
    );
  }

}
