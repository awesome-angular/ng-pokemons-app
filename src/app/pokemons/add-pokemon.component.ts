import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Pokemon } from './pokemon';

@Component({
	selector: 'add-pokemon',
	templateUrl: './app/pokemons/add-pokemon.component.html'
})
export class AddPokemonComponent implements OnInit {

	pokemon: Pokemon = null;

	constructor(private titleService: Title) { }

	ngOnInit(): void {
		this.titleService.setTitle('Ajouter un pokémon');
		this.pokemon = new Pokemon();
	}

}
