// solution1)

var rotate = function (nums, k) {
  let new_k = k % nums.length;
  nums.unshift(...nums.splice(nums.length - new_k));
};

var rotate = function (nums, k) {
  k %= nums.length;

  let reverse = function (i, j) {
    while (i < j) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j--;
    }
  };
  reverse(0, nums.length - 1);
  reverse(0, k - 1);
  reverse(k, nums.length - 1);
};
