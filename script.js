"use strict";

// Characters Page

let ch_url = "https://potterapi-fedeperin.vercel.app/en/characters";
let cards = document.querySelectorAll(".cards");

fetch(ch_url)
  .then((result) => result.json())
  .then((data) => {
    console.log(data);

    cards.forEach((card, index) => {
      if (data[index]) {
        card.querySelector(".image").src = data[index].image || "";
        card.querySelector(".fname").textContent = "Full Name: " + data[index].fullName || "Unknown";
        card.querySelector(".house").textContent = "Hogwarts House: " + data[index].hogwartsHouse || "Unknown";
        card.querySelector(".birthday").textContent = "Birthdate: " + data[index].birthdate || "Unknown";
      }
    });
  })
  .catch((error) => console.log(error));