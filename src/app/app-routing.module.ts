import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Pages
import { CharactersComponent } from './pages/characters/characters.component';
import { StudentsComponent } from './pages/students/students.component';
import { StaffComponent } from './pages/staff/staff.component';
import { SingupComponent } from './pages/students/singup/singup.component';
import { RequestsComponent } from './pages/students/requests/requests.component';


const routes: Routes = [
  { path: 'characters', component: CharactersComponent },
  {
    path: 'students',
    component: StudentsComponent,
    children: [
      { path: 'singup', component: SingupComponent },
      { path: 'requests', component: RequestsComponent }
    ]
  },
  { path: 'staff', component: StaffComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
