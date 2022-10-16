const axios = require('axios').default;
let PAGE = 1;

const refs = {
    ul: document.querySelector('.js-news-render'),
    previousBtn: document.querySelector('.previous-btn'),
    nextBtn: document.querySelector('.next-btn'),
};

refs.previousBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (PAGE >=2) {
        PAGE -= 1;
        getApiNews ()
        clearMarkup()
    }
});

refs.nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    PAGE += 1;
    getApiNews ()
    clearMarkup()
});

async function getApiNews () {
    
    const options = {
        API_KEY: '090dd760c7d8494cbdd59210368bc828',
        URL: 'https://newsapi.org/v2/everything',
    }
    const response = await axios(`${options.URL}?q=IT&apiKey=${options.API_KEY}&pageSize=4&page=${PAGE}`).then(response => onRengerNews(response.data.articles)).catch(err => console.log(err))
}

getApiNews () 

function onRengerNews (news) {
    const markupNews = news.map(news => {
        return `<li class="splide__slide">
        <a class="card-news__link" href="${news.url}" target="_blanc">
            <div class="card-news__wrapper">
                <h3 class="card-news__title">
                ${news.title}
                </h3>
                <img class="card-news__img" src="${news.urlToImage}" loading="lazy" alt="">
                <p class="card-news__disr">
                ${news.description}
                </p>
                <p class="card-news__author">
                ${news.author}
                </p>
                <p class="card-news__date">
                ${news.publishedAt}
                </p>
            </div>
        </a>
    </li>`
    }).join('');
    refs.ul.insertAdjacentHTML('beforeend', markupNews);
};

function clearMarkup () {
    refs.ul.innerHTML = '';
}