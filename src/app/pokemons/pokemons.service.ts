import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Injectable()
export class PokemonsService {

	// Retourne tous les Pokémons
	getPokemons(): Pokemon[] {
		return POKEMONS;
	}

	// Retourne le Pokémon avec l'identifiant passé en paramètre
	getPokemon(id: number): Pokemon {
		let pokemons = this.getPokemons();

		for (let index = 0; index < pokemons.length; index++) {
			if (id === pokemons[index].id) {
				return pokemons[index];
			}
		}
	}

	// Retourne la liste des types des Pokémons
	getPokemonTypes(): Array<string> {
		return [
			'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
			'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
		];
	}
}
