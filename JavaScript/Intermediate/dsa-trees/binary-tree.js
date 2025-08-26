/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;

    let depth = 0;
    const queue = [{ node: this.root, depth: 1 }];

    while (queue.length) {
      const { node, depth: currentDepth } = queue.shift();

      // If we reach a leaf node, return the depth
      if (!node.left && !node.right) {
        return currentDepth;
      }

      // Add children to the queue with incremented depth
      if (node.left) {
        queue.push({ node: node.left, depth: currentDepth + 1 });
      }
      if (node.right) {
        queue.push({ node: node.right, depth: currentDepth + 1 });
      }
    }

    return depth; // This line should never be reached if the tree is valid
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;

    let depth = 0;
    const queue = [{ node: this.root, depth: 1 }];

    while (queue.length) {
      const { node, depth: currentDepth } = queue.shift();
      depth = Math.max(depth, currentDepth);

      // Add children to the queue with incremented depth
      if (node.left) {
        queue.push({ node: node.left, depth: currentDepth + 1 });
      }
      if (node.right) {
        queue.push({ node: node.right, depth: currentDepth + 1 });
      }
    }

    return depth;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum(node = this.root) {
    if (!node) return 0;
    let maxSum = this.root.val;

    function findMaxPath(node) {
      if (!node) return 0;

      const leftMax = Math.max(findMaxPath(node.left), 0);
      const rightMax = Math.max(findMaxPath(node.right), 0);

      // Update the global maximum sum if needed
      maxSum = Math.max(maxSum, node.val + leftMax + rightMax);

      // Return the maximum path sum including the current node
      return node.val + Math.max(leftMax, rightMax);
    }

    findMaxPath(node);
    return maxSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;

    let nextLargerValue = null;
    const queue = [this.root];

    while (queue.length) {
      const node = queue.shift();

      // If the node's value is larger than lowerBound
      if (node.val > lowerBound) {
        // If we haven't found a next larger value yet or this one is smaller
        if (nextLargerValue === null || node.val < nextLargerValue) {
          nextLargerValue = node.val;
        }
      }

      // Add children to the queue
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return nextLargerValue;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {}

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {}

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {}

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
