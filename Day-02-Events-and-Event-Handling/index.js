// DOM EVENTS DEMO

// 1️⃣ DOUBLE-CLICK EVENT — Changes heading color
const heading = document.querySelector(".heading-double-click");

function changeHeadingColor() {
  heading.style.color = "red";
}
heading.addEventListener("dblclick", changeHeadingColor);

// --------------------------------------------------

// 2️⃣ INPUT EVENT — Runs live while typing in the text box
const textInput = document.querySelector(".live-text-input");
textInput.addEventListener("input", (event) => {
  console.log("Typed:", event.data); // Example usage: live search, validation
});

// --------------------------------------------------

// 3️⃣ CHANGE EVENT — Updates device label when dropdown changes
const deviceSelect = document.querySelector(".device-dropdown");
const deviceLabel = document.querySelector(".selected-device-text");

deviceSelect.addEventListener("change", (event) => {
  deviceLabel.textContent = `Device selected: ${event.target.value}`;
});

// --------------------------------------------------

// 4️⃣ KEYDOWN EVENT — Detects any key press on the page
const keyDisplay = document.querySelector(".key-display-text");

window.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    keyDisplay.textContent = "Spacebar pressed";
    return;
  }
  keyDisplay.textContent = `You pressed: ${event.key}`;
});

// --------------------------------------------------

// 5️⃣ CLICK + FILE UPLOAD — Custom button triggers hidden file input
const fileInput = document.querySelector(".hidden-file-input");
const fileUploadBtn = document.querySelector(".file-upload-button");

// Open file picker
fileUploadBtn.addEventListener("click", () => {
  fileInput.click();
});

// Display chosen file name
fileInput.addEventListener("change", (event) => {
  const fileName = event.target.files[0]?.name;
  fileUploadBtn.textContent = fileName || "Upload File";
});

// --------------------------------------------------

// 6️⃣ FORM SUBMISSION — Creates a new profile card
const profileContainer = document.querySelector(".form-container");
const profileForm = document.querySelector(".profile-form");
const formInputs = document.querySelectorAll(".profile-form input");

profileForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Create card
  const card = document.createElement("div");
  card.classList.add("card");

  // Profile section
  const profileSection = document.createElement("div");
  profileSection.classList.add("profile");
  card.appendChild(profileSection);

  const profileImg = document.createElement("img");
  profileImg.setAttribute("src", formInputs[0].value);
  profileSection.appendChild(profileImg);

  const profileName = document.createElement("p");
  profileName.textContent = formInputs[1].value;
  profileSection.appendChild(profileName);

  // Occupation
  const occupationText = document.createElement("p");
  occupationText.classList.add("occupation");
  occupationText.textContent = formInputs[2].value;
  card.appendChild(occupationText);

  // Description
  const descriptionText = document.createElement("p");
  descriptionText.textContent = formInputs[3].value;
  card.appendChild(descriptionText);

  // Append card to container
  profileContainer.appendChild(card);
});

// --------------------------------------------------

// 7️⃣ MOUSE EVENTS — Change div color on hover
const colorBox = document.querySelector(".hover-color-box");

colorBox.addEventListener("mouseover", () => {
  colorBox.style.backgroundColor = "yellow";
});
colorBox.addEventListener("mouseout", () => {
  colorBox.style.backgroundColor = "red";
});

// --------------------------------------------------

// 8️⃣ CUSTOM CURSOR — Follow mouse movement
const customCursor = document.querySelector(".custom-cursor");

window.addEventListener("mousemove", (e) => {
  customCursor.style.top = `${e.y}px`;
  customCursor.style.left = `${e.x}px`;
});

// --------------------------------------------------

// 9️⃣ EVENT BUBBLING & CAPTURING DEMO
const parentDiv = document.querySelector(".parent-div");
const childDiv = document.querySelector(".child-div");
const grandChildDiv = document.querySelector(".grandchild-div");

parentDiv.addEventListener(
  "click",
  () => {
    console.log("Parent Div Clicked!");
  },
  true // Capturing phase
);

childDiv.addEventListener("click", () => {
  console.log("Child Div Clicked!");
});

grandChildDiv.addEventListener("click", () => {
  console.log("Grand Child Div Clicked!");
});

// --------------------------------------------------

// 🔟 EVENT DELEGATION — Toggle strike-through on list items
const fruitList = document.querySelector(".fruit-list");

fruitList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("remove");
  }
});
