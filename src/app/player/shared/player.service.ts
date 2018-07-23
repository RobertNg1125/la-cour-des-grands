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

  // getPlayerMultiple() {
  //   return this.db.list('/player', ref => ref.)
  // }

  addPlayer(displayName: string, photoURL: string, groupId: string) {
    this.db.list('/player')
      .push({
        displayName: displayName,
        photoURL: photoURL,
      })
      .then(newPlayer => {
        // Update relation /player_group and /group_player
        this.db.list('/player_group/' + newPlayer.key).push(groupId)
        this.db.list('/group_player/' + groupId).push(newPlayer.key)
      })


  }
}
