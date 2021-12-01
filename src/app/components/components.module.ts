import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Components
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    NavbarComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
  ],
  exports: [
    NavbarComponent,
    TableComponent
  ]
})
export class ComponentsModule { }
