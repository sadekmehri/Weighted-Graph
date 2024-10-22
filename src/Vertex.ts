export class Vertex {
  source: number
  destination: number
  weight: number

  constructor(source: number, destination: number, weight: number) {
    this.source = source
    this.destination = destination
    this.weight = weight
  }
}
