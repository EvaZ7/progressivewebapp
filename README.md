# Quotes

![Frontpage](https://github.com/EvaZ7/Quotes/blob/4b05094b8fa3c4556e8e3799aaa9f918216d75d5/readmeimg/amazed.png)
[✨AMAZED✨](https://amazed.cyclic.app/)

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![license: mit](https://img.shields.io/badge/license-MIT-green?style=flat-square)](https://github.com/EvaZ7/Blok-tech/blob/main/LICENSE)
[![stars](https://img.shields.io/badge/stars-0-9cf?style=flat-square)](https://github.com/EvaZ7/Blok-tech/stargazers)

With this web-app, you have access to the most amazing quotes. It provides a generator for your daily inspirational quote, several quotes from some famous authors and a list of quotes if you haven't had enough of quotes yet.

## Contents 📑

- [Use it?](https://github.com/EvaZ7/progressivewebapp#use-it) What is it all about and how does it work?
- [Install it](https://github.com/EvaZ7/progressivewebapp#install-it) How do I start? How do I use it?
- [The Data](https://github.com/EvaZ7/progressivewebapp#the-external-data-source) Something with ninjas right?
- [Wishlist](https://github.com/EvaZ7/progressivewebapp#wishlist)...
- [Author](https://github.com/EvaZ7/progressivewebapp#author) This project is made by...
- [Help](https://github.com/EvaZ7/progressivewebapp#help) Where do I find help?
- [Preformance](https://github.com/EvaZ7/progressivewebapp#preformance) What did I improve?
- [Load responsiveness](https://github.com/EvaZ7/progressivewebapp#load-responsiveness) Improve interaction time.
- [Perceived load speed](https://github.com/EvaZ7/progressivewebapp#perceived-load-speed) I made it faster.
- [Client server rendering](https://github.com/EvaZ7/progressivewebapp#client-server-rendering) Going server-side.
- [Activity diagram](https://github.com/EvaZ7/progressivewebapp#activity-diagram) Implementing a servive-worker.
- [Sources](https://github.com/EvaZ7/progressivewebapp#sources) APA list with used sources.

## Use it

You can use this project to generate fresh quotes for your users, to spice up their day or to help them feel AMAZED again by thing's life has to offer. But you can also use it to sort and fetch data from an API, it has different section that each provide a different way of displaying the data variating from very controlled to putting it all in a list. You can use it as a homepage setup for a more detailed project, or just use the daily randomizer as a building block for your application.

## Install it

*UPDATE*
My API crashed A LOT for no reason, so I decided to switch to a different API. This one is static, which means my daily quote doesn't quite work anymore. Because the data isn't dynamic anymore.
*UPDATE*

This application is rendered server-side. Because of the API you will need to have access to it first. In order to do so:
1. You have to create and account on [API-Ninjas](https://api-ninjas.com/)
2. Then you will need the API link, which is: ~~[this link](https://api.api-ninjas.com/v1/quotes?category=amazing)~~ [this link](https://opensheet.elk.sh/1p7Wnace8KpaIFnATpBcil_KyJ4P8IC8vYIUO8NCfcKc/Quotes)

~~3. Add your personal API-key to the link, the key can be found on your personal API-Ninjas account.~~
3. Read the documentation op the API [here](https://github.com/benborgers/opensheet#readme)

**to continue:**

1. Clone my github repository

```sh
git clone https://github.com/EvaZ7/progressivewebapp.git
```

2. Install the npm packages

```sh
npm install
```

3. Start the server locally

```sh
npm run start
```

## The external data source

The data source gives you tons and tons of different quotes, the API of API-Ninjas has a built-in randomizer that gives you up till 10 different quotes every time you refresh it. It also gives you an author name and a category within the string. You can change the category of the API very easily by just changing it within the link. There are tons of different categories to choose from!

## Wishlist

- Design something with more "SPICE"🌶️
- Work on splitting it more up into modules
- Making more pages

## Author

Credits to me, Eva Zaadnoordijk (500847567) 2023 for Communication and Multimedia Design at the Amsterdam University of Applied Sciences.

## Help

Are some parts still a bit confusing? Feel free to contact me at:
_eva.zaadnoordijk.zaadnoordijk@hva.nl_

----

## Preformance

After using lighthouse, I first got several notifications:

- My HTML did not have a "description" tag in the head
_ My html did not have a "theme color" tag in the head
- My html did not have an "icon" tag in the head
- My html did not have a <!DOCTYPE html>...
- My images had no alt text
- Links are not crawable

I fixed these right away by adding them to change.

![analysis before improvements](https://github.com/EvaZ7/progressivewebapp/blob/0710bf756b9bfc7166d193afaf7aeb826c7ff1b2/readmeimg/activitydiagram.png)
![analysis after improvements](https://github.com/EvaZ7/progressivewebapp/blob/0710bf756b9bfc7166d193afaf7aeb826c7ff1b2/readmeimg/activitydiagram.png)

### Load responsiveness

To reduce the interaction time (interaction with JavaScript) after loading the page. I added a "defer" to my JavaScript and put it in the head of my HTML page. This causes the page to render right away and the browser is not going to wait for the JavaScript to finish rendering first.

### Perceived load speed

**Minify**

I would like to improve this by minifying my static files as this is what costs the most in terms of page speed anyway. I did this with minify, with this I can easily convert my HTML, CSS and JavaScript files to minified files without spaces etc. and often all the code in one line. This makes the code faster to read.

**Cache control**

I have also implemented cache-control to ensure that my files stay in the cache longer and do not have to reload each time. This makes my application faster because there is less to no loading time for the cached files.

**The results**

To test if my page actually is faster, I used lighthouse to run an analysis on this, the results showed that my page did in fact improve it's speed.

![page speed slow](https://github.com/EvaZ7/progressivewebapp/blob/0710bf756b9bfc7166d193afaf7aeb826c7ff1b2/readmeimg/activitydiagram.png)

![page speed fast](https://github.com/EvaZ7/progressivewebapp/blob/0710bf756b9bfc7166d193afaf7aeb826c7ff1b2/readmeimg/activitydiagram.png)


## Client server rendering

**Summary** My application is made with Node.js, this allows me to make my application server-side with JavaScript. This makes my app work like this now:

1. First, I converted everything with Node.js in my app.js.

- So I added a templating engine (handlebars) to load my data from my API into the HTML.
- I used handlebars to create different views for my different types of data and created partials so I don't have to keep writing my header and footer with HTML.
- I have placed all the non dynamic parts in a public/static folder this is used, this includes my "basic" JavaScript for manipulating elements like buttons etc, my images, my CSS and mainfest.json. I also address this folder again in my app.js.

2. Router

To make all my code as clear as possible, I have put all get and post requests in a separate file. In this I can retrieve data per page (execute functions), manipulate it and send it to the client based on the route. This is a replacement for my hashed router. I render my views from my handlebars with the data that I also give in this file by means of variables. This is then sent to the client. I also use this for my detail page with quotes and my a-z filter.

3. Service worker

I also implemented a service worker, it makes my website available when offline and also loads faster by caching parts of my web application.
I register this service worker based on the loading of my page in my static JavaScript file. In my service worker file, I cache and get and serve my files that I want offline.

## Activity diagram

To show how my service worker works, I created an activity diagram that visually explains this as well.

![Activity diagram](https://github.com/EvaZ7/progressivewebapp/blob/0710bf756b9bfc7166d193afaf7aeb826c7ff1b2/readmeimg/activitydiagram.png)

## Sources

- https://www.freecodecamp.org/news/how-to-sort-alphabetically-in-javascript/
- https://api-ninjas.com/
- https://opensheet.elk.sh/1p7Wnace8KpaIFnATpBcil_KyJ4P8IC8vYIUO8NCfcKc/Quotes
- Copyright (c) 2021 Communication and Multimedia Design, Amsterdam University of Applied Science
