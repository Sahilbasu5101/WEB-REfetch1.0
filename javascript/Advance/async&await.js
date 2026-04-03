// async function getdata(){
//   return new Promise((resolve, reject)=>{
//     setTimeout(() => {
//       resolve(455);
//     }, 3000);
//   })
// }
async function getdata(){
  let x = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  let data = await x.json();
  console.log(data);
  
}
async function main(){
  console.log("bpit");

  let data = await getdata();
  console.log(data);
  
  
  console.log("sahil");
  
}
main();

/*//////////////////////////////////////////////
🔹 async and await

Definition (Brief):
async/await is a modern way to handle asynchronous code in JavaScript, making it look like synchronous code.

Key Points:

async function always returns a Promise
await pauses execution until Promise resolves
Makes code cleaner than .then()

Methods / Syntax:

async function myFunc() {
  let result = await promise;
}

Example:

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data received"), 2000);
  });
}

async function fetchData() {
  let data = await getData();
  console.log(data);
}

fetchData();

Output:

Data received (after 2 sec)
/////////////////////////////////////////////////
🔹 Why .then() still needed?

Explanation:
Even after async/await, .then() is still useful because:

Key Points:

async/await is just syntax sugar over Promises
.then() useful for:
chaining without blocking
handling multiple async operations
non-async functions

Example:

fetch("https://api.example.com")
  .then(res => res.json())
  .then(data => console.log(data));

👉 Same with async/await:

async function getData() {
  const res = await fetch("https://api.example.com");
  const data = await res.json();
  console.log(data);
}
///////////////////////////////////////////////
🔹 fetch() API

Definition (Brief):
fetch() is used to make HTTP requests (GET, POST, etc.) to servers and returns a Promise.

Key Points:

Default method → GET
Returns a Response object (Promise)
Needs conversion (.json(), .text())

Methods / Syntax:

fetch(url, options)
////////////////////////////////////////////////////
🔹 Why fetch() uses TWO .then() ?

Explanation:

👉 fetch() returns:

Response object (first Promise)
.json() returns actual data (second Promise)

Flow:

fetch() → Response → JSON → Data

Example:

fetch("https://api.example.com")
  .then(res => res.json())   // convert response
  .then(data => console.log(data)); // actual data
////////////////////////////////////////////////
🔹 Requests using Fetch API
🔸 GET Request
fetch("https://api.example.com")
  .then(res => res.json())
  .then(data => console.log(data));
🔸 POST Request
fetch("https://api.example.com", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "Sahil",
    age: 20
  })
})
  .then(res => res.json())
  .then(data => console.log(data));
🔸 Using async/await (Best Practice)
async function sendData() {
  const res = await fetch("https://api.example.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name: "Sahil" })
  });

  const data = await res.json();
  console.log(data);
}
////////////////////////////////////////////////
🔹 Error Handling
fetch("https://api.example.com")
  .then(res => {
    if (!res.ok) throw new Error("Error");
    return res.json();
  })
  .catch(err => console.log(err));
⚡ Quick Summary
async/await → cleaner syntax
.then() → still useful (Promise-based)
fetch() → returns Response Promise
.json() → returns data Promise
Hence → 2 .then() needed
🔥 Pro Tip (Interview Level)

👉 Always handle errors:///////////////////////////

try {
  let res = await fetch(url);
  if (!res.ok) throw new Error("Failed");
} catch (err) {
  console.log(err);
}
*/