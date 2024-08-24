function solution(enroll, referral, seller, amount) {
    let parent = {};
    const len = enroll.length;
    const sell_len = seller.length;
    
    for (let i = 0; i < len; i++) {
        parent[enroll[i]] = referral[i];
    }
    
    let total = {};
    for (let name of enroll) {
        total[name] = 0;
    }
    
    for (let i = 0; i < sell_len; i++) {
        let money = amount[i] * 100;
        let cur_name = seller[i];
        
        while (money > 0 && cur_name != "-") {
            const parent_money = Math.floor(money / 10);
            total[cur_name] += money - parent_money;
            cur_name = parent[cur_name];
            
            money = parent_money;
        }
    }
    return enroll.map(name => total[name]);
}