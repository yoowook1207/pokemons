import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PokemonMainComponent } from '../pokemon-main/pokemon-main.component';



const routes: Routes = [
  {path: '', component: PokemonMainComponent},
  // {path: 'anotherPage', component: },

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
