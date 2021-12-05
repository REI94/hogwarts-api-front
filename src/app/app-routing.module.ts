import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Pages
import { CharactersComponent } from './pages/characters/characters.component';
import { StudentsComponent } from './pages/students/students.component';
import { StaffComponent } from './pages/staff/staff.component';
import { SignUpComponent } from './pages/students/sign-up/sign-up.component';
import { RequestsComponent } from './pages/students/requests/requests.component';


const routes: Routes = [
  { path: 'characters', component: CharactersComponent, data: {title: 'Characters'} },
  {
    path: 'students',
    component: StudentsComponent,
    children: [
      { path: 'sign-up', component: SignUpComponent, data: {title: 'Students - Sign Up'} },
      { path: 'requests', component: RequestsComponent, data: {title: 'Students - Requests'} }
    ],
    data: {title: 'Students'}
  },
  { path: 'staff', component: StaffComponent, data: {title: 'Staff'} },
  { path: '**', pathMatch: 'full', redirectTo: 'characters' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
