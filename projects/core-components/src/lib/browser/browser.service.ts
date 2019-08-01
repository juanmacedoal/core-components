import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrowserService {
  constructor() {}

  isIE11(): boolean {
    return !!(<any>window).MSInputMethodContext && !!(<any>document).documentMode;
  }
}
