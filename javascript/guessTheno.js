// //guess the number 

let number = 62;
let chances = Math.max;
let arr = [];
while(chances != number){
  chances = prompt("Enter a number");
  arr.push(chances);
  if(chances == number) alert("you gussed it write.");
  else if(chances < number){
    alert("try gussing bigger number.")
  }else{
    alert("try gussing smaller number.")
  }
  
}
console.log(arr);
