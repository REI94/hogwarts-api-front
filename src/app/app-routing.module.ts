import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Pages
import { CharactersComponent } from './pages/characters/characters.component';
import { StudentsComponent } from './pages/students/students.component';
import { StaffComponent } from './pages/staff/staff.component';


const routes: Routes = [
  { path: 'characters', component: CharactersComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'staff', component: StaffComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
