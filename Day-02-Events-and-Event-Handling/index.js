// ===============================
// DOM EVENTS DEMO
// ===============================

// 1️⃣ DOUBLE-CLICK EVENT: Change heading color
const heading = document.querySelector(".main-heading");

function changeColor() {
  heading.style.color = "red";
}

// Add double-click event listener to heading
heading.addEventListener("dblclick", changeColor);

// ❌ You can remove it later using:
// heading.removeEventListener("dblclick", changeColor);

// --------------------------------------------------

// 2️⃣ INPUT EVENT: Triggers as user types in input
const inputBox = document.querySelector(".text-input");

inputBox.addEventListener("input", function (event) {
  console.log("Typed:", event.data);
  // You can do live search, validation, etc. here
});

// --------------------------------------------------

// 3️⃣ CHANGE EVENT: Triggered when dropdown selection changes
const dropdown = document.querySelector(".device-select");
const deviceLabel = document.querySelector(".selected-device");

dropdown.addEventListener("change", function (event) {
  const selected = event.target.value;
  deviceLabel.textContent = `Device selected: ${selected}`;
});

// --------------------------------------------------

// 4️⃣ KEYDOWN EVENT: Fires on key press anywhere on the page
const keyDisplay = document.querySelector(".key-display");

window.addEventListener("keydown", (event) => {
  // console.log(event); // For debugging: shows the full key event object

  if (event.code === "Space") {
    keyDisplay.textContent = "Spacebar pressed";
    return;
  }

  keyDisplay.textContent = `You pressed: ${event.key}`;
});

// --------------------------------------------------

// 5️⃣ CLICK + FILE UPLOAD: Fake button triggers hidden file input
const hiddenFileInput = document.querySelector(".hidden-file-input");
const uploadBtn = document.querySelector(".file-upload-btn");

// When the styled button is clicked, trigger the hidden input
uploadBtn.addEventListener("click", () => {
  hiddenFileInput.click();
});

// Show selected file name on button
hiddenFileInput.addEventListener("change", (event) => {
  const fileName = event.target.files[0]?.name;
  uploadBtn.textContent = fileName || "Upload File";
});
