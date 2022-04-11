/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let startIdx = 1;
    let endIdx = n;
    /*TODO: <= 사용하는 경우, time limit exceeded */
    while (startIdx < endIdx) {
      /*TODO: preventing overflow */
      let midIdx = startIdx + Math.floor((endIdx - startIdx) / 2);
      if (isBadVersion(midIdx)) {
        endIdx = midIdx;
      } else {
        startIdx = midIdx + 1;
      }
    }
    return startIdx;
  };
};
