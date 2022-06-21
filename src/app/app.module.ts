import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFound } from './page-not-found.component';
import { PokemonModule } from './pokemons/pokemon.module';
import { HttpClientModule  } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./pokemons/in-memory-data.service";
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth-service';
import { LoginRountingModule } from './login/login-rounting.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFound,
    LoginComponent
  ],
  imports: [
    BrowserModule,//demarrage appli + outils angular 1-plateforme de demarrage
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation : false}),
    PokemonModule, //2-module
    LoginRountingModule,
    AppRoutingModule //3-module
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
