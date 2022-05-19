import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PersonModel } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person/person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.scss']
})
export class EditPersonComponent implements OnInit {

  person: PersonModel[];

  public mechForm = new FormGroup({
    name: new FormControl('',{
      validators: [
        Validators.required,
        Validators.maxLength(80),
        Validators.min(1)
      ]
    }),
    number: new FormControl('',{
      validators: [
        Validators.required,
        Validators.max(9999999999),
        Validators.min(1)
      ]
    }),
    email: new FormControl('',{
      validators: [
        Validators.required,
        Validators.email,
        Validators.maxLength(100)
      ]
    }),
    phone: new FormControl('',{
      validators: [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10)
      ]
    }),
    address: new FormControl('',{
      validators: [
        Validators.required,
        Validators.maxLength(200)
      ]
    }),
  })
    idperson = 0;
  constructor(private PersonService: PersonService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.idperson = params.idperson;
        this.mechForm.get('name').setValue(params.name);
        this.mechForm.get('number').setValue(params.number);
        this.mechForm.get('email').setValue(params.email);
        this.mechForm.get('phone').setValue(params.phone);
        this.mechForm.get('address').setValue(params.address);
        console.log(params);
      }
    );
  }
  
  get name(){
    return this.mechForm.get('name');
  }
  get number(){
    return this.mechForm.get('number');
  }
  get phone(){
    return this.mechForm.get('phone');
  }
  get email(){
    return this.mechForm.get('email');
  }
  get address(){
    return this.mechForm.get('address');
  }

  editar(){
      const data = {
        idperson: this.idperson,
        name: this.mechForm.value.name,
        number: this.mechForm.value.number,
        phone: this.mechForm.value.phone,
        email: this.mechForm.value.email,
        address: this.mechForm.value.address
      };
      this.PersonService.updateRequest(data).subscribe(data => {
        alert("Se actualizo la persona correctamente");
        this.router.navigate(['person-list']);
        console.log(data);
      });
  }
  
  }