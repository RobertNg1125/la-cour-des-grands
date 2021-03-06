import { Component } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AngularFireAuth]
})
export class AppComponent {
  title = 'app';

  constructor(
    public afAuth: AngularFireAuth
  ){}

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
