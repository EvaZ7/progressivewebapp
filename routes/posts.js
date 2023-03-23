const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', (req, res) => {
    function fetchData() {
        var category = "amazing";

        const url1 = `https://api.api-ninjas.com/v1/quotes?category=${category}&limit=10`;
        const options = {
          headers: { "X-Api-Key": "/5N2hL8Fe0A2oo6WGAKRSA==46hArJjLsGo4zWLC" },
        };
      
        return axios.get(url1, options).catch((err) => console.log('@@-- err', err))
      }
      fetchData()
      .then((data) => {
        // console.log(data.data)
        const filter = data.data;
        console.log('@@-- filter', filter)
        
        const dailyQuote = data.data[0];
        const authorQuote = data.data[0];
        res.render('main', {layout : 'index', dailyQuote, authorQuote, filter})
        });
        // res.render("index", { dailyquote })
})

module.exports = router