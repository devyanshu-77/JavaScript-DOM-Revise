const body = document.querySelector("body");
const toggleButton = document.querySelector("#theme-toggle");
const heading = document.querySelector("#heading");

function setTheme() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  }
}

if (localStorage.getItem("theme")) {
  document.body.classList.add(localStorage.getItem("theme"));
} else {
  setTheme();
}

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", function () {
    if (!localStorage.getItem("theme")) {
      setTheme();
    }
  });

toggleButton.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("light");
    localStorage.setItem("theme", "light");
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
});
