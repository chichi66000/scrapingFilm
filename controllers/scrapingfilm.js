// install puppeteer for scraping
// const puppeteer = require('puppeteer');

// exports.scrapingfilm = async (req, res) => {
//     let date = req.params.dateChoosen
//     // console.log("date " + date);

// // function to scraping the site of movies

//     const browser = await puppeteer.launch({ 
//         headless: true,
//         args: ['--no-sandbox', '--disable-setuid-sandbox']
//     });
//     const page = await browser.newPage();
//     // await page.goto(`https://www.imdb.com/movies-coming-soon/${date}`);
//     await page.goto(`https://www.cinefil.com/sorties-cinema-du-mois/mois-${date}`)
//     const movies = await page.evaluate( () => {
//         let movies = [];
//         // select the elements in the list of movies in this website => we will choose the class, span ... follow in this site
//         // let elements = document.querySelectorAll('div.list_item');
//         // for (element of elements) {
//         //     // take the infos of stars 
//         //     let stars = [];
//         //     for ( let i = 0; i < element.querySelectorAll('td.overview-top>div:nth-child(6) a').length; i++) {
//         //         stars.push(element.querySelectorAll('td.overview-top>div:nth-child(6) a')[i]?.textContent);
//         //     };

//         //     // info of genres of movies in the span 
//         //     let genres = [];
//         //     for ( let i = 0 ; i< element.querySelectorAll('p.cert-runtime-genre span').length; i++) {
//         //         genres.push(element.querySelectorAll('p.cert-runtime-genre span:not(.ghost)')[i]?.textContent);
//         //     }
//         //     // push all the info in list of movies
//         //     movies.push({
//         //         img: element.querySelector('img')?.src,
//         //         title: element.querySelector('td.overview-top a')?.textContent.trim(),
//         //         description : element.querySelector('.outline')?.textContent.trim(),
//         //         time: element.querySelector('time')?.textContent.trim(),
//         //         directeur: element.querySelector('div.txt-block a')?.textContent,
//         //         stars: stars,
//         //         genres: genres,
//         //     });

//         // }

//         let elements = document.querySelectorAll('.nouvel-interface2')
//         console.log(elements);
//         console.log("hii");
//         for(element of elements) {
//             let img = element.querySelector('div.img-film2 a')
//             console.log(img);
//             movies.push(img);
//         }
//         return movies
//     })
//     res.send({movies}) 

//     // console.log(movies);
//     await browser.close()

// }

// const cheerio = require('cheerio')
const axios = require('axios')

// exports.scrapingfilm = async(req, res, next) => {
//     let date = req.params.dateChoosen
//     // console.log(date);
//     let url = `https://www.themoviedb.org/movie/upcoming`;
//     let list = [];
//     // console.log(url);
//     try {
//         let response = await axios.get(url
            
//         )
//         // console.log(response.data);
 
//         const $ = cheerio.load(response.data)
//         let films = $(".style_1")
//         // console.log(films)
//         films.each(function () {
//             let title = $(this).find(".content h2 a").text()
//             let affiche = $(this).find(".image img").attr('src');
//             let dateSortie = $(this).find(".content p").text();
//             let filmId = $(this).find(".options").attr('data-id');
//             let score = $(this).find(".content .user_score_chart").attr('data-percent');
//             list.push({filmId, title, affiche, dateSortie, score});
//         })
//         res.status(200).send(list)
        
//     }
//     catch (err) {
//         console.error(err);
//     }
// }

const date = require('date-and-time');

exports.upcoming = async(req, res, next) => {
    let page = req.params.page?? "page=1"
    let now = new Date();
    let release_date_gauche = date.format(now, 'YYYY-MM-DD');
    let nextMonth = date.addMonths(now, 1);
    let release_date_droite = date.format(nextMonth, 'YYYY-MM-DD')

    console.log(release_date_gauche, release_date_droite);
    // upcoming films
    
    let url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&region=FR&release_date.gte=${release_date_gauche}&release_date.lte=${release_date_droite}&${page}`;
    console.log(url);

    try {
        let response = await axios.get(url)
        let films = response.data.results;
        // res.send(films);
        let results = []
        
        for (let i = 0; i<films.length; i++) {
            id = films[i].id;
            title = films[i].title;
            overview = films[i].overview;
            release_date= films[i].release_date;
            vote_average= films[i].vote_average;
            poster= films[i].poster_path;
            adult = films[i].adult;
            results.push({id, title, overview, poster, release_date, vote_average, adult})
        }
            res.send(results);
  
    }
    catch (err) {
        console.error(err);
    }
}

exports.nowplaying = async(req, res) => {
    let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=fr-FR`;
    try {
        let response = await axios.get(url)
        let films = response.data.results;
        // res.send(films);
        let results = []
        
        for (let i = 0; i<films.length; i++) {
            id = films[i].id;
            title = films[i].title;
            overview = films[i].overview;
            release_date= films[i].release_date;
            vote_average= films[i].vote_average;
            poster= films[i].poster_path;
            adult = films[i].adult;
            results.push({id, title, overview, poster, release_date, vote_average, adult})
        }
            res.send(results);
  
    }
    catch (err) {
        console.error(err);
    }
}

exports.toprated = async(req, res) => {
    let page = req.params.page?? "page=1"
    let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=fr-FR&${page}`;
    console.log("url: " + url);

    try {
        let response = await axios.get(url)
        let films = response.data.results;
        // res.send(films);
        let results = []
        
        for (let i = 0; i<films.length; i++) {
            id = films[i].id;
            title = films[i].title;
            overview = films[i].overview;
            release_date= films[i].release_date;
            vote_average= films[i].vote_average;
            poster= films[i].poster_path;
            adult = films[i].adult;
            results.push({id, title, overview, poster, release_date, vote_average, adult})
        }
            res.send(results);
  
    }
    catch (err) {
        console.error(err);
    }

}