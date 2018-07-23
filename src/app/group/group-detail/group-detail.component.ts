import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { GroupService } from "../shared/group.service"
import { PlayerService } from "../../player/shared/player.service"


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

  key: string
  group: any
  members: any[]

  ngOnInit() {
    this.key = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.key) {
      this.loadGroup(this.key)
      this.loadMembersOfGroup(this.key)
    }
  }

  loadGroup(groupId: string) {
    this.groupService.getGroup(groupId)
      .valueChanges()
      .subscribe(group => {
        this.group = group
      })
  }

  loadMembersOfGroup(groupId: string) {
    this.groupService.getMembersOfGroup(groupId)
      .valueChanges()
      .subscribe(members => {
        this.members = members.map(key => {
          return this.playerService.getPlayer(key as string).valueChanges()
        })
      })
  }

}
