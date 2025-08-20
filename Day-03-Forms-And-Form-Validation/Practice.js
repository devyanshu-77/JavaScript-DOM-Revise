const loginForm = document.querySelector("#loginForm");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const err = document.querySelector(".error");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const emailAns = emailRegex.test(email.value);
  const passwordAns = passwordRegex.test(password.value);
  if (!emailAns) {
    document.querySelector(".emailError").textContent = "Email is incorrect ";
  }
  if (!passwordAns) {
    document.querySelector(".passwordError").textContent =
      "Password is incorrect";
  }
});
