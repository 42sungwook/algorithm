const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

class MinHeap {
  constructor() {
    this.heap = []
  }

  push(val) {
    this.heap.push(val)
    this.bubbleUp()
  }

  bubbleUp() {
    let idx = this.heap.length - 1
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2)
      if (this.heap[parentIdx][0] <= this.heap[idx][0]) break
      ;[this.heap[parentIdx], this.heap[idx]] = [
        this.heap[idx],
        this.heap[parentIdx]
      ]
      idx = parentIdx
    }
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop()
    const min = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.bubbleDown()
    return min
  }

  bubbleDown() {
    let idx = 0
    while (idx * 2 + 1 < this.heap.length) {
      let smallerIdx = idx * 2 + 1
      if (
        idx * 2 + 2 < this.heap.length &&
        this.heap[idx * 2 + 2][0] < this.heap[smallerIdx][0]
      ) {
        smallerIdx = idx * 2 + 2
      }
      if (this.heap[idx][0] <= this.heap[smallerIdx][0]) break
      ;[this.heap[idx], this.heap[smallerIdx]] = [
        this.heap[smallerIdx],
        this.heap[idx]
      ]
      idx = smallerIdx
    }
  }

  isEmpty() {
    return this.heap.length === 0
  }
}

const [V, E] = input[0].split(' ').map(Number)
const K = Number(input[1])
const queue = new MinHeap()
const table = Array(V + 1).fill(Infinity)
const adj = Array.from({ length: V + 1 }, () => [])
table[K] = 0
queue.push([table[K], K])

for (let i = 2; i < E + 2; i++) {
  const [start, end, priority] = input[i].split(' ').map(Number)
  adj[start].push([priority, end])
}

while (!queue.isEmpty()) {
  const current = queue.pop()

  if (table[current[1]] !== current[0]) {
    continue
  }

  for (const next of adj[current[1]]) {
    if (table[next[1]] <= table[current[1]] + next[0]) {
      continue
    }
    table[next[1]] = table[current[1]] + next[0]
    queue.push([table[next[1]], next[1]])
  }
}

const result = []

for (let i = 1; i <= V; i++) {
  if (table[i] === Infinity) {
    result.push('INF')
  } else {
    result.push(table[i])
  }
}

console.log(result.join('\n'))
