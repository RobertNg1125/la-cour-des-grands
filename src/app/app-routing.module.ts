import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlayerListComponent } from './player/player-list/player-list.component';
import { PlayerDetailComponent } from './player/player-detail/player-detail.component';

import { GameFormComponent } from './game/game-form/game-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/player', pathMatch: 'full' },
  { path: 'player', component: PlayerListComponent },

  // { path: 'player/add', component: PlayerFormComponent },
  { path: 'player/:id', component: PlayerDetailComponent },
  // { path: 'player/:id/edit', component: PlayerFormComponent },
  //
  // { path: 'games', component: GamesComponent },
  { path: 'game/add', component: GameFormComponent },
  // { path: 'game/:id', component: PlayerDetailComponent },
  // { path: 'game/:id/edit', component: PlayerFormComponent },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
