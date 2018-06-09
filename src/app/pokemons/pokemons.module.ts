import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonRoutingModule } from './pokemons-routing.module';

import { ListPokemonComponent } from './list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon.component';
import { AddPokemonComponent } from './add-pokemon.component';
import { PokemonSearchComponent } from './search-pokemon.component';
import { PokemonFormComponent } from './pokemon-form.component';
import { LoaderComponent } from '../loader.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonsService } from './pokemons.service';
import { AuthGuard } from '../auth-guard.service';
import { AuthService } from '../auth.service';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		PokemonRoutingModule
	],
	declarations: [
		ListPokemonComponent,
		DetailPokemonComponent,
		EditPokemonComponent,
		AddPokemonComponent,
		PokemonSearchComponent,
		PokemonFormComponent,
		LoaderComponent,
		BorderCardDirective,
		PokemonTypeColorPipe
	],
	providers: [
		PokemonsService,
		AuthGuard,
		AuthService
	]
})
export class PokemonsModule { }
