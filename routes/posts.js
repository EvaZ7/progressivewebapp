const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', (req, res) => {
    function fetchData() {
        var category = "amazing";

        const url1 = `https://api.api-ninjas.com/v1/quotes?category=${category}&limit=10`;
        const options = {
          headers: { "X-Api-Key": "mr1axNSXq9DjWUuEBQUHGA==YK6lI63UGnsVpLyt" },
        };
      
        return axios.get(url1, options).catch((err) => console.log('@@-- err', err))
        
        
        // (url1, options).then((response) => {
        //   if (response.status >= 200 && response.status <= 299) {
        //     return response.json();
        //   } else {
        //     throw Error(response.statusText);
        //   }
        // });
      }
      fetchData()
      .then((data) => {
        // console.log(data.data)
        const filter = data.data;
        console.log('@@-- filter', filter)
        // filter.forEach((quote) => {
        //     console.log(quote.quote);
        //     const oneQuote = quote.quote;
        // });
        // console.log('@@-- dailyQuote', dailyQuote)
        // res.render('main', {layout : 'index', dailyQuote})
        const dailyQuote = data.data[0];
        res.render('main', {layout : 'index', dailyQuote, filter})
        });
        // res.render("index", { dailyquote })
})

module.exports = router