const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

class Node {
  constructor() {
    this.directory = new Set()
    this.child = {}
  }
  addDirectory(value) {
    this.directory.add(value)
    this.child[value] = new Node()
  }
  getChildDirectory(value) {
    return this.child[value]
  }
  getSortedArray() {
    return Array.from(this.directory).sort()
  }
}

const N = Number(input[0])
const first = new Node()

for (let i = 1; i <= N; i++) {
  const directories = input[i].split('\\')

  let node = first

  for (let j = 0; j < directories.length; j++) {
    if (!node.directory.has(directories[j])) {
      node.addDirectory(directories[j])
    }
    node = node.getChildDirectory(directories[j])
  }
}

let node = first
const answer = []

function pushDirectories(node, depth) {
  const directories = node.getSortedArray()
  for (const directory of directories) {
    answer.push(' '.repeat(depth) + directory)
    if (node.getChildDirectory(directory).size !== 0) {
      pushDirectories(node.getChildDirectory(directory), depth + 1)
    }
  }
}

pushDirectories(node, 0)

console.log(answer.join('\n'))
