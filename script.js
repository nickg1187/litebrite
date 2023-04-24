"use strict";

const destination = document.querySelector(".grid");
const redButton = document.querySelector(".red");
const greenButton = document.querySelector(".green");
const blueButton = document.querySelector(".blue");

let selectedcolor = "";

for (let i = 0; i < 100; i++) {
  const newLi = document.createElement("li");
  newLi.setAttribute("class", "cell");
  destination.append(newLi);
}

//move selector after the loop so they can be selected after being added to the page!
const allOfTheListItems = document.querySelectorAll(".cell");
console.dir(allOfTheListItems);

redButton.addEventListener("click", () => {
  selectedcolor = "red";
  console.log(selectedcolor);
});

greenButton.addEventListener("click", () => {
  selectedcolor = "green";
  console.log(selectedcolor);
});

blueButton.addEventListener("click", () => {
  selectedcolor = "blue";
  console.log(selectedcolor);
});

// nodeList is treated like an array
// we can loop through nodeList with an array method

allOfTheListItems.forEach((listItem) => {
  listItem.addEventListener("click", () => {
    listItem.style.backgroundColor = selectedcolor;
  });
});

// extended challenges
