import { Vertex } from './Vertex'
import { Stack } from './Stack'
import { Queue } from './Queue'

export class WeightedGraph {
  vertices: number
  adj: Map<number, Vertex[]>

  constructor(vertices: number) {
    this.vertices = vertices
    this.adj = new Map()

    for (let i = 0; i < vertices; i++) {
      this.adj.set(i, [])
    }
  }

  addEdge(source: number, destination: number, weight: number): void {
    const edge = new Vertex(source, destination, weight)
    this.adj.get(source)?.push(edge)
  }

  printGraph(): void {
    for (let i = 0; i < this.vertices; i++) {
      const list = this.adj.get(i)
      if (list) {
        list.forEach((edge) => {
          console.log(`vertex-${i} is connected to ${edge.destination} with weight ${edge.weight}`)
        })
      }
    }
  }

  dfs(source: number, destination: number): Array<number> {
    const seen: Array<boolean> = Array.from({ length: this.vertices }, () => false)
    const path: Array<number> = Array.from({ length: this.vertices }, () => -1)

    const stack = new Stack<number>()
    stack.push(source)
    seen[source] = true

    while (stack.length > 0) {
      const current = stack.pop()!

      if (current === destination) {
        return path
      }

      const list = this.adj.get(current)!
      for (let i = 0; i < list.length; i++) {
        const edge = list[i]
        if (!seen[edge.destination]) {
          stack.push(edge.destination)
          seen[edge.destination] = true
          path[edge.destination] = current
        }
      }
    }

    return []
  }

  constructPath(path: Array<number>, destination: number): number[] {
    if (path.length === 0) return []

    const result: Array<number> = []
    let current = destination

    while (current !== -1) {
      result.push(current)
      current = path[current]
    }

    result.reverse()

    return result
  }

  bfs(source: number, destination: number): Array<number> {
    const seen: Array<boolean> = Array.from({ length: this.vertices }, () => false)
    const path: Array<number> = Array.from({ length: this.vertices }, () => -1)

    const queue = new Queue<number>()
    queue.enqueue(source)
    seen[source] = true

    while (queue.length > 0) {
      const current = queue.deque()!

      if (current === destination) {
        return path
      }

      const list = this.adj.get(current)!
      for (let i = 0; i < list.length; i++) {
        const edge = list[i]
        if (!seen[edge.destination]) {
          queue.enqueue(edge.destination)
          seen[edge.destination] = true
          path[edge.destination] = current
        }
      }
    }

    return []
  }
}
