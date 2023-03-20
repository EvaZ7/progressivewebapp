import fetch from 'node-fetch';
import express from 'express';
import { engine } from 'express-handlebars';

const app = express()
const port = 3000

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use("/static", express.static("static"));

app.get('/', (req, res) => {
function fetchData() {
    var category = "amazing";
    const url1 = `https://api.api-ninjas.com/v1/quotes?category=${category}&limit=10`;
    const options = {
      headers: { "X-Api-Key": "mr1axNSXq9DjWUuEBQUHGA==YK6lI63UGnsVpLyt" },
    };
  
    return fetch(url1, options).then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    });
  }
  // fetchData()
  // .then((data) => {
  //   console.log(data)
  //   const dailyquote = data[0].quote
  //   // res.render("index", { dailyquote })
  //   res.render('main', {layout : 'index', dailyquote})
  //   });
    res.render('main', {layout : 'index'})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
