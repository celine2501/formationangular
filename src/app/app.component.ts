import { Component, OnInit } from '@angular/core';
// import { POKEMONS } from './mock-pokemons';
// import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

//cycle de vie : OnInit
export class AppComponent implements OnInit {
  // title: string = "Mes pokemons";
  // isSpecial : boolean = true;
  // values: string = '';
  // pokemons: Pokemon[]; // Initialisation variable pour stocker mon array
 

  //methode cycle de vie
  ngOnInit() {
  }
}
