import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { PlayerService } from "../../player/shared/player.service";
import { Player } from '../../player/shared/player.model';

@Component({
  selector: 'app-player-launcher',
  templateUrl: './player-launcher.component.html',
  styleUrls: ['./player-launcher.component.scss']
})
export class PlayerLauncherComponent implements OnInit {

  constructor(
    private playerService: PlayerService
  ) { }

  ngOnInit() {
    this.getAllPlayers()
  }

  players: Player[]
  @Input() selectedPlayer: Player

  getAllPlayers() {
    this.playerService.getPlayers()
      .snapshotChanges()
      .subscribe(items => {
        this.players = items.map(item => {
          return { key: item.key, ...item.payload.val() }
        })
      })
  }

  onSelectedPlayer(player) {
    this.selectedPlayer = player;
  }
}
