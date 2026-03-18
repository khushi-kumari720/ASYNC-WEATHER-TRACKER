const API_KEY = "0f957dc1df8afe17f385f698d92021ac";

let cityInput = document.querySelector("#cityInput");
let form = document.querySelector("form");
let weather = document.querySelector("#fetchData");
let searchedCities = document.querySelector(".searchedCities");
let consoleOutput = document.querySelector("#consoleOutput");

function log(message, type) {
    console.log(message);

    let entry = document.createElement("div");
    entry.classList.add("log", type || "sync");

    let dot = document.createElement("div");
    dot.classList.add("log-dot");

    let text = document.createElement("span");
    text.textContent = message;

    entry.appendChild(dot);

