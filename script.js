// Pour cet exercice, on reste sur un format assez libre. Je te propose d’utiliser les paramètres de chemin d’une API de ton choix dans un projet JavaScript. Je te donne quelques exemples, si jamais tu n’es pas inspiré·e (si tu trouves une API toi-même, c’est encore mieux).

//  Dummy json
// '<https://dummyjson.com/posts>' // tous les posts
// '<https://dummyjson.com/posts/1>' // le premier
// '<https://dummyjson.com/posts/2>' // le deuxième, etc...

//  CodePassport (offers)
// '<https://www.codepassport.dev/api/offers>' // même principe
// '<https://www.codepassport.dev/api/offers/1>'
// '<https://www.codepassport.dev/api/offers/2>'

// L’idée, c'est de créer une page web qui affiche les infos d’une donnée en particulier (un post ou une offre par exemple), plutôt qu’afficher la liste entière.

const affichageCapital = document.querySelector("#capital");
const languageCapital = document.querySelector("#langage");
const contientCapital = document.querySelector("#continent");
const inputText = document.querySelector("#inputCapital");
const buttonValider = document.querySelector("#validationButton");

buttonValider.addEventListener("click", () => {
  myFunction(inputText.value);
});

inputText.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    buttonValider.click();
  }
});

const log = document.getElementById("log");
const input = document.querySelector("input");

async function myFunction(capital) {
  const promise = await fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      `https://restcountries.com/v3.1/capital/${capital}`
    )}`
  );

  const data = await promise.json();
  const pageContent = JSON.parse(data.contents);

  affichageCapital.innerHTML = `Capitale : ${pageContent[0].capital} ${pageContent[0].flag}`;
  contientCapital.innerHTML = `Continent : ${pageContent[0].continents}`;
  languageCapital.innerHTML = `Langage : ${
    Object.values(pageContent[0].languages)[0]
  }`;
}
