const input = require('fs').readFileSync('/dev/stdin').toString()

class MinHeap {
  constructor() {
    this.heap = []
  }

  size() {
    return this.heap.length
  }

  push(value) {
    this.heap.push(value)
    this.bubbleUp()
  }

  pop() {
    if (this.heap.length === 0) return null
    if (this.heap.length === 1) return this.heap.pop()

    const min = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.bubbleDown()
    return min
  }

  bubbleUp() {
    let index = this.heap.length - 1
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2)
      if (this.heap[parentIndex][0] <= this.heap[index][0]) break
      ;[this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex]
      ]
      index = parentIndex
    }
  }

  bubbleDown() {
    let index = 0
    const length = this.heap.length

    while (true) {
      let smallest = index
      const leftChild = 2 * index + 1
      const rightChild = 2 * index + 2

      if (
        leftChild < length &&
        this.heap[leftChild][0] < this.heap[smallest][0]
      ) {
        smallest = leftChild
      }
      if (
        rightChild < length &&
        this.heap[rightChild][0] < this.heap[smallest][0]
      ) {
        smallest = rightChild
      }
      if (smallest === index) break
      ;[this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index]
      ]
      index = smallest
    }
  }
}

function solution(input) {
  const lines = input.trim().split('\n')
  let idx = 0

  const n = parseInt(lines[idx++])
  const m = parseInt(lines[idx++])

  // 그래프 초기화
  const graph = Array.from({ length: n + 1 }, () => [])

  // 간선 정보 입력
  for (let i = 0; i < m; i++) {
    const [u, v, cost] = lines[idx++].split(' ').map(Number)
    graph[u].push([v, cost])
  }

  const [start, end] = lines[idx++].split(' ').map(Number)

  // 다익스트라 알고리즘
  const dist = Array(n + 1).fill(Infinity)
  const parent = Array(n + 1).fill(-1)
  const pq = new MinHeap()

  dist[start] = 0
  pq.push([0, start])

  while (pq.size() > 0) {
    const [currentDist, current] = pq.pop()

    // 이미 처리된 노드는 스킵
    if (currentDist > dist[current]) continue

    // 인접 노드 탐색
    for (const [next, cost] of graph[current]) {
      const newDist = dist[current] + cost

      if (newDist < dist[next]) {
        dist[next] = newDist
        parent[next] = current
        pq.push([newDist, next])
      }
    }
  }

  // 경로 역추적
  const path = []
  let node = end
  while (node !== -1) {
    path.push(node)
    node = parent[node]
  }
  path.reverse()

  // 결과 출력
  const result = []
  result.push(dist[end])
  result.push(path.length)
  result.push(path.join(' '))

  return result.join('\n')
}

console.log(solution(input))
