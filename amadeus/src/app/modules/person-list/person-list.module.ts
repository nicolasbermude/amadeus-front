import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonListRoutingModule } from './person-list-routing.module';
import { PersonListComponent } from './person-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [PersonListComponent],
  imports: [
    CommonModule,
    PersonListRoutingModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  exports: [
    PersonListComponent
  ]
})
export class PersonListModule { }
