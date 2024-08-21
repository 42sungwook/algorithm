// 예시1

// 시작
// 0 0 0 0 0
// 0 0 1 0 3
// 0 2 5 0 1
// 4 2 4 4 2
// 3 5 1 3 1

// 종료
// 0 0 0 0 0
// 0 0 0 0 0
// 0 0 5 0 0
// 0 2 4 0 2
// 0 5 1 3 1

// 바구니
// 4 3 1 1 3 2 4


// board에서 해당하는 열의 0제외한 첫 숫자 찾기 - 비어있으면 넘어가기
// 스택이 비어있지 않으면 넣는 숫자랑 비교 - 일치하면 터짐

function isPop(stack, doll) {
    const len = stack.length;
    if (stack.length === 0) {
        return false;
    }
    if (stack[len - 1] === doll) {
        return true;
    }
    return false;
}

function solution(board, moves) {
    const stack = [];
    let answer = 0;
    const len = board.length;
    
    for (const c of moves) {
        for (let i = 0; i < len; i++) {
            if (board[i][c - 1] !== 0) {
                const doll = board[i][c - 1];
                if (isPop(stack, doll)) {
                    stack.pop();
                    answer += 2;
                } else {
                    stack.push(doll);    
                }
                board[i][c - 1] = 0;
                break;
            }
        }
    }
    return answer;
}