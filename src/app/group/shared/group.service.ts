import { Injectable } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  endPoint = '/group'
  constructor(
    private db: AngularFireDatabase
  ) { }


  getGroups() {
    return this.db.list(this.endPoint, ref => ref.orderByChild('name'));
  }

  getGroup(groupId: string) {
    return this.db.object('/group/' + groupId)
  }
  getMembersOfGroup(groupId: string) {
    return this.db.list('/group_players/' + groupId)
  }

  addGroup(name: string, ownerId: string) {
    const newGroup = this.db.list('/group')
      .push({
        name: name,
        ownerId: ownerId,
        created: Date.now(),
      });

    this.db.list('/group_watchers/' + newGroup.key).push(ownerId)
    this.db.list('/user_groups/' + ownerId).push(newGroup.key)

    return newGroup
  }

  joinGroup(groupId: string, playerId: string) {
    this.db.list('/user_groups/' + playerId).push(groupId)
    this.db.list('/group_watchers/' + groupId).push(playerId)
  }

  getGroupsByUser(userId: string) {
    return this.db.list('/user_groups/' + userId)
  }
}
