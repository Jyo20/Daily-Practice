function slidshow() {
  const arr = [
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9119/1329119-h-ef64fcf3d1f9",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/5119/1455119-h-2a917e92adac",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8986/1488986-h-5ff00607ec59",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8572/1498572-h-df673d915e07",
  ];
  let i = 0;
  let div = document.getElementById("slideshow");
  let image = document.createElement("img");
  image.style.width = "99%";
  image.style.height = "500px";
  image.src = arr[0];
  div.append(image);
  i = i + 1;
  setInterval(function () {
    if (i == 4) {
      i = 0;
    }
    image.src = arr[i];
    i = i + 1;
    div.append(image);
  }, 3000);
}
slidshow();

/**Search Function */
// async function searchMovies() {
//   startLoader();
//   try {
//     let query = document.getElementById("movieName").value;
//     let res = await fetch(
//       ` http://www.omdbapi.com/?apikey=19f4c335&s=${query}`
//     );
//     let data = await res.json();

//     let data1 = data.Search;
//     console.log(data1[0]);
//   } catch (err) {
//     console.log(err);
//   }
// }
/**Spinner Code */
let key = "http://www.omdbapi.com/?apikey=19f4c335&t=";
let loaderStatus = false;
function checkLoaderStatus() {
  let loader = document.getElementById("loader");
  if (loaderStatus == true) {
    loader.classList.add("loaderclass");
  } else {
    loader.classList.remove("loaderclass");
  }
}
/**Search function */

function searchMovies() {
  loaderStatus = true;
  checkLoaderStatus();
  let movieName = document.getElementById("movieName").value;
  let query = key + movieName;
  console.log(query);
  fetch(query)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      displayData(data);
      loaderStatus = false;
      checkLoaderStatus();
    });
}

function displayData(data) {
  let div = document.createElement("div");
  div.classList.add("content");
  let MovieName = document.createElement("h1");
  MovieName.innerText = data.Title;
  let description = document.createElement("p");
  description.innerText = data.Plot;
  let language = document.createElement("p");
  language.innerText = data.Language;
  language.style.fontSize = "13px";
  let rating = document.createElement("button");
  rating.innerText = "imdbRating" + " " + data.imdbRating;
  rating.style.padding = "10px";
  rating.style.borderRadius = "14px";
  let image = document.createElement("img");
  image.src = data.Poster;
  div.append(MovieName, language, description, rating);

  document.getElementById("movie-container").append(div);
  document.getElementById("movie-container").append(image);
}
