/**
 * @param {number[]} nums
 * @return {number}
 */
const findLengthOfLCIS = nums => {
  if (!nums || nums.length === 0) {
    return 0;
  }

  let max = 1;
  let current = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      current++;
      max = Math.max(max, current);
    } else {
      current = 1;
    }
  }

  return max;
};

export { findLengthOfLCIS };

findLengthOfLCIS([1,2,3,4,5])
5
findLengthOfLCIS([1,2,3,4,15])
5
findLengthOfLCIS([1,2,3,2,4,5])
3
findLengthOfLCIS([1,1,2,2,3,2,4,5])
3
findLengthOfLCIS([1,1,2,2,3,2,1,4,5])
3
findLengthOfLCIS([1,1,2,2,3,2,1,4,1,5])
2
