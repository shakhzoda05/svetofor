let elCard1 = document.querySelector(".card1");
let elCard2 = document.querySelector(".card2");
let elCard3 = document.querySelector(".card3");

function changeColor() {
  setTimeout(() => {
    elCard1.classList.add("red");
    elCard2.classList.remove("yellow");
    elCard3.classList.remove("green");
  }, 0);
  setTimeout(() => {
    elCard2.classList.add("yellow");
    elCard1.classList.add("red");
    elCard3.classList.remove("green");
  }, 2000);
  setTimeout(() => {
    elCard1.classList.remove("red");
    elCard2.classList.remove("yellow");
    elCard3.classList.add("green");
  }, 4000);
}
changeColor();
setInterval(() => {
  console.log("Interval start");
  changeColor();
}, 6000);
