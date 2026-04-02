// RANDOM COLOR GENERATOR
// const a = Array.from(document.getElementsByClassName("box"));
// console.log(a[0]);

const myarr = [...document.getElementsByClassName("box")]
console.log(myarr);

myarr.forEach((it)=>{
  it.style.backgroundColor = `${RandomColor()}`;
  it.style.color = `${RandomColor()}`;
})


let generator = Math.floor(Math.random()*myarr.length)

function RandomColor(){
  let r = Math.floor(Math.random()*256);
  let b = Math.floor(Math.random()*256);
  let g = Math.floor(Math.random()*256);
  return `rgb(${r},${b},${g})`;
}