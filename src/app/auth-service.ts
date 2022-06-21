import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from "rxjs/operators";

@Injectable()
export class AuthService {
  isLoggedIn : boolean = false; // l'utilisateur est-il connecté ?
  redirectUrl: string; // où rediriger l'utilisateur

  //Une méthode de connexion
  login(name: string, password: string): Observable<boolean>{
    let isLoggedIn = (name === 'admin' && password === 'admin');

    return of(true).pipe(
      delay(1000),
      tap(() => this.isLoggedIn = isLoggedIn)
    )
  }
  //Une méthode de déconnexion
  logout(){
    this.isLoggedIn = false;
  }

  
}
