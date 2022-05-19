import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditPersonRoutingModule } from './edit-person-routing.module';
import { EditPersonComponent } from './edit-person.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [EditPersonComponent],
  imports: [
    CommonModule,
    EditPersonRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    EditPersonComponent
  ]
})
export class EditPersonModule { }
