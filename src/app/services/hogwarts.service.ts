import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CharactersResponse, Character } from '../interfaces/character.interface';
import { getAge } from '../functions/age';

@Injectable({
  providedIn: 'root'
})
export class HogwartsService {

  private url: string = 'http://hp-api.herokuapp.com/api/characters';

  constructor( private http: HttpClient ) {  }

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

  private transformCharactersResponse( res: CharactersResponse[] ) {

    const charactersList: Character[] = res.map( character => {

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
