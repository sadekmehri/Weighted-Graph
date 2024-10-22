type Node<T> = {
  value: T
  next?: Node<T>
}

export class Queue<T> {
  public length: number
  private head?: Node<T>
  private tail?: Node<T>

  constructor() {
    this.head = this.tail = undefined
    this.length = 0
  }

  enqueue(item: T): void {
    this.length++
    const node = { value: item } as Node<T>
    if (this.length === 1) {
      this.tail = this.head = node
      return
    }
    this.tail!.next = node
    this.tail = node
    return
  }

  deque(): T | undefined {
    if (!this.head) return undefined
    this.length--
    const val = this.head.value
    this.head = this.head.next
    return val
  }

  peek(): T | undefined {
    return this.head?.value
  }
}
