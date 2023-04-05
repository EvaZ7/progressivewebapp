const express = require('express');
const axios = require('axios');
// const { default: fetchData } = require('../modules/api');
const router = express.Router();

router.get('/', (req, res) => {
    function fetchData() {
        // var category = "amazing";

        const url1 = `https://opensheet.elk.sh/1p7Wnace8KpaIFnATpBcil_KyJ4P8IC8vYIUO8NCfcKc/Quotes`;
        // const options = {
        //   headers: { "X-Api-Key": "/5N2hL8Fe0A2oo6WGAKRSA==46hArJjLsGo4zWLC" },
        // };
      
        return axios.get(url1).catch((err) => console.log('@@-- err', err))
      }
      fetchData()
      .then((data) => {
        // console.log(data.data)

        // data filteren
        const filter = data.data;
        let filterquote = data.data;

        // linkjes maken voor de auteur pagina's
        filter.forEach((filterItem, i) => {
          filter[i].author_link = filterItem.author.replaceAll(" ", "-");
        });
        req.session.authors = filter;

        // dagelijkse random quote
        function getRandomQuote() {
          return Math.floor(Math.random() * 12) + 1;
        }
        const dailyQuote = data.data[getRandomQuote()];

        res.render('main', {layout : 'index', dailyQuote, filter, filterquote})
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

// Create a route for our detail page
router.get('/a-z', (req, res) => {
    console.log("heyy")
    function fetchData() {
      const url1 = `https://opensheet.elk.sh/1p7Wnace8KpaIFnATpBcil_KyJ4P8IC8vYIUO8NCfcKc/Quotes`;
    
      return axios.get(url1).catch((err) => console.log('@@-- err', err))
    }

    fetchData()
      .then((data) => {
        // console.log(data.data)
        let filter = data.data;
        const dailyQuote = filter[0];
        let filterquote = data.data;
        
        filterquote.sort(function (a, b) {
          if (a.quote < b.quote) {
            return -1;
          }
          if (a.quote > b.quote) {
            return 1;
          }
          return 0;
        });

        filter.forEach((filterItem, i) => {
          filter[i].author_link = filterItem.author.replaceAll(" ", "-");
        });

        console.log(filter);
        req.session.authors = filter;
        
        res.render('main', {layout : 'index', dailyQuote, filter, filterquote})
        });

});

// router.get('*', (req, res) => {
//   res.render('notfound', {layout : 'index'})
// });

router.get('/offline', (req, res) => {
  res.render('offline', {layout : 'index'})
})

module.exports = router