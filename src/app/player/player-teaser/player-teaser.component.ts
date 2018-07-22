import { Component, OnInit, Input } from '@angular/core';

// import { AngularFireAuth } from 'angularfire2/auth';
// import { auth } from 'firebase';

@Component({
  selector: 'app-player-teaser',
  templateUrl: './player-teaser.component.html',
  styleUrls: ['./player-teaser.component.scss'],
  host: {'class': 'player-teaser'}
  // providers: [AngularFireAuth]
})
export class PlayerTeaserComponent implements OnInit {

  constructor(
    // public afAuth: AngularFireAuth
  ) { }

  @Input() player: any

  ngOnInit() {
    // this.loadPlayer()
  }

  // loadPlayer() {
  //   this.afAuth.user.subscribe(user => {
  //     this.player = user
  //   })
  // }

}
