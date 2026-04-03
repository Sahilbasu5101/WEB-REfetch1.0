let a = prompt("Enter the first number :")
let b = prompt("Enter the second number :")
if (isNaN(a) || isNaN(b)) {
  throw SyntaxError(`this is not allowed`);

} else {

  let sum = parseInt(a) + parseInt(b);
  console.log("the sum is : ", sum);
}

/*/////////////////////////////////////////////////
🔹 Error Handling in JavaScript

Definition (Brief):
Error handling allows us to manage runtime errors gracefully so that the program doesn’t crash.

Key Points:

Prevents app crash
Improves debugging
Used in sync & async code
/////////////////////////////////////////////////////////
🔹 try...catch

Definition (Brief):
Used to handle errors in synchronous code.

Methods / Syntax:

try {
  // risky code
} catch (error) {
  // handle error
}

Example:

try {
  let x = y + 10; // y not defined
} catch (err) {
  console.log("Error:", err.message);
}
  /////////////////////////////////////////////////
🔹 throw

Definition (Brief):
Used to manually create and throw errors.

Methods / Syntax:

throw new Error("Something went wrong");

Example:

function checkAge(age) {
  if (age < 18) {
    throw new Error("Underage");
  }
  return "Access granted";
}
  ////////////////////////////////////////////////////
🔹 Error Object

Definition (Brief):
When an error occurs, JavaScript creates an Error object containing useful info.

Properties:

error.name      // Type of error
error.message   // Description
error.stack     // Stack trace

Example:

try {
  JSON.parse("invalid");
} catch (err) {
  console.log(err.name);    // SyntaxError
  console.log(err.message); // details
}

/////////////////////////////////////////////////////////
🔹 finally Clause

Definition (Brief):
finally block always runs, whether error occurs or not.

Methods / Syntax:
function(){

    try {
    // code/////////////
    return // return karne k baad koi next code nahi chalta hai par finally hamesha chalta hai
    } catch (err) {
      // handle error
    } finally {
      // always runs
    }
}

Example:

try {
  console.log("Try block");
} catch (err) {
  console.log("Error");
} finally {
  console.log("Cleanup done");
}

Output:

Try block
Cleanup done
🔥 Why finally used in functions?

Use Cases:

Cleanup resources (files, DB connections)
Stop loaders/spinners
Close connections

👉 Ensures cleanup no matter what happens
/////////////////////////////////////////////////////////
🔹 Why try...catch doesn’t work with async?

Explanation:
try...catch only handles synchronous errors.
Async code (like setTimeout, Promises) runs later → outside try block.

Example (❌ Won’t catch):

try {
  setTimeout(() => {
    throw new Error("Async error");
  }, 1000);
} catch (err) {
  console.log("Caught:", err);
}

👉 Error NOT caught
//////////////////////////////////////////////////// 
🔹 Correct Ways to Handle Async Errors
🔸 Using .catch()
fetch("wrong-url")
  .then(res => res.json())
  .catch(err => console.log(err));
🔸 Using async/await (Best)
async function getData() {
  try {
    let res = await fetch("wrong-url");
    let data = await res.json();
  } catch (err) {
    console.log("Error:", err);
  }
}
🔹 Custom Errors (Advanced)
class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = "MyError";
  }
}
*/