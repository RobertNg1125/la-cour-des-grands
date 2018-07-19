import { Injectable } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  endPoint = '/games'
  constructor(private db: AngularFireDatabase) { }

  addGame(
    teamAStriker: string, teamADefender: string,
    teamBStriker: string, teamBDefender: string,
    scoreA: number, scoreB: number) {
      const ref = this.db.object('game')
      ref.set({
        teamAStriker: teamAStriker,
        teamADefender: teamADefender,
        teamBStriker: teamBStriker,
        teamBDefender: teamBDefender,
        scoreA: scoreA,
        scoreB: scoreB
      })
    }
}
