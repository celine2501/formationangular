import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BorderCardDirective } from "./border-card.directive";
import { DetailPokemonComponent } from "./details-pokemon.component";
import { ListPokemonComponent } from "./list-pokemon.component";
import { PokemonRoutingModules } from "./pokemon-routing.module";
import { PokemonTypeColorPipe } from "./pokemon-type-color.pipe";
import { PokemonService } from "./pokemon.service";
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { AuthGuardService } from "../auth-guard.service";
import { AuthService } from "../auth-service";

@NgModule({
    imports : [
        CommonModule,
        FormsModule, // formulaire template 
        PokemonRoutingModules
       
    ],
    declarations: [
        BorderCardDirective,
        PokemonTypeColorPipe,
        ListPokemonComponent,
        DetailPokemonComponent,
        PokemonFormComponent,
        EditPokemonComponent,
        SearchPokemonComponent,
       

    ],
    providers:[
        PokemonService,
        AuthGuardService,
        AuthService

    ]
})

export class PokemonModule { }