// 1️⃣ setTimeout - runs the function once after the specified delay

setTimeout(() => {
  console.log("Hello");
}, 1000);

// 2️⃣ setInterval - runs the function repeatedly at the specified interval

setInterval(() => {
  console.log("Hello");
}, 1000);

// 3️⃣ clearTimeout - cancels a scheduled setTimeout using its reference

const timeOut = setTimeout(() => {
  console.log("This won't run");
}, 1000);

clearTimeout(timeOut);

// 4️⃣ clearInterval - stops a repeating setInterval using its reference

let counter = 10;

const interVal = setInterval(() => {
  if (counter >= 1) {
    console.log(`Counter - ${counter}`);
    counter--;
  } else {
    clearInterval(interVal);
  }
}, 1000);


