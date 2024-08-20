function solution(prices) {
    const arr = [];
    const len = prices.length;
    const answer = new Array(len).fill(0);
    
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            answer[i]++;
            if (prices[i] > prices[j]) break;
        }
    }
    
    return answer;
}