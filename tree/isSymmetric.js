// 101. 对称二叉树

// 给定一个二叉树，检查它是否是镜像对称的。



// 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3



// 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

//     1
//    / \
//   2   2
//    \   \
//    3    3
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true;
  return dfs(root.left, root.right)
  function dfs (p, q) {
    if (p == null && q == null) {
      return true
    }
    if (p == null || q == null) {
      return false
    }
    if (p.val !== q.val) {
      return false
    }
    return dfs(p.left, q.right) && dfs(p.right, q.left)
  }
};