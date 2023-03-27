// import { onRouteChanged } from "../modules/router.js";
// import fetchData from "../modules/api.js";
// import {
//   changeDaily,
//   renderAuthors,
//   authorQuote,
//   standardAuthorquote,
//   renderQuotes,
// } from "../modules/render.js";

// const registerServiceWorker = async () => {
//   if ("serviceWorker" in navigator) {
//     try {
//       const registration = await navigator.serviceWorkerContainer.register("../sw.js", {
//         scope: "/",
//       });
//       if (registration.installing) {
//         console.log("Service worker installing");
//       } else if (registration.waiting) {
//         console.log("Service worker installed");
//       } else if (registration.active) {
//         console.log("Service worker active");
//       }
//     } catch (error) {
//       console.error(`Registration failed with ${error}`);
//     }
//   }
// };

// // …

// registerServiceWorker();

// variables
const refreshButton = document.querySelector("section:first-of-type button");
const deNav = document.querySelector("nav");
const menuKnop = document.querySelector("header nav>a");
// const allQuotes = document.querySelectorAll("li > q");

// // naar module brengen
// const loadingdaily = document.querySelector("section:first-of-type q");

// loadingdaily.textContent = "Do you like my loading animation? I made it myself";
// authorQuote.textContent = "Loading";

// fetchData()
//   .then((data) => {
//     changeDaily(data);
//     renderAuthors(data);
//     standardAuthorquote(data);
//     renderQuotes(data);

//     window.addEventListener("hashchange", (e) => {
//       onRouteChanged(data);
//     });
//   })
//   .catch((error) => {
//     // Handle the error
//     console.log(error);
//     loadingdaily.textContent =
//       "This should be working... but something's gone wrong";
//     refreshButton.src = "images/warning.png";
//     authorQuote.textContent = "Quote not found...";
//   });
// finally(() =>{
// hier de loader uitzetten?
// loadingdaily.textContent = "";
// authorQuote.textContent = "";
// });

// eventlisteners
menuKnop.addEventListener(
  "click",
  function () {
    deNav.classList.toggle("open");
  },
  false
);

refreshButton.addEventListener(
  "click",
  function () {
    location.reload();
  },
  false
);
