import { Component, OnInit } from '@angular/core';
import { personajes } from '../modelo/rickandMorty';
import { ServiceRickandMortyService } from '../servicio/service-rickand-morty.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  personajes: personajes[] = [];

  narutoAndDragonball:any = [
    {id:1, name:'naruto',locacion:'aldea de la hoja'},
    {id:2,name:'goku' , locacion: 'Planeta Vegeta' },
    {id:3,name:'bulma', locacion:"tierra" },
    {id:4,name:'sakura', locacion:'al de la hoja'}
  ]


  constructor(private srv: ServiceRickandMortyService) {}

  ngOnInit() {
    this.narutoAndDragonball.map((data,i)=>{
        console.log(data.name)
    })
  this.narutoAndDragonball
    
    
  // this.srv.obtenerPersonajes().subscribe((data)=>{
    //   console.log(data.results)
    //   this.personajes = data.results
    // }
    // )
  }


}
