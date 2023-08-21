"use strict";

//mobile navbar

let hambuger = document.querySelector(".hamburger__bars i");
let navbar = document.querySelector(".navbar");
let backdrop = document.querySelector(".backdrop");

hambuger.addEventListener("click", () => {
  hambuger.classList.toggle("fa-x");
  navbar.classList.toggle("active");
  if (backdrop.style.display == "block") {
    backdrop.style.display = "none";
  } else {
    backdrop.style.display = "block";
  }
});

//about page accordion menu

document.addEventListener("DOMContentLoaded", function () {
  let accordions = document.querySelectorAll(".accordion");

  // Initialize accordion heights
  accordions.forEach((accordion) => {
    accordion.style.overflow = "92px";
  });

  accordions.forEach((accordion) => {
    accordion.addEventListener("click", (e) => {
      e.stopPropagation();
      const currentHeight = accordion.clientHeight;
      if (currentHeight === 92) {
        accordion.style.height = "max-content";
      } else {
        accordion.style.height = "92px";
      }
    });
  });
});
