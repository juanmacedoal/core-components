import { NgModule, APP_INITIALIZER, Injector, ErrorHandler, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConfigFactory } from './initializr/config/config.factory';
import { ConfigService } from './initializr/config/config.service';
import { Environment } from './initializr/config/config';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core'; 
import { languageLoader } from './lang/lang.factory';
import { ApiInterceptorService } from './api/interceptor/api-interceptor.service';
import { ErrorHandlerService } from './error/error-handler.service';
import { ErrorInterceptorService } from './error/interceptor/error-interceptor.service';

@NgModule({
  imports: [
    HttpClientModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: languageLoader,
        deps: [HttpClient, Injector]
      }
    })
  ],
  providers: [
    {
      provide: 'AppEnv',
      useClass: Environment
    },
    {
      provide: ErrorHandler,
      useClass: ErrorHandlerService
    },
    {
      provide: APP_INITIALIZER,
      useFactory: ConfigFactory,
      deps: [ConfigService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    }
  ]
})

export class CoreComponentsModule {   constructor(@Optional() @SkipSelf() parentModule: CoreComponentsModule, private _translateSrv: TranslateService) {
  this._translateSrv.addLangs(['en', 'es']);
  this._translateSrv.use('es');
  if (parentModule) {
    throw new Error('CoreModule is already loaded. Import it in the AppModule only');
  }
}}
