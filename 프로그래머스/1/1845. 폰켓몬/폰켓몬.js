function solution(nums) {
    const arr = new Set(nums);
    const len = nums.length;
    
    return arr.size < len / 2 ? arr.size : len / 2;
}