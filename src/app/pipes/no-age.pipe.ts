import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noAge'
})
export class NoAgePipe implements PipeTransform {

  //Because some API results do not include date,
  //this pipe transforms the empty integer "age" to an empty string.
  transform(age: number): any {

    if(isNaN(age))
      return '';

    return age;
  }
}
