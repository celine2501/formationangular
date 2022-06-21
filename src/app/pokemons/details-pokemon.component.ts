import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { POKEMONS } from './mock-pokemons';
import { Pokemon } from './pokemon';
import { PokemonService } from "./pokemon.service";

@Component({
    selector:'detail-pokemon',
    templateUrl: './detail-pokemon.component.html'

})

export class DetailPokemonComponent implements OnInit, OnDestroy {
    constructor(private route: ActivatedRoute, private router: Router,private _pokemonService: PokemonService){ }

    // pokemons: Pokemon[];
    pokemon:Pokemon; // un pokemon
    private routeSub: Subscription;


    ngOnInit() {
        let id: number;
        this.routeSub = this.route.params.subscribe(params => { //params : varaible que l'on definie nous même
            id = params['id'];
            // Boucle For
                // for(let i=0;i<=this.pokemons.length;i++){
                //     if(this.pokemons[i].id == id){
                //         this.pokemon = this.pokemons[i]
                //     }
                // }

            // TYPESCRIPT
            // expression lambda : (maVariableTemporaire => operateur)
            
        this._pokemonService.getPokemon(id).subscribe(data =>{
            this.pokemon = data;
        });
            
        });
    }    

    goBack(): void{
        this.router.navigate(['pokemon/all']);
    }

    goEdit(pokemon: Pokemon){
        let link = ['/pokemon/edit', pokemon.id];
        this.router.navigate(link);
    }

    goDelete(id:number):void{
        //j'appel mon service qui supprime mon pokemon
        this._pokemonService.deletePokemon(id).subscribe(() => {
          this.goBack();//je veux retourner sur ma liste une fois que j'ai supprimer
        })
    }
       
    ngOnDestroy(){
        this.routeSub.unsubscribe();
    }
    

    
}