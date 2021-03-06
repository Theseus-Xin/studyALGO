// 95. 不同的二叉搜索树 II

// 给你一个整数 n ，请你生成并返回所有由 n 个节点组成且节点值从 1 到 n 互不相同的不同 二叉搜索树 。可以按 任意顺序 返回答案。



// 示例 1：

// 输入：n = 3
// 输出：[[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]

// 示例 2：

// 输入：n = 1
// 输出：[[1]]
function TreeNode (val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
var generateTrees = function (n) {
  let a = []
  for (let i = 1; i <= n; i++) {
    a.push(i)
  }
  function build (l = 0, r = n - 1) {
    if (l > r) return [null]
    if (l == r) return [new TreeNode(a[l])]
    let res = []
    for (let m = l; m <= r; m++) {
      let left = build(l, m - 1)
      let right = build(m + 1, r)
      for (let lf of left) {
        for (let rt of right) {
          let root = new TreeNode(a[m], lf, rt)
          res.push(root)
        }
      }
    }
    return res
  }
  return build()
};

console.log(generateTrees(3));