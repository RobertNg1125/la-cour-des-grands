import { Injectable } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  endPoint = '/players'
  constructor(
    private db: AngularFireDatabase
  ) { }

  getPlayers() {
    return this.db.list(this.endPoint, ref => ref.orderByChild('firstName'));
  }

  getPlayer(playerId: string) {
    return this.db.object('/player/' + playerId);

  }

  addPlayer(displayName: string, photoURL: string, groupId: string) {
    const newPlayerRef = this.db.list('/player')
      .push({
        displayName: displayName,
        photoURL: photoURL,
        group: groupId
      })

    this.db.list('/group_players/' + groupId).push(newPlayerRef.key)

    return newPlayerRef
  }
}
