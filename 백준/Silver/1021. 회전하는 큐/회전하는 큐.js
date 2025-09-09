const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

class Node {
  constructor(value) {
    this.value = value
    this.prev = null
    this.next = null
  }
}

class Deque {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  pushFront(value) {
    const node = new Node(value)

    if (this.isEmpty()) {
      this.head = this.tail = node
      node.prev = node.next = node
    } else {
      node.next = this.head
      node.prev = this.tail
      this.head.prev = node
      this.tail.next = node
      this.head = node
    }
    this.size++
  }

  pushBack(value) {
    const node = new Node(value)

    if (this.isEmpty()) {
      this.head = this.tail = node
      node.prev = node.next = node
    } else {
      node.prev = this.tail
      node.next = this.head
      this.tail.next = node
      this.head.prev = node
      this.tail = node
    }
    this.size++
  }

  popFront() {
    if (this.isEmpty()) return null

    const head = this.head
    this.head = this.head.next
    head.next.prev = head.prev
    head.prev.next = head.next

    this.size--
    return head.value
  }

  popBack() {
    if (this.isEmpty()) return null

    const tail = this.tail
    this.tail = this.tail.prev
    tail.prev.next = tail.next
    tail.next.prev = tail.prev

    this.size--
    return tail.value
  }

  front() {
    return this.isEmpty() ? null : this.head.value
  }

  back() {
    return this.isEmpty() ? null : this.tail.value
  }

  isEmpty() {
    return this.size === 0
  }

  getSize() {
    return this.size
  }

  toArray() {
    const result = []
    let current = this.head
    let size = this.size
    while (size > 0) {
      current = current.next
      size--
    }
    return result
  }
}

const [N, M] = input[0].split(' ').map(Number)
const popArr = input[1].split(' ').map(Number)

const deque = new Deque()

let ans = 0

for (let i = 1; i <= N; i++) {
  deque.pushBack(i)
}

for (let j = 0; j < M; j++) {
  let count = 0

  while (deque.head.value !== popArr[j]) {
    deque.head = deque.head.next
    count++
  }

  ans += count > deque.getSize() / 2 ? deque.getSize() - count : count

  deque.popFront()
}

console.log(ans)
