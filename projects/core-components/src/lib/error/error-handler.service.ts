import { Injectable, ErrorHandler } from '@angular/core';
import { LoggerService } from '../logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {

  constructor(
    private logger: LoggerService
  ) { }

  handleError(error: any) {
    this.logger.debug('Handling technical error');
    this.logger.error(error);
  }
}
