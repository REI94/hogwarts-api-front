import { Component, OnInit } from '@angular/core';
import { HogwartsService } from '../../services/hogwarts.service';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  //List of characters that will be passed to the table component.
  listOfCharacters: Character[] = [];

  constructor( private hogwartsService: HogwartsService ) { }

  ngOnInit(): void {

    this.onChangeHouse();
  }

  //The function requests the list of characters from the API sending the name of the house as a parameter.
  onChangeHouse(house: string = 'gryffindor') {

    this.hogwartsService.getAllCharacters( house )
      .subscribe ( res => {
        this.listOfCharacters = res;
      })
  }

}
