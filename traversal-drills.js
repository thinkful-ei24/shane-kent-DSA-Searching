const BST = require('./BST');
const binarySearchTree = new BST();

const data = [25,15,50,10,24,35,70,4,12,18,31,44,66,90,22];

data.forEach(item => binarySearchTree.insert(item, item));

function inOrder(tree) {
  // L recursivly -> process root-> R recursivly

  if(tree.left !== null) {
    inOrder(tree.left);
  }
  console.log(tree.value)
  if(tree.right !== null) {
    inOrder(tree.right);
  }
  if(!tree.left && !tree.right) {
    return
  }
}

//console.log(inOrder(binarySearchTree));

function postOrder(tree) {
  // L recursivly -> process root-> R recursivly

  if(tree.left) {
    postOrder(tree.left);
  }
  if (tree.right) {
    postOrder(tree.right);
  }
  console.log(tree.value)
}

console.log(postOrder(binarySearchTree));