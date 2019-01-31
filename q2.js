// 2. Write ruby code that model the following left child is always less than the parent & right child is always bigger than the parent. 

// A parent can only have 2 immediate child node.
// 2.1 Write a method to add item to the model so caller can build the tree like below.
// 2.2 Then perform a walk of depth first search on the model so we get result like this: 21, 56, 62, 67, 78, 81, 97, 115

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  add(data) {
    const node = this.root;
    //for inital node.
    if(node === null) {
      this.root = new Node(data)
    } else {
      //searching each node
      function searchTree(node) {
        //if current number is less than node number than insert in left node
        if(data < node.data) {
          //if something already exist in left node. then do recursion. repeat with until left node is empty
          node.left === null ? node.left = new Node(data) : searchTree(node.left)
          //else (data > node.data)
        } else {
          //same thing with larger numbers.
          node.right === null ? node.right = new Node(data) : searchTree(node.right)
        }
      }
      return searchTree(node);
    }
  }

  inOrder() {
    const result = [];
    function ascOrder(node) {
      //left node is always the smallest node. if left node exist, do recursion until left node doesn't exist.
      node.left && ascOrder(node.left);
      //then push left node value to results
      result.push(node.data);
      //currently in same branch, go to right node and do recursion, next lowest value will be in here.
      node.right && ascOrder(node.right);
    }
    ascOrder(this.root);
    return result;
  }
}

const bst = new BinarySearchTree();

bst.add(9);
bst.add(14);
bst.add(17);
bst.add(13);
bst.add(6);
bst.add(12);

console.log(bst.inOrder());