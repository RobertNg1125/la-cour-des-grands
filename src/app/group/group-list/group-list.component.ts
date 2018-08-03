import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';

import { GroupService } from '../shared/group.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit {

  constructor(
    private groupService: GroupService,
    public afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.loadCurrentUser()
    this.loadGroups()
    this.loadGroupsOfCurrentUser()
  }

  groups: any[]
  currentUser: any

  loadGroups() {
    this.groupService.getGroups()
      .snapshotChanges()
      .subscribe(groups => {
        this.groups = groups.map(group => {
          var agroup = { key: group.key, ...group.payload.val() }

          // TODO: add member count here
          return agroup
        })
      })
  }

  loadCurrentUser() {
    this.currentUser = this.afAuth.auth.currentUser
  }

  toggleJoiningGroup(groupId) {
    this.groupService.toggleJoiningGroup(groupId, this.currentUser.uid)
  }


  userGroups: any

  loadGroupsOfCurrentUser() {
    this.groupService.getGroupsByUser(this.currentUser.uid)
      .valueChanges()
      .subscribe(groups => this.userGroups = groups)
  }

}
