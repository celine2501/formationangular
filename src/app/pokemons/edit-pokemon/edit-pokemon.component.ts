import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { Subscription } from "rxjs";


@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.scss']
})
export class EditPokemonComponent implements OnInit,OnDestroy {
  pokemon: Pokemon = null;
  private routeSub: Subscription;

  constructor(private route: ActivatedRoute, private _pokemonService: PokemonService) { }

  // Le ngOnInit de ce composant devra récupérer l'id de la page. Avec cet ID,
  //  nous pouvons récupérer le pokemon courant et le stocker dans la variable : pokemon
  ngOnInit(): void {
    let id: number;
    this.routeSub = this.route.params.subscribe(params => {
      id = params['id'];
     this._pokemonService.getPokemon(id).subscribe(data =>{
      this.pokemon = data;
  });
  ;
    });

  }
  
  // vide la mémoire- détruit la subscription
  ngOnDestroy(){
    this.routeSub.unsubscribe();
}
}
