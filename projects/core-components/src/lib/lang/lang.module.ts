import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangPipe } from './lang.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LangPipe],
  exports: [LangPipe]
})
export class LangModule { }
