const input = require('fs').readFileSync('/dev/stdin').toString().trim()

const N = Number(input)

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  enqueue(value) {
    const node = new Node(value)
    if (!this.tail) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
    this.size++
  }

  dequeue() {
    if (!this.head) {
      return null
    } else {
      const head = this.head
      this.head = head.next
      this.size--
      if (this.size === 0) {
        this.tail = null
      }
      return head.value
    }
  }
}

const queue = new Queue()

for (let i = 1; i <= N; i++) {
  queue.enqueue(i)
}

while (queue.size !== 1) {
  queue.dequeue()
  const front = queue.dequeue()
  queue.enqueue(front)
}

console.log(queue.dequeue())
