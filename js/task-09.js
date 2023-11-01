function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector(".change-color");
const textColor = document.querySelector(".color");
const onButtonClick = () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  textColor.textContent = randomColor;
  
}
button.addEventListener("click", onButtonClick);