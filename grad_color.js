let box2 = document.querySelector(".box2");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let body = document.querySelector("body");

let btn1color = btn1.innerHTML;
let btn2color = btn2.innerHTML;

const grandcolor = () => {
  let str = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + str[Math.floor(Math.random() * 16)];
  }
  return color;
};

const chaCol1 = () => {
  let color = grandcolor();
  btn1.innerHTML = color;
  btn1.style.backgroundImage = ` linear-gradient(to right top ,  ${color} ,${btn1color})`;
  btn2color = color;
  body.style.backgroundImage = ` linear-gradient(to right top ,  ${color} ,${btn1color})`;
  box2.innerHTML = `background-image: linear-gradient(to right top ,  ${color} ,${btn1color});`;
};

const chaCol2 = () => {
  let color = grandcolor();
  btn2.innerHTML = color;
  btn2.style.backgroundImage = ` linear-gradient(to right  ,${btn2color} ,${color})`;
  btn1color = color;
  body.style.backgroundImage = ` linear-gradient(to right  ,${btn2color} ,${color})`;
  box2.innerHTML = `background-image: linear-gradient(to right , ${btn2color} ,${color});`;
};

btn1.addEventListener("click", chaCol1);
btn2.addEventListener("click", chaCol2);

box2.addEventListener("click", () => {
  navigator.clipboard.writeText(box2.innerHTML);
  alert("background color code is copy");
});
