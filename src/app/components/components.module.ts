import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Components
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [
    NavbarComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    TableComponent
  ]
})
export class ComponentsModule { }
