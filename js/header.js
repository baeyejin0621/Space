"use strict";

const header = document.querySelector("header");
const gnb = document.querySelector("#gnb");

gnb.addEventListener("mouseover", () => {
  header.style.height = "281px";
});

gnb.addEventListener("mouseout", () => {
  header.style.height = "80px";
});
