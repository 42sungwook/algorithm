class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

function solution(n, k, cmd) {
    // 링크드 리스트 생성
    const nodes = new Array(n).fill(null).map((_, i) => new Node(i));
    for (let i = 1; i < n; i++) {
        nodes[i].prev = nodes[i - 1];
        nodes[i - 1].next = nodes[i];
    }

    let current = nodes[k];
    const stack = [];
    const deleted = new Set();

    for (const c of cmd) {
        const [command, value] = c.split(' ');
        
        switch(command) {
            case 'U':
                for (let i = 0; i < Number(value); i++) {
                    current = current.prev;
                }
                break;
            case 'D':
                for (let i = 0; i < Number(value); i++) {
                    current = current.next;
                }
                break;
            case 'C':
                stack.push(current);
                deleted.add(current.value);
                
                const prev = current.prev;
                const next = current.next;
                
                if (prev) prev.next = next;
                if (next) next.prev = prev;
                
                current = next || prev;
                break;
            case 'Z':
                const restored = stack.pop();
                deleted.delete(restored.value);
                
                const prevRestored = restored.prev;
                const nextRestored = restored.next;
                
                if (prevRestored) prevRestored.next = restored;
                if (nextRestored) nextRestored.prev = restored;
                break;
        }
    }

    return new Array(n).fill('O').map((v, i) => deleted.has(i) ? 'X' : 'O').join('');
}