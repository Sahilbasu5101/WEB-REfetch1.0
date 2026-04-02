



/*////////////////////////////////////////////////
🔹 DOM (Document Object Model)

Definition (Brief):
DOM is a programming interface for web documents. It represents the HTML page as a tree structure where each element is a node, allowing JavaScript to manipulate content, structure, and styles dynamically.

Key Points:

Represents HTML as a tree (parent-child relation)
Allows dynamic updates (add, delete, modify elements)
Used heavily in frontend (React internally uses DOM concepts)
Events (click, input) are handled via DOM

Methods / Syntax:

// Selecting elements
document.getElementById("id")
document.getElementsByClassName("class")
document.querySelector(".class")
document.querySelectorAll("p")

// Changing content
element.innerHTML = "Hello"
element.textContent = "Text"

// Changing style
element.style.color = "red"

// Creating & adding elements
const div = document.createElement("div")
document.body.appendChild(div)

// Event handling
element.addEventListener("click", function() {
  console.log("Clicked")
})

Example:

const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  document.body.style.backgroundColor = "black";
});

Output (if needed):

On button click → background color changes to black

////////////////////////////////////////////////

🔹 BOM (Browser Object Model)

Definition (Brief):
BOM allows JavaScript to interact with the browser (not the webpage content). It provides objects to control browser features like window, history, location, and screen.

Key Points:

Interacts with browser, not HTML directly
No official standard (but widely supported)
Useful for navigation, alerts, timers
Root object is window

Methods / Syntax:

// Window methods
window.alert("Hello")
window.confirm("Are you sure?")
window.prompt("Enter name")

// Location object
window.location.href
window.location.reload()

// History
window.history.back()
window.history.forward()

// Timing functions
setTimeout(() => {}, 1000)
setInterval(() => {}, 1000)

Example:

setTimeout(() => {
  alert("This shows after 2 seconds");
}, 2000);

Output (if needed):

After 2 seconds → alert box appears
⚡ Quick Difference (Important for Interview)
Feature	DOM	BOM
Full Form	Document Object Model	Browser Object Model
Works With	HTML Document	Browser Window
Purpose	Manipulate webpage	Control browser
Example	change text, styles	alert, redirect


/////////////////////////////////////////////////
🔹 DOM Traversal & Node Methods

Definition (Brief):
DOM traversal methods allow you to navigate between elements (parent, child, sibling) in the HTML tree structure.

🔸 1. Accessing Child Nodes

Methods / Syntax:

document.body.childNodes        // all child nodes (includes text, comments)
document.body.children          // only element nodes
document.body.firstChild        // first node
document.body.lastChild         // last node

document.body.firstElementChild // first element only
document.body.lastElementChild  // last element only

Example:

console.log(document.body.children);
console.log(document.body.firstElementChild);
🔸 2. Accessing Parent Node

Methods / Syntax:

element.parentNode        // parent node (can be text/document)
element.parentElement     // parent element only

Example:

const div = document.querySelector("div");
console.log(div.parentElement);
🔸 3. Accessing Siblings

Methods / Syntax:

element.nextSibling            // next node
element.previousSibling        // previous node

element.nextElementSibling     // next element only
element.previousElementSibling // previous element only

Example:

const item = document.querySelector("li");
console.log(item.nextElementSibling);
🔸 4. Node Properties (Important)

Methods / Syntax:

element.nodeName    // tag name (DIV, P, etc.)
element.nodeType    // type (1 = element, 3 = text)
element.nodeValue   // value (for text nodes)

Example:

const para = document.querySelector("p");
console.log(para.nodeName); // P
🔸 5. Creating & Removing Nodes

Methods / Syntax:

const newDiv = document.createElement("div")

parent.appendChild(newDiv)     // add at end
parent.prepend(newDiv)         // add at start

parent.removeChild(child)      // remove child
child.remove()                 // direct remove

Example:

const div = document.createElement("div");
div.textContent = "Hello";

document.body.appendChild(div);
🔸 6. Replacing & Inserting Nodes

Methods / Syntax:

parent.replaceChild(newNode, oldNode)

element.before(newNode)
element.after(newNode)

Example:

const newPara = document.createElement("p");
newPara.textContent = "New Paragraph";

const oldPara = document.querySelector("p");
oldPara.replaceWith(newPara);
🔸 7. Cloning Nodes

Methods / Syntax:

element.cloneNode(true)   // deep clone (with children)
element.cloneNode(false)  // shallow clone

Example:

const div = document.querySelector("div");
const clone = div.cloneNode(true);

document.body.appendChild(clone);

/////////////////////////////////////////////
🔹 Table Nodes in DOM

Definition (Brief):
Table nodes are special DOM properties and methods used to access and manipulate HTML table elements like rows, columns, and cells efficiently.

🔸 1. Accessing Table Elements

Methods / Syntax:

const table = document.querySelector("table");

table.rows        // collection of all rows
table.tBodies     // all <tbody> elements
table.tHead       // <thead> element
table.tFoot       // <tfoot> element

Example:

const table = document.querySelector("table");

console.log(table.rows.length); // total rows
🔸 2. Accessing Rows

Methods / Syntax:

const row = table.rows[0];

row.cells        // all cells in that row
row.rowIndex     // index of row in table
row.sectionRowIndex // index inside tbody

Example:

const firstRow = document.querySelector("table").rows[0];

console.log(firstRow.cells.length);
🔸 3. Accessing Cells

Methods / Syntax:

const cell = row.cells[0];

cell.cellIndex   // index of cell in row
cell.innerHTML   // content inside cell

Example:

const cell = document.querySelector("table").rows[0].cells[0];

console.log(cell.innerHTML);
🔸 4. Creating Rows & Cells

Methods / Syntax:

table.insertRow(index)     // create new row
row.insertCell(index)      // create new cell

Example:

const table = document.querySelector("table");

const newRow = table.insertRow();
const newCell = newRow.insertCell();

newCell.innerHTML = "New Data";
🔸 5. Deleting Rows & Cells

Methods / Syntax:

table.deleteRow(index)
row.deleteCell(index)

Example:

const table = document.querySelector("table");

// delete first row
table.deleteRow(0);
🔸 6. Table Sections (Important)

Methods / Syntax:

table.createTHead()
table.createTFoot()
table.createTBody()

Example:

const table = document.querySelector("table");

const thead = table.createTHead();
const row = thead.insertRow();

const cell = row.insertCell();
cell.innerHTML = "Header";

////////////////////////////////////////////////////
🔹 matches() Method

Definition (Brief):
matches() checks whether a given element satisfies a specified CSS selector. It returns true or false.

Key Points:

Used for condition checking
Very useful in event delegation
Works with any valid CSS selector

Methods / Syntax:

element.matches("css-selector")

Example:

const btn = document.querySelector("button");

if (btn.matches(".active")) {
  console.log("Button is active");
}

Output (if needed):

Prints only if button has class "active"
🔹 closest() Method

Definition (Brief):
closest() searches up the DOM tree (including the element itself) and returns the nearest ancestor that matches a given CSS selector.

Key Points:

Traverses upward (child → parent → ancestor)
Returns first matching ancestor
Returns null if no match found
Very useful for nested elements handling

Methods / Syntax:

element.closest("css-selector")

Example:

const span = document.querySelector("span");

const parentDiv = span.closest("div");
console.log(parentDiv);

Output (if needed):

Nearest <div> ancestor of span
🔹 contains() Method

Definition (Brief):
contains() checks whether a node is a descendant of another node.

Key Points:

Returns true or false
Checks parent → child relationship
Includes the node itself

Methods / Syntax:

parent.contains(child)

Example:

const div = document.querySelector("div");
const span = document.querySelector("span");

console.log(div.contains(span));

Output (if needed):

true (if span is inside div)
*/