//variable ,functions ,DOM
//currency converter app, bill split app
console.log("Welcome to js!");
//console is used for browser

//variable

//variable is nothing but container to stire soem data or value
//var ,let ,const
let coffee = "brew";
// variable name let and in coffee we store brew value
coffee = "nescafe"; //updatoing value
console.log(coffee);

let email = "jyogavatade123@gmail.com";
console.log(email);

//updating value
email = "abc@gmail.com";
console.log(email);

/////////////////////////////////////////////////////////////////////

//Function
//function is block of code
// simple function syntax =>function function name(){code} function call
function grinder() {
  console.log("Grinding...");
}
grinder();

//parameter passing function
function grind(items) {
  console.log("Grinding....", items);
}
grind("tomatos");

//multiple parameters

function add(one, two) {
  console.log("The sum is:", one + two);
}
add(2, 4);
add(15, 15);

//
function join() {
  let title = document.getElementById("title");
  title.innerText = "Thanks for joining";
  let btn = document.getElementById("btn");
  btn.style.display = "none";
}
join();
