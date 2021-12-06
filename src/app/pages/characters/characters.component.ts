import { Component, OnInit } from '@angular/core';
import { HogwartsService } from '../../services/hogwarts.service';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  listOfCharacters: Character[] = [];

  constructor( private hogwartsService: HogwartsService ) { }

  ngOnInit(): void {

    this.onChangeHouse();
  }

  onChangeHouse(house: string = 'gryffindor') {

    this.hogwartsService.getAllCharacters( house )
      .subscribe ( res => {
        this.listOfCharacters = res;
      })
  }

}
