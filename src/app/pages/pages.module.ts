import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';

//Pages components
import { CharactersComponent } from './characters/characters.component';
import { StudentsComponent } from './students/students.component';
import { StaffComponent } from './staff/staff.component';


@NgModule({
  declarations: [
    CharactersComponent,
    StudentsComponent,
    StaffComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    CharactersComponent,
    StudentsComponent,
    StaffComponent
  ]
})
export class PagesModule { }
