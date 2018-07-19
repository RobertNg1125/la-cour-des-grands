import { Injectable } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  endPoint = '/players'
  constructor(private db: AngularFireDatabase) { }

  getPlayers() {
    return this.db.list(this.endPoint, ref => ref.orderByChild('firstName'));
  }

  getPlayer(id: string) {
    return this.db.object(this.endPoint + '/' + id);
  }
}
