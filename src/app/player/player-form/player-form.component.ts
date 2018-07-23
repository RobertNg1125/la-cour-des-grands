import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Player } from "../shared/player.model";
import { PlayerService } from "../shared/player.service";

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent implements OnInit {

  constructor(
    private playerService: PlayerService,
    private activatedRoute: ActivatedRoute,
  ) { }

  key: string
  model = new Player('', '', '')
  submitted = false

  ngOnInit() {
    this.key = this.activatedRoute.snapshot.paramMap.get('id');
  }

  onSubmit() {
    this.submitted = true
  }

  newPlayer() {
    const player = this.playerService
      .addPlayer(this.model.displayName, this.model.photoURL, this.key)

    console.log(player)

  }
}
