import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';

import { Player } from '../player/shared/player.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  providers: [AngularFireAuth]
})
export class NavigationComponent implements OnInit {

  constructor(
    public afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.loadCurrentUser()
  }

  title = 'La cour<br/>des Grands';
  currentPlayer: any

  toggleNavbar() {
    $('body').toggleClass('js-nav-open')
  }

  loadCurrentUser() {
    this.currentPlayer = this.afAuth.auth.currentUser
    //this.currentPlayer = new Player(currentUser.uid, currentUser.displayName, currentUser.photoURL)
  }

  closeNavbar() {
    $('body').removeClass('js-nav-open')
  }

  logOut() {
    this.afAuth.auth.signOut();
  }

}
