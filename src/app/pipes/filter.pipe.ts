import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(characters: Character[], page: number = 0): Character[] {

    return characters.slice( page, page + 5 );
  }

}
