// ==============================
// 🔹 Storage in Browser
// ==============================

// 1️⃣ Local Storage
// - Stores data permanently in the browser until manually cleared.
// - Data persists even after closing the browser.
// - Capacity: ~5–10 MB per origin.
// - Best for large, long-term data.

// 👉 Store
localStorage.setItem("name", "John");

// 👉 Store arrays/objects (convert to string)
localStorage.setItem("friends", JSON.stringify(["Amit", "Sumit", "Pawan"]));

// 👉 Fetch
const name = localStorage.getItem("name");
console.log(name); // John

// 👉 Fetch array/object
const friends = JSON.parse(localStorage.getItem("friends"));
console.log(friends); // ["Amit", "Sumit", "Pawan"]

// 👉 Update (setItem overwrites if key exists)
localStorage.setItem("name", "John Doe");

// 👉 Remove specific item
localStorage.removeItem("name");

// 👉 Clear all data
// localStorage.clear();

// 2️⃣ Session Storage
// - Stores data only for the session (tab).
// - Data is lost when tab or browser is closed.
// - Capacity: ~5–10 MB per origin.
// - Best for temporary data.

// 👉 Store
sessionStorage.setItem("name", "John");

// 👉 Fetch
console.log(sessionStorage.getItem("name")); // John

// 👉 Update
sessionStorage.setItem("name", "John Doe");

// 👉 Remove specific item
sessionStorage.removeItem("name");

// 👉 Clear all data
// sessionStorage.clear();

// 3️⃣ Cookies
// - Store small pieces of data (like tokens, preferences).
// - Capacity: ~4 KB per cookie.
// - Data is sent to the server with every request.
// - Best for authentication or server communication.
