const axios = require('axios').default;
import Splide from '@splidejs/splide';


const refs = {
    ul: document.querySelector('.js-news-render'),
};

const options = {
    API_KEY: '090dd760c7d8494cbdd59210368bc828',
    URL: 'https://newsapi.org/v2/everything',
}

async function getResponse () {
    try {
        const response = await axios.get(`${options.URL}?q=IT&apiKey=${options.API_KEY}&pageSize=100`);
        console.log(response.data.articles);
        onRengerNews (response.data.articles)

        new Splide('#slider2', {
            type: 'loop',
            autoWidth: true,
            focus: 'center',
            gap: '1em',
            pagination: false,
            keyboard: true,
          }).mount();

    }
    catch {
        console.log('error');
    }
}

getResponse ()

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