import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Player } from '../shared/player.model';
import { PlayerService } from '../shared/player.service';

import { GroupService } from '../../group/shared/group.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})
export class PlayerDetailComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private playerService: PlayerService,
    private groupService: GroupService,
    private location: Location
  ) { }

  playerId: string
  groupId: string

  player: any
  group: any

  ngOnInit() {
    this.playerId = this.activatedRoute.snapshot.paramMap.get('playerId')
    this.groupId = this.activatedRoute.snapshot.paramMap.get('groupId')

    this.loadPlayer()
    this.loadGroup()
  }

  loadPlayer() {
    this.playerService.getPlayer(this.playerId)
      .snapshotChanges()
      .subscribe(item => this.player = ({ key: item.key, ...item.payload.val() }))
  }

  loadGroup() {
    this.groupService.getGroup(this.groupId)
      .snapshotChanges()
      .subscribe(item => this.group = ({ key: item.key, ...item.payload.val() }))
  }
}
