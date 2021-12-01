import { Component, OnInit } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { HogwartsService } from '../../services/hogwarts.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  listOfStudents: Character[] = [];

  constructor( private hogwartsService: HogwartsService ) { }

  ngOnInit(): void {

    this.hogwartsService.getAllStudents()
      .subscribe ( res => {
        this.listOfStudents = res;
      } )
  }

}
