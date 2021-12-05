import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoPipe } from './photo.pipe';
import { FilterPipe } from './filter.pipe';
import { NoAgePipe } from './no-age.pipe';



@NgModule({
  declarations: [
    PhotoPipe,
    FilterPipe,
    NoAgePipe
  ],
  exports: [
    PhotoPipe,
    FilterPipe,
    NoAgePipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
