import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PokemonMainComponent } from '../pokemon-main/pokemon-main.component';
import { SingleCardComponent } from '../single-card/single-card.component';



const routes: Routes = [
  {path: '', component: PokemonMainComponent},
  {path: 'singleCard', component: SingleCardComponent},

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
