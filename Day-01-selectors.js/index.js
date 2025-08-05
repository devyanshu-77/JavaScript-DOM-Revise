

// ===============================
// 1️⃣ DOM SELECTORS
// ===============================

// ❌ Old methods (just for reference, not recommended):
// const heading = document.getElementById("heading");
// const container = document.getElementsByClassName("container");

// ✅ Prefer modern methods:
const container = document.querySelector(".container");
const heading = document.querySelector("#heading");
const paragraphs = document.querySelectorAll(".paragraph"); // returns NodeList

// ===============================
// 2️⃣ TEXT & HTML CONTENT
// ===============================

// Change inner HTML (can insert tags)
heading.innerHTML = "<p>I am paragraph inside H1</p>";

// ===============================
// 3️⃣ ATTRIBUTE MANIPULATION
// ===============================

const google = document.querySelector(".google");
google.setAttribute("href", "https://www.google.com");

const img = document.querySelector("img");
console.log("Image Source:", img.getAttribute("src")); // get attribute

const youtube = document.querySelector(".youtube");
youtube.removeAttribute("href"); // remove attribute

// ===============================
// 4️⃣ DYNAMIC DOM MANIPULATION
// ===============================

// Create new elements
const heading1 = document.createElement("h2");
heading1.textContent = "I am h2 created in JS and appended";

const heading2 = document.createElement("h2");
heading2.textContent = "I am h2 created in JS and prepended";

// Insert elements
document.body.appendChild(heading1);
document.body.prepend(heading2);

// Remove an element
const removedElement = document.querySelector(".removed");
removedElement.remove();

// ===============================
// 5️⃣ STYLE & CLASS MANIPULATION
// ===============================

const styleMe = document.querySelector(".style-me");

// Inline styles via JS
styleMe.style.color = "blue";
styleMe.style.backgroundColor = "#fff";
styleMe.style.fontFamily = "sans-serif";

// Add & remove class
const h1 = document.querySelector("#h1");
h1.classList.add("box");
// h1.classList.remove("box"); // Uncomment to remove

