// Select essential elements
const progressBar = document.querySelector("#progress");
const progressText = document.querySelector("#progress-text");
const startBtn = document.querySelector("#start-btn");

// Logic will be added here later
startBtn.addEventListener("click", () => {
  startBtn.disabled = true;
  let count = 0;
  const interVal = setInterval(() => {
    if(count <= 99) {
      count+= 1;
      progressBar.style.width = `${count}%`;
      progressText.textContent = `${count}%`
    } else {
      startBtn.disabled = false;
      clearInterval(interVal)
    }
  }, 30);
})