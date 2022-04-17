/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  //solution1
  // let count_zero = 0;
  // for(let i=nums.length;i>=0;i--){
  //     if(nums[i] === 0) {
  //         nums.splice(i, 1);
  //         count_zero++;
  //     }
  // };
  // // console.log(nums);
  // while(count_zero--){
  //     nums.push(0);
  // }

  //solution2
  //     let lastNonZeroFoundAt = 0;

  //     for(let i=0;i<nums.length;i++){
  //         nums[lastNonZeroFoundAt++] = nums[i];
  //     }
  //     for(let i=lastNonZeroFoundAt;i<nums.length;i++){
  //         nums[i] = 0;
  //     }

  //solution3
  let nonZeroIdx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[nonZeroIdx];
      nums[nonZeroIdx++] = nums[i];
      nums[i] = temp;
    }
  }
};
