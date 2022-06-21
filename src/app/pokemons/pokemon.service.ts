import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { POKEMONS } from "./mock-pokemons";
import { Pokemon } from "./pokemon";


@Injectable()

export class PokemonService {
    //CREATION URL 2
    private pokemonsUrl = 'api/pokemons';

    //HTTP 1
    constructor(private http: HttpClient) { }


    // Retourne tous les pokémons 3
    getPokemons(): Observable<Pokemon[]> {
        return this.http.get<Pokemon[]>(this.pokemonsUrl);

    }

    // Retourne tous le pokémon
    getPokemon(id: number): Observable<Pokemon> {
      
        //GET URL ==> api/pokemons/1
        // let pokemons = this.getPokemons();
        // URL = api/pokemons/id
        // URL = api/pokemons/ + 10
        return this.http.get<Pokemon>(this.pokemonsUrl + '/' + id);
        // ou var url = `${this.pokemonsUrl}/${id}`;
    }

    // recupere tous les types de pokemon
    getPokemonTypes(): Array<string> {
        return [

            'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
            'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
        ];

    }
    updatePokemon(pokemon : Pokemon) : Observable<Pokemon>{
        const httpOptions = {
            headers : new HttpHeaders({'Content-Type': 'application/json'})
        }
        return this.http.put<Pokemon>(this.pokemonsUrl, pokemon, httpOptions)
    }

    deletePokemon(id:number):Observable<Pokemon>{
        return this.http.delete<Pokemon>(this.pokemonsUrl + '/' + id);
    }

    searchPokemons(term: string) : Observable<Pokemon[]> {
        if(!term.trim()) 
            return of([]);
        return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`)

    }




}
