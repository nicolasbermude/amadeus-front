import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonModule } from './modules/person/person.module';
import { PersonListModule } from './modules/person-list/person-list.module';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { EditPersonModule } from './modules/edit-person/edit-person.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonModule,
    PersonListModule,
    HttpClientModule,
    DataTablesModule,
    EditPersonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
