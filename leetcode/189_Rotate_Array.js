// solution1)

var rotate = function (nums, k) {
  let new_k = k % nums.length;
  nums.unshift(...nums.splice(nums.length - new_k));
};
