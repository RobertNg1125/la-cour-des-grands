import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

import { NavigationComponent } from './navigation/navigation.component';
import { PlayerListComponent } from './player/player-list/player-list.component';
import { GameFormComponent } from './game/game-form/game-form.component';
import { PlayerLauncherComponent } from './player/player-launcher/player-launcher.component';
import { PlayerDetailComponent } from './player/player-detail/player-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PlayerListComponent,
    GameFormComponent,
    PlayerLauncherComponent,
    PlayerDetailComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
