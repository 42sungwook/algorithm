function solution(arr1, arr2) {
    const len1 = arr1.length;
    const len2 = arr1[0].length;
    const len3 = arr2.length;
    const len4 = arr2[0].length;
    
    const answer = [];
    for (let i = 0; i < len1; i++)
    {
        answer.push(new Array(len4).fill(0));
    }
    
    for (let i = 0; i < len1; i++)
    {
        for (let j = 0; j < len4; j++)
        {
            for (let k = 0; k < len2; k++)
            {
                answer[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }
    
    return answer;
}