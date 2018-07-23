import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';


import { GameService } from '../shared/game.service'
import { PlayerLauncherComponent } from '../../player/player-launcher/player-launcher.component'
import { Player } from '../../player/shared/player.model'

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss'],
})
export class GameFormComponent implements OnInit {

  constructor(
    private gameService: GameService
  ) { }

  teamAStriker: Player
  teamADefender: Player
  teamBStriker: Player
  teamBDefender: Player

  playerEditing: string

  @Input() scoreA: number = 0
  @Input() scoreB: number = 0

  ngOnInit() {}

  saveGame() {
    // update game
    this.gameService.addGame(
      this.teamAStriker.key, this.teamADefender.key,
      this.teamBStriker.key, this.teamBDefender.key,
      this.scoreA, this.scoreB
    )

  }

  showSelectPlayer(position: string) {
    this.playerEditing = position
    $('.launcher').toggleClass('js-open')
  }

  onLauncherSelected($event) {
    switch (this.playerEditing) {
      case 'AStriker':
        this.teamAStriker = $event
        break
      case 'ADefender':
        this.teamADefender = $event
        break
      case 'BStriker':
        this.teamBStriker = $event
        break
      case 'BDefender':
        this.teamBDefender = $event
        break
    }
  }

}
