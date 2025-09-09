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
    } else {
      node.next = this.head
      this.head.prev = node
      this.head = node
    }
    this.size++
  }

  pushBack(value) {
    const node = new Node(value)

    if (this.isEmpty()) {
      this.head = this.tail = node
    } else {
      node.prev = this.tail
      this.tail.next = node
      this.tail = node
    }
    this.size++
  }

  popFront() {
    if (this.isEmpty()) return null

    const value = this.head.value
    this.head = this.head.next

    if (this.head) {
      this.head.prev = null
    } else {
      this.tail = null
    }

    this.size--
    return value
  }

  popBack() {
    if (this.isEmpty()) return null

    const value = this.tail.value
    this.tail = this.tail.prev

    if (this.tail) {
      this.tail.next = null
    } else {
      this.head = null
    }

    this.size--
    return value
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
}

const N = Number(input[0])

const deque = new Deque()

const ans = []

for (let i = 1; i <= N; i++) {
  const [order, value] = input[i].split(' ')

  switch (order) {
    case 'push_front':
      deque.pushFront(Number(value))
      break
    case 'push_back':
      deque.pushBack(Number(value))
      break
    case 'pop_front':
      ans.push(deque.popFront() ?? -1)
      break
    case 'pop_back':
      ans.push(deque.popBack() ?? -1)
      break
    case 'size':
      ans.push(deque.getSize())
      break
    case 'empty':
      ans.push(deque.isEmpty() ? 1 : 0)
      break
    case 'front':
      ans.push(!deque.isEmpty() ? deque.head.value : -1)
      break
    case 'back':
      ans.push(!deque.isEmpty() ? deque.tail.value : -1)
      break
  }
}

console.log(ans.join('\n'))
