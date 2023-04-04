# Quotes

![Frontpage](https://github.com/EvaZ7/Quotes/blob/4b05094b8fa3c4556e8e3799aaa9f918216d75d5/readmeimg/amazed.png)

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
- [Progress](https://github.com/EvaZ7/progressivewebapp#progress) What did I improve?
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

Na het gebruik van lighthouse kreeg ik eerst een aantal meldingen:

- Mijn HTML had geen "description" tag
- Mijn images hadden geen alt-tekst
- Links are not crawable

Deze heb ik gelijk opgelost door deze toe te voegen.
Verder heb ik ook een defer toegevoegd aan mijn JavaScript en deze in de head gezet van mijn HTML pagina.

**Verdere optimalisatie:**

1. Perceived load speed: how quickly a page can load and render all of its visual elements to the screen.

Ik wil dit graag oplossing door het minifying van mijn CSS aangezien dit toch heet meeste kost qua page speed.
Dit heb ik gedaan met minify, hiermee kan ik makkelijk mijn HTML, CSS en JavaScript bestanden omzetten naar geminifeerde bestanden zonder spaties etc.

## Client- server rendering

**In het kort:** Mijn applicatie is gemaakt met Node.js, dit zorgt ervoor dat ik mijn applicatie server-side kan maken met JavaScript. Dit werk voor mijn app als volgt.

1. Ten eerste heb ik alles omgebouwd met Node.js in mijn app.js.

- Dus ik heb een templating engine toegevoegd (handlebars) om mijn data vanuit mijn API in de HTML te laden.
- Ik heb met handlebars verschillende views aangemaakt voor mijn verschillende soorten data en partials gecreëerd zodat ik niet steeds opnieuw mijn header en footer hoef te schrijven met HTML.
- Ik heb heb alle niet dynamische onderdelen in een public/static map geplaatst deze wordt gebruikt, hieronder valt mijn "basis" JavaScript voor het manipuleren van elementen zoals buttons etc., mijn afbeeldingen, mijn CSS en mainfest.json. Deze map spreek ik ook weer aan in mijn app.js.

2. Router

Ik heb om al mijn code zo overzichtelijk mogelijk te maken alle get en post requests in een apart bestand gezet. Hierin kan ik per pagina data ophalen (functies uitvoeren), manipuleren en sturen naar de client op basis van de route. Dit is een vervanger van mijn hashed router. Ik render hierin dus mijn views vanuit mijn handlebars met de data die ik ook hierin meegeef door middel van variabelen. Dit wordt dan naar de client gestuurd. Dit gebruik ik onder andere ook verder voor mijn detail pagina met quotes en mijn a-z filter.

3. Service worker

Ik heb ook een service-worker geïmplementeerd, deze zorgt ervoor dat mijn website offline beschikbaar is en tevens ook sneller wordt geladen doordat ik delen van mijn webapplicatie opsla in de cache.
Deze service worker registreer ik op basis van het laden van mijn pagina in mijn statische JavaScript file. In mijn service worker file zet ik mijn bestanden die ik offline wil hebben in de cache en haal ik ze op.

## Activity diagram

Om te laten zien hoe mijn service-worker werkt, heb ik een activity-diagram gemaakt die dit ook nog eens visueel uitlegt.

![Frontpage](https://github.com/EvaZ7/Quotes/blob/4b05094b8fa3c4556e8e3799aaa9f918216d75d5/readmeimg/amazed.png)

## Sources

- https://www.freecodecamp.org/news/how-to-sort-alphabetically-in-javascript/
- https://api-ninjas.com/
- https://opensheet.elk.sh/1p7Wnace8KpaIFnATpBcil_KyJ4P8IC8vYIUO8NCfcKc/Quotes
- Copyright (c) 2021 Communication and Multimedia Design, Amsterdam University of Applied Science
