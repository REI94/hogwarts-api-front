import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(characters: Character[], page: number = 0, keyword: string = ''): Character[] {

    if( keyword.length === 0 )
      return characters.slice( page, page + 5 );

    const filteredCharacters = characters.filter( charact => charact.name.toLocaleLowerCase().includes( keyword.trim().toLocaleLowerCase() ) );

    return filteredCharacters.slice( page, page + 5 );
  }

}
