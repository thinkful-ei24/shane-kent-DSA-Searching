const BST = require('./BST');
const binarySearchTree = new BST();

const data = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];

data.forEach(item => binarySearchTree.insert(item, item));

function inOrder(tree) {
  // L recursivly -> process root-> R recursivly

  if (tree.left !== null) {
    inOrder(tree.left);
  }
  console.log(tree.value);
  if (tree.right !== null) {
    inOrder(tree.right);
  }
  if (!tree.left && !tree.right) {
    return;
  }
}

//console.log(inOrder(binarySearchTree));

function postOrder(tree) {
  // L recursivly -> R recursivly -> process root

  if (tree.left) {
    postOrder(tree.left);
  }
  if (tree.right) {
    postOrder(tree.right);
  }
  console.log(tree.value);
}

console.log(postOrder(binarySearchTree));


function preOrder(tree) {
  // process root-> L recursivly -> R recursivly

  console.log(tree.value);
  if (!tree.left && !tree.right) {
    return;
  }
  if (tree.left) {
    preOrder(tree.left);
  }
  if (tree.right) {
    preOrder(tree.right);
  }

}

console.log(preOrder(binarySearchTree));

const library = [
  { author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' },
  { author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' },
  { author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' },
  { author: 'Crockford, Douglas', dewey: '005.2762', title: 'JavaScript: The Good Parts' },
  { author: 'Flanagan, David', dewey: '005.2762', title: 'JavaScript: The Definitive Guide' },
  { author: 'Schmidt, Meinhard', dewey: '005.44684', title: 'Windows Vista for Dummies' },
  { author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' },
  { author:'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time' },
  { author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: 'Jane\'s Fighting Ships' },
  { author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' }
];

// Input ->'005.133', 'Teach Yourself C++ In 21 Days'
// Output -> Book

// Find all books with the dewey
// look at the subject (005)
// look at the decimal (.133)
// look at the title

function findBook(libary, dewey, title) {
  const subjectBooks = [];
  libary.forEach(book => {
    if (book.dewey.split('.')[0] === dewey.split('.')[0]) {
      subjectBooks.push(book);
    }
  });

  const subCategoryBooks = [];
  subjectBooks.forEach(book => {
    if (book.dewey.split('.')[1] === dewey.split('.')[1]) {
      subCategoryBooks.push(book);
    }
  });

  for (let i = 0; i< subCategoryBooks.length; i++) {
    if (subCategoryBooks[i].title === title) {
      return subCategoryBooks[i];
    }
  }
}

console.log(findBook(library, '005.133', 'Teach Yourself C++ In 21 Days'));