
let prom1 = new Promise((resolve, reject)=>{
  let a = Math.rondom()*10;
  console.log(a);
  if(a <5){
    reject("No random number was not supporting you")
  }else{
    setTimeout(() => {
      console.log("Yes i am done");
      resolve("Sahil")
    }, 3000);
  }
})
prom1.then((a)=>{
  console.log(a);
})
console.log('loglo');


/*///////////////////////////////////////////
🔹 Asynchronous Nature of JavaScript

Definition (Brief):
JavaScript is single-threaded but handles tasks asynchronously using the event loop, allowing non-blocking operations like API calls, timers, etc.

Key Points:

Executes one task at a time
Async tasks handled via Web APIs + Event Loop
Improves performance (non-blocking)

Example:

console.log("Start");

setTimeout(() => {
  console.log("Async Task");
}, 2000);

console.log("End");

Output:

Start
End
Async Task
///////////////////////////////////////////////
🔹 Callback

Definition (Brief):
A callback is a function passed as an argument to another function and executed later.

Example:

function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

greet("Sahil", () => {
  console.log("Callback executed");
});
/////////////////////////////////////////////////
🔹 Callback Hell

Definition (Brief):
Nested callbacks inside callbacks create messy, hard-to-read code.

Example:

setTimeout(() => {
  console.log("Step 1");
  setTimeout(() => {
    console.log("Step 2");
    setTimeout(() => {
      console.log("Step 3");
    }, 1000);
  }, 1000);
}, 1000);
🔹 Why Promises over Callback Hell

Key Points:

Cleaner & readable code
Avoids deep nesting
Better error handling
Supports chaining
////////////////////////////////////////////////////
🔹 Promises

Definition (Brief):
A Promise represents a value that may be available now, later, or never.

States:

Pending
Fulfilled
Rejected

Methods / Syntax:

const promise = new Promise((resolve, reject) => {
  // async task
});

Example:

const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Done");
  } else {
    reject("Error");
  }
});
//////////////////////////////////////////////
🔹 .then(), .catch(), .finally()
🔸 .then()
promise.then((result) => {
  console.log(result);
});
🔸 .catch()
promise.catch((error) => {
  console.log(error);
});
🔸 .finally()
promise.finally(() => {
  console.log("Always runs");
});

Example:

myPromise
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => console.log("Finished"));
  ////////////////////////////////////////////
🔹 Promise Chaining

Definition (Brief):
Multiple .then() calls chained together to handle sequential async operations.

Example:

Promise.resolve(2)
  .then(num => num * 2)
  .then(num => num + 3)
  .then(num => console.log(num));

Output:7

///////////////////////////////////////////////////
🔹 Promise API Methods
🔸 Promise.all()

Definition: Runs all promises in parallel, fails if any fails

Promise.all([p1, p2])
  .then(results => console.log(results))
  .catch(err => console.log(err));
🔸 Promise.race()

Definition: Returns first settled promise

Promise.race([p1, p2])
  .then(res => console.log(res));
🔸 Promise.allSettled()

Definition: Returns all results (success + failure)

Promise.allSettled([p1, p2])
  .then(res => console.log(res));
🔸 Promise.any()

Definition: Returns first successful promise

Promise.any([p1, p2])
  .then(res => console.log(res))
  .catch(err => console.log(err));
⚡ Quick Summary
Async JS → non-blocking execution
Callback → function inside function
Callback hell → nested messy code
Promise → cleaner async handling
.then / catch / finally → handle results
Chaining → sequential tasks
API methods → parallel execution
*/