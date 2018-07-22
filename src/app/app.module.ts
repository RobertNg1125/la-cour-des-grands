import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
import { PlayerTeaserComponent } from './player/player-teaser/player-teaser.component';
import { GroupFormComponent } from './group/group-form/group-form.component';
import { GroupListComponent } from './group/group-list/group-list.component';
import { GroupDetailComponent } from './group/group-detail/group-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PlayerListComponent,
    GameFormComponent,
    PlayerLauncherComponent,
    PlayerDetailComponent,
    PlayerTeaserComponent,
    GroupFormComponent,
    GroupListComponent,
    GroupDetailComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
