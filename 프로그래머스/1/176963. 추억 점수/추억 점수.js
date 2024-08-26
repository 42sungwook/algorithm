function solution(name, yearning, photo) {
    const list = {};
    const answer = [];
    const len = name.length;
    for (let i = 0; i < len; i++) {
        list[name[i]] = yearning[i];
    }
    const p_len = photo.length;
    for (let i = 0; i < p_len; i++) {
        const p2_len = photo[i].length;
        let sum = 0;
        for (let j = 0; j < p2_len; j++) {
            if (list[photo[i][j]]) {
                sum += list[photo[i][j]];
            }
        }
        answer.push(sum);
    }
    return answer;
}

