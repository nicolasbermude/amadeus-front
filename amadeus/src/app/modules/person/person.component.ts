import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/services/person/person.service';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

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

  constructor(
    private PersonService: PersonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mechForm.markAsPristine();
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


  

  
  onSubmit(){
    const data = {
      idperson: this.mechForm.value.idperson,
      name: this.mechForm.value.name,
      number: this.mechForm.value.number,
      phone: this.mechForm.value.phone,
      email: this.mechForm.value.email,
      address: this.mechForm.value.address
    }
    

    this.PersonService.sendRequest(data).subscribe(
      (data: any) => {
        console.log(data);
        alert("Se creo la persona correctamente");
        this.router.navigate(['person-list']);
      },
      error => {
        console.log(error)
        alert("Se presento el siguiente error >> " + error);
      }
    )
  }

}
