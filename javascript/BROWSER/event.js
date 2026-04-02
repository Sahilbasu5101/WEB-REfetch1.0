






/*//////////////////////////////////////////////
🔹 Event Listener (addEventListener)

Definition (Brief):
addEventListener() is used to attach an event handler to an element without overwriting existing handlers.

Key Points:

Can attach multiple events to same element
Supports event bubbling & capturing
Preferred over onclick

Methods / Syntax:

element.addEventListener("event", callback, options);

Example:

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  console.log("Button clicked");
});

Removing Event Listener:

function handleClick() {
  console.log("Clicked");
}

btn.addEventListener("click", handleClick);
btn.removeEventListener("click", handleClick);

Options (Important):

element.addEventListener("click", callback, {
  once: true,      // runs only once
  capture: true    // event capturing
});
click
double click
mousedown
mouseenter
onclick	    -Triggered when an element is clicked.
onmouseover	-Fired when the mouse pointer moves over an element.
onmouseout	-Occurs when the mouse pointer leaves an element.
onkeydown	  -Fired when a key is pressed down.
onkeyup	    -Fired when a key is released.
onchange	  -Triggered when the value of an input element changes.
onload	    -Occurs when a page has finished loading.
onsubmit	  -Fired when a form is submitted.
onfocus	    -Occurs when an element gets focus.
onblur	    -Fired when an element loses focus.
//////////////////////////////////////////////////
🔹 Event Bubbling

Definition (Brief):
Event bubbling is when an event starts from the target element and propagates upward to its parent elements.

Flow:

Child → Parent → Grandparent → Document

Example:

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

Output:

Child clicked
Parent clicked

Stop Bubbling:

element.addEventListener("click", (e) => {
  e.stopPropagation();
});
/////////////////////////////////////////////////////
🔹 Event Capturing (Opposite of Bubbling)

Definition:
Event flows from parent to child.

Example:

parent.addEventListener("click", () => {
  console.log("Parent");
}, true); // capturing

child.addEventListener("click", () => {
  console.log("Child");
});

Output:

Parent
Child
//////////////////////////////////////////////
🔹 setTimeout()

Definition (Brief):
Executes a function once after a specified delay.

Methods / Syntax:

setTimeout(callback, delay);

Example:

setTimeout(() => {
  console.log("Hello after 2 sec");
}, 2000);

Cancel Timeout:

const id = setTimeout(() => {}, 2000);

clearTimeout(id);
/////////////////////////////////////////////////
🔹 setInterval()

Definition (Brief):
Executes a function repeatedly after a fixed interval.

Methods / Syntax:

setInterval(callback, interval);

Example:

setInterval(() => {
  console.log("Running every 1 sec");
}, 1000);

Stop Interval:

const id = setInterval(() => {}, 1000);

clearInterval(id);
🔹 Difference: setTimeout vs setInterval
Feature	setTimeout	setInterval
Execution	Once	Repeated
Use Case	Delay task	Repeating task
🔥 Pro Tip (Important for Interviews)
// Better alternative to setInterval
function repeat() {
  console.log("Running...");
  setTimeout(repeat, 1000);
}

repeat();
*/