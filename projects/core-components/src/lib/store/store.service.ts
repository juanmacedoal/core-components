import { Injectable } from '@angular/core';
import { LoggerService } from '../logger/logger.service';
import { Subject, Observable  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private STORE_KEY = 'STORE';
  private memory: any = {};
  private storeObservable = new Subject<any>();

  public change = this.storeObservable.asObservable();

  constructor(
    private logger: LoggerService
  ) { }

  save(key: string, data: any, cache = false, options?: any) {
    this.logger.debug('Store : save :: item with key', key, 'data', data, 'cache', cache);
    this.memory[key] = data;

    if (cache) {
      const store = JSON.parse(sessionStorage.getItem(this.STORE_KEY))
      store[key] = data;
      sessionStorage.setItem(this.STORE_KEY, JSON.stringify(store));
    }

    this.storeObservable.next(this.memory);
  }

  recover<T>(key: string, erase = false): T {
    const data = { ...this.memory[key] } || JSON.parse(sessionStorage.getItem(key));
    this.logger.debug('Store : recover ::', data, 'from key', key);

    if (erase) {
      this.logger.debug('Store : recover :: erasing key', key);

      const store = JSON.parse(sessionStorage.getItem(this.STORE_KEY))
      delete store[key];
      delete this.memory[key];

      sessionStorage.setItem(this.STORE_KEY, JSON.stringify(store));
    }

    return data;
  }

  remove(key: string): void {
    this.logger.debug('Store : recover :: erasing key', key);
    const store = JSON.parse(sessionStorage.getItem(this.STORE_KEY))
    delete store[key];
    delete this.memory[key];

    sessionStorage.setItem(this.STORE_KEY, JSON.stringify(store));

    this.storeObservable.next(this.memory);
  }

  removeAll() {
    this.logger.debug('Store : removeAll');
    this.memory = {};
    sessionStorage.removeItem(this.STORE_KEY);

    this.storeObservable.next(this.memory);
  }

}
