import "./scss/style.scss";
import { getCoins } from "./src/getCoins";

const form = document.querySelector("header form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getCoinData();
  e.target.reset();
});

const getCoinData = () => {
  const input = document.querySelector("header form input").value;
  if (!input.trim()) {
    alert("Input must be entered");
  } else {
    getCoins(input);
  }
};

