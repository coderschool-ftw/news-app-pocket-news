let newsArticle = [];

async function update() {
  const url =
    "https://newsapi.org/v2/everything?q=apple&pageSize=3&from=2021-01-02&to=2021-01-02&sortBy=popularity&apiKey=72049cefcdf747e392ee61e464b54949";
  const result = await fetch(url);
  const data = await result.json();
  newsArticles = data.articles;

  render();
}
function renderArticleCard(article) {
  return `
  <div class="col-md-4 col-sm-6">
    <div class="card news-article" style="width: 20rem;height: 10rem">
      <img src="${article.urlToImage}" class="card-img-top"/>
      <div class="card-body">
        <h5 style="color:#ff6666;" class="card-title-middle">
          ${article.title}
        </h5>
        <p class="card-text">
          ${article.description}
        </p>
        
        
        
        <a style="background-color:#ff6666;" href="${article.url}" class ="btn btn-primary">Read More</a>
        
      </div>
    <div class ="card-footer">
    <p class="card-author">
        By: ${article.author}
        </p>
    
    </div>
     
    </div>
  </div>`;
}

function render() {
  let resultsArea = document.getElementById("results");
  resultsArea.innerHTML = newsArticles
    .map((article) => renderArticleCard(article))
    .join("");
}

update();
