const userName = document.querySelector(".name");
const form = document.querySelector("form");
const hide = document.querySelector(".hide");

// 1. Reading value from input, textarea, select, Prevent default submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (userName.value.length <= 2) {
    hide.style.display = "initial";
  } else {
    hide.style.display = "none";
  }
});
