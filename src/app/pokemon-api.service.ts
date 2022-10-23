import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { PokemonResponse } from './pokemon-response';

@Injectable({
  providedIn: 'root',
})
export class PokemonApiService {
  private readonly pokemonApi = 'https://pokeapi.co/api/v2/pokemon/';

  testingPoke: string = '';

  selectedPoke: any[] = [];
  private selectedPoke$ = new BehaviorSubject<any[]>(this.selectedPoke);
  modalPoke = this.selectedPoke$.asObservable();

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
          picture: poke.sprites.other.dream_world.front_default,
          sprite: poke.sprites.front_default
        };
        return pokemon;
      })
    );
  };


  openModal = (pokemonName: string, pokemonSprite: string) => {
    const selectedPokemon: any = {
      name: pokemonName,
      spriteUrl: pokemonSprite
    }
    this.selectedPoke[0] = selectedPokemon
    this.selectedPoke$.next(this.selectedPoke);
  }

}

export interface singlePokemon {
  id: number;
  name: string;
  weight: number;
  height: number;
  types: object[];
  picture: string;
  sprite: string;
}