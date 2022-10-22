import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { PokemonResponse } from './pokemon-response';

@Injectable({
  providedIn: 'root',
})
export class PokemonApiService {
  private readonly pokemonApi = 'https://pokeapi.co/api/v2/pokemon/';

  pokemonArr :any[] = []

  constructor(private readonly http: HttpClient) {}

  onePokemon = (pokemonName: string) => {
    pokemonName = pokemonName.toLowerCase();
    return this.http.get<any>(this.pokemonApi + pokemonName).pipe(
      map((poke: PokemonResponse) => {
        const pokemon: singlePokemon = {
          id: poke.id,
          name: pokemonName,
          weight: poke.weight,
          height: poke.height,
          types: poke.types,
          picture: poke.sprites.other['official-artwork'].front_default,
          sprite: poke.sprites.front_default
        };
        return pokemon;
      })
    );
  };

  getStarter = (pokemonArr: string[]) => {
    pokemonArr.forEach(x =>{
      return this.onePokemon(x).subscribe(x=>this.pokemonArr.push(x));
    })
  }

}

export interface singlePokemon {
  id: number;
  name: string;
  weight: number;
  height: number;
  types: object[];
  picture?: string;
  sprite: string;
}