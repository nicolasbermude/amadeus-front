import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'person',
    loadChildren: () =>
      import('src/app/modules/person/person.module').then(m => m.PersonModule)
  },
  {
    path: 'person-list',
    loadChildren: () =>
      import('src/app/modules/person-list/person-list.module').then(m => m.PersonListModule)
  },
  {
    path: 'edit-person',
    loadChildren: () =>
      import('src/app/modules/edit-person/edit-person.module').then(m => m.EditPersonModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
