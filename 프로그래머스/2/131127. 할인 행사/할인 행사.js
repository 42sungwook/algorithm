function checkWant(wantList, discountList) {
    for (const want in wantList) {
        if (wantList[want] !== discountList[want]) {
            return false
        }
    }
    return true;
}

function solution(want, number, discount) {
    const wantList = {};
    const len = want.length;
    const discountLen = discount.length;
    const discountList = {};
    let answer = 0;
    
    for (let i = 0; i < len; i++) {
        wantList[want[i]] = number[i];
    }
    
    for (let i = 0; i < 10; i++) {
        if (!discountList[discount[i]]) {
            discountList[discount[i]] = 1;
        } else {
            discountList[discount[i]]++;
        }
    }
    
    if (checkWant(wantList, discountList)) {
        answer++;
    }
    
    for (let j = 10; j < discountLen; j++) {
        discountList[discount[j - 10]]--;
        if (!discountList[discount[j]]) {
            discountList[discount[j]] = 1;
        } else {
            discountList[discount[j]]++;
        }
        if (checkWant(wantList, discountList)) {
            answer++;
        }
    }
    return answer;
}