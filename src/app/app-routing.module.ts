import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlayerListComponent } from './player/player-list/player-list.component';
import { PlayerDetailComponent } from './player/player-detail/player-detail.component';
import { PlayerFormComponent } from "./player/player-form/player-form.component";

import { GameFormComponent } from './game/game-form/game-form.component';

import { GroupFormComponent } from "./group/group-form/group-form.component";
import { GroupListComponent } from "./group/group-list/group-list.component"
import { GroupDetailComponent } from "./group/group-detail/group-detail.component";

const routes: Routes = [
  { path: '', redirectTo: '/group', pathMatch: 'full' },
  // { path: 'player', component: PlayerListComponent },

  // { path: 'player/add', component: PlayerFormComponent },
  // { path: 'player/:id', component: PlayerDetailComponent },
  // { path: 'player/:id/edit', component: PlayerFormComponent },
  //
  // { path: 'games', component: GamesComponent },
  { path: 'game/add', component: GameFormComponent },
  // { path: 'game/:id', component: PlayerDetailComponent },
  // { path: 'game/:id/edit', component: PlayerFormComponent },

  { path: 'group', component: GroupListComponent},
  { path: 'group/add', component: GroupFormComponent},
  { path: 'group/:groupId', component: GroupDetailComponent },
  { path: 'group/:groupId/player/add', component: PlayerFormComponent},
  { path: 'group/:groupId/player/:playerId', component: PlayerDetailComponent },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
