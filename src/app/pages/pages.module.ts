import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters/characters.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';



@NgModule({
  declarations: [
    CharactersComponent,
    StudentsComponent,
    TeachersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CharactersComponent,
    StudentsComponent,
    TeachersComponent
  ]
})
export class PagesModule { }
