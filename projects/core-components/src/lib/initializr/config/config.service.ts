import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoggerService } from '../../logger/logger.service';
import { Config, Environment } from './config';
import { BrowserService } from '../../browser/browser.service';
import { StoreService } from '../../store/store.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public static URI_CONFIG = './config.json';

  private KEY_CONFIG = 'LYPRES-CONFIG';

  constructor(
    private logger: LoggerService,
    private http: HttpClient,
    @Inject('AppEnv') private appEnv: Environment,
    private browser: BrowserService,
    private store: StoreService
  ) {}

  // /**
  //  * @description Inicializador para la aplicacion. Carga el fichero config.json que hay en la raiz del servidor.
  //  *
  //  * @returns Promise<any>
  //  */
  // initializr(): Promise<any> {
  //   this.logger.debug('Initilizr : config');
  //   const cacheConf = this.store.recover<Config>(this.KEY_CONFIG);

  //   if (this.browser.isIE11() && cacheConf) {
  //     return new Promise((resolve: Function) => {
  //       this.setConfig(cacheConf);
  //       resolve(cacheConf);
  //     });
  //   }

  //   return this.http.get<Config>(ConfigService.URI_CONFIG).toPromise()
  //     .then((config) => {
  //       this.setConfig(config);

  //       return config;
  //     }, (error) => {
  //       this.logger.error('Initilizr : config :: error', error);

  //       return error;
  //     });
  // }

  /**
   * @description Set the config in AppEnv. Detect if is IE 11 to store it.
   *
   * @param config AppEnv.config
   */
  private setConfig(config: Config): void {
    this.logger.info('Initilizr : config :: success', config);
    this.logger.debug('Initilizr : setting AppEnv.config');
    this.appEnv.config = config;
    this.logger.debug('Initilizr : setted AppEnv.config with value', this.appEnv);

    if (this.browser.isIE11()) {
      this.logger.debug('Initializr : config :: detected IE11 storing config');
      this.store.save(this.KEY_CONFIG, config);
    }
  }
}
