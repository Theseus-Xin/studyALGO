// 373. 查找和最小的K对数字

// 给定两个以升序排列的整数数组 nums1 和 nums2 , 以及一个整数 k 。

// 定义一对值 (u,v)，其中第一个元素来自 nums1，第二个元素来自 nums2 。

// 请找到和最小的 k 个数对 (u1,v1),  (u2,v2)  ...  (uk,vk) 。



// 示例 1:

// 输入: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
// 输出: [1,2],[1,4],[1,6]
// 解释: 返回序列中的前 3 对数：
//      [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]

// 示例 2:

// 输入: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
// 输出: [1,1],[1,1]
// 解释: 返回序列中的前 2 对数：
//      [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]

// 示例 3:

// 输入: nums1 = [1,2], nums2 = [3], k = 3
// 输出: [1,3],[2,3]
// 解释: 也可能序列中所有的数对都被返回:[1,3],[2,3]
let Heap = require('./Heap')

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k = 1000) {
  let heap = new Heap((a, b) => (a[0] + a[1]) < (b[0] + b[1]));
  let res = []
  for (let i = 0; i < nums1.length; i++) {
    const num1 = nums1[i];
    for (let j = 0; j < nums2.length; j++) {
      const num2 = nums2[j];
      if (heap.size() < k || heap.compare([num1, num2], heap.top())) {
        heap.push([num1, num2]);
        console.log(heap.size(), heap.cmp, "a");
        if (heap.size() > k) {
          heap.pop()
        }
        console.log(heap.size(), heap.cmp, "b");
      }
      else break
    }
  }
  while (heap.size()) {
    res.push(heap.pop())
  }
  return res
};
console.log(kSmallestPairs([1, 1, 2], [1, 2, 3], 2));



