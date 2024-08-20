// 1. 같은 알파벳 2개 붙어 있는 짝 찾기
// 2. 반복해서 문자열을 모두 제거
// 3. 이를 성공적으로 수행할 수 있는지

function solution(s)
{
    if (s.length === 1) {
        return 0;
    }
    
    const stack = [];
    let temp = "";
    
    for (const c of s) {
        if (temp === c) {
            stack.pop();
            if (stack.length === 0) {
                temp = "";
            } else {
                temp = stack[stack.length - 1];
            }
            
            continue;
        }
        stack.push(c);
        temp = c;
    }
    return stack.length === 0 ? 1 : 0;
}