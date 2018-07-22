import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';

import { GroupService } from "../shared/group.service";

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.scss']
})
export class GroupFormComponent implements OnInit {

  constructor(
    public afAuth: AngularFireAuth,
    private groupService: GroupService
  ) { }

  ngOnInit() {
    this.loadCurrentUser()
  }

  currentUser: any

  name: string

  loadCurrentUser() {
    this.currentUser = this.afAuth.auth.currentUser
  }

  onSubmit() {
    this.groupService.addGroup(
      this.name,
      this.currentUser.uid
    )
  }

}
