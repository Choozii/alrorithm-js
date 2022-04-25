// nums1.splice(m);
// nums1.push(...nums2)
// console.log(nums1.sort((a,b)=>a-b));

var merge = function (nums1, m, nums2, n) {
  var insertPos = m + n - 1;

  m--;
  n--;

  while (n >= 0) {
    nums1[insertPos--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
  }
};
