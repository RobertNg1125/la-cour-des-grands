import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PlayerService } from '../shared/player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
})
export class PlayerListComponent implements OnInit {

  constructor(
    private playerService: PlayerService
  ) { }

  players: any[]

  ngOnInit() {
    this.playerService.getPlayers()
      .snapshotChanges()
      .subscribe(items => {
        this.players = items.map(item => {
          return {key: item.key, ...item.payload.val()}
        })
    })
  }

}
