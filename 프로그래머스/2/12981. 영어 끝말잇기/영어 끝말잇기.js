function solution(n, words) {
    const spoke = {};
    const len = words.length;
    let prev = "";
    
    for (let i = 0; i < len; i++) {
        if (spoke[words[i]] || (i !== 0 && prev !== words[i][0])) {
            const person = i % n + 1;
            const times = Math.ceil((i + 1) / n);
            return [person, times];
        }
        spoke[words[i]] = 1;
        prev = words[i][words[i].length - 1];
    }
    return [0, 0];
}