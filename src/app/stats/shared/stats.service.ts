import { Injectable } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(
    private db: AngularFireDatabase,
  ) { }

  updateSumWinning(team) {
    this.db.object('/stats_win/' + team)
      .snapshotChanges()
      .subscribe(value => {
        // Update stats
      })
  }
}
