const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const text = document.querySelector("h3");

const changetext = () => {
  text.textContent = `linear-gradrient(to right,(${color1.value}, ${color2.value}))`;
};

const changeBkg = () => {
  document.body.style.background = `linear-gradient(to right,${color1.value}, ${color2.value})`;
  changetext();
};

changetext();
color1.addEventListener("input", changeBkg);
color2.addEventListener("input", changeBkg);
