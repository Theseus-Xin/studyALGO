// 插入排序
// 百度百科：插入排序，一般也被称为直接插入排序。对于少量元素的排序，它是一个有效的算法。
// 插入排序是一种最简单的排序方法，它的基本思想是将一个记录插入到已经排好序的有序表中，
// 从而一个新的、记录数增1的有序表。在其实现过程使用双层循环，外层循环对除了第一个元素
// 之外的所有元素，内层循环对当前元素前面有序表进行待插入位置查找，并进行移动。
// 简言之就是，我先排一个，，使之变成一个有序数组，我再取它的后一个，往前面已经排好的有序数组里插入，
// 寻找合适的位置放进去就好了
// 那么要想做好插入排序，拢共分几步呢？
// 第一步，先选一个数当做排好序的有序数组，因为一个数的数组一定有序，我就喜欢选第一个
// 第二步，把后面的数选一个合适的位置插进去，一般都从右向左对比，因为右边的数大，所以找到一个比它小的那么这个位置就是了
// 第三步，重复前两步直到没有需要插入的元素
// 那么我们就开始吧！
function insertionSort(arr) {
  const len = arr.length;
  // 第一步
  // let index = 0;
  // 第二步
  // if (arr[index] > arr[index + 1]) {
  //   [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]]
  // }
  // 第三步，重复即循环
  // for (let i = 1; i < len; i++) {
  //   let index = i - 1;
  //   let current = arr[i];
  //   while (index >= 0 && current < arr[index]) {
  //     arr[index + 1] = arr[index];
  //     index--
  //   }
  //   arr[index + 1] = current;
  // }
  // 上面的第三步用的是把需要排序的拿出来，如果前面的数值比它大就后移一位，直到找到没有它大的那个数为止，插入这个位置
  // 其实我看到这道题第三步的时候，第一个想法是替换，当前值如果比前一个值小，那就替换，再向前找，再替换，直到前一个值没有它大就停止
  // 第三步
  for (let i = 1; i < len; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1])[arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
    }
  }
  console.log(arr);
}

let arr = [4, 2, 6, 1, 7, 3, 9];
insertionSort(arr)