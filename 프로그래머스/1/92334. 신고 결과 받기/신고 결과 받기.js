function solution(id_list, report, k) {
    const answer = {};
    const reports = new Set(report);
    const total = {};
    const return_arr = [];
    
    for (const id of id_list) {
        answer[id] = 0;
    }
    
    for (const report of reports) {
        const splits = report.split(" ");
        if (!total[splits[1]]) {
            total[splits[1]] = [];
        }
        total[splits[1]].push(splits[0]);
    }
    
    for (const list in total) {
        if (total[list].length >= k) {
            for (const id of total[list]) {
                answer[id]++;
            }
        }
    }
    for (const id in answer) {
        return_arr.push(answer[id]);
    }
    return return_arr;
}