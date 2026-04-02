



/*
🔹 Basic DOM Properties
🔸 dir()

Definition:
Console method to view object properties in detail.

console.dir(document.body);
🔸 tagName vs nodeName

Definition:

tagName → only for element nodes
nodeName → works for all nodes// comment or text node
const div = document.querySelector("div");

console.log(div.tagName);   // DIV
console.log(div.nodeName);  // DIV
🔸 innerHTML vs outerHTML
element.innerHTML   // inside content
element.outerHTML   // full element (including tag)
div.innerHTML = "<p>Hello</p>";
🔸 innerText vs textContent

Difference:

innerText → visible text only
textContent → all text (hidden bhi)
element.innerText
element.textContent
🔸 hidden Property
element.hidden = true;   // hide
element.hidden = false;  // show
🔸 document.designMode
document.designMode = "on";

👉 Page becomes editable like a document

🔸 Data Attributes (data-*)
<div id="box" data-user="sahil"></div>
const el = document.querySelector("#box");

console.log(el.dataset.user); // sahil
🔹 DOM Manipulation Methods
🔸 append() & prepend()
parent.append(child);    // end
parent.prepend(child);   // start
🔸 before() & after()
element.before(newNode);
element.after(newNode);
🔸 replaceWith()
oldElement.replaceWith(newElement);
🔸 setAttribute()
element.setAttribute("class", "box");
🔹 insertAdjacent Methods
🔸 Positions:
beforebegin
afterbegin
beforeend
afterend
🔸 Syntax:
element.insertAdjacentHTML("position", "<p>Hello</p>");
element.insertAdjacentText("position", "Hello");
element.insertAdjacentElement("position", newNode);
🔸 Example:
div.insertAdjacentHTML("beforeend", "<p>New</p>");
🔹 Class Handling
🔸 className
element.className = "box";
🔸 classList
element.classList.add("active");
element.classList.remove("active");
element.classList.toggle("active");
🔸 Example:
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
});
*/