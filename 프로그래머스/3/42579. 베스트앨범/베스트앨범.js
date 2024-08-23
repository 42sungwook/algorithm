function solution(genres, plays) {
    const total = {};
    const playlist = {};
    const len = genres.length;
    const answer = [];
    
    for (let i = 0; i < len; i++) {
        if (!total[genres[i]]) {
            total[genres[i]] = 0;
            playlist[genres[i]] = [];
        }
        
        total[genres[i]] += plays[i];
        playlist[genres[i]].push([i, plays[i]]);
    }

    const sortedGenre = Object.keys(total).sort((a, b) => {
        return total[b] - total[a];
    });
    
    for (const genre of sortedGenre) {
        const sortedPlaylist = playlist[genre].sort((a, b) => {
            return a[1] === b[1] ? b[0] - a[0] : a[1] - b[1];
        });
        for (let i = 0; i < 2; i++) {
            const song = (sortedPlaylist.pop())[0];
            answer.push(song);
            if (sortedPlaylist.length === 0) {
                break;
            }
        }
    }
    return answer;
}