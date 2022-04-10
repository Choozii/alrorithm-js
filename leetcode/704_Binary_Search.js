/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let startIdx = 0;
    let endIdx = nums.length-1;
    
    while(startIdx <= endIdx){
        let midIdx = startIdx + Math.floor((endIdx - startIdx)/2);
        if(nums[midIdx] === target){
            return midIdx;
        }else if(nums[midIdx] > target){
            startIdx = midIdx - 1;
                 }else{
                     startIdx = midIdx + 1;
                 }
    }
    return -1;
};


