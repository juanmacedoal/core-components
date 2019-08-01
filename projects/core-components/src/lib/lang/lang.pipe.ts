import { Pipe, PipeTransform } from '@angular/core';
import { LangService } from './lang.service';

@Pipe({
  name: 'lang',
})
export class LangPipe implements PipeTransform {
  constructor(private language: LangService) {}

  transform(value: any, args?: any): any {
    return this.language.instant(value);
  }
}
