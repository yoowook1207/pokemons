import { Component, OnInit } from '@angular/core';
import { PokemonApiService } from '../pokemon-api.service';

@Component({
  selector: 'app-pokemon-main',
  templateUrl: './pokemon-main.component.html',
  styleUrls: ['./pokemon-main.component.scss']
})
export class PokemonMainComponent implements OnInit {

  constructor(public pokemonService: PokemonApiService) { }
  starterPokemon = [ "Bulbasaur", "Squirtle", "Charmander" ]
  starterArr: any[] = []

  
  ngOnInit(): void {

    this.starterPokemon.forEach(x => {
      return this.pokemonService.onePokemon(x).subscribe(x=>this.starterArr.push(x))
    })
    
  }

}
