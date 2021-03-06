import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'photo'
})
export class PhotoPipe implements PipeTransform {

  transform( photo: string ): string {

    if( photo.length !== 0 ) {
      return photo;
    }
    else {
      return './assets/img/no-image.jpg';
    }
  }
}
