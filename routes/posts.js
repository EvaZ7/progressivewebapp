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
        let filter = data.data;
        // console.log('@@-- filter', filter)

        filter.forEach((filterItem, i) => {
          filter[i].author_link = filterItem.author.replaceAll(" ", "-");
        });

        console.log(filter);
        req.session.authors = filter;
        
        const dailyQuote = data.data[0];
        const authorQuote = data.data[0];
        res.render('main', {layout : 'index', dailyQuote, authorQuote, filter})
        });
        // res.render("index", { dailyquote })
})

// Create a route for our detail page
router.get('/detail/:author_link', (req, res) => {

    const requestedAuthor = req.params.author_link
    let requestedAuthorData = {};

    const fetchedAuthors = req.session.authors;
    console.log(fetchedAuthors);

    //als je opnieuw gaat fetchen krijg ik andere auteurs dus terug naar home
    if (!fetchedAuthors) {
      res.redirect('/');
      return;
    }

    //data bij author zoeken en in let requestedAuthorData = {}; zetten
    fetchedAuthors.forEach((filterItem, i) => {
      const authorLink = filterItem.author.replaceAll(" ", "-");
      if (requestedAuthor == authorLink) {
        console.log('match!');
        requestedAuthorData = filterItem;
      }
    });

    
    console.log(requestedAuthorData);
    
    //requestedAuthorData wordt author
    res.render('detail', {
      layout : 'index', author: requestedAuthorData
    });
      
});

module.exports = router