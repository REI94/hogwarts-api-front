import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoPipe } from './photo.pipe';



@NgModule({
  declarations: [
    PhotoPipe
  ],
  exports: [
    PhotoPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
