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

function getApiNews () {
    
    var options = {
        method: 'GET',
        url: 'https://api.newscatcherapi.com/v2/search',
        params: {q: 'Computer', lang: 'en', sort_by: 'relevancy', page: PAGE, page_size: '4'},
        headers: {
          'x-api-key': 'ZZ0_Blzu7KNRL3yZlIdEd030ur1UsnxRdkO9TTAV-h0'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
          onRengerNews (response.data.articles)
      }).catch(function (error) {
          console.error(error);
      });
}

getApiNews () 

function onRengerNews (news) {
    const markupNews = news.map(news => {
        return `<li class="splide__slide">
        <a class="card-news__link" href="${news.link}" target="_blanc">
            <div class="card-news__wrapper">
                <h3 class="card-news__title">
                ${news.title}
                </h3>
                <img class="card-news__img" src="${news.media}" loading="lazy" alt="">
                <p class="card-news__disr">
                ${news.summary}
                </p>
                <p class="card-news__author">
                ${news.authors}
                </p>
                <p class="card-news__date">
                ${news.published_date}
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