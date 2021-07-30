
const puppeteer = require('puppeteer');
const month = '09';
const year = '2021';

(async () => {
    const browser = await puppeteer.launch({ headless: true});
    const page = await browser.newPage();
    await page.goto(`https://www.imdb.com/movies-coming-soon/${year}-${month}`);
    const movies = await page.evaluate( () => {
        let movies = [];
        let elements = document.querySelectorAll('div.list_item');
        for (element of elements) {
            // take the infos of stars
            let stars = [];

            for ( let i = 0; i < element.querySelectorAll('td.overview-top>div:nth-child(6) a').length; i++) {
                stars.push(element.querySelectorAll('td.overview-top>div:nth-child(6) a')[i]?.textContent);
                
            };

            // info of type of movies in the span impair
            let genres = [];
            for ( let i = 0 ; i< element.querySelectorAll('p.cert-runtime-genre span').length; i++) {
                genres.push(element.querySelectorAll('p.cert-runtime-genre span')[i]?.textContent);
            }

            movies.push({
                img: element.querySelector('img')?.src,
                title: element.querySelector('td.overview-top a')?.textContent.trim(),
                description : element.querySelector('.outline')?.textContent.trim(),
                time: element.querySelector('time')?.textContent.trim(),
                directeur: element.querySelector('div.txt-block a')?.textContent,
                stars: stars,
                genres: genres,
            });

        }
        return movies
    })
    console.log(movies);
    await browser.close()
})();