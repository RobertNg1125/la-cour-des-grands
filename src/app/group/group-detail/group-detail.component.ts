import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { GroupService } from "../shared/group.service"

import { PlayerService } from "../../player/shared/player.service"
import { Player } from "../../player/shared/player.model"


@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.scss']
})
export class GroupDetailComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private groupService: GroupService,
    private playerService: PlayerService
  ) { }

  groupId: string
  group: any

  hasMembers = false
  members: Observable<{}>[]

  ngOnInit() {
    this.groupId = this.activatedRoute.snapshot.paramMap.get('groupId');

    this.loadGroup()
    this.loadMembersOfGroup()
  }

  loadGroup() {
    this.groupService.getGroup(this.groupId)
      .valueChanges()
      .subscribe(group => this.group = group)
  }

  loadMembersOfGroup() {
    this.groupService.getMembersOfGroup(this.groupId)
      .valueChanges()
      .subscribe(members => {
        if(members.length) {
          this.members = members.map(key => {
            return this.playerService.getPlayer(key as string).valueChanges()
          })
          this.hasMembers = true
        }
      })
  }

}
