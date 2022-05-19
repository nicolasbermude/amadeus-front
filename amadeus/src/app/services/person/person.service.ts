import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { PersonModel } from '../../models/person.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  public sendRequest(data: PersonModel): Observable<PersonModel> {
    return this.http.post<PersonModel>(environment.insertPersonUrl, data);
  }

  public getPerson(): Observable<PersonModel[]> {
    return this.http.get<PersonModel[]>(environment.getPersonUrl).pipe(
       )
  }
  public updateRequest(data: PersonModel): Observable<PersonModel> {
    console.log(data);
    return this.http.put<PersonModel>(environment.updatePersonUrl, data);
  }

  public deletePerson(idperson){
    const URL = environment.deletePersonUrl+ idperson;
    console.log(URL);
    return this.http.delete(URL);
  }
  }



