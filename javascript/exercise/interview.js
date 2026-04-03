let hat = ["rahul", 'sahil', 'sudhanshu', 'ashish', 'deepak', 'ritesh', 'sunny'];

let Gryffindor = [];
let Hufflepuff = [];
let Ravenclaw = [];
let Slytherin = [];
let call = (a, b, c, d)=>{
 console.log(`[${a}], [${b}], [${c}], [${d}]`);
}

function assign (arr){ 
    arr.forEach(element => {
      if(element.length < 6){
        Gryffindor.push(element)
      }else if(element.length>=6 && element.length<8){
        Hufflepuff.push(element);
      }else if(element.length >= 8 && element.length <12){
        Ravenclaw.push(element);
      }else{
        Slytherin.push(element);
      }
    });
}

assign(hat);
call(Gryffindor, Hufflepuff, Ravenclaw, Slytherin)