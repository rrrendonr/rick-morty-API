export interface Location {
  name: string,
  url: string
}

export interface Origin extends Location {}

export interface Character {
  id: string,
  name: string,
  image: string,
  species: string,
  status: string,
  location: Location,
  origin: Origin
}
