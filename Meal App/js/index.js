let key = "https://www.themealdb.com/api/json/v1/1/search.php?s= ";

document.getElementById("btn").addEventListener("click", meal);

async function meal() {
  try {
    let search = document.getElementById("search").value;
    let res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );
    let data = await res.json();
    let actual_data = data.meals;
    // console.log(actual_data);
    displayData(actual_data);
  } catch (err) {
    console.log(err);
  }
}

function displayData(actual_data) {
  //console.log(actual_data);
  document.querySelector(".meal-container").innerHTML = "";
  actual_data.forEach((ele) => {
    let div = document.createElement("div");
    div.classList.add("card");
    div.addEventListener("click", function () {
      recipeDisplay(ele);
    });
    let img = document.createElement("img");
    img.src = ele.strMealThumb;
    let title = document.createElement("h3");
    title.innerText = ele.strMeal;
    //console.log(title);
    div.append(img, title);
    //console.log(div);
    document.querySelector(".meal-container").append(div);
  });
}
function recipeDisplay(ele) {
  //console.log(ele);
  document.getElementById("mealdata").innerHTML = "";
  let div = document.createElement("div");
  div.classList.add("meals-card");
  let image = document.createElement("img");
  image.src = ele.strMealThumb;

  let Name = document.createElement("h3");
  Name.innerText = ele.strMeal;
  let category = document.createElement("h5");
  category.innerText = `Category : ${ele.strCategory}`;
  let ingrident = document.createElement("h4");
  ingrident.innerText = `Ingridents: ${ele.strIngredient1},${ele.strIngredient2},${ele.strIngredient3},${ele.strIngredient4},${ele.strIngredient5},${ele.strIngredient6},${ele.strIngredient7},${ele.strIngredient8},${ele.strIngredient9},${ele.strIngredient10},${ele.strIngredient11},${ele.strIngredient12}`;
  let inst = document.createElement("p");
  inst.style.fontWeight = "bold";
  inst.innerText = `Instructions: ${ele.strInstructions}`;
  let thumbnail = document.createElement("p");
  thumbnail.style.fontWeight = "bold";
  thumbnail.innerText = `Link to watch Video On Youtube: ${ele.strYoutube}`;
  div.append(image, Name, category, ingrident, inst, thumbnail);

  document.getElementById("mealdata").append(div);
}
