// 1124. 表现良好的最长时间段

// 给你一份工作时间表 hours，上面记录着某一位员工每天的工作小时数。

// 我们认为当员工一天中的工作小时数大于 8 小时的时候，那么这一天就是「劳累的一天」。

// 所谓「表现良好的时间段」，意味在这段时间内，「劳累的天数」是严格 大于「不劳累的天数」。

// 请你返回「表现良好时间段」的最大长度。



// 示例 1：

// 输入：hours = [9,9,6,0,6,6,9]
// 输出：3
// 解释：最长的表现良好时间段是 [9,9,6]。
var longestWPI = function (hours) {
  let sum = 0;
  let maxLen = 0;
  for (let i = 0; i < hours.length; i++) {
    if (hours[i] > 8) {
      sum++
    } else {
      sum--
    }
    hours[i] = sum;
  }
  if (sum > 0) return hours.length;
  let map = new Map();
  map.set(0, -1);
  console.log(hours);
  for (let i = 0; i < hours.length; i++) {
    console.log(map, i);
    if (map.has(hours[i] - 1)) {
      maxLen = Math.max(maxLen, i - map.get(hours[i] - 1))
    }
    if (!map.has(hours[i])) {
      map.set(hours[i], i)
    }
  }
  console.log(maxLen);
};


longestWPI([9, 9, 6, 0, 6, 6, 9])