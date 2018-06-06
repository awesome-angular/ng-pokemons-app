import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonRoutingModule } from './pokemons-routing.module';

import { ListPokemonComponent } from './list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonsService } from './pokemons.service';

@NgModule({
	imports: [
		CommonModule,
		PokemonRoutingModule
	],
	declarations: [
		ListPokemonComponent,
		DetailPokemonComponent,
		BorderCardDirective,
		PokemonTypeColorPipe
	],
	providers: [PokemonsService]
})
export class PokemonsModule { }
