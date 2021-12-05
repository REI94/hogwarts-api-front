import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';

//Pages components
import { CharactersComponent } from './characters/characters.component';
import { StudentsComponent } from './students/students.component';
import { StaffComponent } from './staff/staff.component';
import { SignUpComponent } from './students/sign-up/sign-up.component';
import { RequestsComponent } from './students/requests/requests.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CharactersComponent,
    StudentsComponent,
    StaffComponent,
    SignUpComponent,
    RequestsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    CharactersComponent,
    StudentsComponent,
    StaffComponent,
    SignUpComponent
  ]
})
export class PagesModule { }
