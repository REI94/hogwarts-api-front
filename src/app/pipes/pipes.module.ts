import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoPipe } from './photo.pipe';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    PhotoPipe,
    FilterPipe
  ],
  exports: [
    PhotoPipe,
    FilterPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
