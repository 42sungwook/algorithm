const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

class TrieNode {
  constructor() {
    this.children = {}
    this.wordEnd = 0
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode()
  }

  insert(word) {
    let current = this.root
    for (let char of word) {
      if (!(char in current.children)) {
        current.children[char] = new TrieNode()
      }
      current = current.children[char]
    }
    current.wordEnd = 1
  }
}

let idx = 0
const w = Number(input[idx++])
const trie = new Trie()

for (let i = 0; i < w; i++) {
  trie.insert(input[idx++].trim())
}

while (idx < input.length && input[idx].trim() === '') {
  idx++
}

const b = Number(input[idx++])

const directions = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
  [1, 1],
  [1, -1],
  [-1, 1],
  [-1, -1]
]

function getScore(length) {
  const scores = [0, 0, 0, 1, 1, 2, 3, 5, 11]
  return scores[length] || 0
}

let mark = 2

function find(board, visited, row, col, trieNode, currentWord, results) {
  if (!trieNode) return

  if (trieNode.wordEnd !== 0 && trieNode.wordEnd !== mark) {
    trieNode.wordEnd = mark

    results.score += getScore(currentWord.length)
    results.wordCount++

    if (currentWord.length > results.longestWord.length) {
      results.longestWord = currentWord
    } else if (
      currentWord.length === results.longestWord.length &&
      currentWord < results.longestWord
    ) {
      results.longestWord = currentWord
    }
  }

  for (let [dr, dc] of directions) {
    const newRow = row + dr
    const newCol = col + dc

    if (newRow >= 0 && newRow < 4 && newCol >= 0 && newCol < 4) {
      if (!visited[newRow][newCol]) {
        const nextChar = board[newRow][newCol]
        const nextNode = trieNode.children[nextChar]

        if (nextNode) {
          visited[newRow][newCol] = true
          find(
            board,
            visited,
            newRow,
            newCol,
            nextNode,
            currentWord + nextChar,
            results
          )
          visited[newRow][newCol] = false
        }
      }
    }
  }
}

for (let boardNum = 0; boardNum < b; boardNum++) {
  const board = []

  for (let i = 0; i < 4; i++) {
    board.push(input[idx++].trim().split(''))
  }

  if (boardNum < b - 1) {
    while (idx < input.length && input[idx].trim() === '') {
      idx++
    }
  }

  const results = {
    score: 0,
    wordCount: 0,
    longestWord: ''
  }

  for (let x = 0; x < 4; x++) {
    for (let y = 0; y < 4; y++) {
      const startChar = board[x][y]
      const startNode = trie.root.children[startChar]

      if (startNode) {
        const visited = Array(4)
          .fill(null)
          .map(() => Array(4).fill(false))
        visited[x][y] = true
        find(board, visited, x, y, startNode, startChar, results)
        visited[x][y] = false
      }
    }
  }

  console.log(`${results.score} ${results.longestWord} ${results.wordCount}`)

  mark++
}
