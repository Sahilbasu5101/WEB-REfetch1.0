//rest operator

// let arr = [3,4,5,6,7,8,9,11,12];
// let [a, , ,...rest] = arr
// console.log(a, rest);

//spread operator
// let arr1 = [3,4,5];
// let obj1 = {...arr1};
// console.log(obj1);
// function sum(v1, v2, v3){
//   return v1+v2+v3;
// }
// console.log(sum(...arr1));

let obj = {
  'name' : 'sahil',
  'address': 'bihar',
  'age': '22'
}
// console.log({...obj, 'name': 'sunny'});
// console.log({name : 'john', age : 20, ...obj});
// console.log({name : "mona"});

console.log(Object.keys(obj));//object ko array bana deta hai 

for(let it in obj){
  console.log(`${it}->${obj[it]}`);
}





