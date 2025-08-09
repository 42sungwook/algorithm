function solution(arr) {
    const answer = [0, 0];
    const stack = [[0, 0, arr.length]];
    
    while (stack.length > 0) {
        const [row, column, size] = stack.pop();
        const value = arr[row][column];
        let same = true;
        
        for (let r = row; r < row + size; r++) {
            for (let c = column; c < column + size; c++) {
                if (arr[r][c] !== value) {
                    same = false;
                    break;
                }
            }
            if (!same) break;
        }
        
        if (same) {
            answer[value]++;
        } else {
            const halfSize = size / 2;
            stack.push([row, column, halfSize]);
            stack.push([row, column + halfSize, halfSize]);
            stack.push([row + halfSize, column, halfSize]);
            stack.push([row + halfSize, column + halfSize, halfSize]);
        }
    }
    
    return answer;
}