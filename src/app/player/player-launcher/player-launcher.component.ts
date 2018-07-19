import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import * as $ from 'jquery';

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

  players: any[]

  getAllPlayers() {
    this.playerService.getPlayers()
      .snapshotChanges()
      .subscribe(items => {
        this.players = items.map(item => {
          return { key: item.key, ...item.payload.val() }
        })
      })
  }

  @Output() selectPlayerEvent = new EventEmitter<any>();

  onSelectedPlayer(player) {
    this.selectPlayerEvent.emit(player)
    $('.launcher').toggleClass('js-open')
  }



}
