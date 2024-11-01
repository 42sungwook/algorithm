const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

const [N, K] = input

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class List {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }
  add(value) {
    const node = new Node(value)
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
      this.tail.next = this.head
    }
    this.size++
  }
  delete(idx) {
    let node = this.head
    let prev = this.head
    if (!this.size) {
      return null
    } else if (this.size === 1) {
      this.size = 0
      this.head = null
      this.tail = null
      return node.value
    }
    for (let i = 1; i < idx; i++) {
      if (i + 1 === idx) {
        prev = node
      }
      node = node.next
    }
    this.head = node.next
    prev.next = this.head
    this.size--
    return node.value
  }
}

const list = new List()

for (let i = 1; i <= N; i++) {
  list.add(i)
}

const ans = []

while (list.size) {
  ans.push(list.delete(K))
}

console.log(`<${ans.join(', ')}>`)
