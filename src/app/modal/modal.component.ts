import { Component, OnInit } from '@angular/core';
import { PokemonApiService } from '../pokemon-api.service';
import { Output, EventEmitter } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Output() closing = new EventEmitter<boolean>();

  constructor(public pokemonService: PokemonApiService) { }

  ngOnInit(): void {
  }

  closeThis() {
    this.closing.emit(true);
  }

  movePage(pokemonName:string) {
    this.pokemonService.testingPoke = pokemonName
  }
}
