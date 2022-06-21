import { Component, OnInit,} from "@angular/core";

@Component({
    selector: 'not-found',
    template: `<h1> PAGE NOT FOUND <h1>
    <a routerLink="pokemon/all" class="waves-effect">Vers les pokémons</a>`
})
// /pokemons
// routerLink
export class NotFound implements OnInit {
    ngOnInit() {
    }
}