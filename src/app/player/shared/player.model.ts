export class Player {
  uid: string
  photoURL: string
  displayName: string

  constructor(
    uid: string,
    displayName: string,
    photoURL: string
  ) {
    this.uid = uid
    this.photoURL = photoURL
    this.displayName = displayName
  }
}
