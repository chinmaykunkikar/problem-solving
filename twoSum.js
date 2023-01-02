/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  let prevMap = {};
  for (let i = 0; i <= nums.length; i++) {
    let compliment = target - nums[i];
    if (prevMap[compliment] != null) return [i, prevMap[compliment]];
    else prevMap[nums[i]] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 1, 5, 3], 4));
