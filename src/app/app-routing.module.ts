import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { NotFound } from "./page-not-found.component";

const appRoutes: Routes = [

    { path: '', redirectTo: 'pokemon/all', pathMatch: 'full' },
    { path: '**', component: NotFound },

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }