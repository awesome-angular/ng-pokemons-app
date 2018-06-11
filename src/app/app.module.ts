import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LoginRoutingModule } from './login-routing.module';
import { PokemonsModule } from './pokemons/pokemons.module'

import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { PageNotFoundComponent } from './page-not-found.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule,
		// Le module HttpClientInMemoryWebApiModule intercepte les requêtes HTTP
		// et retourne des réponses simulées du serveur.
		// Retirer l'importation quand un "vrai" serveur est prêt pour recevoir des requêtes.
		HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
		PokemonsModule,
		LoginRoutingModule,
		AppRoutingModule
	],
	declarations: [
		AppComponent,
		LoginComponent,
		PageNotFoundComponent
	],
	providers: [Title],
	bootstrap: [AppComponent]
})
export class AppModule { }
