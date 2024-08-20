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