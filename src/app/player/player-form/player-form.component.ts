import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Player } from "../shared/player.model";
import { PlayerService } from "../shared/player.service";

import { GroupService } from '../../group/shared/group.service';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent implements OnInit {

  constructor(
    private playerService: PlayerService,
    private groupService: GroupService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  groupId: string
  group: any

  model = new Player('', '', '')

  ngOnInit() {
    this.groupId = this.route.snapshot.paramMap.get('groupId')
    this.loadGroup()
  }

  newPlayer() {
    const playerRef = this.playerService
      .addPlayer(this.model.displayName, this.model.photoURL, this.groupId)

    this.router.navigate(['/group/' + this.groupId + '/player/' + playerRef.key])
  }

  loadGroup() {
    this.groupService.getGroup(this.groupId)
      .valueChanges()
      .subscribe(group => this.group = group)
  }
}
