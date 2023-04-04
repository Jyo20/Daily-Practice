let key = "https://www.themealdb.com/api/json/v1/1/search.php?s= ";

document.getElementById("btn").addEventListener("click", meal);

function meal() {
  let searchM = document.getElementById("search").value;
  let query = key + searchM;
  console.log(query);
  fetch(query)
    .then((res) => {
      return res.json();
      console.log(res);
    })
    .then((data) => {
      console.log(data);
    });
}
