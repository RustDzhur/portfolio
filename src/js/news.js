const axios = require('axios').default;
let PAGE = 1;

const refs = {
  ul: document.querySelector('.js-news-render'),
  previousBtn: document.querySelector('.previous-btn'),
  nextBtn: document.querySelector('.next-btn'),
};

refs.previousBtn.addEventListener('click', e => {
  e.preventDefault();
  if (PAGE >= 2) {
    PAGE -= 1;
    getApiNews();
    clearMarkup();
  }
});

refs.nextBtn.addEventListener('click', e => {
  e.preventDefault();
  PAGE += 1;
  getApiNews();
  clearMarkup();
});

function getApiNews() {
  axios
    .get(
      `https://newsapi.org/v2/everything?q=Computer&sortBy=popularity&pageSize=4&page=${PAGE}&apiKey=090dd760c7d8494cbdd59210368bc828`
    )
    .then(response => {
        onRengerNews(response.data.articles)
    });
}
getApiNews();

function onRengerNews(news) {
  const markupNews = news
    .map(({ url, title, urlToImage, description, author, publishedAt }) => {
      return `<li class="splide__slide">
        <a class="card-news__link" href="${url}" target="_blanc">
            <div class="card-news__wrapper">
                <h3 class="card-news__title">
                ${title}
                </h3>
                <img class="card-news__img" src="${urlToImage}" loading="lazy" alt="">
                <p class="card-news__disr">
                ${description}
                </p>
                <p class="card-news__author">
                ${author}
                </p>
                <p class="card-news__date">
                ${publishedAt}
                </p>
            </div>
        </a>
    </li>`;
    })
    .join('');
  refs.ul.insertAdjacentHTML('beforeend', markupNews);
}

function clearMarkup() {
  refs.ul.innerHTML = '';
}
