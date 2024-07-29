function solution(answers) {    
    // a: 1, 2, 3, 4, 5 반복
    // b: 2, 1, 2, 3, 2, 4, 2, 5 반복
    // c: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5 반복
    const choices = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
    
    const scores = [0, 0, 0];
    
    for (const [i, answer] of answers.entries())
    {
        for (const [j, choice] of choices.entries())
        {
            if (answer === choice[i % choice.length])
            {
                scores[j] += 1;
            }
        }
    }
    
    const most = Math.max(...scores);
    
    const answer = [];
    for (let i = 0; i < 3; i++)
    {
        if (scores[i] === most)
        {
            answer.push(i + 1);
        }
    }
    
    return answer;
}