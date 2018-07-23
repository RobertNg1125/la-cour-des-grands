import { Injectable } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';

import { StatsService } from '../../stats/shared/stats.service'

@Injectable({
  providedIn: 'root'
})
export class GameService {

  endPoint = '/games'
  constructor(
    private db: AngularFireDatabase,
    private statsService: StatsService
  ) { }

  addGame(
    teamAStriker: string, teamADefender: string,
    teamBStriker: string, teamBDefender: string,
    scoreA: number, scoreB: number) {
      this.db.list('game')
        .push({
          teamAStriker: teamAStriker,
          teamADefender: teamADefender,
          teamBStriker: teamBStriker,
          teamBDefender: teamBDefender,
          scoreA: scoreA,
          scoreB: scoreB,
          date: new Date().toString()
        })

    this.updateWinningTeam(scoreA, scoreB)
  }

  updateWinningTeam(scoreA, scoreB) {
    if (scoreA == scoreB) return
    const winningTeam = (scoreA > scoreB) ? 'A' : 'B'
    this.statsService.updateSumWinning(winningTeam)
  }
}
