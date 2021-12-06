import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../../interfaces/character.interface';
import { HogwartsService } from '../../services/hogwarts.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  //List of characters that will be passed to the table component.
  listOfStudents: Character[] = [];

  constructor( private hogwartsService: HogwartsService, public route: ActivatedRoute ) { }

  ngOnInit(): void {

    this.hogwartsService.getAllStudents()
      .subscribe ( res => {
        this.listOfStudents = res;
      } )
  }

}
