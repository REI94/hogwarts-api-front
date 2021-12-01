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

    this.selectHouse();
  }

  selectHouse() {

    const house_selected = ((document.getElementById("house-select") as HTMLInputElement).value);

    this.hogwartsService.getAllCharacters( house_selected )
      .subscribe ( res => {
        this.listOfCharacters = res;
      } )
  }

}
