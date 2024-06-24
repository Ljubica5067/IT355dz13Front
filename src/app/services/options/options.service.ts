import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  
  private baseUrl = 'http://localhost:8080/api';

  constructor(private _http: HttpClient) { }

  public getAllAlignment(): Observable<any[]>{
    return this._http.get<any[]>(this.baseUrl + '/alignment');
  }

  public getAllColour(): Observable<any[]>{
    return this._http.get<any[]>(this.baseUrl + '/colour');
  }

  public getAllGender(): Observable<any[]>{
    return this._http.get<any[]>(this.baseUrl + '/gender');
  }

  public getAllPublisher(): Observable<any[]>{
    return this._http.get<any[]>(this.baseUrl + '/publisher');
  }
  
  public getAllRace(): Observable<any[]>{
    return this._http.get<any[]>(this.baseUrl + '/race');
  }

  public getAllSuperpower(): Observable<any[]>{
    return this._http.get<any[]>(this.baseUrl + '/superpower');
  }
}
