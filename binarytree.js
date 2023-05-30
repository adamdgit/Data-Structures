class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// Breadth first traversal - left to right

function breadthFirstSearch(root) {

  const queue = [ root ];
  // explore tree
  while (queue.length > 0) {
    const curr = queue.shift();
    console.log(curr.value)
    if (curr.left !== null) {
      queue.push(curr.left)
    }
    if (curr.right !== null) {
      queue.push(curr.right)
    }
  }

};

console.log([a])
breadthFirstSearch(a)

// Write a function that returns a boolean indicating whether 
// or not the tree contains the target value


function treeContainsValue(root, value) {
  const queue = [root];

  while (queue.length > 0) {
    const curr = queue.shift();

    if (curr.value === value) return true;

    if (curr.left !== null) {
      queue.push(curr.left)
    }
    if (curr.right !== null) {
      queue.push(curr.right)
    }
  }
  return false;
}

console.log(treeContainsValue(a, 'c'))

// invert binary tree

function invertTree(tree) {

  function reverseNode(node) {
    if (node === null) return
    // will go to bottom of tree before swapping
    reverseNode(node.left)
    reverseNode(node.right)
    // swap nodes only if there is 2 nodes to swap
    if (node.left && node.right)
    [node.left, node.right] = [node.right, node.left]
  }

  reverseNode(tree)
  return tree;
}

console.log(invertTree(a))