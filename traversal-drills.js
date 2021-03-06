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

//console.log(postOrder(binarySearchTree));


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

//console.log(preOrder(binarySearchTree));

const library = [{
  author: 'Cowlishaw, Mike',
  dewey: '005.133',
  title: 'The REXX Language'
},
{
  author: 'Sams',
  dewey: '005.133',
  title: 'Teach Yourself C++ In 21 Days'
},
{
  author: 'Stroustrup., Bjarne',
  dewey: '005.133',
  title: 'The C++ Programming Language'
},
{
  author: 'Crockford, Douglas',
  dewey: '005.2762',
  title: 'JavaScript: The Good Parts'
},
{
  author: 'Flanagan, David',
  dewey: '005.2762',
  title: 'JavaScript: The Definitive Guide'
},
{
  author: 'Schmidt, Meinhard',
  dewey: '005.44684',
  title: 'Windows Vista for Dummies'
},
{
  author: 'Zondervan',
  dewey: '220.52081',
  title: 'NIV Study Bible'
},
{
  author: 'Humphries, Russell, Dr.',
  dewey: '231.7652',
  title: 'Starlight and Time'
},
{
  author: 'Jane, Frederick Thomas',
  dewey: '623.82509051',
  title: 'Jane\'s Fighting Ships'
},
{
  author: 'Norris, Chuck',
  dewey: '796.8092',
  title: 'The Official Chuck Norris Fact Book'
}
];

// Input ->'005.133', 'Teach Yourself C++ In 21 Days'
// Output -> Book

// Find all books with the dewey

// look at the subject (005)
// look at the decimal (.133)
// look at the title

function findBook(libary, dewey, title) {
  const subjectBooks = [];
  for (let i = 0; i < libary.length; i++) {
    if (libary[i].dewey.split('.')[0] === dewey.split('.')[0]) {
      subjectBooks.push(libary[i]);
    } else if (Number(libary[i].dewey.split('.')[0]) > Number(dewey.split('.')[0])) {
      break;
    }
  }

  const subCategoryBooks = [];
  for (let i = 0; i < libary.length; i++) {
    if (libary[i].dewey.split('.')[1] === dewey.split('.')[1]) {
      subCategoryBooks.push(libary[i]);
    } else if (Number(libary[i].dewey.split('.')[1]) > Number(dewey.split('.')[1])) {
      break;
    }
  }

  for (let i = 0; i < subCategoryBooks.length; i++) {
    if (subCategoryBooks[i].title === title) {
      return subCategoryBooks[i];
    }
  }
}

console.log(findBook(library, '005.133', 'Teach Yourself C++ In 21 Days'));

function maxProfit(arr) {
  let min = arr[0];
  let minInd = 0;
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      minInd = i;
      min = arr[i];
    }
    if (arr[i] > max && i > minInd) {
      max = arr[i];
    }
  }
  console.log(min, max, 'Profit is', (Math.abs(min - max)));
}

maxProfit([128, 97, 121, 123, 98, 97, 105]);


//start floor 0 / n 10
// if egg !broken
// floor + 10;
// func(floor)

// else
//n = 1
//func(floor + 1)

function eggDrop(floor, eggs) {
  let maxFloor = 67;

  //   if (floor >= maxFloor) {

  //     if (eggs > 1) {
  //       console.log('here');
  //       floor -= 10;
  //     }
  //     eggs -= 1;

  while (eggs === 2) {
    floor += 10;
    if (floor >= maxFloor) {
      eggs -= 1;
      floor -= 10;
    }
    // eggDrop(floor, eggs);
  }

  while (eggs === 1) {
    floor += 1;
    if (floor >= maxFloor) {
      eggs -= 1;
    }
    // eggDrop(floor, eggs);
  }
  //     while (eggs == 1 && floor < maxFloor) {
  //       floor = floor + 1;
  //       console.log(floor);
  //     }
  //   }
  return floor;
}
console.log(eggDrop(0, 2));