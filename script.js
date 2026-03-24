"use strict";

// Navbar sections

const links = document.querySelectorAll("#navbar .links a");
const pages = document.querySelectorAll(".page");

links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const pageId = link.dataset.page;

    pages.forEach(page => page.classList.remove("active"));
    document.getElementById(pageId).classList.add("active");
  });
});

