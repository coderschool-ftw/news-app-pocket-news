// Fetch carousel

let trendingPosts = [];
const renderCarousel = (article) => `<div class="card ">
<div class="img">
  <img src="${article.urlToImage}" alt="" />
</div>
<div class="content">
  <div class="carousel-title">
  ${article.title}
  </div>
  <div class="carousel-author">-${article.author}-</div>
  <a href="${article.url}" 
      ><button class="btn">Read More</button></a
    >
</div>
</div>`;

const fetchCarousel = async () => {
  const url =
    "https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&language=en&sortBy=popularity&apiKey=fc8ec155180d4cec897c640178f626d4";
  const result = await fetch(url);
  const data = await result.json();
  trendingPosts = data.articles;
  displayCarousel();
  $(".slider").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000, //2000ms = 2s;
    autoplayHoverPause: true,
  });
};

const displayCarousel = () => {
  let resultsArea = document.getElementById("newsCarousel");
  resultsArea.innerHTML = trendingPosts
    .map((article) => renderCarousel(article))
    .join("");
};

fetchCarousel();
