import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const nameGit = document.querySelector(".name-js");
const demo = document.querySelector(".demo-js");
const src = document.querySelector(".src-js");
const descrip = document.querySelector(".description-js");

fetch("https://api.github.com/users/kilerynka/repos")
  .then((response) => response.json())
  .then((resp) => {
    const repository = resp.slice(5, 6);
    for (let repo of repository) {
      const { name, html_url, description } = repo;
      nameGit.innerHTML = name;
      src.setAttribute("href", html_url);
      descrip.innerHTML = description;
    }
  });
