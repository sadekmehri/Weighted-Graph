type Node<T> = {
  value: T
  prev?: Node<T>
}

export class Stack<T> {
  public length: number
  private head?: Node<T>

  constructor() {
    this.head = undefined
    this.length = 0
  }

  push(item: T): void {
    this.length++
    let node = { value: item } as Node<T>
    if (this.length === 1) {
      this.head = node
      return
    }
    node.prev = this.head
    this.head = node
    return
  }

  pop(): T | undefined {
    if (this.length === 0) return undefined
    this.length--
    if (this.length === 0) {
      const val = this.head?.value
      this.head = undefined
      return val
    }
    let val = this.head!.value
    this.head = this.head!.prev
    return val
  }

  peek(): T | undefined {
    return this.head?.value
  }
}
