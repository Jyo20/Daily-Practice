// document.getElementById("form").addEventListener("submit", getData);
let arr = JSON.parse(localStorage.getItem("data")) || [];

function getData() {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let role = document.getElementById("role").value;
  let salary = document.getElementById("salary").value;
  let obj = {
    name,
    email,
    role,
    salary,
  };

  arr.push(obj);
  console.log(arr);

  localStorage.setItem("data", JSON.stringify(arr));
}
