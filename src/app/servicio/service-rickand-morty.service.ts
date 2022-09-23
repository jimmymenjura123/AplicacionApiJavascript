import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'; 
import { rickandMorty } from '../modelo/rickandMorty';

@Injectable({
  providedIn: 'root'
})
export class ServiceRickandMortyService {

  url:string = environment.url;
  constructor(public http:HttpClient ) { }

  obtenerPersonajes():Observable<rickandMorty>{
    return this.http.get<rickandMorty>(this.url);
  }
  fucionando (){
    
  }

}
