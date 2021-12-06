import { Component, OnInit } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { HogwartsService } from '../../services/hogwarts.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  //List of characters that will be passed to the table component.
  listOfStaff: Character[] = [];

  constructor( private hogwartsService: HogwartsService ) { }

  ngOnInit(): void {

    this.hogwartsService.getAllStaff()
      .subscribe ( res => {
        this.listOfStaff = res;
      } )
  }

}
