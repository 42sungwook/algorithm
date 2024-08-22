// key: uid, value: 닉네임 저장 
// 마지막에 answer 배열 만들어 return

function solution(record) {
    const command = record.map((r) => r.split(" "));
    const account = {};
    const answer = [];
    
    for (item of command) {
        if (item[0] === "Enter" || item[0] === "Change") {
            account[item[1]] = item[2];
        }
    }
    for (item of command) {
        if (item[0] === "Enter") {
            answer.push(account[item[1]] + "님이 들어왔습니다.")
        } else if (item[0] === "Leave") {
            answer.push(account[item[1]] + "님이 나갔습니다.")
        }
    }
    return answer;
}