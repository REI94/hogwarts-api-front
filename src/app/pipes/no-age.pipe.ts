import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noAge'
})
export class NoAgePipe implements PipeTransform {

  //Because some API results do not include date,
  //this pipe changes the empty integer "age" for an empty string.
  transform(age: number): any {

    if(isNaN(age))
      return '';

    return age;
  }
}
