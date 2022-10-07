const colorCode = document.querySelector("#colorCode");
const body = document.querySelector("body");
console.log(colorCode);
const generateColorCode = () => {
  const newColor = Math.floor(Math.random() * 16777215).toString(16);
  colorCode.innerHTML = `#${newColor}`;
  body.style.background = `#${newColor}`;
};
