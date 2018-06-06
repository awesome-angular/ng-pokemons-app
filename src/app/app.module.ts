import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListPokemonComponent } from './list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';

@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	declarations: [
		AppComponent,
		ListPokemonComponent,
		DetailPokemonComponent,
		PageNotFoundComponent,
		BorderCardDirective,
		PokemonTypeColorPipe
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
