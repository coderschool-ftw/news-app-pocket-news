let resultArea1 = document.getElementById("result1");
let resultArea2 = document.getElementById("result2");
let resultArea3 = document.getElementById("result3");

let thumbnailArea1 = document.getElementById("thumbnail1");
let thumbnailArea2 = document.getElementById("thumbnail2");
let thumbnailArea3 = document.getElementById("thumbnail3");

const getNewsByCat = async () => {
  let catSelected = document.getElementById("category").value;
  console.log(catSelected);

  const url = `https://newsapi.org/v2/everything?q=${catSelected}&apiKey=9defa31a63cc419087e34be80de1bf0f`;
  console.log(url);

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  console.log(data.articles[0]);

  result1.innerHTML = `<hr><h3><a href="${data.articles[1].url}">${data.articles[1].title}</a></h3><p>${data.articles[1].description}</p>`;
  thumbnail1.innerHTML = `<img class="img-thumbnail img-fluid rounded float-start" src=${data.articles[1].urlToImage}></img> `;

  result2.innerHTML = `<hr><h3><a href="${data.articles[2].url}">${data.articles[2].title}</a></h3><p>${data.articles[2].description}</p> `;
  thumbnail2.innerHTML = `<img class="img-thumbnail img-fluid rounded float-start" src=${data.articles[2].urlToImage}></img> `;

  result3.innerHTML = `<hr><h3><a href="${data.articles[3].url}">${data.articles[3].title}</a></h3><p>${data.articles[3].description}</p> `;
  thumbnail3.innerHTML = `<img class="img-thumbnail img-fluid rounded float-start" id="thumbnail3" src=${data.articles[3].urlToImage}></img> `;

  result4.innerHTML = `<hr><h3><a href="${data.articles[4].url}">${data.articles[4].title}</a></h3><p>${data.articles[4].description}</p> `;
  thumbnail4.innerHTML = `<img class="img-thumbnail img-fluid rounded float-start" id="thumbnail3" src=${data.articles[4].urlToImage}></img>`;

  result5.innerHTML = `<hr><h3><a href="${data.articles[5].url}">${data.articles[5].title}</a></h3><p>${data.articles[5].description}</p> `;
  thumbnail5.innerHTML = `<img class="img-thumbnail img-fluid rounded float-start" id="thumbnail3" src=${data.articles[5].urlToImage}></img>`;
};

document
  .getElementById("select-button")
  .addEventListener("click", getNewsByCat);

/////
const getNewsBySources = async () => {
  let checkedSource;

  const url = `https://newsapi.org/v2/sources=${checkedSource}?language=en&country=us&apiKey=9defa31a63cc419087e34be80de1bf0f`;
  console.log(url);

  const response = await fetch(url);
  const article = await response.json();
  console.log(article);

  thumbnail6.innerHTML = `<img class="img-thumbnail img-fluid rounded float-start" src=${article.articles[1].urlToImage}></img> `;
  result6.innerHTML = `<hr><h3><a href="${article.articles[1].url}">${article.articles[1].title}</a></h3><p>${article.articles[1].description}</p>`;

  document
    .getElementById("select-button")
    .addEventListener("SubmitCheckBox", getNewsBySources);
};
