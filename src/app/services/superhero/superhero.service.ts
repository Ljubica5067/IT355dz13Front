import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Superhero } from 'src/app/models/superhero';

@Injectable({
  providedIn: 'root'
})
export class SuperheroService {

  private baseUrl = 'http://localhost:8080/superhero';

  constructor(private _http : HttpClient) { }

  public getSuperheroes(): Observable<Superhero[]>{
    return this._http.get<Superhero[]>(this.baseUrl);
  }

  public getSuperheroById(id?: number): Observable<Superhero>{
    return this._http.get<Superhero>(this.baseUrl + '/' + id);
  }

  public addSuperhero(superhero: Superhero): Observable<Superhero>{
    return this._http.post<Superhero>(this.baseUrl, superhero);
  }

  public updateSuperhero(superhero: Superhero): Observable<Superhero>{
    return this._http.put<Superhero>(this.baseUrl, superhero);
  }

  public deleteSuperheroById(id?: number): Observable<Superhero>{
    return this._http.delete<Superhero>(this.baseUrl + '/' + id);
  }
}