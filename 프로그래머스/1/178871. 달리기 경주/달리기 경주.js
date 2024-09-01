function solution(players, callings) {
    const len = players.length;
    const map = {};
    
    for (let i = 0; i < len; i++) {
        map[players[i]] = i;
    }
    for (calling of callings) {
        const idx = map[calling];
        const temp = players[idx];
        map[calling]--;
        map[players[idx - 1]]++;
        players[idx] = players[idx - 1];
        players[idx - 1] = temp;
    }
    return players;
}