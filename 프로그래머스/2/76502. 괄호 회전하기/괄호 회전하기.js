// 1. 올바른 괄호 문자열인지 확인
// 2. 첫번째를 빼서 마지막에 넣고 올바른지 다시 확인
// 1, 2를 반복해서 나오는 길이를 return
// 단, 끝까지 올바르지 않을 경우 return 0;


// 올바른지 확인하는 방법
// 1. [, (, {를 각각 1, 2, 3로 정의
// 2. 1에 해당하는 문자가 나오면 스택에 push
// 3. ], ), } 문자가 나온다면 스택에서 pop을 하여 괄호가 닫히는 순서인지 확인
// 4. 비교했는데 올바른 순서가 아니라면 return false
// 5. 비교해서 올바른 순서라면 s문자열 끝까지 비교
// 6. 전부 확인했는데 스택이 비어있다면 true, 비어있지않다면 false

function checkClosure(c) {
    return "([{)]}".indexOf(c);
}

function isValid(arr) {
    const stack = [];
    
    for (let i = 0; i < arr.length; i++) {
        const flag = checkClosure(arr[i]);
        if (flag < 3) {
            stack.push(flag);
            continue;
        }
        if (stack.pop() !== flag - 3) {
            return false;
        }
    }
    return stack.length === 0;
}
function solution(s) {
    let answer = 0;
    const arr = [];
    
    for (let i = 0; i < s.length; i++) {
        arr.push(s[i]);
    }
    for (let i = 0; i < s.length; i++) {
        if (isValid(arr)) {
            answer++;
        }
        const first = arr.shift();
        arr.push(first);
    }
    
    return answer;
}
