// // let name = "sahil"
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.slice(2,4));
// console.log(name.replace("hil", "bil"));
// let friend = "Naman";
// console.log(name.concat(" is a friend of ", friend));
// let Name = "sahil basu";
// let val = "mr. ";
// for(let i of Name){
//   val += i;
// }
// console.log(val);
// let name = "lolo";
// name[0] = "A";
// console.log(name);//string are immputable

// console.log(name.splice(2,3));

/*
STRING METHODS:- 

String length

String charAt()
let text = "HELLO WORLD";
let char = text.charAt(0);

String charCodeAt()
let text = "HELLO WORLD";
let char = text.charCodeAt(0);

String codePointAt()

String concat()
console.log(name.concat(" is a friend of ", friend));

String at()

String [ ]
String slice()
String substring()
String substr()
String toUpperCase()
String toLowerCase()
String isWellFormed()
String toWellFormed()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String repeat()
String replace()
String replaceAll()
String split()

//some importants:-

Number.parseInt()
typeof
.includes()

1.string is immutable we cannot change existing string it will return new string if changed.
*/ 


//PRACTICE
// const sentence = `the quick brown fox jumps over the lazy dog.`
// const word = 'FOX';
// let newWord = word.toLowerCase();

// console.log(`the word "${newWord}" ${sentence.includes(word) ? "is" : "is not"} in the sentence`);

let str = "Please give rs 1000";
let amount = Number.parseInt(str.slice(15));
amount++;
console.log(amount);
console.log(typeof( amount));

