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
  }

  pushBack(value) {
    const node = new Node(value)
    if (!this.tail) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
  }

  popBack() {
    if (!this.tail) return null
    
    const value = this.tail.value
    if (this.head === this.tail) {
      this.head = null
      this.tail = null
    } else {
      this.tail = this.tail.prev
      this.tail.next = null
    }
    return value
  }

  popFront() {
    if (!this.head) return null
    
    const value = this.head.value
    if (this.head === this.tail) {
      this.head = null
      this.tail = null
    } else {
      this.head = this.head.next
      this.head.prev = null
    }
    return value
  }

  front() {
    return this.head ? this.head.value : null
  }

  back() {
    return this.tail ? this.tail.value : null
  }

  isEmpty() {
    return this.head === null
  }
}

const [N, L] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number)

let answer = ''
const dq = new Deque()

for (let i = 0; i < N; i++) {
  while (!dq.isEmpty() && dq.front() <= i - L) {
    dq.popFront()
  }
  
  while (!dq.isEmpty() && arr[dq.back()] >= arr[i]) {
    dq.popBack()
  }
  
  dq.pushBack(i)
  
  answer += arr[dq.front()] + ' '
  if (i % 10000 === 0) {
    process.stdout.write(answer)
    answer = ''
  }
}

console.log(answer.trimEnd())