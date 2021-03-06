// 1913. 两个数对之间的最大乘积差

// 两个数对 (a, b) 和 (c, d) 之间的 乘积差 定义为 (a * b) - (c * d) 。

//     例如，(5, 6) 和 (2, 7) 之间的乘积差是 (5 * 6) - (2 * 7) = 16 。

// 给你一个整数数组 nums ，选出四个 不同的 下标 w、x、y 和 z ，使数对 (nums[w], nums[x]) 和 (nums[y], nums[z]) 之间的 乘积差 取到 最大值 。

// 返回以这种方式取得的乘积差中的 最大值 。



// 示例 1：

// 输入：nums = [5,6,2,7,4]
// 输出：34
// 解释：可以选出下标为 1 和 3 的元素构成第一个数对 (6, 7) 以及下标 2 和 4 构成第二个数对 (2, 4)
// 乘积差是 (6 * 7) - (2 * 4) = 34

// 示例 2：

// 输入：nums = [4,2,5,9,7,4,8]
// 输出：64
// 解释：可以选出下标为 3 和 6 的元素构成第一个数对 (9, 8) 以及下标 1 和 5 构成第二个数对 (2, 4)
// 乘积差是 (9 * 8) - (2 * 4) = 64
/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxProductDifference = function (nums) {

// };
var maxProductDifference = function (nums) {
  let n = nums.size();
  // 数组中最大的两个值
  let mx1 = max(nums[0], nums[1]);
  let mx2 = min(nums[0], nums[1]);
  // 数组中最小的两个值
  let mn1 = min(nums[0], nums[1]);
  let mn2 = max(nums[0], nums[1]);
  for (let i = 2; i < n; ++i) {
    let tmp = nums[i];
    if (tmp > mx1) {
      mx2 = mx1;
      mx1 = tmp;
    }
    else if (tmp > mx2) {
      mx2 = tmp;
    }
    if (tmp < mn1) {
      mn2 = mn1;
      mn1 = tmp;
    }
    else if (tmp < mn2) {
      mn2 = tmp;
    }
  }
  return (mx1 * mx2) - (mn1 * mn2);
}
