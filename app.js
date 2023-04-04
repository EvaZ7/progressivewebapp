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
  resave: true
}))

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use("/static", express.static("static"));
app.use("/", express.static(__dirname + "/"));

// use this file for /posts routes
app.use('/', router);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

// …

// registerServiceWorker();

