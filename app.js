// const registerServiceWorker = async () => {
//   if ("serviceWorker" in navigator) {
//     try {
//       const registration = await navigator.serviceWorker.register("/sw.js", {
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

const express = require('express')
const {engine} = require('express-handlebars');
//get router file
const router = require('./routes/posts');
const session = require('express-session');

const app = express()
const port = 3000

const sessionLength = (1000 * 60 * 60 * 24) * 7; // 1 day

app.use(session({
  name: 'app-quotes',
  secret: 'mysupersecretkeylol',
  saveUninitialized: true,
  cookie: { maxAge: sessionLength },
  resave: false
}))

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use("/static", express.static("static"));

// use this file for /posts routes
app.use('/', router);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

// …

// registerServiceWorker();

