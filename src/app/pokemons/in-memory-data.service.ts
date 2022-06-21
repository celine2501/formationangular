import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { POKEMONS } from "./mock-pokemons";

export class InMemoryDataService implements InMemoryDbService{
    createDb() {
        //ajout variable temporaire
        let pokemons = POKEMONS
        return { pokemons }
    }
}