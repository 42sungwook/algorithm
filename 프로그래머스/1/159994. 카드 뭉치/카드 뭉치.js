function solution(cards1, cards2, goal) {
    let idx1 = 0;
    let idx2 = 0;
    
    for (const word of goal) {
        if (word === cards1[idx1]) {
            idx1++;
            continue;
        } else if (word === cards2[idx2]) {
            idx2++;
            continue;
        }
        return "No";
    }
    return "Yes";
}