export class Profile {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.picture = data.picture
    this.favoriteGenre = data.favoriteGenre
    this.averageTempo = data.averageTempo
    this.coverImg = data.coverImg

  }
}


export class Account extends Profile {
  constructor(data) {
    super(data)
    this.email = data.email
    // TODO add additional properties if needed
  }
}
