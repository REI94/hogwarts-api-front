import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CharactersResponse, Character } from '../interfaces/character.interface';
import { getAge } from '../functions/age';

@Injectable({
  providedIn: 'root'
})
export class HogwartsService {

  private url: string = 'https://hp-api.herokuapp.com/api/characters';

  constructor( private http: HttpClient ) {  }

  //As we are only interested in bringing 4 attributes of each character (name, patronus, age and image),
  //the map operator is used to avoid bringing information that we do not need.

  getAllCharacters( house: string ) {

    return this.http.get<CharactersResponse[]>(`${this.url}/house/${house}`)
              .pipe(
                map( this.transformCharactersResponse )
              )
  }

  getAllStudents() {

    return this.http.get<CharactersResponse[]>(`${this.url}/students`)
              .pipe(
                map( this.transformCharactersResponse )
              )
  }

  getAllStaff() {

    return this.http.get<CharactersResponse[]>(`${this.url}/staff`)
              .pipe(
                map( this.transformCharactersResponse )
              )
  }

  //We get only the attributes that interest us.
  private transformCharactersResponse( res: CharactersResponse[] ) {

    const charactersList: Character[] = res.map( character => {

      //We want to show the age of each character, but we only have the date of birth at hand,
      //therefore, we will calculate the age by comparing that date with the current date.
      const age = getAge(character.dateOfBirth);

      return {
        name: character.name,
        patronus: character.patronus,
        age,
        image: character.image
      }
    })

    return charactersList;
  }
}
