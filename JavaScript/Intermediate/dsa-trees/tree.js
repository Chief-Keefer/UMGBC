/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    const values = [];
    let curr = this.root;
    const stack = [curr];
    while (stack.length) {
      curr = stack.pop();
      values.push(curr.val);
      for (let child of curr.children) {
        stack.push(child);
      }
    }
    return values.reduce((acc, val) => acc + val, 0);
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    const values = [];
    let curr = this.root;
    const stack = [curr];
    while (stack.length) {
      curr = stack.pop();
      if (curr.val % 2 === 0) values.push(curr.val);
      for (let child of curr.children) {
        stack.push(child);
      }
    }
    return values.length;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    const values = [];
    let curr = this.root;
    const stack = [curr];
    while (stack.length) {
      curr = stack.pop();
      if (curr.val > lowerBound) values.push(curr.val);
      for (let child of curr.children) {
        stack.push(child);
      }
    }
    return values.length;
  }
}

module.exports = { Tree, TreeNode };
