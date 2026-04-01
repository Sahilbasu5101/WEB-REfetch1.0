// let num = [1,2,3,4,5,6];
// let b = num.toString();
// console.log(b); // -> "1,2,3,4,5,6" string
// console.log(b.slice(2));
// console.log(typeof(b));

// console.log(num.join("_")); // -> "1_2_3_4_5_6" string

// let num1 = [1,2,3,4,5,6];
// console.log(num1.length);
// delete num1[0]; //[empty, 2, 3, 4, 5, 6]
// console.log(num1.length);
// console.log(num1[0]);//undefined

// let num1 = [1,2,3]
// let num2 = [4,5,6]
// let num3 = [7,8,9]
// let newArr = num1.concat(num2, num3)
// console.log(newArr);
// console.log(num1, num2, num3);





/*
.concat()
let a = [1,2];
let b = [3,4];
console.log(a.concat(b)); // [1,2,3,4]

.find()
let arr = [1,2,3,4];
console.log(arr.find(x => x > 2)); // 3

.filter()
let arr = [1,2,3,4];
console.log(arr.filter(x => x > 2)); // [3,4]

.push()
let arr = [1,2];
arr.push(3);
console.log(arr); // [1,2,3]

.pop()
let arr = [1,2,3];
arr.pop();
console.log(arr); // [1,2]

.reverse()

.slice()
let arr = [1,2,3,4];
console.log(arr.slice(1,3)); // [2,3]//included

.map()
let arr = [1,2,3];
console.log(arr.map(x => x * 2)); // [2,4,6]

.unshift()
let arr = [2,3];
arr.unshift(1);
console.log(arr); // [1,2,3]

.splice()
let arr = [1,2,3,4];
arr.splice(1,2);
console.log(arr); // [1,4]

.shift()
let arr = [1,2,3];
arr.shift();
console.log(arr); // [2,3]

.join()
let arr = [1,2,3];
console.log(arr.join("-")); // "1-2-3"

.sort()
.toString()
let arr = [1,2,3];
console.log(arr.toString()); // "1,2,3"

//some important topics

1. map() creates a new array with the results of a function applied to every element, while forEach() executes a function for each element but does not return a new array (it returns undefined

2.
Main functions of splice() method:
Remove: You can remove elements from a specific index.
Example: arr.splice(2, 1) – Removes 1 element from index 2.
Add: You can insert new elements at a specific position.
Example: arr.splice(2, 0, 'new') - adds 'new' at index 2, does not remove anything.
Replace: You can replace existing elements with new elements.
Example: arr.splice(2, 1, 'updated') - Replaces the element at index 2 with 'updated'.

3.num.ForEach((element)=>{
  console.log(element*element);
  })

  4.let text = "ABCDEFG";
    Array.from(text); // [A,B,C,D,E,F,G]

  5. for in() loop iterator deta hai
6.  for of() loop value data hai

// map filter reduce
//map
let array = [1,2,3,4,5]
let a = array.map(function(currentValue, index, arr){
  console.log(currentValue, index, arr);
  return currentValue +1;
})
  console.log(a);

//filter
let arr2 = [1,2,3,4,5]
let newArr = arr2.filter(function(a){
  return a>2;
})
console.log(newArr);
  
//reduce
let arr3 = [1,2,3,4,5]
let newArr = arr3.reduce(function(h1, h2){
  return h1+h2;
})
console.log(newArr);;


*/
