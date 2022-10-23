import { Component, OnInit } from '@angular/core';
import { PokemonApiService } from '../pokemon-api.service';

@Component({
  selector: 'app-pokemon-main',
  templateUrl: './pokemon-main.component.html',
  styleUrls: ['./pokemon-main.component.scss']
})
export class PokemonMainComponent implements OnInit {

  selectedPokemonId!: number;

  isModalShow:boolean = true;

  constructor(public pokemonService: PokemonApiService) { }
  starterPokemon = [ "Bulbasaur", "Squirtle", "Charmander" ]
  starterArr: any[] = []

  
  ngOnInit(): void {

    this.starterPokemon.forEach(x => {
      return this.pokemonService.onePokemon(x).subscribe(x=>this.starterArr.push(x))
    })
    
  }

  onClickPokemon(pokemonName: string, pokemonSprite: string) {
    this.pokemonService.openModal(pokemonName, pokemonSprite);
    this.isModalShow = false;
    // open-close modal css function
  }

  closeModal(e?:boolean) {
    if(e) {
      this.isModalShow = true;
    }
    this.isModalShow = true;
  }

}
