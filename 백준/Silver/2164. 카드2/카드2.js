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
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.size++
    }

    dequeue() {
        if (!this.head) return null
        const value = this.head.value
        this.head = this.head.next
        this.size--
        if (this.size === 0) {
            this.tail = null
        }
        return value
    }
}

const queue = new Queue()

for (let i = 1; i <= N; i++) {
    queue.enqueue(i)
}

while (queue.size > 1) {
    queue.dequeue()
    const num = queue.dequeue()
    if (num !== null) {
        queue.enqueue(num)
    }
}

console.log(queue.head.value)