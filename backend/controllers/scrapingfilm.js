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

const cheerio = require('cheerio')
const axios = require('axios')

exports.scrapingfilm = async(req, res, next) => {
    let date = req.params.dateChoosen
    // console.log(date);
    let url = `https://www.themoviedb.org/movie/upcoming`;
    let list = [];
    // console.log(url);
    try {
        let response = await axios.get(url
            
        )
        // console.log(response.data);
 
        const $ = cheerio.load(response.data)
        let films = $(".style_1")
        // console.log(films)
        films.each(function () {
            let title = $(this).find(".content h2 a").text()
            let affiche = $(this).find(".image img").attr('src');
            let dateSortie = $(this).find(".content p").text();
            let filmId = $(this).find(".options").attr('data-id');
            let score = $(this).find(".content .user_score_chart").attr('data-percent');

            console.log('score ', score);
            list.push({filmId, title, affiche, dateSortie, score});
        })
        res.status(200).send(list)
        
    }
    catch (err) {
        console.error(err);
    }
}

exports.filmsSelect = async(req, res, next) => {
    let date = req.params.dateChoosen
    let url = `https://www.themoviedb.org/movie/upcoming`;
    // console.log(date);
    try {
        let response = await axios.post(url,
            // {
            // 'release_date.gte': date + '-01',
            // 'release_date.lte': date + '-31'
            // }
            
        )
        // console.log(response.data);
 
        const $ = cheerio.load(response.data)
        let films = $(".style_1")
        // console.log(films)
        films.each(function () {
            let title = $(this).find(".content h2 a").text()
            let affiche = $(this).find(".image img").attr('src');
            let dateSortie = $(this).find(".content p").text();
            let filmId = $(this).find(".options").attr('data-id');
            let score = $(this).find(".content .user_score_chart").attr('data-percent');

            // console.log('score ', score);
            list.push({filmId, title, affiche, dateSortie, score});
        })
        console.log(list);
        
    }
    catch (err) {
        console.error(err);
    }
}