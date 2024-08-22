// progress배열을 reverse해서 앞부터 순차적으로 pop
// 일수를 기록해서 speed 곱했을 때 100이 넘는지 확인
// 넘으면 answer 배열에 push


function solution(progresses, speeds) {
    const rev_p = progresses.reverse();
    const len = progresses.length;
    const answer = [];
    let date = 0;
    
    for (let i = 0; i < len; i++) {
        const current = rev_p.pop();
        const days = Math.ceil((100 - current) / speeds[i])
        if (days - date > 0) {
            date = days;
            answer.push(1);
        } else {
            answer[answer.length - 1]++;
        }
    }
    return answer;
}