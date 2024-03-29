/**
 * given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution,
 * and you may not use the same element twice.
 *
 * example:
 *
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 */

function twoSum(nums: number[], target: number): number[] | undefined {
  // hash holds the number as key and index as value
  const hash: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num;

    // if diff is seen in the loop, we have found the pair
    if (hash[diff]) {
      return [hash[diff], i];
    }

    // store the num in hash to look for its pair in the next iteration
    hash[num] = i;
  }
}

const test1 = twoSum([2, 7, 11, 15], 9);
if (test1?.[0] === 0 && test1?.[1] === 1) {
  console.log("test1 passed");
} else {
  console.log("test1 failed");
}

const test2 = twoSum([3, 2, 4], 6);
if (test2?.[0] === 1 && test2?.[1] === 2) {
  console.log("test2 passed");
} else {
  console.log("test2 failed");
}
