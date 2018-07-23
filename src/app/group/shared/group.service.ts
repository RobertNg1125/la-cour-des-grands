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
    return this.db.list('/group_player/' + groupId)
  }


  addGroup(name: string, ownerId: string) {
    const newGroup = this.db.list('/group')
      .push({
        name: name,
        ownerId: ownerId,
        date: new Date().toString(),
      });

    this.db.list('/group_player/' + newGroup.key).push(ownerId)
    this.db.list('/player_group/' + ownerId).push(newGroup.key)
  }

  joinGroup(groupId: string, playerId: string) {
    this.db.list('/player_group/' + playerId).push(groupId)
    this.db.list('/group_player/' + groupId).push(playerId)
  }

  getGroupsByUser(userId: string) {
    return this.db.list('/player_group/' + userId)
  }
}
