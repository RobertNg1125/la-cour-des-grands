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
    this.db.list('/user_groups/' + ownerId).push({groupId: newGroup.key})

    return newGroup
  }

  toggleJoiningGroup(groupId: string, userUid: string) {
    // get group of user
    // this.db.list('/user_groups/' + userUid)
    this.db.list('/user_groups/' + userUid, ref => {
      return  ref.orderByChild('groupId').equalTo(groupId)
    })
      .snapshotChanges()
      .subscribe(items => {
        console.log(items.length)
        if(items.length == 0) {
          // set group
          console.log('add')
          //this.db.list('/user_groups/' + userUid).push({groupId: groupId})
        } else {
          console.log('remove')
          //this.db.list('/user_groups/' + userUid).remove(items[0].key)
        }

        // const groups = items.filter(item => {
        //   return item.payload.val() === groupId
        //   //return { key: item.key, ...item.payload.val() }
        // })
        // console.log(groups)

        // var agroup = { key: group.key, ...group.payload.val() }
        // if(groups.includes(groupId)) {
        //   this.db.list('/user_groups/' + userUid)
        // }
      })


    //this.db.list('/group_watchers/' + groupId).push(userUid)
  }

  getGroupsByUser(userId: string) {
    return this.db.list('/user_groups/' + userId)
  }
}
