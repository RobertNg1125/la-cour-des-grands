export class Player {
  key: string
  photoURL: string
  displayName: string

  constructor(
    key: string,
    displayName: string,
    photoURL: string
  ) {
    this.key = key
    this.photoURL = photoURL
    this.displayName = displayName
  }
}
