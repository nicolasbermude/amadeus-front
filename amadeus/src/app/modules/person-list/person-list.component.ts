import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonModel } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

  idperson: PersonModel[];
  person: PersonModel[];
  dtOptions: DataTables.Settings = {};

  constructor(private PersonService: PersonService, private router: Router) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true
    };

    this.PersonService.getPerson().subscribe(
      (data: any) => this.person = data,
      error => console.log(error)
    );
  }

  

  eliminar(idperson) {
    this.PersonService.deletePerson(idperson).subscribe(data => {
      console.log(data);
    });
    console.log(idperson);
  }

  crearPersona(){
    this.router.navigate(['person']);
  }

  actualizarPersona(persona){
    this.router.navigate(['edit-person'],{ queryParams:persona} );
  }

  }

