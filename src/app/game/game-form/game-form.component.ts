import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { PlayerLauncherComponent } from '../../player/player-launcher/player-launcher.component'

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss']
})
export class GameFormComponent implements OnInit {

  constructor(
    //private playerService: PlayerService
  ) { }


  teamAStriker: Player

  ngOnInit() {

    // retrieve single player
    // this.playerService.getPlayer('-LHW1RSLD4MYUUB4yRHD')
    //   .snapshotChanges()
    //   .subscribe(item => {
    //     this.teamAStriker = { key: item.key, ...item.payload.val()}
    //   })
  }

  showSelectPlayer() {
    $('.launcher').toggleClass('js-open');
  }


}
