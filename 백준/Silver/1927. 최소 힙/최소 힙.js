const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const n = parseInt(input[0])

class MinHeap {
  constructor() {
    this.heap = []
  }

  push(value) {
    this.heap.push(value)
    this.heapifyUp(this.heap.length - 1)
  }

  pop() {
    if (this.heap.length === 0) return 0
    if (this.heap.length === 1) return this.heap.pop()

    const min = this.heap[0]
    this.heap[0] = this.heap.pop() // 마지막 원소를 루트로
    this.heapifyDown(0)
    return min
  }

  heapifyUp(index) {
    if (index === 0) return

    const parentIndex = Math.floor((index - 1) / 2)

    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index)
      this.heapifyUp(parentIndex)
    }
  }

  heapifyDown(index) {
    const leftChild = 2 * index + 1
    const rightChild = 2 * index + 2
    let smallest = index

    // left smaller
    if (
      leftChild < this.heap.length &&
      this.heap[leftChild] < this.heap[smallest]
    ) {
      smallest = leftChild
    }

    // right smaller
    if (
      rightChild < this.heap.length &&
      this.heap[rightChild] < this.heap[smallest]
    ) {
      smallest = rightChild
    }

    // child smaller
    if (smallest !== index) {
      this.swap(index, smallest)
      this.heapifyDown(smallest)
    }
  }

  swap(i, j) {
    ;[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }
}

const heap = new MinHeap()
const result = []

for (let i = 1; i <= n; i++) {
  const x = parseInt(input[i])

  if (x === 0) {
    result.push(heap.pop())
    continue
  }

  heap.push(x)
}

console.log(result.join('\n'))
