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

  push_front(value) {
    const node = new Node(value)

    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      const head = this.head
      this.head = node
      this.head.next = head
      head.prev = this.head
    }
    this.size++
  }

  push_back(value) {
    const node = new Node(value)

    if (this.size === 0) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    this.size++
  }

  pop_front() {
    if (this.size === 0) {
      return null
    }
    if (this.size === 1) {
      const value = this.head.value
      this.head = null
      this.tail = null
      this.size--
      return value
    }

    const head = this.head
    this.head = this.head.next
    this.head.prev = null
    this.size--

    if (!this.head.next) {
      this.tail = this.head
    }

    return head.value
  }

  pop_back() {
    if (this.size === 0) {
      return null
    }
    if (this.size === 1) {
      const value = this.head.value
      this.head = null
      this.tail = null
      this.size--
      return value
    }

    const tail = this.tail
    this.tail = tail.prev
    this.tail.next = null
    this.size--

    if (!this.tail.prev) {
      this.head = this.tail
    }

    return tail.value
  }
}

const N = Number(input[0])

const deque = new Deque()

const ans = []

for (let i = 1; i <= N; i++) {
  const [order, value] = input[i].split(' ')

  switch (order) {
    case 'push_front':
      deque.push_front(Number(value))
      break
    case 'push_back':
      deque.push_back(Number(value))
      break
    case 'pop_front':
      ans.push(deque.pop_front() ?? -1)
      break
    case 'pop_back':
      ans.push(deque.pop_back() ?? -1)
      break
    case 'size':
      ans.push(deque.size)
      break
    case 'empty':
      ans.push(deque.size === 0 ? 1 : 0)
      break
    case 'front':
      ans.push(deque.size !== 0 ? deque.head.value : -1)
      break
    case 'back':
      ans.push(deque.size !== 0 ? deque.tail.value : -1)
      break
  }
}

console.log(ans.join('\n'))
