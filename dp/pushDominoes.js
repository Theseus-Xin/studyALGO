// 838. 推多米诺

// n 张多米诺骨牌排成一行，将每张多米诺骨牌垂直竖立。在开始时，同时把一些多米诺骨牌向左或向右推。

// 每过一秒，倒向左边的多米诺骨牌会推动其左侧相邻的多米诺骨牌。同样地，倒向右边的多米诺骨牌也会推动竖立在其右侧的相邻多米诺骨牌。

// 如果一张垂直竖立的多米诺骨牌的两侧同时有多米诺骨牌倒下时，由于受力平衡， 该骨牌仍然保持不变。

// 就这个问题而言，我们会认为一张正在倒下的多米诺骨牌不会对其它正在倒下或已经倒下的多米诺骨牌施加额外的力。

// 给你一个字符串 dominoes 表示这一行多米诺骨牌的初始状态，其中：

//     dominoes[i] = 'L'，表示第 i 张多米诺骨牌被推向左侧，
//     dominoes[i] = 'R'，表示第 i 张多米诺骨牌被推向右侧，
//     dominoes[i] = '.'，表示没有推动第 i 张多米诺骨牌。

// 返回表示最终状态的字符串。


// 示例 1：

// 输入：dominoes = "RR.L"
// 输出："RR.L"
// 解释：第一张多米诺骨牌没有给第二张施加额外的力。

// 示例 2：

// 输入：dominoes = ".L.R...LR..L.."
// 输出："LL.RR.LLRRLL.."

/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
  let finish = false
  let len = dominoes.length
  let arr = dominoes.split("")
  // while (finish == false) {
  for (let i = 0; i < len; i++) {
    if (arr[i] == "r") arr[i] = "R"
    if (arr[i] == "l") arr[i] = "L"
  }
  finish = true
  for (let i = 0; i < len; i++) {
    if (arr[i] == ".") {
      if (arr[i - 1] && arr[i - 1] == "R" && arr[i + 1] != "L") {
        arr[i] = "r"
        finish = false
      }
      if (arr[i - 1] != "R" && arr[i + 1] && arr[i + 1] == "L") {
        arr[i] = "l"
        finish = false
      }
    }
  }
  // }
  for (let i = 0; i < len; i++) {
    if (arr[i] == "r") arr[i] = "R"
    if (arr[i] == "l") arr[i] = "L"
  }
  console.log(arr.join(""));
};


// pushDominoes("L.....RR.RL.....L.R.")
// ""L.....RRRRLLLLLLL.RR""