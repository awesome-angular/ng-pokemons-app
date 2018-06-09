import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';

@Component({
	selector: 'add-pokemon',
	templateUrl: './app/pokemons/add-pokemon.component.html'
})
export class AddPokemonComponent implements OnInit {

	pokemon: Pokemon = null;

	constructor() { }

	ngOnInit(): void {
		this.pokemon = new Pokemon();
	}

}
