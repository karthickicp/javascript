const counter = document.querySelector("#counter");
const decreaseCount = () => {
  let currentCount = Number(counter.innerHTML) - 1;
  counter.innerHTML = currentCount;
  if (currentCount < 0) {
    counter.classList.add("decrement");
  }
  if (currentCount === 0) {
    counter.classList.remove("decrement", "increment");
  }
};
const increaseCount = () => {
  let currentCount = Number(counter.innerHTML) + 1;
  counter.innerHTML = currentCount;
  if (currentCount === 0) {
    counter.classList.remove("decrement", "increment");
  }
  if (currentCount > 0) {
    counter.classList.add("increment");
  }
};
const resetCount = () => {
  counter.innerHTML = 0;
  counter.classList.remove("decrement", "increment");
  // if (counter.classList.contains("decrement")) {
  //   counter.classList.remove = "decrement";
  // }
  // if (counter.classList.contains("increment")) {
  //   counter.classList.remove = "increment";
  // }
};
