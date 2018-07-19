import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Player } from '../shared/player.model';
import { PlayerService } from '../shared/player.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})
export class PlayerDetailComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private playerService: PlayerService,
    private location: Location
  ) { }

  key: string
  player: Player
  ngOnInit() {
    this.key = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.key) {
      this.playerService.getPlayer(this.key)
        .snapshotChanges()
        .subscribe(item => {
          this.player = {key: item.key, ...item.payload.val()}
        })
        
    }
  }

}
