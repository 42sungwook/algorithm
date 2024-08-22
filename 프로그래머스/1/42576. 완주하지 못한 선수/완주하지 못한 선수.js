function solution(participant, completion) {
    const map = {};
    for (const name of participant) {
        if (!map[name]) {
            map[name] = 1;
        } else {
            map[name]++;
        }
    }
    
    for (const name of completion) {
        map[name]--;
    }
    
    for (const name in map) {
        if (map[name] === 1) {
            return name;
        }
    }
}