import { Component, OnInit } from '@angular/core';
import { PokemonApiService } from '../pokemon-api.service';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.scss']
})
export class SingleCardComponent implements OnInit {

  constructor(public pokemonService: PokemonApiService) { }

  singlePoke: any[] = []

  ngOnInit(): void {
    this.pokemonService.onePokemon(this.pokemonService.testingPoke).subscribe(
      x => this.singlePoke.push(x)
      )
  }

}
